/**
 * api/_lib/tokens.js
 * ---------------------------------------------------------
 * Short-lived, signed access tokens so a raw /api/play?id=...
 * link can't just be copy-pasted and reused forever. The
 * watch page calls /api/token first (see api/token.js) to get
 * a token that's only valid for a couple of minutes, then
 * requests /api/play with it attached.
 * --------------------------------------------------------- */

const crypto = require("crypto");

const SECRET = process.env.VIDEO_SIGNING_SECRET || "dev-only-insecure-secret-change-me";
const DEFAULT_TTL_MS = 5 * 60 * 1000; // 5 minutes

function sign(episodeId, expiresAt) {
  const payload = `${episodeId}.${expiresAt}`;
  const sig = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
  return sig;
}

/** Creates a token string "expiresAt.signature" for the given episode id. */
function createToken(episodeId, ttlMs = DEFAULT_TTL_MS) {
  const expiresAt = Date.now() + ttlMs;
  const sig = sign(episodeId, expiresAt);
  return `${expiresAt}.${sig}`;
}

/** Verifies a token string against the episode id it claims to be for. */
function verifyToken(episodeId, token) {
  if (!token || typeof token !== "string" || !token.includes(".")) {
    return { valid: false, reason: "malformed" };
  }
  const [expiresAtStr, sig] = token.split(".");
  const expiresAt = Number(expiresAtStr);
  if (!expiresAt || Number.isNaN(expiresAt)) return { valid: false, reason: "malformed" };
  if (Date.now() > expiresAt) return { valid: false, reason: "expired" };

  const expected = sign(episodeId, expiresAt);
  const a = Buffer.from(sig || "", "hex");
  const b = Buffer.from(expected, "hex");
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return { valid: false, reason: "bad-signature" };
  }
  return { valid: true };
}

module.exports = { createToken, verifyToken };
