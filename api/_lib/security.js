/**
 * api/_lib/security.js
 * ---------------------------------------------------------
 * Small, dependency-free helpers shared by the API routes:
 *   - isAllowedRequest(req)  -> Origin/Referer allow-list check
 *   - rateLimit(key, opts)   -> basic fixed-window rate limiter
 *
 * NOTE on rate limiting: Vercel serverless functions are
 * stateless and can run on multiple instances, so this
 * in-memory counter is a best-effort deterrent, not a hard
 * guarantee — it resets whenever a new instance is spun up.
 * For real abuse protection at scale, swap RATE_STORE for
 * Upstash Redis / Vercel KV (a few lines change, see the
 * comment at the bottom of this file).
 * --------------------------------------------------------- */

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "https://crunchyepisode.vercel.app")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

function isAllowedRequest(req) {
  // Allow non-browser/local testing (curl, health checks) to pass when
  // no Origin/Referer header is sent at all — comment this out if you
  // want to hard-block those too.
  const origin = req.headers.origin;
  const referer = req.headers.referer || req.headers.referrer;

  if (!origin && !referer) return true;

  const check = (value) => {
    if (!value) return false;
    try {
      const host = new URL(value).origin;
      return ALLOWED_ORIGINS.includes(host);
    } catch {
      return false;
    }
  };

  return check(origin) || check(referer);
}

// --- very small fixed-window in-memory limiter ---------------------
const RATE_STORE = new Map(); // key -> { count, resetAt }

function rateLimit(key, { limit = 60, windowMs = 60_000 } = {}) {
  const now = Date.now();
  const entry = RATE_STORE.get(key);

  if (!entry || now > entry.resetAt) {
    RATE_STORE.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  entry.count += 1;
  if (entry.count > limit) {
    return { ok: false, remaining: 0, retryAfterMs: entry.resetAt - now };
  }
  return { ok: true, remaining: limit - entry.count };
}

function clientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (fwd) return fwd.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

module.exports = { isAllowedRequest, rateLimit, clientIp, ALLOWED_ORIGINS };

/**
 * --- Swapping in Upstash Redis for real distributed rate limiting ---
 * npm i @upstash/ratelimit @upstash/redis
 *
 * const { Ratelimit } = require("@upstash/ratelimit");
 * const { Redis } = require("@upstash/redis");
 * const ratelimit = new Ratelimit({
 *   redis: Redis.fromEnv(),
 *   limiter: Ratelimit.slidingWindow(60, "60 s"),
 * });
 * const { success } = await ratelimit.limit(clientIp(req));
 */
