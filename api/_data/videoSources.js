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
 *             "[ Visit On Telegram @HindiAnimestuff ] Anime S01E01 1080p.mp4"
 *             If omitted, falls back to "{episodeId}.mp4".
 *
 * ⚠️ IMPORTANT: every object in this list except the last one MUST end
 * with a comma. A missing comma here is a JavaScript syntax error that
 * breaks EVERY episode on the site at once (not just the one you were
 * editing) — /api/play and /api/token both fail to even load the file.
 * --------------------------------------------------------- */

const VIDEO_SOURCES = {
"farming-life-in-another-world-s2-1x1": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X1 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=OrEMpnhryEBWi-aYBFLCPmh9xo38EtH-jO-ngDdciHwQdRozzfWiH6kFuR8X24K-zN5FVV2TWgVIExOFGYHP1g&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E01+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E01 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x2": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X2 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=2fVz4IO1Idsm3Uu6bRD3Io2t1f6OLGa5McUYcS8ttNS8wjHcKM7CXsTCa8ImxR6XIjBU7BZ0xqvyB8PvHPSIEA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E02+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E02 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x3": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X3 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=epNQjRPsONTpp8yI4-EhzugRA8EYN-_UpptT4dCtQyqR7TIZ8DzBJGF7Sk2Zcig62ZE3SHhbjMxw8CwcJCrcGg&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E03+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E03 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x4": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X4 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=kiewqjfFL3RFa7DeH79gl6PuuEtQ7BiA6ckj6m4z0Wwww5xbul4XWp9Am6dxYWK41la2A1T-eKqTlGX5_H-5Hg&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E04+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E04 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x5": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X5 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=4Oz3AbInlYfNASHxgOzRKRI74yy_KcRVjJi3aoeVHoSQisCd2qFG-mfvpEda71Grel1KpdO8vCj6y8AmCrwAsw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E05+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E05 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x6": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X6 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=egA9cjIiFOsmqgmVumSeq_gaZ9F4jF3x1I3DcoNqUd6mpm92Ye3LZ5Y_ku6K2-T6SoTrFJ3FMpnHPASAoRw4Yg&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E06+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E06 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x7": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X7 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=JQgrlhVTP4o3I1qkuW-gnie-JSEk5i5jlID594VVqrU-3o0H1r7DtHrAHDT1R2OCQmZ2ehewxvosIxNdh31_HA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E07+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E07 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x8": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X8 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=iXqKFqKnKVjrstkXweAdRLR5KVLuVHs49GA58nxtE9ctutLKoxLC_jnRutv2RXWXMIX9E1HqD2CgEm0v_ZZyYg&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E08+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E08 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x9": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X9 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZwOah98pxG1T-jOrhTMyy8rT4rC0cfeFLJepyEfbmif3rrC6cndhztyvJh9O0am0ET8jQ4gWKgcq0eNCOkaCxw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E09+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E09 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x10": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X10 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=RSp9HkdpLWmslnKo7YJqewG0qnwUh5VlVSMeYSvfbsxqrRzL_JgCUguqmWuolxURY80YgB9q9G29MphRGIt6jg&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E10+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E10 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x11": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X11 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=z057AbKYSfdEgrbrvo_Q9jREbwvK0UFmOtSFoOe6j-kPyJAIapn56a9Z5hVyip6gLseic3Sui6yFc4NVL5ROlA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E11+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E11 720p HD WEB-DL Multi Audio ESub.mkv"
},
"farming-life-in-another-world-s2-1x12": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_S2_1X12 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=60CNqDA16b-ZQaZs80c3Ga5FloiL1SNdebOSJgeibIArwDTy835V5cZeCxZEjfsF4U4mr-XUw-wLD-KUPw-78g&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S02E12+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S02E12 720p HD WEB-DL Multi Audio ESub.mkv"
}, 
"farming-life-in-another-world-1x1": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X1 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=tn_RIXLe9o9XzlRrjcMRr3MnXQLt1AUQVm3TCHd6zbT7BfmRRQEP_Xck4rq6FRF9yeJB3s7bakZhv0uFXZVCTQ&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E01+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E01 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x2": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X2 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=VsVAKkPJjJnZscheWZUHME5f1iI8X25qEoCE6efwZ4g591tl1eJfk8F232Jx1P7zNOiesug4jYdxtWMRWZaTbw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E02+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E02 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x3": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X3 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=Lprh4CG1nECEJ0-j9FJnBrfUuAJMkVrnCL995f7HAxTiTCuDgK-P5aGdKc5tJIXpXozgqYVJbymXg4ASeDpwLw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E03+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E03 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x4": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X4 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=UUlkg10jSkzv020V6XDUwT5UbASk-h_-Un-0XYiIotCMMzvFmLMvPVZITDyGp8kaFcB5C2JPp0PPyLT8ofIUSg&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E04+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E04 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x5": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X5 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=oN8Od0s7ELJmRrdelGaEJBBLdXpHwQuLwnZOKh7GODiQ_rP6HIZkstfFPuWhhZL5yyxhLBJaPjxpuvIGsnui6A&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E05+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E05 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x6": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X6 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=QQEccUxaQLVfavkfRxX1X2toj8MqJQrz03lN3ONlxLAsg2Apy0_hIQuXZT3MRZcYva1HcPdiRrGoXvnlIllg3Q&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E06+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E06 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x7": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X7 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=6elz4BVrh2uLBPFleBX2cL9VPDg6SGRF4sdVY8b6O-z9FNDoz0-tp8oVWGhrwHPQ6BbF6tSzMd5toAwRjTUScA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E07+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E07 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x8": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X8 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=Lhgs8yv-f38ZaTbp0Dp3LsOM7NX93onDZGslVTwEPXnn_wenb3xgdN2OH1Ylyu7GNDW3FEXYA1_X31We5dHGiA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E08+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E08 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x9": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X9 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=KwgdgyazJS-RlL7a7JLtbXOiKnDh7gli42-VgyaUtiw6S1QeiQWNKYZYnoiNODh4D9h6VxIW3hWObBfkk2azDw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E09+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E09 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x10": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X10 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=pYtByIbJvpOPJNIB_2ChuInLVcnaZGGGnWiMmUeFr-GoM9_aqx2A8aSEv9CI1d6BXMSaDKgsMeIq_hfTIIy3LA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E10+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E10 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x11": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X11 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=HgV7hOi2zAwXBxPBM3hDtETCjFlSOCWJWBUUOrLX1nX08EocTCCJs5N1QpsGqu6F-lHvwZX3keyfTaOb_gARYw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E11+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E11 720p HD BluRay Multi Audio ESub.mkv"
},
"farming-life-in-another-world-1x12": {
  type: "stream",
  src: process.env.VIDEO_SRC_FARMLIFE_1X12 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=oh-3tI0CXHhvgqhuQb6IPF42tOH4cFgjlFRlzljUasz3breIYs8qSZ5-Sfi8JGdHSvktaGgojVynrcIJeH4QzQ&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Farming+Life+in+Another+World+S01E12+720p+HD+BluRay+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Farming Life in Another World S01E12 720p HD BluRay Multi Audio ESub.mkv"
}, 
"tamons-b-side-1x1": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_1X1 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=DAmm8BPDSTgxD5XWrMU6Bp5CG5JhWmlY_bl4Ug7BoxetYVnTvfA6xgiVe9oRF_Pc-J_7g6OE8hqIqQeNquZabA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E01+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Tamons B-Side S01E01 720p HD WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x2": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_1X2 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=VCd-oaEXVJTZ0KcIkak9hQLMaWCIIo5qBS4-C-HhD5aHm4c_UwY7WPsDhBabYpEjQe-AQboue3HalVrelq-q_Q&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E02+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Tamons B-Side S01E02 720p HD WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x3": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_1X3 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=K2K71GJbepHzWfWeGPbX0cPKdqA-2UDHiWmf8C3sCPBEziGXx54jYZ-XgzVE2a7L0nc987clqVbbTv-M8TMPwQ&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E03+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Tamons B-Side S01E03 720p HD WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x4": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_1X4 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=PJ5g-oMqahkSdkoYz7kke-u2IraGA6UKBNc3t-O6vU-XjVE1b8QqBZpC0eSfr6mMu41Hq_79lS354kQOWrt-lg&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E04+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Tamons B-Side S01E04 720p HD WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x5": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_1X5 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=PJYCifs9iaNNtnjqQtqhVKWRZiTDxMsirpdSDjz68IXbauQ8TUfrIQpT-IFWUrV8cYAYjhSP6I-ojgSZuwkBUw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E05+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Tamons B-Side S01E05 720p HD WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x6": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_1X6 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=HyTBS1JpiGK8hCPgc1ZzHxdLLWOKGfIjSA2BQfcYuxAACtK0zPsCSR7GwYNuKfXEdVQ2zO4HUbS6gcpLEbhoaA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E06+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Tamons B-Side S01E06 720p HD WEB-DL Multi Audio ESub.mkv"
},
"tamons-b-side-1x7": {
  type: "stream",
  src: process.env.VIDEO_SRC_TAMONS_1X7 ||
    "https://icy-feather-221c.jakcminasi.workers.dev/?id=8302UJYY8g2xjIvM88Q3b8x9P4DA0jTj2wWJF8MVKsOBbUe2wBZDazfRopFZD4eMDqGOojVj7v7Eji70w721rQ&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Tamons+B-Side+S01E07+720p+HD+WEB-DL+Multi+Audio+ESub.mkv",
  downloadName: "[ Visit On Telegram @HindiAnimestuff ] Tamons B-Side S01E07 720p HD WEB-DL Multi Audio ESub.mkv"
},

