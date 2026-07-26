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
 * Fields per entry:
 *   type: "iframe" -> src is an embed/player PAGE (HTML), not a raw
 *                      file — we 302-redirect the <iframe> to it.
 *         "stream" -> src is a direct file (mp4/mkv etc.) — we proxy
 *                      the bytes ourselves so the origin URL never
 *                      appears anywhere in the browser, not even the
 *                      Network tab.
 *   downloadName: the branded filename shown to the visitor when they
 *             download.
 *
 * ⚠️ IMPORTANT: every object in this list except the last one MUST end
 * with a comma, and every key MUST be a quoted string. A missing quote
 * or comma here is a JavaScript syntax error that breaks EVERY episode
 * on the site at once (not just the one you were editing) — /api/play
 * and /api/token both fail to even load the file.
 * --------------------------------------------------------- */

const VIDEO_SOURCES = {
  "fullmetal-alchemist-brotherhood-1x1": {
    // ⚠️ This link's filename says "pink.mp4" — doesn't match FMAB or
    // your original rubystm.com/e/1tcn36y95s5f.html link. Confirm this
    // is really the right episode file before going live.
    type: "stream",
    src: process.env.VIDEO_SRC_FMAB_1X1 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=mHCDbpLigzHUX_TZyuuUvkcLv0K2BOU82HxrkGSUH9LeJ7_oe9oXjktu1u7eIBwOZSXgSsbbw8S7VeF3TJHKGw&name=pink.mp4",
    downloadName: "[ Visit Telegram HindiAnimestuff ] Fullmetal Alchemist Brotherhood S01E01.mp4"
  },
  "fullmetal-alchemist-brotherhood-1x2": {
    type: "stream",
    src: process.env.VIDEO_SRC_FMAB_1X2 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=vj1hL9uWmifLildsOrY-1_R3iHjha1upDUluLL5NN-IcbEPhiis7YYQNseFH9VEWvatHy7I9xr2RzywkAwJmlA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Fullmetal+Alchemist+Brotherhood+S01E02+720p+HD+BluRay+Multi+Audio+ESub.mkv",
    downloadName: "[ Visit Telegram HindiAnimestuff ] Fullmetal Alchemist Brotherhood S01E02 720p.mkv"
  },
  "fullmetal-alchemist-brotherhood-1x3": {
    type: "stream",
    src: process.env.VIDEO_SRC_FMAB_1X3 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=_grTlDReq6UbQhLqqO8QoUY44qQ5Wzgq2BlXQI-GN62zXksrdhkmX3yMEEN783-7jMHFJF3WDmHgeE2HmphlBA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Fullmetal+Alchemist+Brotherhood+S01E03+720p+HD+BluRay+Multi+Audio+ESub.mkv",
    downloadName: "[ Visit Telegram HindiAnimestuff ] Fullmetal Alchemist Brotherhood S01E03 720p.mkv"
  },
  "fullmetal-alchemist-brotherhood-1x4": {
    type: "stream",
    src: process.env.VIDEO_SRC_FMAB_1X4 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=xWjcHjCf6k_z4VNcLAfB31VYnVDhyG0Brn0iQuUgljfpeYy7QomkEnYhTWnkM9Yd1OJMVGaFTrrZYoMV6ZpCyw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Fullmetal+Alchemist+Brotherhood+S01E04+720p+HD+BluRay+Multi+Audio+ESub.mkv",
    downloadName: "[ Visit Telegram HindiAnimestuff ] Fullmetal Alchemist Brotherhood S01E04 720p.mkv"
  },

  "chainsmoker-cat-1x1": {
    type: "stream",
    src: process.env.VIDEO_SRC_CHAINSMOKER_CAT_1X1 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=g6xnsj7ZDKW0gbrc5gXBDoyk8KvyeTyqXKvZZXyli8pVTQwND_vudnbgV5loXQG2n7c5uzvgHzmnFVt3dtnICA&name=Chainsmoker%20Cat%20Episode%2001.mp4",
    downloadName: "[ Visit Telegram HindiAnimestuff ] Chainsmoker Cat S01E01.mp4"
  },
  "chainsmoker-cat-1x2": {
    type: "stream",
    src: process.env.VIDEO_SRC_CHAINSMOKER_CAT_1X2 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=Wa9cLd1bTrSEZNY7IekL-zFQHBu7niMHYd-fwJq-3D6OtPzjnByKAysWiR5-hnGD9gADtbBxopHYL23BhruQvw&name=%5BVisit%20Telegram%20%40HindiAnimestuff%5D+Chainsmoker+Cat+S01E02+1080p+x265+10bit+NF+WEB-DL+Multi+Audio+ESub.mkv",
    downloadName: "[ Visit Telegram HindiAnimestuff ] Chainsmoker Cat S01E02 1080p.mkv"
  }

  // Add the matching entry here whenever a new episode id is added to
  // anime-data.js. Nothing else in the repo needs the real URL.
  // Remember: quoted key + comma after every entry except the last one!
};

/** Looks up a source by public episode id. Returns null if unknown. */
function getVideoSource(episodeId) {
  return VIDEO_SOURCES[episodeId] || null;
}

module.exports = { VIDEO_SOURCES, getVideoSource };
