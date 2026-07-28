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
 * Fields per entry — TWO supported shapes:
 *
 *  1) Single-quality (legacy, still the default — used by everything in
 *     this file today):
 *       type: "iframe" -> src is an embed/player PAGE (HTML), not a raw
 *                          file — we 302-redirect the <iframe> to it.
 *             "stream" -> src is a direct file (mp4 etc.) — we proxy the
 *                          bytes ourselves so the origin URL never appears
 *                          anywhere in the browser, not even Network tab.
 *       src:  the real video URL (embed page or direct file).
 *       download: optional — a separate real file URL to use specifically
 *             for the Download button, if it's different from `src`.
 *             If omitted, downloads fall back to `src`.
 *       downloadName: optional — the branded filename shown to the visitor
 *             when they download. Falls back to "{episodeId}.mp4".
 *
 *  2) Multi-quality (use this once you actually have more than one print
 *     of an episode — 480p/720p/1080p — and want the quality switcher +
 *     the three separate download buttons to show up on that episode's
 *     page):
 *       {
 *         qualities: {
 *           "480p":  { type: "stream", src: "...", downloadName: "..." },
 *           "720p":  { type: "stream", src: "...", downloadName: "..." },
 *           "1080p": { type: "stream", src: "...", downloadName: "..." }
 *         },
 *         zip: "https://...",       // optional — powers the separate
 *         zipName: "Pack.zip"       // "Zip Pack Download" button
 *       }
 *     You only need to include the qualities you actually have — e.g. an
 *     entry with just `qualities: { "720p": {...} }` behaves the same as
 *     the single-quality shape. The matching episode in anime-data.js
 *     also needs a `qualities: ["480p","720p","1080p"]` array (public,
 *     no real URLs) so the build script knows which buttons to render.
 *
 * ⚠️ IMPORTANT: every object in this list except the last one MUST end
 * with a comma. A missing comma here is a JavaScript syntax error that
 * breaks EVERY episode on the site at once (not just the one you were
 * editing) — /api/play and /api/token both fail to even load the file.
 * --------------------------------------------------------- */

const VIDEO_SOURCES = {
"that-time-i-got-reincarnated-as-a-slime-s4-1x1": {
  type: "stream",
  src: process.env.VIDEO_SRC_SLIME_S4_1X1 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=b2vPxZJOnWA39Eq2APo0KW2liZtEh_9kkEtbLVJ4Pd4kaWWkbQ2NaQbjiA2DpQt4OieF4E1T0bUR2lQCX-OrPw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] That Time I Got Reincarnated as a Slime S04E01 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"that-time-i-got-reincarnated-as-a-slime-s4-1x2": {
  type: "stream",
  src: process.env.VIDEO_SRC_SLIME_S4_1X2 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=GK5qyjmzXEEmd2DcxkeYbU1TeMxWqvhJsAn5Etbi0pZtZ1io5JcCo69e2wIs8BOPtFheJvmTNamvHrqfb_DrmA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] That Time I Got Reincarnated as a Slime S04E02 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"that-time-i-got-reincarnated-as-a-slime-s4-1x3": {
  type: "stream",
  src: process.env.VIDEO_SRC_SLIME_S4_1X3 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZpH6u4HsxI6pnnI0V-8vdDjKgoBIpwt3sZE2KQe-tHcmvP__HfJyhmAFtBPMINC0GgglNz-xdWEw930Zw2U_BQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] That Time I Got Reincarnated as a Slime S04E03 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"that-time-i-got-reincarnated-as-a-slime-s4-1x4": {
  type: "stream",
  src: process.env.VIDEO_SRC_SLIME_S4_1X4 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=1C7giiXIhKdFtBCLhR0H_Zrsxw9juyGjcvpkhyE24fQud177wnCeO_asLWyiYvri30-pqs3fm3M7SPC3BxPisQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] That Time I Got Reincarnated as a Slime S04E04 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"that-time-i-got-reincarnated-as-a-slime-s4-1x5": {
  type: "stream",
  src: process.env.VIDEO_SRC_SLIME_S4_1X5 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=xCuOPVxmvEFQ_noo-1pSIOOC4NpZPGQ0pvVLoPHQSzDiJ1mzAzGH59TsBKq5zl3gzqbPFYgW2XURMLGS9MhjJA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] That Time I Got Reincarnated as a Slime S04E05 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"that-time-i-got-reincarnated-as-a-slime-s4-1x6": {
  type: "stream",
  src: process.env.VIDEO_SRC_SLIME_S4_1X6 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=r5nD4OTH8y9MKreQUMxgeJA2k51uobKP0drJTvgD443Off7jdpmBiDbN0sqi_Q72MqthEqtzBVEGwKc_stesww&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] That Time I Got Reincarnated as a Slime S04E06 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"that-time-i-got-reincarnated-as-a-slime-s4-1x7": {
  type: "stream",
  src: process.env.VIDEO_SRC_SLIME_S4_1X7 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=fS0H4pJ4850LigUA7RwXoB0aJE_saphca64HP6dv43X-Cf8md4mgy-njMvp0vcnQs-mcbnA-z2dYgVnSsFlfWQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] That Time I Got Reincarnated as a Slime S04E07 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"that-time-i-got-reincarnated-as-a-slime-s4-1x8": {
  type: "stream",
  src: process.env.VIDEO_SRC_SLIME_S4_1X8 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=a7uLtzTAySrAtJRQ5D9NqUxqOz0xQflYIrUImla1T6gNDgrQQN8rcahpso-NS_bcuh4hdlpWBiKts5wgWUgmyg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] That Time I Got Reincarnated as a Slime S04E08 720p x264 WEB-DL Multi Audio ESub.mkv"
},

