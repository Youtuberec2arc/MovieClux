/**
 * GET /api/play?id=<episodeId>&token=<token>&mode=stream|download
 * ---------------------------------------------------------
 * The ONLY server-side entry point that knows real video URLs
 * (via api/_data/videoSources.js). The frontend — including
 * every static page in /public/WatchOnline — only ever calls
 * this endpoint. It never sees or stores the origin CDN URL.
 *
 * Flow:
 *  1. Reject non-GET, bad Origin/Referer, and rate-limit abuse.
 *  2. Verify the short-lived token issued by /api/token.
 *  3. Look up the real source for `id`.
 *     - type "iframe"  -> 302 redirect straight to the embed
 *                          page (used for third-party embed
 *                          pages we can't/shouldn't re-stream).
 *     - type "stream"  -> fetch the real file server-side and
 *                          pipe the bytes back ourselves, so the
 *                          origin URL never appears in the
 *                          browser's Network tab at all. Range
 *                          requests are forwarded so seeking
 *                          still works.
 *  4. mode=download streams the `download` source instead, with
 *     a Content-Disposition header so it saves as a file.
 * --------------------------------------------------------- */

const { getVideoSource } = require("./_data/videoSources");
const { verifyToken } = require("./_lib/tokens");
const { isAllowedRequest, rateLimit, clientIp } = require("./_lib/security");

/**
 * Resolves the actual { type, src, download, downloadName } object to use
 * for a given request. Supports two shapes for backward compatibility:
 *
 *  - Legacy / single-quality entries (most of the existing catalog):
 *      { type, src, download, downloadName }
 *    -> used as-is, `quality` query param is ignored.
 *
 *  - Multi-quality entries (new episodes with more than one print):
 *      { qualities: { "480p": {...}, "720p": {...}, "1080p": {...} }, zip: "..." }
 *    -> picks entry.qualities[quality], falling back to the first quality
 *       listed if the requested one doesn't exist. quality="zip" returns
 *       the zip pack link (mode is forced to "download" for zip).
 */
function resolveQualitySource(entry, quality) {
  if (!entry.qualities) return { source: entry, isZip: false };

  if (quality === "zip") {
    if (!entry.zip) return { source: null, isZip: true };
    return {
      source: { type: "stream", src: entry.zip, downloadName: entry.zipName || undefined },
      isZip: true
    };
  }

  const keys = Object.keys(entry.qualities);
  const picked = quality && entry.qualities[quality] ? quality : keys[0];
  const q = entry.qualities[picked];
  if (!q) return { source: null, isZip: false };
  // Fall back to an episode-level downloadName only if this specific
  // quality doesn't have its own (older/partial entries).
  const source = q.downloadName ? q : { ...q, downloadName: entry.downloadName };
  return { source, isZip: false };
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isAllowedRequest(req)) {
    return res.status(403).json({ error: "Forbidden origin" });
  }

  const limit = rateLimit(`play:${clientIp(req)}`, { limit: 30, windowMs: 60_000 });
  if (!limit.ok) {
    res.setHeader("Retry-After", Math.ceil(limit.retryAfterMs / 1000));
    return res.status(429).json({ error: "Too many requests" });
  }

  const id = String(req.query.id || "");
  const token = String(req.query.token || "");
  const mode = req.query.mode === "download" ? "download" : "stream";
  const quality = req.query.quality ? String(req.query.quality) : "";

  const entry = getVideoSource(id);
  if (!entry) return res.status(404).json({ error: "Unknown episode id" });

  const check = verifyToken(id, token);
  if (!check.valid) {
    return res.status(403).json({ error: `Invalid or expired token (${check.reason})` });
  }

  const { source, isZip } = resolveQualitySource(entry, quality);
  if (!source) return res.status(404).json({ error: isZip ? "No zip pack available" : "Unknown quality for this episode" });

  // --- Third-party embed page: hand off with a redirect. ---------
  if (mode === "stream" && source.type === "iframe") {
    res.setHeader("Cache-Control", "no-store");
    return res.redirect(302, source.src);
  }

  // --- Direct file (stream, download, or zip): proxy the bytes. --------
  const upstreamUrl = (mode === "download" || isZip) ? (source.download || source.src) : source.src;
  if (!upstreamUrl) return res.status(404).json({ error: "No source available for this mode" });

  try {
    const upstreamHeaders = {};
    if (req.headers.range) upstreamHeaders.range = req.headers.range; // seeking support

    const upstream = await fetch(upstreamUrl, { headers: upstreamHeaders });

    res.status(upstream.status);
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Accept-Ranges", "bytes");
    const passthroughHeaders = ["content-type", "content-length", "content-range"];
    passthroughHeaders.forEach(h => {
      const v = upstream.headers.get(h);
      if (v) res.setHeader(h, v);
    });

    if (mode === "download") {
      // Uses the branded filename set per-episode in videoSources.js
      // (e.g. "[ Visit On Telegram - @yourchannel ] Anime S01E01 1080p.mp4"),
      // falling back to a plain id-based name if none was set. Sends both
      // a plain quoted filename (readable in most browsers) and the
      // percent-encoded filename* form (correct per RFC 6266 for any
      // special characters like brackets/@).
      const filename = source.downloadName || `${id}.mp4`;
      const safeName = filename.replace(/["\\]/g, "");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${safeName}"; filename*=UTF-8''${encodeURIComponent(filename)}`
      );
    }

    if (!upstream.body) return res.end();

    // Convert the Web ReadableStream (undici/global fetch) into a Node stream.
    const { Readable } = require("stream");
    Readable.fromWeb(upstream.body).pipe(res);
  } catch (err) {
    console.error("play proxy error:", err);
    if (!res.headersSent) res.status(502).json({ error: "Upstream fetch failed" });
    else res.end();
  }
};
