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
 *             "[ Visit On Telegram - @HindiAnimestuff ] Anime S01E01 1080p.mp4"
 *             If omitted, falls back to "{episodeId}.mp4".
 *
 * ⚠️ IMPORTANT: every object in this list except the last one MUST end
 * with a comma. A missing comma here is a JavaScript syntax error that
 * breaks EVERY episode on the site at once (not just the one you were
 * editing) — /api/play and /api/token both fail to even load the file.
 * --------------------------------------------------------- */

const VIDEO_SOURCES = {
"tamons-b-side-1x1": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_B_SIDE_1X1 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=A9BsOUG7lAaE1hi1LY-X6-6JI21F1OZBZ91IzMdGHWnWl3pLT_nZj7GC4RTXKMM3TFVC2eUWlLtY9izZ1ZjcBQ&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E01+1080p+HEVC+10bit+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit Telegram HindiAnimestuff ] Tamons B-Side S01E01 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x2": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_B_SIDE_1X2 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=_s-Ky4giImncvzyfaVYLwj2GcKY9wJ5UfNQL92HnAvhmgf7x7mmSJ6_GgY_vvy10kBkqdYvOQp0S4rYkhzIEJg&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E02+1080p+HEVC+10bit+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit Telegram HindiAnimestuff ] Tamons B-Side S01E02 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x3": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_B_SIDE_1X3 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=6mUurl5Bx3EQXsGN4SxWO1-ENT2a8Q8FzHuSlDN1JRq8ypeFQzrpxJTGAQFnqXFtCcMueWyVc5ABoVsJDcOd4A&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E03+1080p+HEVC+10bit+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit Telegram HindiAnimestuff ] Tamons B-Side S01E03 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x4": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_B_SIDE_1X4 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=VBrwdKT5eXndYyu8D9pHSuLeUqHJRX-bkPg_w96EWaePNxCbLY9VpmPAB181PJJKzu2RBlYr6fFAyvcvIAGleQ&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E04+1080p+HEVC+10bit+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit Telegram HindiAnimestuff ] Tamons B-Side S01E04 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x5": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_B_SIDE_1X5 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=TZSfRnmA8eRq9WNjUwtCWKVoRi_TV1r3eLEcNemovmSMPubLYsVxHbvVi-2XqwoSLqv8TKbGeIVHyldu3BIN8A&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E05+1080p+HEVC+10bit+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit Telegram HindiAnimestuff ] Tamons B-Side S01E05 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x6": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_B_SIDE_1X6 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=s3vJ0zfuzu4cQODSJ8cJUgEtZ5WUsFUCfNf_FMRUQTg5IQJsuXSRPBow8_lR8_rH9WSLxy-VlRQSP09ewoLypg&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E06+1080p+HEVC+10bit+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit Telegram HindiAnimestuff ] Tamons B-Side S01E06 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x7": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_B_SIDE_1X7 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=kUY_CWe2Pbp3waivE1B-3KCr-XcWY4BuuYOvbi470_lnLrufgN10QiLvaCSgD33hweDsK9LWNtfhq4NfeaZhVw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E07+1080p+HEVC+10bit+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit Telegram HindiAnimestuff ] Tamons B-Side S01E07 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv"
}, 

"fullmetal-alchemist-brotherhood-1x1": {
    type: "stream",
    src: process.env.VIDEO_SRC_FMAB_1X1 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=qknJphjSQE1q_aXOVe9c1cGe8JEaPheM5RMF_hrMsmtMNSvu-H6f5CvRcepErp27TxFcrCI-cveYpRk5JFRDQw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Fullmetal+Alchemist+Brotherhood+S01E01+720p+HD+BluRay+Multi+Audio+ESub.mkv",
    downloadName: "[ Visit Telegram HindiAnimestuff ] Fullmetal Alchemist Brotherhood S01E01 720p.mkv"
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
  // Remember the comma after every entry except the very last one!
};

/** Looks up a source by public episode id. Returns null if unknown. */
function getVideoSource(episodeId) {
  return VIDEO_SOURCES[episodeId] || null;
}

module.exports = { VIDEO_SOURCES, getVideoSource };
