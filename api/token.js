/**
 * GET /api/token?id=<episodeId>
 * ---------------------------------------------------------
 * Called by the watch page's own JS right before it asks for
 * /api/play. Returns a short-lived token bound to that one
 * episode id, so a bare /api/play?id=... link found in the
 * page source can't be reused after it expires (default 5 min).
 * --------------------------------------------------------- */

const { getVideoSource } = require("./_data/videoSources");
const { createToken } = require("./_lib/tokens");
const { isAllowedRequest, rateLimit, clientIp } = require("./_lib/security");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isAllowedRequest(req)) {
    return res.status(403).json({ error: "Forbidden origin" });
  }

  const limit = rateLimit(`token:${clientIp(req)}`, { limit: 120, windowMs: 60_000 });
  if (!limit.ok) {
    res.setHeader("Retry-After", Math.ceil(limit.retryAfterMs / 1000));
    return res.status(429).json({ error: "Too many requests" });
  }

  const id = String(req.query.id || "");
  const source = getVideoSource(id);
  if (!source) return res.status(404).json({ error: "Unknown episode id" });

  const token = createToken(id);
  return res.status(200).json({ id, token, expiresInMs: 5 * 60 * 1000 });
};
