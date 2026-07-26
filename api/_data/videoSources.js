/**
 * api/_data/videoSources.js
 * ---------------------------------------------------------
 * THIS FILE NEVER GOES TO THE BROWSER.
 *
 * Everything under /api is server-side only on Vercel —
 * files here are bundled into the serverless function, not
 * copied into the static /public output, so there is no URL
 * a visitor can hit to download this file directly.
 *
 * Maps the PUBLIC episode id (the one used in anime-data.js
 * and in /WatchOnline/*.html) to the REAL, private video
 * source. /api/play.js is the only file that reads this map.
 *
 * For real production use, prefer moving the "src" values into
 * environment variables (e.g. VIDEO_SRC_CHAINSMOKER_CAT_1X1) so
 * the URLs aren't sitting in a source file at all.
 *
 * Fields per entry:
 *   type: "iframe" -> src is an embed/player PAGE (HTML), not a raw
 *                      file — we 302-redirect the <iframe> to it.
 *         "stream" -> src is a direct file (mp4 etc.) — we proxy the
 *                      bytes ourselves so the origin URL never appears
 *                      anywhere in the browser, not even Network tab.
 *   src:  the real video URL (embed page or direct file).
 *   download: optional — a separate real file URL to use specifically
 *             for the Download button, if it's different from `src`
 *             (e.g. src is an embed page but you also have a raw file
 *             link for downloads). If omitted, downloads fall back to
 *             `src` — only works if `src` is itself a direct file.
 *   downloadName: optional — the branded filename shown to the visitor
 *             when they download, e.g.
 *             "[ Visit On Telegram - @yourchannel ] Anime S01E01 1080p.mp4"
 *             If omitted, falls back to "{episodeId}.mp4".
 *
 * ⚠️ IMPORTANT: every object in this list except the last one MUST end
 * with a comma. A missing comma here is a JavaScript syntax error that
 * breaks EVERY episode on the site at once (not just the one you were
 * editing) — /api/play and /api/token both fail to even load the file.
 * --------------------------------------------------------- */

const VIDEO_SOURCES = {
  "fullmetal-alchemist-brotherhood-1x1": {
    type: "iframe",
    src: process.env.VIDEO_SRC_FMAB_1X1 || "https://rubystm.com/e/1tcn36y95s5f.html"
    // No downloadName set — this episode currently has no separate raw
    // download file, only the embed page above.
  },

  "chainsmoker-cat-1x1": {
    // Direct .mp4 worker link, not an embed page — must be "stream" so
    // the byte-proxy path is used instead of the redirect path (a
    // redirect to a download-forcing link just triggers a file download
    // instead of playing).
    type: "stream",
    src: process.env.VIDEO_SRC_CHAINSMOKER_CAT_1X1 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=g6xnsj7ZDKW0gbrc5gXBDoyk8KvyeTyqXKvZZXyli8pVTQwND_vudnbgV5loXQG2n7c5uzvgHzmnFVt3dtnICA&name=Chainsmoker%20Cat%20Episode%2001.mp4",
    // Shown as the saved filename when the Download button is used —
    // change "@yourchannel" to your real Telegram handle.
    downloadName: "[ Visit On Telegram - @yourchannel ] Chainsmoker Cat S1E01 1080p.mp4"
  }

  // Add the matching entry here whenever a new episode id is added to
  // anime-data.js. Nothing else in the repo needs the real URL.
  // Remember the comma after every entry except the very last one!
};

/** Looks up a source by public episode id. Returns null if unknown. */
function getVideoSource(episodeId) {
  return VIDEO_SOURCES[episodeId] || null;
}

module.exports = { VIDEO_SOURCES, getVideoSource };