"fullmetal-alchemist-brotherhood-1x1": {
    type: "stream",
    src: process.env.VIDEO_SRC_FMAB_1X1 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=qknJphjSQE1q_aXOVe9c1cGe8JEaPheM5RMF_hrMsmtMNSvu-H6f5CvRcepErp27TxFcrCI-cveYpRk5JFRDQw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Fullmetal+Alchemist+Brotherhood+S01E01+720p+HD+BluRay+Multi+Audio+ESub.mkv",
    downloadName: "[ Visit On Telegram @HindiAnimestuff ] Fullmetal Alchemist Brotherhood S01E01 720p.mkv"
  },
  "fullmetal-alchemist-brotherhood-1x2": {
    type: "stream",
    src: process.env.VIDEO_SRC_FMAB_1X2 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=vj1hL9uWmifLildsOrY-1_R3iHjha1upDUluLL5NN-IcbEPhiis7YYQNseFH9VEWvatHy7I9xr2RzywkAwJmlA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Fullmetal+Alchemist+Brotherhood+S01E02+720p+HD+BluRay+Multi+Audio+ESub.mkv",
    downloadName: "[ Visit On Telegram @HindiAnimestuff ] Fullmetal Alchemist Brotherhood S01E02 720p.mkv"
  },
  "fullmetal-alchemist-brotherhood-1x3": {
    type: "stream",
    src: process.env.VIDEO_SRC_FMAB_1X3 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=_grTlDReq6UbQhLqqO8QoUY44qQ5Wzgq2BlXQI-GN62zXksrdhkmX3yMEEN783-7jMHFJF3WDmHgeE2HmphlBA&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Fullmetal+Alchemist+Brotherhood+S01E03+720p+HD+BluRay+Multi+Audio+ESub.mkv",
    downloadName: "[ Visit On Telegram @HindiAnimestuff ] Fullmetal Alchemist Brotherhood S01E03 720p.mkv"
  },
  "fullmetal-alchemist-brotherhood-1x4": {
    type: "stream",
    src: process.env.VIDEO_SRC_FMAB_1X4 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=xWjcHjCf6k_z4VNcLAfB31VYnVDhyG0Brn0iQuUgljfpeYy7QomkEnYhTWnkM9Yd1OJMVGaFTrrZYoMV6ZpCyw&name=%5BVisit%20Telegram%20HindiAnimestuff%5D+Fullmetal+Alchemist+Brotherhood+S01E04+720p+HD+BluRay+Multi+Audio+ESub.mkv",
    downloadName: "[ Visit On Telegram @HindiAnimestuff ] Fullmetal Alchemist Brotherhood S01E04 720p.mkv"
  },

  "chainsmoker-cat-1x1": {
    type: "stream",
    src: process.env.VIDEO_SRC_CHAINSMOKER_CAT_1X1 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=g6xnsj7ZDKW0gbrc5gXBDoyk8KvyeTyqXKvZZXyli8pVTQwND_vudnbgV5loXQG2n7c5uzvgHzmnFVt3dtnICA&name=Chainsmoker%20Cat%20Episode%2001.mp4",
    downloadName: "[ Visit On Telegram @HindiAnimestuff ] Chainsmoker Cat S01E01.mp4"
  },
  "chainsmoker-cat-1x2": {
    type: "stream",
    src: process.env.VIDEO_SRC_CHAINSMOKER_CAT_1X2 ||
      "https://icy-feather-221c.jakcminasi.workers.dev/?id=Wa9cLd1bTrSEZNY7IekL-zFQHBu7niMHYd-fwJq-3D6OtPzjnByKAysWiR5-hnGD9gADtbBxopHYL23BhruQvw&name=%5BVisit%20Telegram%20%40HindiAnimestuff%5D+Chainsmoker+Cat+S01E02+1080p+x265+10bit+NF+WEB-DL+Multi+Audio+ESub.mkv",
    downloadName: "[ Visit On Telegram @HindiAnimestuff ] Chainsmoker Cat S01E02 1080p.mkv"
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
