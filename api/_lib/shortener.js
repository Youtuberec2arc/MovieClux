/**
 * api/_lib/shortener.js
 * ---------------------------------------------------------
 * Wraps the GPLinks "Developer API" so every download link on
 * the site can be auto-shortened before it's shown to a
 * visitor. THIS FILE NEVER GOES TO THE BROWSER (everything
 * under /api is server-only on Vercel).
 *
 * Docs: https://help.gplinks.com/en/articles/9511691
 * Request:  GET https://api.gplinks.in/api?api=<token>&url=<encoded_url>
 * Success:  { "status": "success", "shortenedUrl": "https://gplinks.in/xxxxx" }
 * Error:    { "status": "error", "message": "..." }
 *
 * If GPLINKS_API_KEY isn't set, or the API call fails for any
 * reason (key invalid, GPLinks down, rate-limited, etc.),
 * shortenUrl() returns null and the caller falls back to the
 * plain (unshortened) link — so a shortener outage never
 * breaks downloads on the site, it just skips the ad step.
 * --------------------------------------------------------- */

const GPLINKS_API_BASE = "https://api.gplinks.in/api";

/**
 * @param {string} longUrl - the real destination (our own /api/play
 *   download link, already token-protected).
 * @returns {Promise<string|null>} the shortened URL, or null on failure.
 */
async function shortenUrl(longUrl) {
  const apiKey = process.env.GPLINKS_API_KEY;
  if (!apiKey) {
    console.warn("GPLINKS_API_KEY not set — skipping link shortening.");
    return null;
  }

  try {
    const endpoint = `${GPLINKS_API_BASE}?api=${encodeURIComponent(apiKey)}&url=${encodeURIComponent(longUrl)}`;
    const res = await fetch(endpoint);
    const data = await res.json();

    if (data && data.status === "success" && data.shortenedUrl) {
      return data.shortenedUrl;
    }

    console.error("GPLinks shorten failed:", data);
    return null;
  } catch (err) {
    console.error("GPLinks request error:", err);
    return null;
  }
}

module.exports = { shortenUrl };
