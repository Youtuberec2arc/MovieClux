/**
 * GET /api/download-link?id=<episodeId>
 * ---------------------------------------------------------
 * Called by every "Download Now" button on the site. Builds
 * the real (token-protected) /api/play download URL, then
 * automatically runs it through GPLinks so visitors see a
 * shortened, ad-monetized link — no manual shortening needed
 * per episode, it just happens for every download link site-wide.
 *
 * Uses a longer-lived token than normal streaming (30 minutes
 * instead of 5) because a shortener flow usually involves a
 * timer/ads page the visitor has to sit through before landing
 * back on the real download.
 *
 * If GPLINKS_API_KEY isn't configured, or the GPLinks API call
 * fails for any reason, this falls back to returning the plain
 * (unshortened) download URL — so a shortener outage never
 * breaks downloads, it just skips the ad step for that request.
 * --------------------------------------------------------- */

const { getVideoSource } = require("./_data/videoSources");
const { createToken } = require("./_lib/tokens");
const { isAllowedRequest, rateLimit, clientIp } = require("./_lib/security");
const { shortenUrl } = require("./_lib/shortener");

const DOWNLOAD_TOKEN_TTL_MS = 30 * 60 * 1000; // 30 minutes

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isAllowedRequest(req)) {
    return res.status(403).json({ error: "Forbidden origin" });
  }

  const limit = rateLimit(`dl:${clientIp(req)}`, { limit: 20, windowMs: 60_000 });
  if (!limit.ok) {
    res.setHeader("Retry-After", Math.ceil(limit.retryAfterMs / 1000));
    return res.status(429).json({ error: "Too many requests" });
  }

  const id = String(req.query.id || "");
  const source = getVideoSource(id);
  if (!source) return res.status(404).json({ error: "Unknown episode id" });

  const token = createToken(id, DOWNLOAD_TOKEN_TTL_MS);

  // SITE_ORIGIN lets you pin this to your real domain explicitly; falls
  // back to whatever host the request actually came in on.
  const siteOrigin = process.env.SITE_ORIGIN || `https://${req.headers.host}`;
  const longUrl = `${siteOrigin}/api/play?id=${encodeURIComponent(id)}&token=${encodeURIComponent(token)}&mode=download`;

  const shortUrl = await shortenUrl(longUrl);

  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({
    url: shortUrl || longUrl,
    shortened: Boolean(shortUrl)
  });
};