"daemons-of-the-shadow-realm-s1-1x1": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X1 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=QnBrWMEkgk9Xo-VujWxPGpZFRDPdtabdNWfur7uowa_jl67jzRegp2ToJyo5qUprXSYocqhH1tLZWSwVyNVBug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E01 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x2": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X2 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=RFkvqg9O9yBLs2pySACAsD3gHXY5QNZ0qf_EHs6GPHnPfTLtxkhvXLr7l1DSDyZyNhn8eeEKoRP84ahr0Zv6MA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E02 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x3": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X3 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=rqn0WbC6k1U1Al92yz7ioNXt9O5Zt2AwhO4pLNRjocet_2dTRos259HcVOcwZRyOMiHBCWS_xmtj9qfbAsM5ow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E03 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x4": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X4 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=T-UA5OGl8HxlrZUV0q3Bpdnhq-ATLbzhKL2XN5_Mdn2sGfQurcWmmjbqwOz9PSQEWgnp967aJ9xDy7i9H30OlA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E04 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x5": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X5 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=5HyOOnIH4zIDpziZaVfuRC2lTQJ5Cb_hMEhS1hJ1OfZfilqvMC6NXrEChURHmlPn0g6R99zChxvwXjHTitD9bA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E05 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x6": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X6 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=VYh77qjpIZ0NwsI5yunRtcQtXvrtsTOoSmCg6HLTbKdxPCVMIGLvMJMBfw74OT16NmaRifX9KypTfIjh-c-bAA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E06 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x7": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X7 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=nLX2wewziaNf6muHrw0FqoR3tizvOcmqUepIfQJSk88ab2mr_3JwmfhkVkGTDpUQzDgLPsKAog6-rU4zwk6kjw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E07 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x8": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X8 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=tFmlFBqZhUMwh6_Rj_glZzkQZrunil7jtSuuHPtThkJqPuwIXjkI7W-k7f9f0BviRf6yGijmVcs3wAHMJKRvMA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E08 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x9": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X9 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=DZN9t6BnKgdzQ6Q-uKu8VO45KtdX5evJqUMO4YEvUJ452e3B-Kh8Bbrex5Jg_vB8kcoi4RxpIUOPDGs0Ea5XqQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E09 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x10": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X10 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=0Qcl84dHR04lFGaYnMSfAgdNpHSbG2C0vA9Z4HUyBuBADxDSeRrzfL6TFxPwBXKqdWwoDrqAvW_unEmIeNVfRg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E10 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x11": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X11 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=RofimM2X_DkJcvV_WplBkF0bzujk9i4KjC-gXpnmnwP2VpUV0bYa4KBkgL35-OeC5uwSm-Q3wTxcPSM-gOrdAA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E11 720p x264 WEB-DL Multi Audio ESub.mkv"
},
"daemons-of-the-shadow-realm-s1-1x12": {
  type: "stream",
  src: process.env.VIDEO_SRC_DAEMONS_S1_1X12 || "https://icy-feather-221c.jakcminasi.workers.dev/?id=nrCt6_p6xwx8KtUvpG6NMSdN_T68if51EvusCpfqyEq0PUFcD_ZONXK20gMIrgIL2Pdohy2Syj9EzouaM3WHeA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv",
  downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E12 720p x264 WEB-DL Multi Audio ESub.mkv"
},

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
