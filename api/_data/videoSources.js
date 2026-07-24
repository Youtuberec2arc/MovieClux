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
 * the URLs aren't sitting in a source file at all — see the
 * `resolveFromEnvOrMap()` helper below and .env.example.
 * --------------------------------------------------------- */

const VIDEO_SOURCES = {
"fullmetal-alchemist-brotherhood-1x1": {
  type: "iframe",
  src: process.env.VIDEO_SRC_FMAB_1X1 || "https://emturbovid.com/t/69b2d17745c5c"
  // download field jaan-bujh ke chhoda hai — neeche note dekho
}
  "chainsmoker-cat-1x1": {
    // "iframe" -> we 302-redirect the player's <iframe> straight to this
    //             page (used for third-party embed pages that are not a
    //             raw stream file, e.g. as-cdn21.top style embeds).
    // "stream" -> we proxy/stream the bytes ourselves so the origin URL
    //             never appears anywhere in the browser, not even Network tab.
    type: "iframe",
    src: process.env.VIDEO_SRC_CHAINSMOKER_CAT_1X1 || "https://as-cdn21.top/video/db31e0a485a2b6c73be7067dd95c0c5e",
    download: process.env.DOWNLOAD_SRC_CHAINSMOKER_CAT_1X1 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=g6xnsj7ZDKW0gbrc5gXBDoyk8KvyeTyqXKvZZXyli8pVTQwND_vudnbgV5loXQG2n7c5uzvgHzmnFVt3dtnICA&name=Adams+Sweet+Agony+E01+Uncut+Hindi.mp4"
  }

  // Add the matching entry here whenever a new episode id is added to
  // anime-data.js. Nothing else in the repo needs the real URL.
};

/** Looks up a source by public episode id. Returns null if unknown. */
function getVideoSource(episodeId) {
  return VIDEO_SOURCES[episodeId] || null;
}

module.exports = { VIDEO_SOURCES, getVideoSource };
