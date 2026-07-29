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
  "that-time-i-got-reincarnated-as-a-slime-s4-1x1": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=MvK8MA-UUYONZLGpmLIvI0mHh1SFMGrRtvL9NKOiWOpAg_KKCTYHvzbWRcvy_Q_a2w3e9sAl8zMZY_PUenJJdg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E01 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=41fHx1i_F_9Lg5kwrQLGyul6dowry_Lszw8xEFui5VR_MYLVXN6XgeJ7WwmZW9WFmUxlMMwiS1YTSrAzbbDgPg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E01 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=B10IZseu2_wyUpfLWXW5xRXqoCNvOW_rYJU_4dgcfK2D38C-eEYd_reo0w9sGpH9k5GeRjTWhgfgSDO7TwIBcA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E01 1080p FHD.mkv' }
    }
  },
  "that-time-i-got-reincarnated-as-a-slime-s4-1x2": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=rtVdHZ2eS5LV7u436n-subzAee8xiR1aINbcrMr4tTyvUEkPK6w7aQ3yK1y1XqaVYPlIO__5Qr-PplhtVO9yDA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E02 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=dzjo-CO7go4d4Q9YS5DNNTDvhZUEZb58FUPnZxGL8Bz1ywTLVrV55Vyz22g9OlWGHyM3gTvQFCZulvShvh6hjQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E02 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=AFMnh9KLFDIJ_v4Bq0VYASlHq8EzE0eftcE_euad1KLoIJapPMNZMCoDAAUIk-27JqMvZC8TdtxQ7OqZlFOsmQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E02 1080p FHD.mkv' }
    }
  },
  "that-time-i-got-reincarnated-as-a-slime-s4-1x3": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=MRld-vVRDk6N8J9opm3KDyuCGMkSUEh2fB4Uv2jxmBwUKxnbOxjkI1QmeYVZb25bLu4M6udCzdYgeELmp3G5oQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E03 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=HC99YXReLsZWtfUWSdx3dxtXt1s8OFRrhf2WqJXkIbhqL2MDoqU5eFbI0HhMNaHNinO1qdHnH7QbjJ9aPLdyPA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E03 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=oesCGOGEmEYG7LvVdgNcKqni5htptiq4R5sv7gUVVSOxsKh_45-SBZWgTtVummRziBiaEoy8w4Q6TbdLMBGARA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E03 1080p FHD.mkv' }
    }
  },
  "that-time-i-got-reincarnated-as-a-slime-s4-1x4": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=RUrojVtebee0qp46fk2ARv6IXES9ZripiWZ1qQ_hr_gWQ_IlNwuLlxDYTShbJgu4ApQUo47wWxeP5ZC4yUK5TQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E04 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=hpU5BuGa6dzVmNLblZceYEoWXF2qxPyV1_K5-ayGpPvIv-arqk2ZyZpzRKUf_61cwI629aFm3B-69px-_MAuYQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E04 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=FBX47i0o7F7OltIPHe5Ca-p15ESV1_j8aGMncRVrkT_3HeLpJVyz5Potz8KH9xklsXpq5l0PF4Tk6qs_oO0sgg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E04 1080p FHD.mkv' }
    }
  },
  "that-time-i-got-reincarnated-as-a-slime-s4-1x5": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=wdtEKZ7izX2F0w-IoJXeZ0Hae2hW7QHVIBglXNindBmKgDypMIv4yK6J4xVbx5wJgA3Qkvvdm8IxuFx5Pqc4tg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E05 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=VL-UctekrCLnHLL1KHYHcrBvKUkOA5z_BuILCaY9C_S_ARAoUUK8zIUHCmia4uHbIeRRrI5y2XvD8MLF6_r7qg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E05 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=4M3X8xbI_UXpz3SLrcEKsrf8eHx3tbXVUXUP0Zo1w38BIOC5BT4UhZ9f6H6BF6sUpX5T1bG5zfzpUJWHd6UVVw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E05 1080p FHD.mkv' }
    }
  },
  "that-time-i-got-reincarnated-as-a-slime-s4-1x6": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Yr82jCH9m5p2JS4YUB0cYamyZK5xnh-euMrUQEx-ybG_TOYL05oJw-HWsJPC8F9eokWfg4WALaV2fBkk-e7OLg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E06 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=CY0CdbQoSuQ6r5RgXAYQTAxO6cR81PtA9mHiEHKPpQQ0lAvLHdaOlBscx9v_FN1927gKIBeyuyACNhRsVd13EA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E06 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=NO0as1AANYK8L9hXqOZaoHgUm4-UkkhlvN2ba9OBY_kvtUOWtg-G0iq-ic4rF-heEARJ81OSxqL9y7V-9YCHuw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E06 1080p FHD.mkv' }
    }
  },
  "that-time-i-got-reincarnated-as-a-slime-s4-1x7": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Mrud9iytk8neShguw6srqwWhQC1tdfq1pkJcknbq0eLOw8-Dc3o2I1peaErUzfeiehI6NW9lakF1tA7ELHWn2A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E07 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=WtgHnU-AUNVOMg0fXGJNIPK7iagtpSaSBH3gSKZkBPf2Ki_jnK1x7m-rGznKwjBxdmaIgxLN2-H7EuoiVvd-iQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E07 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=-hLye2ulWTigC-WyQCvFFrvFXxGGLn1mPutK41kDYlQxDQLwpxug9MuayNMh3HacL-VLdb8AOipJsT1ciYq0eg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E07 1080p FHD.mkv' }
    }
  },
  "that-time-i-got-reincarnated-as-a-slime-s4-1x8": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=J1ONlR63ICXNPplqNOugGKQ-0GmkrFtvgKpOoFNxewJ6_vkQ47usac_EfjCEXMFQjkNBHAUDyr_ctgNohOxhfw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E08%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E08 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=bb_r5NxPOVnhc_397NAOV5Pb87TrN_fY-O2Xlz_FBrOUs-DYY7aNZOSsPxJUrJRGm3noD-i5FafOzcjeGIU7Wg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E08 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=zlJO_n_gRgXS_ZVuueN0wkEs2ZUXOcH338iimBUCiubz6kJ0F8xkLoaekG3Sg02IJhaUGUmXKe_EW7pTNtD63A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20That%20Time%20I%20Got%20Reincarnated%20as%20a%20Slime%20S04E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] That Time I Got Reincarnated as a Slime S01E08 1080p FHD.mkv' }
    }
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
  "daemons-of-the-shadow-realm-s1-1x13": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=XBtQIM8Sv7lNQxxPF3HHtAIKgmnMkUIPRMERYeCuscZhpeYDteytTzrOAl5VNvOmSo8Wn3FlLrYZhsXn0-UhVA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E13%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Daemons of the Shadow Realm S01E13 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Fclw4MpkM9wNQGthx--pRcE8jUbU-UATkyT05g9qoxQTuZ3r4b9V8o5glzcOE1m30-dpomvx7H5mUIyyQtAiGA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E13%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Daemons of the Shadow Realm S01E13 720p HD.mkv' }
    }
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
  },

  "solo-leveling-1x1": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=4IbAlTcaySkc65wM8y4sgxUMLDicDTl60TEc5_fHhCnX7SwtDDNtNanWdSpfs7uS5MV9ckZX8wswz-2LHehj4Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E01%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E01 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=08TK3L9PYAH3sv9uqYo2odZppCMWFoI22X7QiOQlCEMs_tpzxz6S932ZAGuYQl72daajLOLrMDrsQaL5IbnOzQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E01%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E01 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=hJv_2pITOH-QId-4Titum5Zr1hjsHVApXHVglyPZG_fUXVFUFUYZhsJsC0-FGpiR3Z-ixlBFfLVrtIesvb9AVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E01%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E01 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x2": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=LxeqBwvYtWV-gbHNkMFVG4DEfsgvwvKFrCttG3rIgghGM0eNEzB2y20FmSNWAvr6BPm1N4_7I-pFs23_IJUnww&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E02%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E02 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Ypyej9wxcKkD6uJ6M5DBLpy4-BY_PNSj6sWmfpFGtO1TNW9tOj0wUBS475bUUE2wSWZHANWenu8t6N46PJKxxQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E02%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E02 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=p2QpOmsBJ8AfduFn5xU9egye-TIC8tRQxFq6mOYdCyeSXMVGg4JBcIIDimdRWr-x16zX6dsBX9eW6bO0De2Fgg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E02%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E02 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x3": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=A-WLvxYsYlZ41Hzaw0plok8ghgg5fo07-paj3VvGTFzzh-VgnOdXV2ntO7fMU8n8q0M-_ZKV2gYquXzzPQ7hJg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E03%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E03 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=WniiIFxy6fpstdn28tWyuul4qBQS0e_FX_p_jMtHx7FonVeeK1ZVhHJnS8trrTsSni9sK2bLnZ6_lFYgF0cBPQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E03%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E03 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=EW1eMeCwyfiaXRIWTbqSksU6ySR8scRZ6Ux4BiWT5TFwL3lenlJ6qXH0ySUIKnd-Fqg9In-EHtBo99sq0Wc2AA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E03%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E03 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x4": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=YH10r9r12JnMYuklsxHwpNBmNSvZXI6XQQup9Ng9Fw9dmZKrMHQnu9jqBaM5OvJk2gIUhd4KvUtbknmGzXBQ8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E04%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E04 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=GYCE7AmPF7ZOFTyG974X5qeC8lK1V6cI8S5x71en_sY0eVGsEr2Q22WZyI7NDIPf2HDmuQj2y-RS_jFqowQ9Qw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E04%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E04 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=or8sWdKVGtrk1Dsw3WnT9t8srxF7Zh6kKyyJ1qSYtmxbzBJSFTtZDres3OxKtbe6IlYrpWKH0u0OJeu-skBhBw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E04%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E04 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x5": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=udVw9wepUbIKVp690hfKqknZH6UVkrHYo3kX1cDGnwC9h-ebROGIQVoXp2q2N2Zw89kholuGYhBiJ5-GIm7noA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E05%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E05 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=ADPWxpZbdGnR5GKYnXDj-510VG7w69qiPYcrR21s6ATY6ZZRvohKvPZPT2N6nRMLAhTsqMjTz8ZDsVYm_dxnjw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E05%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E05 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=tK0lyXL219oCNW81hOWdOhsxgk2Qk6DrF8LYl5cflczVVKC8TGMSGYkeU1wSO_eT2FpLMlezEQqsG826z3wZBQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E05%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E05 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x6": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=-J2oCEyyENkA8Oii65nAUB8wz4AJpRCw3gDW84-eRN7PedMmQZ7ioh1Vl7ZxYeDaWMXRGp7IaTOCndnbvJ4ibA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E06%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E06 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=w2lBA5FLK8ciBa9QcZiTRgtfRimxF1gOUQIT1kmLW08fmy4KVAe8FdbJ4ukx9xW1JxkF9lpSxZAxIkQG7StU5A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E06%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E06 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=3NQJxPcSIggiMcOy8NbxWsZmyZgo2aoKOxVy5rmVFL7zb1XeC8wd00jnY_9YhpAjnHl5HD5auKCyJVJKQVwXgA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E06%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E06 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x7": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=XdlKLMw3ZkQSApGeEIFMBkzNoIZ9xEgwHKmLRlvsOkUwlxtV8Mi02seWQpB6aLA_d4YEXavF_lYaw3-pO1XQoQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E07%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E07 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=znoEVrhORir_yI7d5NcdvmnWH5UyIn7XJoXyagy9cT3AMhsg1jcdDNis9qj4G-hZGOgQs5dg5yCed9UrybghBA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E07%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E07 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=_11CpUj1KTwOngxwIpNvKU8h4ceDDtYn91vWG_CppTnhPI9kp1B1jKi-V_CAOsQfR1BG22nsJW2w03n_uJdRJw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E07%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E07 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x8": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=u3mRYDOZy-BA9Zg1u1VuneF0n4K8lM314CjAaGRNzdZsEJTnjGk8gyrBF9td2w-_hljcry9Ggt2nZ_Vbb2EM8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E08%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E08 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=X4lWYCtBspZoH8RzfLR2J6oZ-ggcEtUMP0dV3gz0_eJs_uEbLq30iUFZXw34kzB3oePJ1PDT512uHPeobgTIWQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E08%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E08 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Bo75rLaz45mT6UnCzH7LstfUNQrvf3sJVjoKAJECY7Peg1DPd1yxTIn2I5sISl8y9Z3Ihvx0vLJrcfEmEhaTTg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E08%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E08 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x9": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=s-d7k81A4nNd9B04ym3OfpKU-F9xzivz-Wfw3cE8QO7_Bb1D4tY9ABXBkgAnHKbk28OLMqfVfzD1T-i6A7ZpyA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E09%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E09 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=RdM-zlfKaM4ML2ip7OYzbmWO6EXlhSHMjpqKaPMWbAjOio0THjaI8GHglI1aBbq0YdK62gNyBjtQD9ks3rWVjQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E09%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E09 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=AfUZDaWcYKAzoKJq5Smu5U1Su_-lH7Zvdz4-6-Eak8idrgXE6MEN-3EulvabldPb1iKlLDPhpjP_zfQKp2E1yg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E09%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E09 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x10": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=vVv97xNKcH5S8dmEKGkVohuxinM-UU9LxneKD_Fnb6bVRWifRtHl_TY8Xggy--OoC-wOlnakW-_JV0y2dC8mBw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E10%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E10 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=z2fg-xo_u8oFoUKAx4TbAm_5-DcCUMghZPThP9R7j5a2mJLkqXQhAoAsS9N2UmUG1PKmQRXXbHbeYEsrGgWB9g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E10%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E10 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=1TEl8aGBDuC7Zm6jmAZrLjZQkG-Fl5eNq7yTCURd5JEiOyHWh4I-tOlnwwZwuSs2su1kf1RVZn8fw5JFW84HUg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E10%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E10 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x11": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=4xEYH7qjAhTLOaYrzGL5vXHUlm_PR3FXLRKf1d2pd_ayJ-AS4D9p_m-R9JDEQCAexcB0j7uPxxHEz2OjUL-CaA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E11%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E11 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=_PLddSev9XMUvWrOZHh0mrkhwSzrJplSo4TNDbnWkLdPtOGrswRqVT45rIVtwFFTUQYmHKDsGl8voFyWBT48nQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E11%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E11 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=HVYyNbg_rtED8EaIjHSOpO-QjOeiBAmM1W3mfyw_3jGuYNs1FlUiq2XWX_gvuXVo2rBSmIq9GjLaBTMDFtF3Zg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E11%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E11 1080p FHD.mkv' }
    }
  },
  "solo-leveling-1x12": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=wPOtJgZ7TrxoHrPSZfJcbCnGUcbrezFj_s-KdwDek1iNf6Q6TowKW56sVoFv2TfoPwIw4Ferla4mwM1TFfI73g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E12%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E12 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=2n4x_J2qeXYRo_4NQedbjwiQfokLsLwAXXyONPIQRdDJRKzvujpb33x8rEzy8R4ltdDOfLENyazqU3mwGeuXCA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E12%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E12 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=OvZilRs-01KtMl8JpxTLWuK-gebrEfccOW_i4pd5ikvhWUfMJUnViBbf9AdNmmYww0qGUTEDFDD9pziULoKEVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S01E12%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S01E12 1080p FHD.mkv' }
    }
  },

  "solo-leveling-s2-1x1": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=C-6GzC5I43iLgWDS4bkrtGBfZDC5-7-2OZKTcF_XPzU0R2BvGee01lLFPmesR-UvYi4_tszV_cbMHL0iaQ5G_w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E01 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=mSrHamykCKhmzisMyrNuyxeuWk7VazA8NuSsa19h3x6jGN41-yrEF4kSrUYKQIdDglYfxmzGU3TP2INLhprXVw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E01 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=BKoi4mdGGnbkxIjEjuhljP-SWPuegijNsTI7rM3vIrlO0uLuYxv06rxAT-B_tIE7VJVT9pKqE9IpuURxnRp5CA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E01 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x2": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=ZY4-q7OaTq-5dEECRwBq_ZLkJNFV9ZU4x9ZKlDLWcipZ3o6zcU_CWYG9siobDq59qz7oxIUabNrT8nBBtakNuA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E02 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Rr5_ir9XmUlcaABhM6xYLf-uMvTBeEjtrDDq_SPGdkyJO4mepjYcJr6ccy-vLu3dq7pC61rKSqG_vVjXx3cBKA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E02 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=UN3aRwCQ0w-q2Ekrax372PVpwr-EcaGy3KNWthi-V8dkokqXcW46MnxEfotHOhysdszQ7B4We3dCMk3P8Iw9SA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E02 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x3": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=hY3bL7RWyYiTn0o0HwGPCt-liB0pUD7goxAj0dSaFDbFlc5nC63tp-mnHuw756Db14LokK1I4_UqY9aE2TQuiw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E03 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=hzTvB0DNeBYrZItrTMd7Oo3EnDRvl2bwPQrLmOlVcJL50DxE4OX7_hsaC5sEZxvryO7-GVlZCix0WpY4WKVBYg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E03 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=tTsnRQMuNodRoBttIqUXjlt_oALOpy4wgTEe1gQkIEmDrl1bxxlcDMebRDFOym8o3msYYMnTSZdS6pgGnKE7eQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E03 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x4": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=TBqU4rVmZzqvG1CTpccGMop66IHB-QkNmrq8I5VRtY8gyAMGiOZM5AJAm3Q26_H_B92VGM-QlALkckB_c-ewJw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E04 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=U3KfDaxW-GoaxnZOLNRMPY2od7bj07c1e0IjWYplS7Uqm8WHa0DGsbEEW10SPnm9yU6XLZklz56npiyV0u1eEw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E04 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=GzJsbi2s0E_CAkESOAUdV0BNn0VAm6FHo3Ug-vPyYtSivxL1IfC0TfxwtQxp0Axr5cKD_ifC4GzVOAcDuxF9EA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E04 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x5": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=SeJJeUtkk8-oB0va8u4vXOI8cTsN-qKfdNZe_6pMLXzOuDoHySAzZCZedvFMXekWFByhi-ozFgzY7lhSNutAWA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E05 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=srOOPv1zY8yhHCBVXfgRbllvFF6n34UtpnZgffj9MvyVr0cO6lgB1HeVH3HAE4xyF5vlpZI15mW56BdorvWOQw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E05 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=-b55s_AFXlX85lYgaRwBZJf9asbyHKloFFpr8WmFvqUmhtUNhHvnTjV6hu0TWDgslFtnGDjWWFnbxhEc9uZFrw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E05 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x6": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=7W_DbsPHAYSPKGR61qpjePffMdzZL_b1n32lnxBOqCHyyrepZDtLGgc2HT79KCXfNm-ZmQvuLGlqH6UFWK_DMQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E06 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=BnfJDXEyaLmy80XToL7-5OU74UaRyWZ7A10DMx9ySe6wu13H2ocMMBmownqelpkfkS-Jg3TR8wcytQVGhz6OvQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E06 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=ayctqKYniyOOpHwSDOiwkvobJI21DapwRbbpEhi_htfrzU8sytTMWGc895UgU0UPd6WWQSkgPGOFqnD0L-LFnA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E06 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x7": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=p9jdMSXslR3re_zhJKnBe-RrIFxRCQuy-eDwcj2clKgc5ueUhEZ2cBXRWcMG5PbX45Sms21CQrNxYvgMl7iQmQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E07 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=bFS3QWgWjsXEPbLSd7RQYj0qULCTmEXTD7TVh9cT__vlXxHM3S9vAmfaTf_vep0KGKKsJcJGOM829g2FXpVpeA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E07 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=CKeK5Zl8qAo_g0f_Smi0cLTpKLZPI6yz2pSejSwEDfy4zCkYr2h4eQxuncA_3gcB1iah3_u7a1Y3iV_H0C5-pg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E07 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x8": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Er3oRisQvjdvta7P1MlYrxwzYnxssVwYHlWOiN_Lh7Rn4EzdmNG_fkhZqG1ZGTGH2vE7vykZG5SWUdl1baU1gA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E08%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub%20v2.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E08 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=i3cZDzDC1KWQYqvPzdGsVcsbzDCGSPsEnxfpQ93u0VBN_a9_-VC5vGuWDXHg-iAmtZ6Yo9zgCKW3PAOMPmll3g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub%20v2.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E08 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=ikO-2o7y5-lSsNT2IYwRZeBnetihJUZr6UvFWnEqnK2g2mK-q4hT2tXuyb0twMFETBH-MTBQqWSNlGltt9E_2A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub%20v2.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E08 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x9": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=FNtzx6kEfec33lQdFgpaweYopkMMSJ1HPchL4g9o5hiIc03yw9SHzTYlxbf6qeqEeTjP-tT9ElkKcASWcIL3kQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E09%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E09 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=BSdcyB7DE4lNu5HlyvnIPwlxAW3IH3V4Ju9XFEy28x271pBZvx4FeATKa7vqChKqei50cOPgklUA1ucCyiXLag&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E09 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=95VJSilap7Ifb_7TojOHtOYtJymIyIvf_iQHZNoWtAT0Jz7UsRU5pTBR9PDATjsKwGaLMOMFnD7sUDnGUDp9YQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E09%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E09 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x10": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=3OprhaTKxQe4dJvYTubjg6zwQGO_rljfwHaGil87pwJ689dWCrpY43yCUYsOuCrq-8QpIIAlz--TwIKKkIPNiw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E10%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E10 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=pf_F63e3BGcNT1tSnrW2k82Q0ls4X2Q6OUapRoXeK6-55m9amgBIJSheEWKI_wvtpGLPb-2BbuI9MHwtDenPyA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E10 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=TFkhDK6lC1CkSmiabeCLg0ZQTk9ZKSncZGGhjsxr6UjU9YFn10Nb7ZGTsJ5IV7oTGyi09uOVQnMdMXvIJ94Yig&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E10%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E10 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x11": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=ezmhNfWfMRNuvbZJqeRZCZtn0YIVGJ9B8RD8WbGfGzW9PYUJVIhtO2pC8mrncfPY0pDHOxcZhJZsCjWg4XVAig&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E11%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E11 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=hAz5JkXVcDWtKURkJ859aPz6BvsTWMOBgT3C08zwRDQn-pvYBnPlOiZRmNQ2eyJ5IhjR3JcqxrnC7ajyq0NUBQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E11 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=oB6_BM2y8eCfolPdxqJ54CLp_CSBYv-VmT3yewkF7r2ZNkDBUdgJ6wUxDaTOc9DnPUbE0YJycXO2nI4jhH8XNw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E11%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E11 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x12": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=td7F_b36NWRGKHp7l9XbA82DtkYpxWCQmQRaQwN8K61Mq8QMdmf1Y7LqyIMuvlJ24S2dH51hYEKVQRwRoA-RMw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E12%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E12 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=BDWFrfnA53VLQ7KUzj8Yy1oD3fOJ8B2qaT4Ex-9B4zTtxcMG1Nn_ZMo6qLr35V7ZX9_cBtkfBoVT6VBHWbwtIA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E12 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=SEUjno8LKp9Xx7JCUb1e11ixGm0nto7JbLSZxi-9COYg6dk5ZeuyDI-4De4yafkmxtg5blX8hTJb8GIXKxFKVA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E12%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E12 1080p FHD.mkv' }
    }
  },
  "solo-leveling-s2-1x13": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=RHx7jy4TtVuDxmtVwZOAo8-ggyxq1XoPmXC0M7dHjtoZt0VQobrWXbrpEk-Tt1uPqyZQGX5KAYhYk0BJM0u6FA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E13%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E13 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=NZO5RK_AR2eRZty6iB2QpTnifQ4bqWjY4uf-nr38R6yaB_wp0lf6813pRlawQPy8LsVfFiaqEYWeAjssscBabQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E13%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E13 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=gc6GoyCdMGtYMVYbkd2e01S50yMPhLC6U_3uQad-FcFu3Bp0085xnFvrx8uZOu-w4u1IKc59HIaLs2nMqYWefA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Solo%20Leveling%20S02E13%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Solo Leveling S2 S01E13 1080p FHD.mkv' }
    }
  },

  "yowayowa-sensei-1x1": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=LXVwro6Fa2KPiLTHfWiNEn0Openy7ObSXoWBzc4oPmxAfeSb40YUoMsL6cQJR9jTK9B6FRvsugRon6akMTjxPA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E01%20480p%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E01 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=a1eskQJr5O1P-vGAO-p9LuAxBu6IbZhERFhFIBotlcnTLjLn9Hqg5t0R-uKEDVBT3-ebUZc1d2viKnlNbvjX7w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E01%20720p%20HD%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E01 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=lDQ_hXip2NSpoy6P5TuiD_U88gbo7IfdrPlwT_Uu-i8wXEE9cwKrrV39zg_ZR__hQuRhAoF59QAXtk1GsdB6BQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E01%201080p%20HEVC%2010bit%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E01 1080p FHD.mkv' }
    }
  },
  "yowayowa-sensei-1x2": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=bv95mrquhm3kectSm9Whjpd7nZtOAnfZHbYXpgQYkgUtsGhumRooQ1PB0cJw5du4HTKu6TcpjF1mjFmo5MmDDw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E02%20480p%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E02 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=x1H-Jf6N-BV4qbp7Vl7il_ci_7NUWgd4Q-C7LsvZPCRrZQFqatWDGd_sln403nhAqnHlkFILPjwb0yZC4ihoxw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E02%20720p%20HD%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E02 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=XxrHc-ULc5Ud4Q6oqJ7dkco1J0GEaplkxaq1YBX24WyjmqdIu2n6E2UqM4BzT4aFNITfM6xHNiSdql372qAHBA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E02%201080p%20HEVC%2010bit%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E02 1080p FHD.mkv' }
    }
  },
  "yowayowa-sensei-1x3": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=xQSqCeFUpqiAwXrs3EtRmLzSGUuGtPzyEnRZAGWT5skSbeB_CbiIUpa6fAVKsLa8L1-8iaCfLZ2bWbPPSDptbQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E03%20480p%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E03 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=OgxUH0ll43QpiUfmrDSBSxxWceEkwxcMq7yXe3-_m5b9GZcUuBmBfAict_F4Gf2n35VCyjAx6t9RB6AghHd_Mg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E03%20720p%20HD%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E03 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=B3Wqo7EbGCg0wsPJXSD4jfdFVow6MXxigAE_RPy0_33qwlm7mBIL9XjCtAlKkEexMyCg3_HHBFXGds_TYVhSEA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E03%201080p%20HEVC%2010bit%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E03 1080p FHD.mkv' }
    }
  },
  "yowayowa-sensei-1x4": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=rRELNCk5fuFGt3h85E3MxO67Z9Xkeoa7gOiTM_uFSuwT4NSrcIjg4MBY1gw5fKhDNmBYHQqxfc_yK2xPTjMWOg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E04%20480p%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E04 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=cZsGDoIP9jvlgog-OUU2Vbj9UVRKBgQ1mMDvKstH-mbn4Zc7qhE1a7rVEwwp0Cf9GowPo9qoBhQ0oimXMZPxWg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E04%20720p%20HD%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E04 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=C0mA9fQS4X751ZpL_i5o9-hOyKfCKUiZm7bVc8zO4_efNEjNJXK7HeSK9nsg2-ZoL5sku3GCGIaJ97eWzu-IpQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E04%201080p%20HEVC%2010bit%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E04 1080p FHD.mkv' }
    }
  },
  "yowayowa-sensei-1x5": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=lhcN7nyPoGykycFTU-c__9-Z353Eo08qm-waBEYCoD9dhCOB1cJnfSuUxbEXMsG81M1p9jbYx-wkWFreeXAX1Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E05%20480p%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E05 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=xBdXd2AxlEuSTVyBw3H8QLPz4BRLu52Anor0WsOn2zl_FvsJj3uhBMfzBHrgTOWypXXQPHmRYfLyOtwyc_Zv6Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E05%20720p%20HD%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E05 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=V97IrCHOGw5vKgkzBTfxfGPYg6GFB5fCuTJqTfjZNMfTAALmmJ2aa2ISwAUQwRs0q537jTrA8gmSgs3aSyJ-gQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E05%201080p%20HEVC%2010bit%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E05 1080p FHD.mkv' }
    }
  },
  "yowayowa-sensei-1x6": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=ZIaeTbrIE6v-Lks-hUaviuninO6gBlpSaVByDO3G0QyU61LhIdBb6BvITzKOryeJsn7BwoMU-nA0kREp9XEouQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E06%20480p%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E06 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=LU-D-iMF4ZDrFECdRY2S8P883g0OuDcxv56FPABN-KsaV0ed1Alp_KBgx_hK_MJWdatVSXoXzdjnzGunI7ydlA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E06%20720p%20HD%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E06 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=fJtsIK18gm21yO6M05coRWkpenpd4nenitZwLpC2jJI4OzD3IGxz2AIQzyleRGT72D1di7MXS91onEG7tR4FhQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E06%201080p%20HEVC%2010bit%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E06 1080p FHD.mkv' }
    }
  },
  "yowayowa-sensei-1x7": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=5Xm-mj6vFBhiZwKqha6tMuo6hMtK9W_GOEeIdffsiUYTof1uvDQd4jJBReZfnclDqJBE8Ks-VLLhmV1woK96mQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E07%20480p%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E07 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=m8JLXAKjj36pypxolB8eq1epoelLMEEBcqJqbo9R--7iQyshTMWcuc6e5c_hibIYRhfKnuPI3G_B-gyft7oUug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E07%20720p%20HD%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E07 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=zHd53h8F5g22vf_rQRR26G_0UJ1KU37-T6nK1pa_Wo8Ug6HCHvHqrWXxEywJk1ci0iCsFXDOTR0fMNaF0evndg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E07%201080p%20HEVC%2010bit%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E07 1080p FHD.mkv' }
    }
  },
  "yowayowa-sensei-1x8": {
    qualities: {
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=jCYFPbfh2bql7vEYHOXZRBwqU1O4EjYbLW0RQheGaoZ92uFEvkeEFU61A2X6qA0deKIZjIZU6KHEmMSmgRsfiw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E08%201080p%20HEVC%2010bit%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Yowayowa Sensei S01E08 1080p FHD.mkv' }
    }
  },

  "demon-slayer-kimetsu-no-yaiba-1x1": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=cR0J5MdfIoaI4rKp7_Bpol2MpiMhBvbMr5pAmM6QRu4FRgSS56wta8LtQSnZNH6EHQRTaXOUd2ygVxznhF5ReQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E01%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E01 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=cuqQTqoofNyaX9rOzw6QxPpuZgvWo1nMkzLbnAeo0kee1iu1p1vkXaheMdm4wOrH4REEwkVUVb3ovudWab32jQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E01%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E01 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=I8l9TWeI9rKFzoWYXRyD5ZA7FlSQF9S7tz2oDo4p0_jGNRQ_vfDyT2I6s5Ujae9t3jZAtxcfYhxurtpZzdnkTg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E01%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E01 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x2": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=cHMmsERdmBPX8vMhcY8SeieEPB8R4w0MJvboKWRbYsOVEmHtqgp8Xq-euGl9YgqwNBrAjplFDTCK2s97T1oZ8g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E02%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E02 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=2DZbpb4H5RLwLjprtm9dKaPf5aZvI9F85HGFBoUh7R4FK8v7Ap-FKEbBO_r0gvORN0D0lsClNzlh6xIe5ng_pw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E02%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E02 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Cu1htsOMa7CyG94mrFm5L4UhDo2QuiK5i4ruca5xBMO2mltJYQkhNo5kwNCFR8ucd-DkbKtzPIljX0deL0DMFg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E02%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E02 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x3": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=EL4vLhlA2vLQa6GX1W8OEP109ZFzWdwpNzoFVaJ6DRN_8GUF4mmbQESwRtGitvsvxFdcqAzYdbuGzo3TnmnpwA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E03%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E03 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=W90Pf6CvhKh0lqkKbAUQJusqJXorzRd3yPTxuErRqN3ZrA0z5jvLQ9tNOoH3I-ie-ImgcEfio8n1XRH4379w9w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E03%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E03 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=CQZwxCTV3xCqV9r0VO4f9au3ifK2kOyqjvVGHIepv9OCvw5yRdV3qDkT63MEMqUU0p7ZntUUcLqBVXmhHWFJXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E03%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E03 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x4": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=APNd_V24NT7rJmO8FcGDJqekLF5SIDUZs5zWJB8w_E9YOfPMBydwFovoLHjiaRSxe1a5ByOe2H-DUHIvyhN9Pg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E04%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E04 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=P4b0AoE4o65GQX5Xw_LYAH0AyVburCPjBwtLaj42XjiJ5_GDRFH_uDN8IXXFwXghpaQBg-ZCRVBE7zp1_5pDHA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E04%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E04 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=EtYlJr1ztsEF4569qb-KutWRoUaRtmTZm_OQjJr8BLD-xrbFIwPnxsDHNMZx0Kb809q_GpSxbviPvrzE2bwg_w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E04%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E04 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x5": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=0JOEmEp_Cr18Apu_l8_DEGziSPdPHFubeCvH64XugrsZFY1yh9xCDC8F8IfGrhMZ3EkHKzVbNlcX0nZMzgbvJA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E05%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E05 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=xhdzTLVJ0Qpggz_9aiR6phmO3-HDNPi5JRQr2kupR-OxcuVyZSeaXz_Erzv9OtgIBlukKe4Qz-Ch6QM72CdQkw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E05%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E05 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=MZSV-zZ2fJNUQn0xn0w0z-DH6T4s2A2BBGenEYEeVru4y1ioQM8YlbfP5uu06if6lAB9yqfiFZ5-w_5BlBkmNQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E05%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E05 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x6": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=CP2RjBQV_Z0CUim0XyzTkL7qsI3gxRt8D3InM5BCRv1IUWk93PCVSbj0_gcWljIor6nhd8DCRX9xs6U_MA0HBA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E06%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E06 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=dIqYgrso5u5G9hDt-HOCmdeL2wno-QLePMwJnfB1jcJJcsFuJPlucX-KgIItWsZtm5I__lom5zJsCngZbrChFw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E06%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E06 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=tju7lofqudxZ1p4Q6cvaefu7ZLWgjkb3FNJI2M_YZxL6q1Nd8pdfMKq_HM0FKD4svEIp-U6DDxj4u4mCs5CrAg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E06%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E06 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x7": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=cdKbHEyGM9izTECiaSgUDgkQ2YN0LLI1_0FZvt1_mJvbCHpZhV5tFGAilUZHpeWLyXLLgNKppDG3jBxGGsldjg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E07%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E07 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=WwhVtK-GzFCG7k6wkSJ_WY30xuWprlaYEBEI9TkTX-2F3M1kqYmzN17jFi0Y1QpLVm1mhtKFLosFuxOEXi-k0g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E07%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E07 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=P_4zW55_HKZNSjglhRjjxJztZGgFTEdoOpjRWpR1byvh2K7UP_4lcfMlxb0T55LeLvCfzmshxwLkj64JGGwKKQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E07%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E07 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x8": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=dvo8kiTAzlkWElaxfNaothQoPiMcjF3GotSgWaHoD6M6v8ITmIf8cdQWYyoRQFRZbHrIVUlUWdLYIFxuDHD8Vg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E08%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E08 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=xkr32Wnxrq71vHFXlj0kNRsfI5ndGG62kitBQ67FsvmMW4-8zjyIrvGKBgEhe4feZF1piQiBL4nAANmWNGQDFA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E08%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E08 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=eheI7pull65qt9jDPsbtYIe0VTEJDHFfMSW4-Kw-W5ZLzhM9HL1ezWgM2PWKSfxthqbJ56F0CT4OZNC14oiJ8w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E08%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E08 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x9": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=0fdLQDCMd0lo934EL45OUBleNXcUooV2HLQ99KermOSFFmGDr6CoGZB0wYMsTiodI2sHJl07g--RtDnEjhGnIA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E09%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E09 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=NTW0AQoaT9JZiNBl8MeQBndP5VyyryKkg_NB-_aPZ88xu_VE9h3Qrg8Qa0wqyUB890_4B-vDy8CFAbVclZgxvQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E09%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E09 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=yC0MguzoFkoJHjQ_ikMAUmBp7L38ImCNpWGvLaGuRDMyodhNNKiFi_LZYUKo7q_ZrVockmYDOUx-pn9WpdPNAA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E09%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E09 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x10": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Iaf6QZJllGJQur8s4KuppwLlWClLgRB2UA0iIGlrxjDMbxbn0g9QuWHW3X-qOHO3bewoVavy3nbaz-5f69TUsw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E10%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E10 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=hH-XocnKJF20hC3eXhG77vFysu8iQ1makntwQsbXeTYgOjh_RnEAXaBu0G-Aft9wGzYvEWrabfgFphFxO3brdQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E10%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E10 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=X3YtWpuCMZf3r4RHKLIl33ETOUYfK1me4HOg_av7AWkbgyPK3iMHqWf5V8uggbitIG_XvfQGAbO-93pl3yEEbw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E10%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E10 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x11": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=qjWJmKiYZ0dqC6NGaNS5pesl-SvCt2kUgLLYrrDtQMv1sYZSu7IowxggRgFPxWBxCljlObQ978PTYXVn3nxUVA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E11%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E11 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=9FbfrR0DJA_KGmuu9Vf09ktY9G-ZnjRc7aC1rMT1DABdATWPxvmaeFMx8IzeCA0Uw6IhPdWw1rK_G_i2UjGWgQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E11%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E11 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=C6H8OZs_T9taWwRbqnrsAwVBr14wOGI5Ftyz9KW_ujIjxb-R8HX58BK_RCLpIEt5NNHfDvXgZqVMwuzDMZcUgg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E11%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E11 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x12": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=8BwL6DnDu1zlkSgMhdWycNM-IcjW4U3T-7hVGf0Mk9FNqQrG9zNwCmZLLe3tuN12625qCaM_D7QF1X2FJr8WUw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E12%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E12 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=9CmlE1nRZaWSGNBklR2nIgFKjP6poZRtScY0bzUSSh9nepDrAn2HyoREHprrodjSLjd92s8KTom34Lf7tFLROg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E12%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E12 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Sgh-fwJCqm3Ovui6eflWU0KGgpYNA7ZF-RqHJd6JHpZSwoXGzaQWRCRc7FRGJIdJqGu4kACA9rTz6HecFWod2Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E12%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E12 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x13": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=_iIw0I7Uflw5-O7gUESX71dwfdvyxCSG5pIDFDcHDMf7XI23SGNgAOr2YXj22YBopMywB9VdWqwCyXixOk3pEw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E13%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E13 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=uHkgWGXA0p0iVeZnZtczf9YiXdN9K0jzPSsrmai6-KYeqFcvmJva5DIZfzfP_ovucyt9czg0ooI3o8JUbslgqA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E13%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E13 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=rEJc9gZ7ZAPSPzrvqnc7R0QzS55f7RGJ9tshRyzs7plFv-9N0qYoRoRQtZHY11gm-o5ta-Cs3u1g2vfp7dYIrQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E13%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E13 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x14": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=ZqdJbpwE69vkRw42WC295f6sN0ACpGgyhbp9FkUMDFJKV5w33aGRGqoU1to1KRBDCfQCdk3mDmCun7maCZztiw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E14%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E14 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=-NuHYWPQPZk7MfcYTQFB9bD5Q_ietrbRWKeVjKKPTyOy9KBTReUIVTZBBGyoeiuVDqGtQLvjHQBZkkn8MkUKeQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E14%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E14 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=nzB2orlWo_kA1wbodfkQIvOozaIdY9Kk6-NTYuhhKHOxX5UcjCpsGtGfPq9_eVf20xFCUu22Y_uBuFS5T8cDqQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E14%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E14 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x15": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=wYwfyL8h2cQVBkxAvVS6u4W17snqDinKLVcv7GBnTjOyeI-LW6pKDfQIPBR053Gotmf5oaLiXpcMgQewYopS7g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E15%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E15 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=m1qyR1faogzGCi2iSqWfFvBCLvw1zqB679mHLvW3dkwZrW8eVKsizL3k8i57dfTDp5KU6yjEEXqQR6_tsCPplQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E15%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E15 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=Jcm2xmbDiMsXeJrjZ1hA38cG6eEjAiera03VEiyErloMUq-0g2XfklgaJYJsKYY1oUGKpzD4sVylv-n8R2WvoQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E15%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E15 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x16": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=8e8WgexYlhj0saE2WWIkzXrtn-Pcwta2-2aaU33Ie5Adccz2N6H3TfKtvbcBAL26LBPYiXY2MQUhcIWaGwrxsA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E16%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E16 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=LDv3a5n6v1_bPpoq-JetROkCCdpQTk9yPhGPqWUnZ5Wc7UxFMa0zSFFWZi5uAFmVqy3TGxchR6pqoKFUJcQ--Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E16%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E16 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=SAf6P870dXs0xSUudgZLf0FizkrQDU8DmV6Qv5RRS7ylO-Wv0msz4AXeuGOBK6ftCD5IHQ1oSXxvi5_r3mN3Qg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E16%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E16 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x17": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=tD5GwaE_yk9E_9MYNVCVKwSScI82tT7BZ5__JQ5YiYBF8TrtCBJpxDZkbBMM5LNIsPSj-EuQJtwQv9h8UTxUXQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E17%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E17 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=0ourKdZjcHkX3zBoXebNs65CJ_WltRMFE_-jfI6joAXoot5HYDcUeLSs3sycvIUZvd4AktVTuemmAnEmWIQ5KA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E17%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E17 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=2HAORVFanPJIw6-CkhGJP_Vd5ObkFSk8np5QqplyvfozdrtzDtlXppT8HPJ2IF3s9Af5aXx4_Qiv8BkbewPpgA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E17%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E17 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x18": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=AZ_ccKNqZEi5UM9UHSqOB7Pqjv8x9ED7JTA6PWlBdWf5lGsq5BaVffD-EfEQbIEz_FMcouhlVzHmIn6TCV46jg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E18%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E18 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=cq2W_hRNdkiB6XU0ho5ocrc13lDYwXMfusKsUzPOV-DvpB5ABbQQlaIac1q9cBhOnqCj09dLs8eXOkMp44Kl9w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E18%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E18 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=mGoHs5FSL7pxWjcihovxKkv9RX25SfYh79ZOynkD6j50GWxpi06VttBK_iZHnetn3xgwUFskd1EpmTaOvHf3SA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E18%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E18 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x19": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=br0IwhuLIFM9O38NPpuFZNSiN6L2oMUPnol7yWq7eVyya6kf5xUkxmVisZocpLpluhSfM3X8yWDzzYq6r52K7A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E19%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E19 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=MSCMvnisGHgm3FRgvvTKlOt-4VWNNM8l7qxXNJYYx8vtQNtFNG0LwDlVAY2nTfNHKD5j6RRY56besy3dvCeJ0Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E19%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E19 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=X_k0Zcbpk4OMfvjs5hhXlnMV1R83lOJiLNY6FxhVgTWMRFoUSxSMm4uDHEc52tXiUKx1_78LHlXEhXF1EHWFlA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E19%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E19 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x20": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=-oSAIbkrOsN8h6CDJjRI7gykymxp3eOzn_qRO7MN7y3jOvrlP8RAuWfaBSXCJo83RYvBhwBIezRYPxD5iDshtQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E20%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E20 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=pwS1Vu7M_nLlt4YULV74FJ1hNCSURP6LqsEYoh_OH0L6bNOlFASntFfRG6BD6TDJYtaXJhCmsskQsNULz9_q8A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E20%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E20 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=LmpSj2vOahAQIfDY3IoE9u6q58C9U5AS4ZFVIQIvMJ3ZwdpdNtYQDBB1ZdMJFtWo3uuurVflqD_SdRgizp45-w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E20%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E20 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x21": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=SNrJ_iGB-VplBEuG3oTWmHvL74suvHyUjA6JDzGgRKdHSGoOYHkb3z-6KyciDBdF0QUOPJ1yZCwcuzTyukPC9g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E21%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E21 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=WnrpIM0586fnlpLrKv7PvWutTDyojJLPFxCxKNXLd_vqSEzPOJf4a-cmEqb88MzoE2oMDeqNcPjmvOvOssgshg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E21%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E21 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=-cRXsdp4FcSF5-t536jBVCiKa2Y1em1rVZG4S7ZWKt7IZxeFf9bg5SPULEa56Yedaon9GPx-KDwGaWXc9PN6RA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E21%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E21 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x22": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=MKerk5GPHdQP4XOPeCDGBfpR3uZkcJsmK8KCUVComJNGVj4RJ-UaYctsiRmHSY337TMQgRTknxwbTfJCljNgnQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E22%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E22 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=SOHZDm26DMEdKuzA6JKnd2MAZvQe3R5P41C1STEdkES968XNr8vWYvIEApu8FOCqDl1DL7hKhUnfZWNEM-5rZQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E22%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E22 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=8OgzowJNVU5ai00tjd44ApPpv3qwq2vp2Pmy6DvT2skzlVOu6kPDR8myd4FjIgC7_NEz8FHa-44HoMpYc6GN_A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E22%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E22 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x23": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=oeiZgGyRO6NqPatN0rjGcCse7B6yGbctJXzbNG545l-shqKbSdhfVtvO7nJuhVfBhvjSH3MiD6QOLUElsqanbA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E23%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E23 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=hGmqQpX3PaxZSNHE5cWWzRJAlsxC906W8LRTjYh8sfer6FaUpkNss0zqHWNrRfogKwqkWz8zUH6705_AirPbAQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E23%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E23 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=V58MMD398CBGLFvS8BSvBNS6kbz-hJMmsgXrVdsutKX8OMiWUV1RoVHlszOmKoIjczNdZQntFOOqSVFtCJ0ewQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E23%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E23 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x24": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=1xfKEQfMTlB_CIBZfWm-2zDFNUDZRZrV4Owv8uaNUOLSqp4jf2n-WoaeYBQlc2FvL4mZXVn4SYW6ldiVgG3Qqg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E24%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E24 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=dmauFYnx2m6Um591qWIDoxORojLr70CSYaEunE044LIuQXXYvh02UYnTJWptxwgu7uKGxk6tSMZXqytQd0SNMQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E24%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E24 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=rvR1MW0jy48HPowO2eE66e_Mu0O1IPUYSLkU8vxWV28esuO4xqh61rGY62hxJPF7WJ6DndtmyFaFYk2wQdYe8g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E24%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E24 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x25": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=W0ZIBrcT9YXiT8TeKeMZcmLl1IrwM0ZeM4tT_Rqe_gAPvxm24cIy2fJ07eEULN8GW0XEbn0R7v8GLC6WgUaLjw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E25%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E25 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=7TjXduSks3k0nCqDsa7gXuB5Tp67OdEE8wpJwwcuXmyO4njopv37_tvfvucfCrklX6L2IODGlfzP-mDq74_vSQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E25%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E25 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=KkT2cG1xib-CSCLzMYph0ihZ8wdeKDnBNbneVTytS7WQ8hTJ6HG0qLdqQ9E71b9Azrkm42juriB6NgvshyFVcw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E25%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E25 1080p FHD.mkv' }
    }
  },
  "demon-slayer-kimetsu-no-yaiba-1x26": {
    qualities: {
      "480p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=YmDiGF95K43mSQZ0aRXIQcNKNcbuxUYIJN7wbJVYrPd7aq3oUqDY0gtLnIOdrv_RGVw1C_HPbBxhFgZ0g-4kAA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E26%20480p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E26 480p.mkv' },
      "720p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=ANCa3SdkG_DJ8S8FvpW8jZM-TK7ng_qlZr8XkM9uO9XkzaHJ1fgk3uIsXwbcL-jWWJ_6iSPWhY4f3MmdD2VE0Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E26%20720p%20x264%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E26 720p HD.mkv' },
      "1080p": { type: "stream", src: 'https://icy-feather-221c.jakcminasi.workers.dev/?id=2tWh7xZsLA5UttClCmSZdjFDrEYYyQr0aWa7pj-68zR6RgoEWk5jOL8UqF-uirmcXwKeu79Z4S1VDy8s8zw1NA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20S01E26%201080p%20x265%2010bit%20BluRay%20%5BHindi-Eng-Jap%5D%20ESub.mkv', downloadName: '[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba S01E26 1080p FHD.mkv' }
    }
  },

  // Add the matching entry here whenever a new episode id is added to
  // anime-data.js. Nothing else in the repo needs the real URL.
  // Remember the comma after every entry except the very last one!
};

/** Looks up a source by public episode id. Returns null if unknown. */
function getVideoSource(episodeId) {
  return VIDEO_SOURCES[episodeId] || null;
}

module.exports = { VIDEO_SOURCES, getVideoSource };
