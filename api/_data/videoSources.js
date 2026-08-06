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
 * sofullmetalurce. /api/play.js is the only file that reads this map.
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
"one-piece-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dQ_tVJBpn9Q02k9UiJZIbYJmazL6Ov-IcOswcggAd_0HdvIXEpYuqKUVb2phbcN4dsxnu5guFcOYCcMlJjvqng&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E001%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E001 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wGRwXwxyTBgHfWOxUSezKuhGUjW3XwueCX7SybQroNWvohzyH_iWV2uv0DWrPdH7zz_eL3ww0CQWiv8pnO4b5w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E001%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E001 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=B7xdwHTRJx3aFFPgKyID38XrFCyD4GGEwhUf2VttSgMhgFfDkj1ov9KFJdhgBm9zLur52gJNBrLo_meoiAuLag&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E001%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E001 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Z-yTI3EqFCelmkJfT3VdrJCVvZSleXeynXU-qYHq4j3xDEzdPe1c6mHzqrlIdcWmTNuAH1x1KXNLOIsiB5MzCg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E002%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E002 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2c4YdwQ7rmBa8VwlFHTe15RCk_LB-Sa1IE_ranui9QiRLnfRbO64LqLp8x08JRcc8eM6TQwKPFKJ8pzvAK9ejg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E002%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E002 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HWAYALffx1kNw9JtyXBDCSbJtOZGs3Ln413sW8Qcgktebzo2BbIur9SHUu_5pcQ-RHYrtmeW6hZwTLH5VoU5lA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E002%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E002 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KQOOoBQ1X2ySaFa59B_rqd-2kGovfSDefzUyjBqGKWsAH4xquR2rP8HxkYa0pVbjBsO5QSEYI2rAESv8RhQA1w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E003%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E003 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Gw1REvuLSBM4ZgkTaL7GsXK39iogQHgJsKsB_c58xvleIAbA_zTx2PsHHXau5zfa4jGNzFDx8ED6rnGpDoSbbg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E003%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E003 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Kpy64fFNXH_zBIwfss6NIh0h7Iz9N38eWYzN-B1A-SfXM7UqlK7-9NyZn9a654yLgkNFLlLPaMvxVm8u5IXofA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E003%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E003 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=a18wOytW0WYxuC-BoWGvQ8XFV4q_Q6mN1ZcbgMRHCYOXf11B0CDSg3jVCeSTgaiiyHh92k2m6vcazS1NQRgOBw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E004%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E004 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HmU3lVYJnw3EkM7fgRtvlfOAnUaMUaJwl2k0kfmaTRopnm6a_TuE_P2_8gdVP6V_xvLt9StMKOcNJUITfFjnrA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E004%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E004 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jMsBLNf7wJKJFKGg6auiJJjPKPxThsds-WAlkTUDZ2cHn-MH5B2duKu9HV3ceULUSI7F9qu4g8T9yQ-UsrQV0Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E004%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E004 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=t8gVLl9HTHKq2Fb-2FnF0Kn0nuehlENzSOFUGmWucywDj-6mK2aHDn0pGL8woUVaihOX2cg4yUR2EQ6xSlSY-g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E005%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E005 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KXGoSpyt4s1FpzdzueojnK7tk9H4mQWWVaFr1MjZSqxdNBjKJnGoW3Rl2jzUmBibjErnA1Y7vuL-QDNWbs2aLg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E005%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E005 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6s53UVaIHMUN0HI6dL1Meze0LoUwsCzattd2wOOH_-Q5l0-YG83UK9C5UgnVZKAiKijWpjCDYpOUe6BfuyYgTw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E005%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E005 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=t9cCy5IE4yRuwf1wJRSSfmMmadvvdjBeJcmuoarGBzZN3twFZZZivDN6B5Pauxd7JkqW0X9WYjNbBpvk1FTQtQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E006%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E006 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=kVEimkV2RKow7B61DdyXDnkXATfySQQHPgF6aumW8JV6T3oy0Ub4G7O0wlLYFyzIGLve2zb-u7Sj0lCNRcXVWA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E006%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E006 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Nwf-EAdm2KpTCIIqZgb4LEzTmY3mww4ae4o6Awwva2513_6rE-H5lq5MtRaP4_wONCsZbGqtWdelozK234VCcw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E006%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E006 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Cg5RDWiieB1mw-sG2O1Z8r6SHxxrNJVAjygKsgpez8uESP7dMIODEWnUVDRgi2pFpC9HyQDnU_nAzdSXV9d2Vw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E007%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E007 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0J5U_bDTu5i_vwQWRiLpVYcwTzqBv0V0VyDftmKU6FaC7KcFF6Ry4HdcVO5AAJb5AlXahcGEYrLbJPRnarWlDA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E007%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E007 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xEXGsBnbIsPdeda2CMA74Jp5tAZu4Pmk_bNWLs6VfzWqIYOpGjXMHuWKoIZJuK9aWFaG2Gu_Zwtg4UH86z9B9Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E007%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E007 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=z2yzulEmaob7B9cN2ULlVGYhiU5h7ivguEzn9lo879-6rBNNkpTBBxs4qjsYywJtpy1hkBAFOu8WWXXMUP4u-w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E008%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E008 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KjD4Jf81vWehNuHGFYFz86Xw1_GZaWD0Xl4VJyWxwI9Dk-vQsspgWxcE8JD4ClyMes9vfy8DLJFst1VIIirIYQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E008%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E008 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=O1KSPATefSWQlKoA6P24XxSwIdBw7xKr4YHSSxFzUAa6J_BWMFlqSEvuR0gkiSaFekvKNvWLNBwR-Ni9ylgcCg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E008%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E008 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rCAkPIuJA5aCPbEb9PSOqvNmCxM214_tar03U6Kq975y5-XKNxVRRmF2CXwtoIKS99ilnCoKfrsUpbF4iKFqYA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E009%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E009 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tfBphAP63XQ8GinKApEWkz5-WZdADSw-jYLhMbIklJSuTxyUc6Iz6M7FBzhD_DOfdcvvAQ7jPBNJcz5Ygvt0Ow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E009%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E009 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AWWOWiUJRhGwiiQdiJ12BJMLuR2l7JmrA_PtY1k_GQeAYF9vE55jmgG-e4FaxXm6pfc_TQBFgNFW2yNVoAsZWg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E009%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E009 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jK-ZvCfCqwOqITVuvJMjiJrcoo1QTjY0xj5oGx-WhLJNPCGJeXzuZLliwwVCY34kb9ZsuavZuS_5_ATxww1HEA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E010%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E010 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=x8NDl_hsU5V-j4_5e48khb9LZOtOk_5pI1GJ1UYTYaFT4EUEyy29gdArObkVrZvoRTnEx99xQEblnyYeiubHrA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E010%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E010 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gaPlTN7LuwYndELRWHdh_SqdHuCVvj4lTFU2JY52VwDaEMUgph9O8XzOQ7tWEE6TS7nRcsJAiFcf9Fdj8Ec3sw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E010%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E010 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=La7I56nrlM69Wx0yi8emO3Kwh6cP2zfveP5yJ2IO8BNttD8KScqZIKFdmm-reaVpip3fJxc5YxB3JGFl0TZU2Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E011%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E011 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4CqSsK81dI9S6kdfHkJ5q2KaUFA8Vvv_RA4gPGS7vOsGt9uzySc16Wyk3DYEL6NdWh4V1Locg2fSNY0fjnMCmg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E011%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E011 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Kn1S4ITI2HUiyp8PP7BTk29esxJs-rXQ5lJzTvwFpzy97GqX0UFhLqvcPtW_XiMgNytuyFlu1KALFz5gy6XEJQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E011%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E011 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dLX4lnbAO4HYkGS1kNPLbDJJxZrRhB4sCxz068OJolJ5j9q5XbWwDg7YZ7Z8zj_iOc3orgGd1U4E1TjyCiWN7g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E012%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E012 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ybnQtspf_cngPtYPp8lJITDEq5RECaLMdOZnAuqBzveLCZl4oaD1qM5t-vlEfB8sIEf7qPtgMvNiEioY5YRkBg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E012%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E012 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=P3prHIY3k7DScNAfE4pkutnQoN9JvSO-d5NDwQqHgvEDxcyMK9gEqGdiNqs7aoG_k2nFCBoQNkxgbA4_4-gHpg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E012%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E012 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XPEZw4KcJwNyS37UYKGTX6K78YmnkWz5fzFAdRhcIPS6PGOYKR45Gcdhr4mXSMGB8k3G4bOclJ2KXDaEU4SE9w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E013%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E013 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fKaKKdMaFwejFRtUgvnVlL-8P3anOTZttbV69EcnBf5obeaupa2WTtYxoFeSlODP4BfbJy_Nxgd1RFpq7gVu8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E013%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E013 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Nm6vNmLYRTgUF30TcGpB8LKlZowN8Sr8nxJIq69lTuS3Ejq7kPGmDTL9p8XxYS5vXno2Tat59TQYrgwhefqDCA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E013%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E013 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x14": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JYk9Vo6pdb6SfB9e3LFXQFsvoQq9C15yPZ6xDPC8CHe28aWb0Wcd6fb-FZcsHu705YhWuBGq93f3HgzImuV42A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E014%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E014 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4N5HmphV6kx2tP7J2ajk_ozYDjcuIom3d4yNALtBKOUYBCA5hjm8ukBn9XcyA2EdZ3TFVU1JTeyrfL3eK0zVTw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E014%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E014 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=b03VCcGTLX3gVkn2eR-CTz16JwLsOcb85-CwjE2UIGNKoX6fHUcbRG3twM9J9oGcM9mC4lHTRDdKYOL9RRLumg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E014%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E014 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x15": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Y142w_sLa-zuP210UlmQ0IaEcB7RqfXRhX3t0YniYVzTvg2GOukwnvIQUrr0V3bvavZ0-fgCB4Z0SQf19X_ZlQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E015%20Remastered%20%5B480p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E015 Remastered [480p BD x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EYj754yON4Jo_LXdoiqexYKuJ7XzQTmb34-wejwoIfXeQ8kbsrYDeQDslWyqSXcgkqwYdB62Q3cL9drXdXKEEA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E015%20Remastered%20%5B720p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E015 Remastered [720p BD x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pSRNNwqc_ec9IQyutyqBG1Klm0JKxYWoEtCpysZI4eaGwxPgZXq5ZrJ6gQvDvbqWn3Tp1Ad09kJ6WsMomYzUnQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E015%20Remastered%20%5B1080p%20BD%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E015 Remastered [1080p BD x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x16": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-D4mjg0cz49OlsMs65niU1EbLHo5qCNGZDsxCVssuAlVMucSNCjD3C4pIkEST_jgby5HtSjvlRQIvodXNrxoHw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E016%20Remastered%20%5B480p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E016 Remastered [480p BD x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1QqZyHrbiyyJieTlZ4jBx_cd4L62AvufJ7lfxsQa-hl2JM9ybM6h49p1t1hu2MjLeA4R5-2HE-bz65ka_Dbu8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E016%20Remastered%20%5B720p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E016 Remastered [720p BD x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fxRPl8JirV1hMiRl-G7YdyjiXTopHf1Wit5A2Jwc1a-zYNRxF7fKFahqht6AoQiH-BU4ocE-sLV6_B8yhUH0fQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E016%20Remastered%20%5B1080p%20BD%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E016 Remastered [1080p BD x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x17": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=35UGLieGUZttZYbJi4soTDqWahe4IFDv_X76mpHEwIs21ZXsBOVROpkzftV2TCcoGgubxGwUOMuNlNGs4HCzxg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E017%20Remastered%20%5B480p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E017 Remastered [480p BD x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OATZMlTTJyxPGuU83cSo22dZ3aWIpI7pIweWbZMQ0dlfiRef832CBEf6O6Z1S-aMRTq-NKFe3P5qO99Do5dn5w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E017%20Remastered%20%5B720p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E017 Remastered [720p BD x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gnP8SwIA9vV5TbPg_tfZOiC55xeCZN1iHdPz2BYZYsNgjawMzz6LnLKqH_0EVFyfItFEPMS86u5rkh5QXwhmlA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E017%20Remastered%20%5B1080p%20BD%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E017 Remastered [1080p BD x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x18": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Ig2QuO2G5ou52MlqaYhftkXcXohSm2pbzlw-V9DpeDaANZLWj-OKlRrNr7kj4XqZEiwSyYLEbByuPVNHIh4Ulw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E018%20Remastered%20%5B480p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E018 Remastered [480p BD x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=kIatPY1FtYmRECCj6qCyWYUcvLSXReKJyIENvDU6SM55jbLDKWhYA2tTAIR4nW2vRu5Fhm_rwzvmTVJnKsA7Tw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E018%20Remastered%20%5B720p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E018 Remastered [720p BD x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=w0xBgUdDiDMB9WSHj7shxetu8wly6f3P0PaKnl_WpYu0kXzvHKpjiiDwMzezCZo6Gmz5rQwdI3nOQmQWVjwlng&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E018%20Remastered%20%5B1080p%20BD%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E018 Remastered [1080p BD x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x19": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QzM2Gh2DxvF3vrGxA19vr7aGaYLWYaGk8amAkml-jto3iR2pdNlJ4qPPf0oRTzEOE5GrRLmF3-89y3aNXoSRzg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E019%20Remastered%20%5B480p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E019 Remastered [480p BD x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=atwBLSD2N5636HWxVMpxRX4HVTKylXHxNxInK0YNdM5ocI0J3Fb5lJTF6yNEb6EhQGH3DDPu8vCjWnJflcRQXA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E019%20Remastered%20%5B720p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E019 Remastered [720p BD x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ijRbUMQ47dyRF-q5-kbMIlUezCe9fD6ck3KBvffN2iMgf8M971JgC0CkWG5RaZA34vPA31qBegGvxdeH4FDmrg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E019%20Remastered%20%5B1080p%20BD%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E019 Remastered [1080p BD x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x20": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GLE26P7bbAB819G5dEAkZJjHqfZo80K7Vr7WjYr-T3bZ-mhaoD8ITMV03R0vdndfF-FFbaplbzOa2PDwUtH61w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E020%20Remastered%20%5B480p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E020 Remastered [480p BD x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FAExFUZpHsm6UNdAZ4Rcz8_NlUhzQCX4AGVHOPpuZCCG6qkYg5Rr4WCpJa7a1uofMzFtEd01oaKvDqKMTsZJUA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E020%20Remastered%20%5B720p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E020 Remastered [720p BD x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Zj_MrzcmmD8-xcch9E2uqmS8465-TZuOhwSD5lXIKvzCOXFzyuWlj138jAAQFfiO5A6igItAHJVwdSBXnwDOcw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E020%20Remastered%20%5B1080p%20BD%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E020 Remastered [1080p BD x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x21": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=T7C_Byi-vbi8CjUfXlKitKUY4fzCuwYJEnDPTbJ97R5fhnRPavDB2gal2SYziX2OfpmYBBzITK2PlH05HtDuVg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E021%20Remastered%20%5B480p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E021 Remastered [480p BD x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=to8fqIV4RpTPISbonZXP_06MxlliVKENCMJEAyVPvDChsSn4ygLaBg8J4guqplGZFG93jVhkC008M0szEKfDPw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E021%20Remastered%20%5B720p%20BD%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E021 Remastered [720p BD x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WBKZRW-jetr0OS1rVGwUEpQDaBlICqoS9DHwZvXYzJGX98Lq8jYe4Slp4snPwCEhNES5G5rlT7Gf6c2gpqfmCg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E021%20Remastered%20%5B1080p%20BD%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E021 Remastered [1080p BD x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x22": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bN7e6g7Iw9fe7fnj_wlo4SmXX_pcs9ARuVMYAJnS3NVK-hg1HNa4VP4jOghr33l5u5CnkXbEkSxSxEXNIYtliQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E022%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E022 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pxdhHcYOp4dQwqPDWvXwoEdm1jT0n8yFZSL8wQR5yznwyH2QjSduV3MpXeEJVwA7eV8trDRiutbNGcXNYsH6Xg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E022%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E022 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7rRls1myrhigaGZK5FM5F0n6Y4uTc01eLEy7TMAXB5JVEtFRYTg8-joVWegmzfV1zzXZnJMFFaDWs-YGUpAF7A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E022%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E022 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x23": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AgLjtZH5zDPQj62XJCmghIQ1l0EIUyQKMzhmZOx3nj3RZqO_VwTOKLYHEsx2txA6C3EIedKevlqRm1nEi-YHog&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E023%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E023 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZnH22lZT_nh7hbCIlLQQyV642C2IeEEFGQxvuQepecLes9G5aoWSveqEAzuWI8RE096Q36MFnQe558nfjA9puA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E023%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E023 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RuOqnlrmyQbG4j472fdJTQUceGrNFJz4MbYhTvQ9zbylJOHfbCzsYsGkY9iLdnYXSCLC8bZv9aFtGWgl2DhugQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E023%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E023 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x24": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ro-lVBRc2vd6nHWBMueTcDRhujAVrFnySQEa4O5QhF95aAyctDe8VcXhG1WonGglcrFTIzQS1BvLPtE8LoIHeQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E024%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E024 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XequA7XR4U7Br2zE2yjLsJnOfw7inhTeGspMxbAMjhDoDiZalMSIR8wgCdHAEd2t6QTYwFPe1p6Jm57Mrro-Vg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E024%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E024 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PTcDSuzzZ9x5Tc6cTY1iA9Q51G0CWtwuslSdCOxamf2zd3bPE1xeJ8T0QKnw6KMmjzyyqQGXCgQtqfAe45jT1w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E024%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E024 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x25": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9AWEAbegB2qpueDtWAPSMZu7HPRfls5NWG6BBEfEcpBzbwiwudZZKpKW24oaVxvoGDuHE-08XDenYTk7jSnOfQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E025%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E025 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=eBX3_719lrW0BzomvkzZe1EaTbheHlCzsT-KKJ5eyoYVpd-Svx2VQ7UvB4MwOKZjlqeJ7GpxK7qDv6aqYkhfVA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E025%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E025 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=egVVAOFV1DDZeBonKNPNREnIWPd09bnt6ljnxgriXKLCf_v3IYtrZw8wqze-E5F0mS4dk1xv0SiIe6tWjDFHTA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E025%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E025 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x26": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8kLjWm1-5PSg3ZMRft8TT4HEYxqVS-KXftZ7V_fv4mOWmyCgxN5Po3uGGqNOYgr-Q73oEIF4ap5jGRP3lAK0uQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E026%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E026 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JWmK2lMrDQ4RaeHYmjCjk-yvux24JWDs2126huMctTsPG9l4Q6njgVAjYxGL3Wp94kjQ9P8YpaxSqQrKF9noMw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E026%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E026 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1undHd8-CZJiehfOyrVv00G7Ttvpkj9XddZtoZCuVYzcRHYM2sfFi5kc3MRdIU6AU80mPJ2eHzcdLURFKKxnyQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E026%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E026 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x27": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wnoMj5TYwORoG_-sH23n30a6UdLu_U6aHq2GQlPd3ajz_LexZ6NN_OiwkmkwlqLbM0qX8-wryR0DQxrrLSLKlQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E027%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E027 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=YCgbSSvlfHkDyiAEQubGsIhewf9nAG1tKMWO0G4ZcGoXZvEg4EjKCiJ3QPdlw-FoL7mRCdK7t5CE8N7wO0stnw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E027%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E027 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZQJUdWxBxGHAOD5cAzvi3KlVedAhMHugItZ0le1lZcKNlHQyybDS4ozK_ocdt6a317zAQOalS6irWRgf0Y_XCg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E027%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E027 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x28": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=33mKUJ6WxyxoUx4EXnuGl_jSQF30OazXzOCn3vODpxZCJjCtk5mSPTRw8Nlz1JGhOYFpN0A93W5nsFqBw4Zyew&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E028%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E028 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pjPS0btwr3gy19d9LQQjjD46uR71bEdV9w-S2OjGMJ2b7rIa1w0Z2todkbOaiELm8A_qKVWuMUvXOqKe3O5vtw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E028%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E028 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gCaYHatMFP81KVHU5f7tHYgRwbA0FO6HNnJO_WmI1IaY_0wNuBCTCFvbxzSIpQVKWsSCIW9M4QffUy6HnnJxPg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E028%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E028 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x29": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=DD8hXYTG4G_RTqVf5BGOAC3oBQCngo3WnmLnpJIJ6eQU35vRwzEKQaSs1qspM8xIaVkVpkVVvL87ZHcf0d7FKQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E029%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E029 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4DSNUmGcfnv_4XM2hVcgjmHZ7jljgOla-lekcucqzZuyge2nfcKuWbIiWK0AamoW5dLMerJ5EzPh9adSaCLTig&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E029%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E029 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vTnxkMt02qDuJRlUTMyb4MuSG0vFNkfs_DYk0OUFtdyIL8wtUrSblFRXtjxIKbN17bWD4-F7-o_M4OKyqPAPoA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E029%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E029 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x30": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vgTerBQZ-J_yH1jqfdueQEaMk7Xjxb7cVo44QcRwDx0LUOo9SexR3tqt9DtMueHj0HxY4iUZ6t96TbtYf0p18Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E030%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E030 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=myDWBs_dZLJabFVdpIweNlDM922Ht4AQ9crPvtc-4t2BpVo1pgaA1qbo3TfLFBZEe3ZEysvvpemvf0F7C4VamQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E030%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E030 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ESpva44UmVN9_ylSPYpKpj0uFmp_PvuJfJLdzWaQKIcgWIrk00LifNcSXJ5OpC5XW9p0p9rnYrHXGut_BbipYg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E030%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E030 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x31": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ExLNLbg9PVwphz8oTk129EcSAahFUHXFYl-FVEAX64eLpFkR-piU1eBUQE63XEBj3nQsXOdf5R0AAP1D1ZvRAA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E031%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E031 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=We1qY5E1hpr7wWg0eovdtsJjrOcK5cuqYj0_0bt0LR71NIf6yYXUmduhcqjgM04mAlDrakyHmv72xWlZOW2mPw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E031%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E031 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XevWzRMrXNk1Op7dI3SqR4IQprMwShYcrHxT0zrM3-o5UPRJqKftUrfXKapzIWI_AWMB7AVk6dV5H_Q_z2Epbg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E031%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E031 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x32": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zBXRn4T4bLXXKErTpj4DEfgbDp0Y5HspUmH4NA-kws2HtwNTXL0tuZhvAA2BcP5mop_Tsdw6JTEW7kygqXRqbg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E032%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E032 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=g9s9I04ggRUBVepln6oirSZGV_bLfsyuCUvEmfk_Q2oadbXCCXWjSAQ8rE4JBdHHEX5y1VDxUr97fPkvf-dhPA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E032%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E032 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WGqXUmQLl0CXrvbmH7MEM2kXn1N7NlA6aICjVnl61tKGNilB37SlDE-kj3fJC7i65ePTrRGVBDA22XF2u_BeYA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E032%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E032 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x33": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pXXCqK_AifZjE0u-IXRU1b9JF1Tvk-iHMciY98tXVFLdiqj38VV3OXRAMQGW4J6QWmR10xo6kA-pADeBRo5O1w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E033%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E033 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=p-KUm8bFjDA4YgGngsI1h6x_WjJXdIXAALZrqkVc0RvSZuf8DhLvVwsGGgW-O0PA6bKgfu3QjAbk2N-LqjqroA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E033%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E033 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rP_u0QDIvdnXlESWqW21l4lMiq8BCpvv8w4l5k1qJmMcjHeAUEp9nUIi1RQB3X7Upa7gWyJk-E9PEVR5OfWMjg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E033%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E033 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x34": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3peTfZsuOEqD5-vLy8nJYana-qESq1KZC4DGU1zr4Q3VhRdRLZug0L6oT5mi0QKfVYJAGQ0spLsSHUo_OKMpWQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E034%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E034 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Bs5iiqe7uriZWS9iJF7Y7khZNkwMx-F0QyZ5R-yaF2TGrmy6UnG8URE9HOSW0cY_KtGWkwniewTOduxkpeaCow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E034%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E034 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Xohk6gSupLkgdGJbApBzHjYBVkH0sp-9wB9VI3Pv9dxEPP8-rZRMCa7QzEQ7_F0yQLbA0yMiAtYlHjBcgBYK4A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E034%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E034 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x35": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=s3UtilP-zgTgFm2nxSC5EVDS8orOFNZ1oDGy-8jAskFTV-16nNvuRQPNe9KsS1bcUxJ8O7D5gTWsS1yp1J4raA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E035%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E035 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jPL4gM9k1E0H8abIf1CbT2Zkgz_WSqS58eji96pTqO8R_DlEYSUpz1Iuj7ccIya7LLZPwIWD5XhdZrIvbDOFdA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E035%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E035 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ej2nicAMj_cgl_WiDMv1PfoPf0rOBVPR2f5KFF3ErLQsfMhL_c7BbvsXLJPiaFWkF9CH4RjvvxikMg6LyU6QyQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E035%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E035 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x36": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-3UkYDYuP-JdlgL_kiPnO84SQ62mAzCSZzP9sQ1B9SQRp7jaOVzwkNiDJDsJWwGh9SQXY-76d5bVxlQOxafiHQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E036%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E036 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HQ5a_5_VrNRndzXTP_Cl8cmzFwL2ZkmtNXr4VJOnhLsDGz8R1lLlraQL6I4UGTmss5G2JrwWWrhYst1z18lfHw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E036%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E036 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TXIDY7EfIZuPt4txXoD889LQxalvvafOiNUwL_oNV0w5LLtsZ3ssXq271xFwPw3ibk0FUdHZWsuK08c6r3PKcA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E036%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E036 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x37": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ooTg_IxHR97STK0NFVEZiK2Obx9zQoI8WTDyW72RPDwygiyFNLF0rzBhUvQ7L35JOLN_Y_YzrYOcmodjOein8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E037%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E037 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fQASGZpqMc-e_PUS6dBOCm8QGfFLyCrAEPD11hAPoSzUFQ6jp_irBi2UUhKiITY9MftnxX3-SDerfzMmftfFNg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E037%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E037 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=F0Gok28uXECakUjsVQXHtmaCNHx4iCW1bKIkZRo_annvyUa23iWhADaIm7aXtQvLRI0MVyPC-uGNzzgzfXTXVw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E037%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E037 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x38": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jSq-d-efBHR1OYk70tcIafty9Up_6ixaklXIhB4yDgmFcAfBPp5YFDZrNSQTuUiKNjj67AS5gfnsU3ff_F930w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E038%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E038 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=i1ssACOUEqjxZ4tObWpA8gPf2Bh0PVQj5jRT7BxJh-r7fPynknyK_ljx6y3am2zpZtH5_vI6iol_LEt8yAoWFw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E038%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E038 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LFYsWLLA5KhuhDEi23n_ClLo1UOb1LQujeD2WSx2wQSBEHa0ACwSQgKfNcRKpumy_HsY0cIsXPu7Kd0VNYaadQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E038%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E038 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x39": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=up6MVDepigTN8KQiHQB-XWrufyaXyJVzq8Mhy2nBALrpGgbnri_V3qNOOcYrpPp1g-d3rbUtlWinD0Zkch6bWw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E039%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E039 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sEL0n-QdfN8kgmvi33TEkYZMUIo88e2Zo845ijQadHF3brlj1KKU33pSbBVG6Seot7hG86l1Vyxk6QkKwa7y2w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E039%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E039 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sKNhTRBFeMziFCAZRL47nxm5sYibIKK3igu5gg98Awm60fbbxF62ta9OVCgV2xQA_zv92v5XbZbHzoceaBTp8A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E039%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E039 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x40": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gOxlpX0k6241RbmiEdn_qoQQimovr2JW0wRiyxfyTXZI19Bi7y-QexFO7hfjNqUg_mnlaiyh8kefZZoDg-z_Iw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E040%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E040 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_lPdfac66wXz5AXcWIBK7djzjCaxn1JyyFGBLEXh4FxxU3Ht9EX9KXKcA_eARXHu7Dzf4M4JPHvObeOmyS7N7A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E040%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E040 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=o6o5FYK4ivWoFC3GTBPXNkWyMu210c65svZqlR1gnSnbZqUT8D3ivop59oAoLdEdvUKle6FB_5lrIcuBK5Ir_Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E040%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E040 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x41": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=swBaWHtWKY_BPhJeEfRabBKWDDVMlthOvQtuw0_IPVZ0-NI8WEHAWbM2Qqa9NjDUe-RrZkcrDwOG6IdNpAG89g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E041%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E041 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IJtkNU2Bp11ZT57uzPYOnsogU9WbJmk6TWqsYNUTGdlFsD1kQUsH01xzPEuMbCmClgBuzBMT4G7SWBMpb4KD8g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E041%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E041 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3gv6d7mbalD3GK7jdPGs8CVYvSrTnPcBSfcrf-qDzR60T_B3vxqExZB2WyHEDeS0QENlK6iWqBFZlTZzLQNpRQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E041%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E041 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x42": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dI7XC31AO4ozEEF-32gMuxRmRy0DBO-rs28akTV0aUR-BheTY1vnGHs_XQJAd7zGj5PPZBJPv7m6NLaLa8M3og&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E042%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E042 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=H0urpRfyyF13iiMVqlmimGCfvI7cJ32H9avOeh1eQheWuFAOhBqAQhhNx-DwSr63HkUruCH4yOhYcqzZm4YCjQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E042%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E042 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=M20U_odJ1V9zjyaCwGfBnZpThlzpo2P-qlPLMrn4vHTg_xbFb1CvW5PH-Y-e35cX1q5Ym0fFhILc6hwRLcCsiQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E042%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E042 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x43": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vu-dlsaWKxvEriOnUzZ6HcNXpU6oIfWKWfzx83gHxP75JZuUnZFyIRiEfbJXxPZ4Lgrm6MJv3q5W3G9Zo-IQAA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E043%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E043 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3L5PNaFowdQXyYhWCTRi6glH1-4BLiXu8z-FeIoGV0seR8L_hgp0aSit-wQyrNuJgaM3qNevFj0-oAegZfol3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E043%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E043 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pvmK5IZcYjsrmWRg5Z-WXKDn6HCKYEb0rdaDDHv5OMTlWfgNVVX1PDbKaS2T0j23sa8-6a3Wc5WBu97Lbz8ORg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E043%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E043 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x44": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=o9IjEVdhzvR9GkNurMH0mzjTkHI1YZCJtaMcxUQ_MOJ03AhvyBWHCtFnLFHxe4DJehqdA3KfRzOOSJuRo_xgqw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E044%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E044 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iVwX5Kay0YTugbxR3YVhc-MEqMzHgkppsKmC2d5StNqOMaLHQ9vFsBljbL78wjIYR-oI0Bc9jz8BA4cJYoM2-A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E044%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E044 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=n3jTmY_z4tT0ST06iD4d_qzyornbBFX5pJXJRJLTZS7wF4_X1E9u-RVV8S9cheUhwfvZIyZMBte0OWg03qkyRw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E044%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E044 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x45": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=x8iz4BSAhdDt1gEbGCEcbMjadkwSbsVL4cD-SunP056KSPsemUR2z2eYHHcu6Q6ggDRJtx_u7-hJhY1q9WREJA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E045%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E045 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=I2ZjCN1wfi7K2DALmgVm7DkeN3RtnThZRzyR-kxUmMjxd_k9mqyGHQAa1GeE0kJfEPlL1CaXTJjhdC6g2E7FvQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E045%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E045 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VtNc7k3ysV8QPNzn0Go-GhqQbLlg6RCQ9jWtwtmkT8YHkUuz5MshD0o0cRavxZUH7e-p9f4iqNF1jEvIFNJbkw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E045%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E045 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x46": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NfAcsMEfFMtleAtasNiPftJRgv9Fvdxv7Db9u41GWJ5Ttoca7jfFFJnVK5ob_Xo6lhYDRf_5hklPFXtAERqYbA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E046%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E046 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MxCxFrVTCDLUvspugVMRuBbyryJYjldRJQ-i6VzxlY7GBJqCiyQFpx8F9P63eRimOAZK0Fp_iwDd6Zyf_zvD8A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E046%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E046 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KEL5B-NbzzvyehHYF279t8vxqFZmm6rP2oXFrT7SKCQoRAhyn83eCZFuz14XGI8sgZyfyM58Pxdslbaf4TvHnA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E046%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E046 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x47": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vO122eergj7YD0RPgBYsBOBTcxNiPXpJalurAEHJzVZhm6fS_XxqtCMJ3gT2pOuEAHnrE0c0scGeqx0Qb42TgA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E047%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E047 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6XBni10eUS10EavX4o0PCRI0K2NioHkJQWcKc4pwWFo7rvZ7Q4ub0jby9psvRUyxGV3HbAEUBxX_Sav9pdhrbQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E047%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E047 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sK9Y8tVky5RngotoA7gvsQ6bI0xjCGPctGMH5FMARSfSzfHu7l8pkfWwJbAkR-05cnYMg_dZ5bsJFksD9inLYw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E047%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E047 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x48": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0dxkU_vnmYFolXtK7VBw-vSgMl2L2Ja_ngMXTmMXwqYTgQJDnoNpSJdGZhTsFd8SaPk7--IFlWIO07yjsNqVPA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E048%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E048 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wJpVsc1VlTrXsdVbkvSD3B5qCXm7ps1HX-pkDGfuVsgarRVL-F5fn-7lY1Nb1pwSQP0jNl05NTeJiy_NMYqRmw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E048%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E048 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MqLK-U2aQn-zPIFdZeJ9-xii-ZRhBpjX4V1KxuPXyXeSGh8XigizOUwltoyHAX-x-DjPAzeKF7x2dC4OX4KI7w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E048%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E048 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x49": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QSbEtbLx1czQGYNrWW1iSSn6iEN215scxn_Yy-l7At-wDZ8edO1Jh8X8K3ELnx-zyDeeoQrWcbGRKNQqYL5U4g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E049%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E049 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=g4TO3YBo-FHtYnz2Q260JRyzprcMaLa5fytdy8jcOT8nvMgUS_epiHxhr0lq9ARPCEIHzmZ_4quCVC6iis8yHg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E049%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E049 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xQ8scCeN27LlfNsQ_19LzTy_WY21S54Q3-JZxQ-KhYadACBZqduI7ck5x1hlRAwJW-j6hRL1VQOZLufeyLQt3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E049%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E049 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x50": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=i0-GvuWd4hVx4oEHfMQR_5510AgQQf_QoJhYD_la3K4JndyFXOS_tJK9r8V519_g_BOs_myYvtpcQNTSr0mPXA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E050%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E050 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_ANqqQLzPES6k0u_sCvnmq4V2Tqr5YsfjClIKnxLpILZLmo1LTxfY3LICkkDUBiOowPBEWkkroUReA5jfihxXA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E050%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E050 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=YAXMH-055caSiWsEbYVF3jDxfWZSM8h7mfwBcHaqwWCuzhvLGh1ZJWGtQvm8fWtYGNoYPKhDeFoOgmIISRrV6w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E050%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E050 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x51": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nlclpXP-DD1tQeH4hbot_QFDxMc62Vtl4Ph4rq2fwWbZv7Veh-fCdQXQTm5OsWEyeIa98Y8I_rxJ5VvXfD1l8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E051%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E051 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Pi2ErccCeXv2YtXTmXz1RVABqP71AqQ9VkhaMem9-vFHZrmjWhblLCmwa53fHjYut1C3MSy73t-CFPCG_jm_nw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E051%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E051 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cWe7Cq_bmOa5pf1VRhnr2S7dzYXebyAheL6BbRe_C45xsEwiRVR6tqDPA9sA4VNkDndglJ7CUjmd7FNCwYacYg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E051%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E051 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x52": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-WJ9ArebQXN_edWWZ7SbV6Bcg-12lUy9Us4bEh-8AeOYGReepgL6qJuTVH6YY3pvGXK9Y5kaEm0I9LFL-tEDbw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E052%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E052 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TLX_hNLr_287RWmAedpuuKjvYP2M-DNxl01bvPgFcDB76plaUPR1klsm4mQf1_L0kK_nSTqTgR7mcxjWpwc_DA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E052%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E052 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=O-_vvgM4SrBkohZIhLxqxVvOZB6TNPthdx5KB1UZcay-LDiUKksWqJkq0G8kAZeqUh19tE5BWen_Cc6lIPy8AA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E052%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E052 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x53": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LkbW4k7lKvi2lndu9mThxvKIJQP-d5dDFcAf5y3YZVC0T6OdPvueGrnjeVxyyDsGaT3vjaXKkMdRSCWd_VYIzQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E053%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E053 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SvIbODJiTHYco36RXz_egt2SB82fTPWxdg72QbTHmnk1NR0DzyJghRH2F4Fl6dC425QNvzxmfAmzRmxJLwRPrA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E053%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E053 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3n2jQV__YMixNIsvjTHEJGkSLxqSRaSfyNiaVWwJZDzCq3-Sasm2mN4YNxX-CCYBAkqz8T3W_9D0LnT9mjjn-A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E053%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E053 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x54": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7HN6mVrmcE04q1S3U4PIcixWwi1dHTczPP5MW2Z8ERrrm0OsTuu4CdqUF1krz3sZeZXzMJw9Nr0REc80Z6UsBA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E054%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E054 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=owRtvCBWiZtzylPqqVxEAAJJ5KcKkIVi-R0IDdiZ6oVzx5yeOL0Y8VApoYwRWisMcG2idxa3ByZxkxCGxp-Z5Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E054%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E054 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BTMVaA4N-TbH5TXNMay55P1URWGOpPxbMkBGsy-cit83VNPOvFWqLE9HhlmjtrUlJ5VOd9wEcOq9Is-K8hchOA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E054%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E054 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x55": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2IxJz8EZrEnPozzrSDXFLupsG5otBAO1UZsjZ6x1lI9-xrPNm80F7Bqmoer8zmmYIFHtOQqdGEJYzGyoY1pgoA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E055%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E055 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=kWgUPbazY4mazPwwd1-ro9N0f-ThB5lrqc7gsYUvEzj01CMdu3VlXfnUlecKK2IbGpRQqAovGyTduUSk1dfp_Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E055%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E055 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZmjUtIGBXa22zQWSBkJw5SybG60IYghm02PRmKZTn2pbRE62DuiaS0Pr1QVzgd2AJMX-bz7f876THLOL7bPeyA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E055%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E055 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x56": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AFbH63jABCYsJuTuO7Abw6j0oo-crytl3c7BX_-5DsQgOLKfzchqbF4dATr1t42G5mS8r-Cchp-Qjfyeuvznlg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E056%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E056 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zbvOqeH_f7Le97xkGXxlWPjOZDWN_PWYMtNlgK79t8wJCH9IBP1ibHUFqeVyQb4AoALW_z1MF1dhtSNL7B_q7A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E056%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E056 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PhkJFa74Icow3EQZ-PLIxz_keUQ4iUoUKAui59phHn7GhlR3qz03lgtrTsqGHSrYU02eKwH44bH4staWFoWpCw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E056%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E056 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x57": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wBB_GjzB2KVBRZG1yitKBW-c0ZQT4JiHw0A1oC4v8IdD4ZwohwMDXDVl9usYKCiMSLtJqOkXCFk5yoP0aJgwvw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E057%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E057 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0WwVsqEEmyjcYwBJ2vMRrXis0ANXr4SjPGgSI7fF7ZWoREX_JEs8tJ8Om97UdUchDF83Ocs0W0COa-7IWp_1Ag&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E057%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E057 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=T9aU5_0aLTicdDt2KN1uYj4NhVqDQcp-24nyjlJ8Q_h91yo0WATyJyp8KzkWURVR3VNv0GsQzz8rsPRmKGU8mA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E057%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E057 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x58": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Urd-XHSDi89IoIzRmEAcV8bGRVTXtsjd7tw6YqpHwz3KaMshbpXHKrIjXKHZ4z21mJm2hAFcNJJ8Kx6Yy9sUJA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E058%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E058 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vVBvYIpyXMZZF2Lvw3IbZ71EhCAKLvrezoUbARWvkITjsXREAvq0ka5IbYtauwMZTFaxzhnNdr5lPvtUWNm_0w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E058%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E058 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cu8SiT0VoDZLPi2qeIyMKCqBXmzoPKeyDAcokBqxpU0kY_QtqV_M1VJkD9VsKV8sd_6yRWT-u6317Sx8hfW_Rg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E058%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E058 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x59": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pSP14nudgdusTfsUVimCzibpsj2g_x5jroHiQj1JDx96gOBVnwtnFbMrhh_86vMq2EC4I25U9fgVwLbpkcSXIQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E059%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E059 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=frx5W9_7gGUvdxhOjg4Bp7FeBkFZ9DxVOGAI73TA2AclMrtJREiW5f54h7BcjwxwO_XH9mrO_D8CEIJ1On_0FA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E059%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E059 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=w41h-8eHWSz2GTOtR-k8L0hSEWrrBJD5rynHSJZIqnWCDH1eJ70Af2wtxOwHN17qoGDEcMsne_FZFLs_QAZ3Gg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E059%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E059 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x60": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=k4lKT8cGOGsT9qrXqGcKxHZaGTe640gOnEYUQbNmyRreXpo38CxmCCaX05b77Kctxjp7MBPne8V0TaNmqGMj7A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E060%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E060 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NtPyfsTVniaK7rFvQChG5ZLRk1iC42rMn-DHPtc-GWygAHUw2gZlACjLbjKCjYikzfIWmrS8yLVrS4yKbsW3tw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E060%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E060 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cSF39wfzJ0zT9pyqLZ0YnkkxbdjFsJs43eKH86hgaif7uqNTU8GNNcSoDb65i2SgqodZFePD5sKn1zKUagrPpQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E060%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E060 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},
"one-piece-1x61": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8w7RO_X3_0HQNRoS92kIXfXUKtKUferPQRyxr2kmmgZNjUOBB9j75OlZpTX2URmlIQf9Eog3v885rYmYFfSybA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E061%20Remastered%20%5B480p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E061 Remastered [480p x264 Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ugvJoaKlo_EMsogNrVbQ5AVMa-9lwyUrmQh3UKZu5IHGVYz-ORSTrLIFe3em6h6UX6UtAM6QX30gHoqaC9pZDw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E061%20Remastered%20%5B720p%20x264%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E061 Remastered [720p x264 Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ABL7PW37YJIben0NZzQnqFn7ttOl-kT5_4sGjTur_03Twra-zPMkImW6IgadJ8aXVcDwHgwRAcQvHp1k7zg9YQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20One%20Piece%20S01E061%20Remastered%20%5B1080p%20x265%2010bit%20Multi%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] One Piece S01E061 Remastered [1080p x265 10bit Multi Audio] ESub.mkv" }
  }
},

"skeleton-knight-in-another-world-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Q2s0m9VMir9mo0ZEIaxLt0T-Us43FhcWCsL9ltdt3zPWd-iQstQ8m3bMRP8BA2NIA1zpMZQKUBidjLVSQwbygQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E01%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E01 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Plc_a2zNofn8jNZpoG7Eh2GVhE3iaspWwPZUA9RGVPm_jr-6pQrhyVvzKmJ4bozUZdIEh0qxmAqIv99b25tUhw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E01%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E01 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e2TYgu77f8NUPyCINV3SkZye0mxCL1BDx1BIZMgySLSY7eirnwANR1STBM6sGYUFp-SVdXcX8DT_1f-7m48Phg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E01%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E01 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=DTPobBUsoFWkbUsNyKGTZ-Nt_VWqQrNqC34sXU-hlUW-CMaLvA--OXDq1tJ1KQBFu6gafFGjGoSrlP8uSrx3SA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E02%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E02 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-taSLbhyOhIvRQrBvaQNGIbh2UU_QDVYhFnIWiZWHC_9qSKEz0pwnMpVqge70lj4nk3gBbupJ3HH-Keep_94ug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E02%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E02 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MASr56iMs4eLfuZZh0itz4gaUwYAPQjDhBC_Jihxx8EXif25JbnC8EJcofBjOGRztr6II5XdZLu0cbg-1U-Jkw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E02%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E02 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=D5uM7ate9q34A4wHK4MFMTntnyBvgBttX2tUjb58dr-H12WvpcSeH7XqfZ2h44ae2m9tdTZw8kXUKmBQp2nLBg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E03%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E03 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WcYusuq7MuOkZKNpdpLSWJaWPbkSgpFV3TQgU5UbISblDSY7wjerNdB3WWFe3OPal8cpfFg43nYlheSGG_YOsA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E03%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E03 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NzB9B9f1MSdDdtRHHV3mvfljBlqFyQNC3onEKx3FTB3FycI8d5H5mG7-UZjslpngVB5T2P-jwCkIOfVJwDM63w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E03%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E03 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AMB2VuXZEJlpDCqtKCogy548A8gtT-Hcu224djPW_KhzT0455ShYzlFItR6b01-u9OQkxAoY3jIyeHVKofA63w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E04%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E04 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dNdZ8RUBSLBE7DWPyaXpirmpDLF5Wg_rknJ8WddvCJ8PHKtvi8SkfUq4aPLlrv-6LbHW23k7ecg6AWhmLKc00Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E04%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E04 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JYJjnymg4kjxN67Qf6cpxIFSzD9CMMlj0y6Sy36RQqp2r61skLOD1HkPbEzeetjJ2mocFeZMNtC241qjey0hgQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E04%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E04 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qNyRc4f7fKaADApCJLgXQI-cHX9VWA4-um1Tbs6cWp11CH2IeSweMMWCBeW3bFc3GcWCwfzMUnlQUNguDPzn0A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E05%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E05 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rh5S3PLM09eIdhv9nTtbo4UuXjSfY3ClDA0p29DSEHSFMOJqWqGJxDbC5OR7hIURAP8JFPxJ7ILUuru3VusLyg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E05%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E05 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=01yN_p6lCiXyrL_ZgWEMNXDlh00mckpPpc9Nn7k6PlrtMMl2talHRiPgHFsgmpX7mnmSEJa4NJevNlqAC6eqjw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E05%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E05 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=P8wlCbBOdkTqdB-EzqUJzY467U8UDAB4AvipBGD5vCTrGWEVGlcybnB3ersFG2PKXQ4rpThfEm7-Mx2FoJLojg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E06%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E06 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=76uVx5zo5LthhtzQ80pkmpbS-z55ZZBIqxaHHjrtTtuRcNv13qLUyBrMfBghoPad8m6ShDO3V61oUZDsDKfKxg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E06%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E06 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0x1oYipUIs10pNceP0KuF1WJCqfOXU6-YIu9rlFvr0TabsJiQGzDX1py1tDqMqsRSGNmt8w4GwTZtGrf5Ayx9g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E06%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E06 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BVFEWq_18qgya1WhTDMU6k-CmwV4CpFBd0pep5dCVOgdsZuq4WoMMs4WT6QO-dBdjNBW-BxYEoz1jJRs5YgzLg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E07%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E07 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=G23ruqR0KceQiw5LP2aKECZ4rUCY5Y5yUP1__cGo4J81S2da2VP6iqXgOwazuHC7AfzLeXcMNO6iWq1ASImvJw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E07%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E07 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9UWzPk_4WrGBuLZqN7-d813EmEut-Qaw25lZsTdgV4cHbFlV4SxV_B7gOkvGMTTyrFUhZmWyWKGidan9TAXAnQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E07%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E07 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Od-jd-x0593GNicNPnBwED6UIr2O39Q2cE1pHPP5EuZn64JcNjOs07KI1viO9PpbLBozavKPRr0KE6ZFx_EUug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E08%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E08 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JY5IkF9SgsGAwqFRQbcSgf2sju84_VBJb0hHSXxNmsBDtHQXdHpGcgDybngLXtrGJPrJ0-Wf5BqrpiamlFOUzw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E08%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E08 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SabL0oAbB4bAh_O73yncah8iqpXZX5Sd_wFuDGtbwHV5NBJvS3aR2H6upG1Ptr--AZIUBgGm-bFV0Vd3wz2LEg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E08%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E08 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EtUD-8_O4P3DJCWsmaMRbo9B0bbfK7u_T-_eHZ7AsmxsQ_U5USDv0BaYHPwDFoWr_kFoOO0zqPQya9txjdIrsw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E09%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E09 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Pm6rcDCb945UyLodF964Z6QINmmqRiRWoeJloTpOMCbc-Chh5_nCFj6lZtHRDgvyfLbX5Ltx-BRqlMLjBh8WwA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E09%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E09 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9FBnkLuwwMbGyey9ZIKmOPrNb1RBPMkCqDGXCestgEW7mxxG9imfZr4TyOV7g1InYezYIl88f3rLiPYuARouWQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E09%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E09 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7cnf6z1dDOw-f1VZipqx3mhcB6QP-AqjjjBL5dFmJaMX9rL8ZU-hxgpNlzfMMhlyl_06Yx5lif6DkXS1ot0f-Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E10%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E10 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=v8uwcahRA_f2qer1tUCjSoTPS4w1uxxgi2T2pU-UnJKjlcIdsHRuFpBjj96XkI17cGOmqImhYSfxRAaqDNU8Kw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E10%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E10 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fiIME7kwGIgtifI3ujV9fd0lklYgsuPRhphuP-soLzN9VDV2CmE1nAwLDvfOa0YJTnacu6kinQUsvQetUBF4nQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E10%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E10 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0vLKaQWRQw1j27GzgsAHcP43IKP9P8IUDH51Xq4SwOF6Pna0J7D8HhpHwtLdC12GyEiZ1kGrJp1a3nMi-cTxUQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E11%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E11 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0b5zqtHwjdMITzr_lyqP-TGeog9MgZL0zWN3-Y0NhtQiam-qOa0VNy2eDH7qVfBxSZDHpinS_mKNi9No0_bRPQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E11%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E11 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RvwrOIDJwoBhqoh0y_tI3b7uUd33D189F0Tt3Bb7qEVXSDkS31tS_bdhRtwtSRRvg8DjTGyrtTgYvwg9lMupng&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E11%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E11 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},
"skeleton-knight-in-another-world-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qYEohy7fdrsd7usF6GPQjuVmLaupSmqRGsKki19VUTnfYah8EIk-GVVEcFyjQojv-aTF6_4SRvuu3RDlD-g-Eg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E12%20480p%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E12 480p BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uf73ImETjDn5Ze0oM8KUbM4tpIyXLK98ILO7dho79rzqethLskLLXVzbChOg_9k1OKeaoxx9OUxmqgDrhoZBRw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E12%20720p%20HD%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E12 720p HD BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3SauG8jNsJoEc1ziRr0T9uHx5XEDHOPUC0FZp6QT19vCfGgursXUkP7hFBIcy14POQFAIlIt7fzOiHi6p_di1g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Skeleton%20Knight%20in%20Another%20World%20S01E12%201080p%20HEVC%2010bit%20BDRip%20%5BHindi-Eng-Jap%5D%20ESub%20Uncut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Skeleton Knight in Another World S01E12 1080p HEVC 10bit BDRip [Hindi-Eng-Jap] ESub Uncut.mkv" }
  }
},

"karna-the-guardian-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NDfyGy0TZ4-C7InTi2qKL1QeQq-GtKePR5yMUff1rdbr8k4MtkTh7WELF5aGJ_lznszy7ivYfAO6c4RrY0xd0A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E01 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vGRwzBa0nFNegtTG_KTpUtcXvD7YyEPEzbjo0CjqqGWaSDv9ycswUkRhCxQZxkKTY5Tig4Ba2qmn5VF3bmVWsQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E01 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HTHME8tfNrJOX_tQwtWWb_kpKzhqOC3JTIBRIGFDZ0J4bEIGfLpQrsUQH2gZq0EnMETZuLpkQ4QzN6Gmzrh9RA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E01 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=x3rOZ5srhBT_bLZrp79-STdLta9abRFHz5XZl8sVMWY3JkfJV-BwgA6smIOHTVAIy91Moyq7tAPWCc2Hr4Zdgw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E02 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bFhWQfrFeAREabCwD056jA3OgQ8hBuaVKnBuYfEtYU6pI3vkYE89m61bJanzvvlfYeG8JHYp9Hr8LrQE26qYGA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E02 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0srxcG1k2yMmw3GBF9dhlA0ryQvxT5Y3QBulHuzbug9AXa0lHcx_lWw-6e43vI_6X8AAPyRsK_6ERhQEOAiiVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E02 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cDtKthj9XcE-pgXUDFhJufTX0xNzdDMJH2xxf0ZQpxWzlke6RPACzoqKuN4jn7ecL4_3bElfxTIBFnhJkS1QHA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E03 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8xe2e2kf_qjcJV6P4v-JA5Kzp5VRsA-Fc0mCtIjuLOESAsUgh3LQUXISFjSQ5RLHsUeupS9EUgIT3JPSt1OQfg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E03 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hRZZz8NPDRaowqCNiPLXClYvnMuBvBEa8-6jGWcsyb5mfuT2rxHNKaJvIEd0Gw3Oi73Y0dZEIjG_eAHoTVuVuQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E03 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6UlfmqUwDzEGDvzRWHr8aM7nUPCZMe_rvImmo_9ZCFM3OKd2vxEMwESYTyYRbUsLggkSAM67yrdpv9DWAHKi4g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E04 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0nUTnU4G9GkMRtn5gDnFCmGAtZELAqH79JcBH2KEHABBYWnX6DpxKp1SH23bw6h7CfmWCmsXbuk2inUK2fvYew&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E04 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Uq6qFplE0vQM6YWceuZke1Z52IGt2ecxtlQdFiJmqWMgg4oOzwdZSszf0YU_tHabDWBXK2ycDkUR895tUT6hAA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E04 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2N91MUtwb0z6POr75rRjyRbxj2GniwXnEX-FlSv3SxCUYfKa6CqTL4zI_B0DSBKPORL-4bxbu1-ZH8fZQLAuWA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E05 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=izQvPcFnM_cbaGYChmU1Xs9uVGjctyLF80ImaFSMxCltO5JBTI2OU8M1hqjMg8lh2gKUeamgbU3ETMV-cjURUw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E05 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Nb21r40d61z_VqT2rI1NQefuTPrfMvsHYG7PuqQNgV0Z7oo3paWi4eLxMDq7rehWoqJwhlW3KwLzSoATgySILQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E05 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=swQTF4ecvE_CWoTcTTaNSCbyw697ZfP6kDkqheFhA8ZmKOvfx3RvYKYJjZ24LjBEALsFLsbBnhcROLP4Q3JK2w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E06 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rOQhqSSowzgM-0ysFyOFZ3ELA33m-ZvqyXGjLRdmaGWcti9eOYEH9WoeZzuvqYelkFO8wb0J_JM09yqb5NakKg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E06 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2eC9gwP2d-uSd8ERTV3k2O9HFwBg2P-t9AcAy1y6XB_4EssSx8ReWDBH5RzOjjeWXPDz-PLGgRVCwDTF6rO_3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E06 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FtT3Qm2z-QGOEdfV9xnbUfYra9gAkMM8uwq9vxP_YURt9z55Porjowc8vZadt8LTVcDXbIGTZAO8KVGIx-lhiw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E07 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0Jva6-YFW-Z9aD-QDlj1TFhiCoLWJ9PNeUfBCGp7ich-npt8lUgZ8VCISZ5GcIyMrHy8yN7jkwjKo1vQnIUwIw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E07 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UD65dS2woyN1v2f9rYfIKeJBnYHmY5kUe7Ryz_6-9aZ9KerujvR8PTw62Dvm3OTfMJwhL3vioOD8HvjXe-O4ug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E07 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=peHzNaF17TqbQr0IqkVn-Lrwkj7U5i7lwRXyGPvmBmZsQwzaZ9oface1Qo2MeAjKu1N44kj-XxjgTQ_f_YeF1A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E08%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E08 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6-4AqZE1iEw1EDuPx2QJVNSNM0WO5VandXKRhZ9-01Svf_lH2yPV4PFgHhOfLnKF7QSG_IysPKYPhbMmkXOsUg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E08 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Pcimp9m3nQJe9ZbLRdoJD6FjMQUcvIQXVlY7hMTdL2X9rDLPQZ6bC-kTmyY6DeCUHTRHRPY2KHF-c_gRtg_XXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E08 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=YMA_fDJip3JQUGZ5PSHQFRFmzZtXjxJp46d6g-tR2-30-Hd_r846YKj4zWBcafvfSbCcfTG4jp36TUxhrLZv8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E09%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E09 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Y_S9SRVTMWzK-AIdzPCHI-83XyvPJkO82PvknVz8Fg2S1rcnbvPzGeWmlAB-QmosyvXT3ONnqUvx4wjQ2REeGQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E09 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=q8mAkBEVtvIAGDeNCBows9IDQ2BVQqYnlmd4_fKWyuvT8R0lwWCAIpJ7beyf8S6KlDSOFRBOfgvZEJ0rudm9Pw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E09%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E09 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3ZEqOAz4Bc9cm3GDO2Zkeyjv4Erx2oKHl_NdphoCVDyQ-sOrWgO3y_9xwGN05iXCQiEE77V_sVjEc2wgNC0e6Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E10%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E10 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_5gB5FSLz1w-VtXFzBilqM265IVR0lOhkO2f4nj-3WKGZMhknkrA2kgky_433i1Fu78eBx4AuhGUgCPr9312Gg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E10 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=eubBaLS50LZhT742B4Y75J0MEDfV59IrQ5PVhyTeqp0mCA8q8RPDMB5digDBqDyphh-7_L6ZPidNgG6kJ_QeMA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E10%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E10 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PJHdGQAfc9M0A9_GXGSkHnITHcLm7o5FLjoDGcC1Ql3ID2CFcWcShkSXFvsbxc1R0FkfYDuvjo8iXc-i6DVOnA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E11%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E11 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9nCFRyYSa1GHH54YaPvQiIcgNca-oDkjoq_GFi-YQ0RajhXDPYUqWRxixkQhVr57ktnxg2_N308IkePKpBgrzQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E11 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dnD3izfrdDejLJW14hXWer3euYkTC3v05kTENZNKAfc5NKOdaC6zg0U3pTTyV1Ecj_AUoGofr4-3vFc5H3T9yQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E11%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E11 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=H_n1IEelTFAaxCKCFPsvJwTiVpcV8zzX8ltJIVqR4mdgteq0jMxREHxkPMjA4PjNZ8EWOD4wbUPuFscVW1zE3A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E12%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E12 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=W6bBb_kCbsatlEZcFwD8C7TeMIvvZ-l1kOGf_FGSNvo8odar5aIFoLB1tPuLS1uRzztZG1BKX69K-MlANPJkKg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E12 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gVOJzkhWku2Owh7XsTLUkFb8jbr09iOEq1Dhwvaljb822BEaDeyFP6M1Ew4b-V-C7c8Bao-MH2OC8zPi0xbStw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E12%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E12 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"karna-the-guardian-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Zy5MG2HQ7yazGd7mG1C7mNVNlL4KX9pYPthus1Ah2TujrT63E1rfe3Jnyzw-m31N00Ex4C_28A6nNFORLMntxQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E13%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E13 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=387jDVtNNnZ9WaFzDpI0FuQWk-6V2hbBR80nkVMy6Xq5osxUDsQyCI9ol4GsmAnLTuddUTc8Ak9RjMgSxq7zbQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E13%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E13 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=f4edG437GOkWebNmI0aXJEp4L7n0KEj4IQRCcQmViT7ytty281U1EM3fr38SrtwitUQEXaDuC2kRcuL52uPkDA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Karna%20The%20Guardian%20S01E13%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Karna The Guardian S01E13 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e41pW7ElVcrAzLOcMjO4f4gOiR35v-sqVRVnSlgzIKfJmBzaU_gCgUNSO3xDLiXFKjGiPBq1QvYieC3yNzn5SQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E01%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E01 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hLIB8zJ1AS3axZGFb7XUl1LO7kButHKZ1jHM6mxX7_JY5pTzik-SWjlTCEl-w6dCyuKOZEtAv_H57N6EC69Yig&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E01%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E01 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ccfqkLHwjDvO_VrFTWeXzOHQmFnHok36JXJIt-T5OdUI3DVg3DnhfFPQKKK6CouKPMoajjCYq80P1vakhOnsig&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E01%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E01 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZKLsFn2QT52HkorBmgWlFFFr3PnJ8NZV4WPRuLpCFaHHxW-pBmmvI9qgTcK7osMQ_YlcIXNfHCVDsl8bXUTenQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E02%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E02 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=d9aYbbbX5G9ec7IB8vQ-Ko_pLBdnadN8yIFJ3AuoTGV_NOrnwPgJ4FsJa6IY3CT_sCgsEtAEAdDHM3G0ssMsag&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E02%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E02 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sVq86OIH6Ydc3FT62J6mmCxIHfU_HPCmjTwKEFyMF6RrrVX1ht_eU5rMgIbJUCZhcBqHX3XwO2yudtpTclff1w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E02%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E02 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=anFlZgdhobDYBuw-yro7kkrQmpiiDAwJunVSesYxdSjI27MY-MS6G7NhGd--D21cxGxVVd7LlSKENpGhIs0kZw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E03%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E03 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=93C6wlht0PR8idYEmbQlTrUKZDqxUKmU646H2-9eJkW92mycgc58NopVbc6Dpy6MEwxMOCmqhGykV61nKoKS5Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E03%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E03 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vDXQ4hLc1l8cQyNFFynvBNXP92YjyAGYwwSXvxY75AFUXBNfdt5yNnpCZOJ61dMWUmRrWqT3N6jvZDO_bLjSrA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E03%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E03 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OJnsPZbvKl4KfXXa0aCZFTGPjkWaj7Gl2uwU0U8mv1G59t7EnJXrq_VII6OeY7r2nSlDMZjhaQpn-AdYckT5-A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E04%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E04 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=q-1ZjI7XY4djoouLDcWVVplTj7hI-3bEnKJG7aZV1bmxTouPwDMKJRzoi_hIDxyhuUpMb3JngJhNtm2_yfx98g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E04%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E04 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JmszWT6U8wEo4pIBlXALiF8HiHN1S7wyFsrOZoEocAfJa9CY2SGHs0dwGjlqyqFl4f2IVzbxQNUkus_3uxR7eg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E04%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E04 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dTaZr3dISx_W-UmHLkKWt6YE3kDMG3OPybCRtFmjvvgBqpD_ECTkSt-HU_hCCGo-QDZE2MciRSlz4EhsDVMFXA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E05%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E05 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=n3gvLYlc9vkUPQv_632BtNsNIxJMJ0jeTpmGWAsY5wh70HLtZOS1a9DgbZDslnUc34nTD2CBx-203tMSongQQw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E05%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E05 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RQwqTFA7TQ43Z8Qx6xY4Nt6ZxNKvL90TMd_hePPutyXqDt2UFtnQ31a0lrl8FPDq_kGAQ4kokRgXNvbIfHf3gQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E05%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E05 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=DA03T8br129QVTBEr9wrHHfN1dXOlyVxQfGrmpfL--UYW9dFrekhh53Zj3p-kwfniO8c316pdjFaows7c9q-RQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E06%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E06 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=W8LEnnUtj51TfTwQUa0ycNqc2Q15m5DaLSZSN-QCzkMRKFaxSHMIYFgyhVsFEglZXco8Wl7FHZpXRgVH0oVhrw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E06%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E06 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3Ck5EAfq-mjTADZHXvBVdRs7G0zPcOG9-BkG08KH9Vp82QHw8MNZ82CXCAgu628WlkZj7MeB5luirklMo14W4g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E06%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E06 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fwkPL1L5j_SoItklewU1u8AQuJdk8JmEA4Kcb1VN1DYbLH2Nt0RqlEtq4kAy_AaVHG8ggclMNWed5OVwgI1EEw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E07%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E07 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9kqBcYaBqccKrd1oyi9afIqeax2x3GGOzqu8Bih1wZvHJQ36bdBYUdYBaAbSN2AvBzmaSHLYkblMO5BrLhPNbA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E07%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E07 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=y-1ZDMJlEGl0_Vj1M04lxEFP5J0jU1NNUkMu-xUFqBD1l-hJ8JD3U2m60Ax42O7SdiUx3otMWO995ekcZXPr-g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E07%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E07 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ycHo_RQZ5bypXJzWWRWg_HWknqs_PDOE36RhOSYmaefEfN-4VALJS2iEupSACSek2sLVR7r7fPtsruqXKgNrCw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E08%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E08 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=44ajhZPfse7pgqPMlFHycLJ82GEgebQaMMdDshP9uWiKiq-gVBM6SNB3HpFMo9LiYR2QecwN91efzigVbh5FSQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E08%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E08 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=28bRYM0DPGHC1ENCad2u5xPVORLabzPxv5R__TSSABFaaOfDoSYaL7QXEqv7dylTOIOpnt7hykW4QKluuJx2Zg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E08%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E08 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Tzrp-rsRCadnM6pKwpMH5DtxbEplFtEP1t2x4jecTGDRqLZofFs01SSrpLzb2neNCGCz-jGjF0xfebexZInnvA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E09%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E09 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=L-8MhrA6h-A4b4ht3Y2rNZAVYLCo_a_Y9d5ECv6KQRGSyjFMEEWKpjCrABuOSwa0MM6a538vR-eZVkkp3VLssw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E09%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E09 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=DXYPmrKElx3-2JlURZ0tS5VREoSXYBOyhnedjix5R0-BV5QcD7fpJHk2un-KWHlJbDEMF4uKvfN180_TLM7CDw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E09%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E09 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=20rakQjFXSKNd_aiV_UqJyiSKHXfhGd0nv9b1VTu1Prz9DzWkitxqjnOp9PRAKDkuZhVrtPbfMd6D-mj-jrkAQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E10%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E10 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XC87B5K6Isc95hmxIIoKxjpgjN2HA0ZPKUeOcvHET-fbKZ4nLL6UPCPImzL14pr3Q42fj5k1KWMVbyJCwjSjFQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E10%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E10 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tGl4ccIoV8rifI1oujoNMy1f4-pJxyFXLt6yW73LjLQCY30Be15zl5nFt8O2D4b4DEOfEsji2IetY413NFjaQg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E10%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E10 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TeI9SWw7FDQDKMzFhpXzoCba3W9gWqvja5ffcEw0mip0jWgV0T806uUIu13KCcmF4a1ySB2GRSAcEF1x3rzHAQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E11%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E11 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0_rShvgUbAKHyhYcDdYk6O4KGoKbZjNCsCZ9SbAaelYmSgMLu9pgiClugpUqaSgr3YkWge-FpGMZEo4ArT76dQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E11%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E11 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LuLDA3ixrtZ_vWEemYueTlal4PKb69-Yc-GRkCq6UsCwp_TTJT04FYlSiWYCBngWHzXuLxgRIhhgB7hQXKFE2g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E11%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E11 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"heaven-official-s-blessing-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Xrf_OlkwiCIDrhVXUSvYqHob2xCrjD7wW8KcuNJMHxiHF5ojI4iApxlFlXeibARONlVdIIChsEpN3ZZmq0h5KQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E12%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E12 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bUrb1370uXa5tbFaM2D5FZhp9RoAbz3oTY_JIcZCkoyH9YnzkIrpWR2LOdw8D5-m8WGCXFdChCW6KQX7lKBp6A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E12%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E12 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Ohj50CHWV3KmVH97Nli0yBfG37TWZdDaUFJSG1dRoscv2GMcoDnEXq0CIUrpxHrbd8UruJGHLGq5BqzeSvYH0g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Heaven%20Officials%20Blessing%20S01E12%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Heaven Officials Blessing S01E12 1080p HEVC AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},

"my-hero-academia-vigilantes-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=h03FZTQ_KkdhJCQMNei0GCLTa3K1S1J2RtpMZrMkCBBTNCKxRDhpJJ9vearMkxS9cmJmvYD6mgY0NWHK3vC7Wg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E01%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E01 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=eAtP_NFoD-mrB-34zgzNiv-SX9_0LfSuNZb-8kl60IqYfwvOv_gcoM6Wsir-GjzgmH5zOP6Tb79s4vTTIAxMMQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E01%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E01 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=P-IHcDmZps49L3mohCcOtJMtw5Io2iMg2SLcXZK63EkOyrt186ZEsqy-lIiKaUE618WcgkLhQppGPjZETx-NHw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E01%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E01 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hWfK2ogCm-84WeAVhBAGrfyPoGiNeRRSnT40ZynMXG-2OPC5zuhD6n0kkmTLzGW95SejUNRL3UnU5IY9phFQyQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E02%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E02 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ac3sLzJuHCqIxTmKpTDPuSva56Yv4vsNUTFCcZh-D8e3DyeoHpwfAZVZdodnPVsxYJLl4rineEfl7tq-mnCHbw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E02%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E02 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JyPZrz86hypunL9-3Q_No3dPzllGfQrVLU07fDpABxbYElc391bgfEB5NLLDkxBO9oPI1q98Qf4nz3zepVsOdQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E02%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E02 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=w1rmUzz29XVdmhZHrTWIYwRxE8G6yWEGV8qagy8c-WgRwB0ulDgCjQrgO_g39g1vgxaqmR8pElG1J4UihlBf5g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E03%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E03 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fu_TwfMQ-iSgbivB-O4FQRwSO7_e6NEzNhUDf5PdQQZ05yndXzEkEbpNB75yTxCbVz-GTqele66MUCMvQhOLbw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E03%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E03 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=o5u1KrsbY9ToQG2s1QvzikYxFnGbXdNdto-CkiMpb4o3_mmbN9w_rUVebgVr9bJSzwwupH-nA6kRyOfPu9iYKA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E03%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E03 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZLyB_ef1Ig5PHtwMhuJhiO8sH5v1VIrpUDothnj8fNM2stdatR8uZ4as2yUrrpwUm_8iu0VpUJ2BCqUl9GS57Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E04%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E04 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2w1AB9kQCI0P-2V8_uoHPOW6JGMItK3nQDaenqFrWRrwchKuT-57j5Vux8mIfDT2MXaF-Xb6Bqkl7yoXaAyl7Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E04%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E04 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=b5g0uODRVoISHr5hbh_JQICILEG-zmntiSvSZhvlDBALqgcXZMriGHaH_LkzPCRv-ZHFL5sToTV6_w8yY5fivg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E04%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E04 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xsGrZNSctbwEFP6a6-3DRoanEPeTqz0cU8WHsF3sTuG_TeqSA-CBU6cW6nGoIAAqtrSh0JxMdksBES_9hQRm0g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E05%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E05 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PuD__sPARTWwC7ABokRq7iYY62njHPEFXjgM9UdOia5XxeY6pyhLrmN2lHhr0a9HED_1p5shpl1ZcQDZdgFo0w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E05%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E05 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=P7kKohYbjJKy58_v-1r1bY4q89BwVNO9vK-G6xQTEUlUnWqcowqTZrtfiURMz8BJHrkZVlLxa2i8bsckjDw52A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E05%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E05 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TnTqSRB2ZV9_8SiNkpCPAQfTs7FgM0Fp_7xgEttcn_KUhy2pAA5y7o4cKAPAGdFNfMlHt8uQ42BTfGUg8kqxug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E06%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E06 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FYGbFePajwET4m81EXVw5WDWEhB3jJ-8u9I1KYMmfCnHWUxB5Nz7YpPY7jLXcTDk_oCaj8evJ1zwDzpRJEGLNw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E06%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E06 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=u57jf9Z3kJk754FvsyJowIRAJSVD6KJzLi5G0Luoo2W0mCP9sVbBSf2SJBZLWTN0iZcR52zQNm8liQX6-9RRoA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E06%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E06 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zWLF8qG-eZGCQ7OYzL6_j9Jy5oj_vYuSW_KOWR3CW39juZhIOULwF_ZjAAnyLYFhXSkEMRZIXKmnC3I1uJ22hw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E07%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E07 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-ETf18CM0zScVT6M0U67Um3ml8MLuG5TQf3pcEfU0yTynUAe4oJbRwUH7HPGkbDokOtcuwMCFhdQWuzLH7YAKA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E07%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E07 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=W060tt8fWUfoUwAyXX9R1PhICnYe-IAUA6N7pxeWv3mWWvP3dJqXvuqrADf6cGkcYWcDfJyIaLp7RcY-8UaBKQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E07%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E07 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7wlmDbsmRazHdGYqbKP6WvyjzWwddkXxJOhhc52d4xKV4mvVzxZ8ZNlpUxY0nyeiGlPXKKHPLKi4GGIUh1ckmw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E08%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E08 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=a22PZTGtj5y7lzR9vnDTUTVfUXr31Go6DvM7iZFtWRCYoICJBfDOnp7zOQhxGcFQFxFRCRvM41f_Tqf1VRmAwA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E08%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E08 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=M7jK8zvuAoned5IE-38PwQMf0ou5g-6RLYS9gXQ2SxS1yX23IPaPuiHgIAlpWNJHMdMVN9IbNtUl_Ebh-xjZpQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E08%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E08 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=elsKuhw94j9n-pqzT_RUoCZclc5C89VJ8-eSC2FOkrz7HpECV2uTIHSF_8aIAT_cK76ZbVlywN0TOJBeyh36Kw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E09%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E09 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=G-0Y_hhuhA1Fdo-GcWaIRDV1dabbGsWCqCVUGF4na3MSC07DV_5KFk4KouXK4wHd3T9X7v3WXXAHsraxKszwXQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E09%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E09 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5mw6x40sEBYtILdHwRQNVfRyw1PAknI5OYgW3zDE1D6w4WBPYCGJEFUM1wf8EvDxwP4eMrUJdpUFqxZ4UNYc2Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E09%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E09 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FC_akXiADuoZd3njo15UD9u6pRKa-TpTBh0rJlBkIoUrppF386YZBNGx1Qh4WOWWQrnyL_AVkFhwm6SpA0_FFQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E10%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E10 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=X4S8OrV9vux57ITFW_ijAy1v3q0ClkTMN59mteS50Nr1VbY-voMSoegjBHy_WsNsZPOfVgRF5L9qbMNGkSdVYg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E10%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E10 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ul4EljeGWYKqeqKKaX7cFkp_olMhkY2Hmg66MS8ya7hqAdEhsv92ELUEJSqKFGBuRv7MBUt0cIYcIG8lo9YmjQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E10%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E10 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=oiHOpGO7A85LxvopiSFPCD7pqztj-wUd_jW1TJayarzVXJFvczHWg44Qxv5OfS7K1CLVm8Km-Upmp7xXky-dAA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E11%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E11 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IvbcmmaC5F-wxq635-TSwqkipFpmZQmAZ4gUsrnp1TvGDBg1mchT7BAl3Uik7JDNbSI6kOor1Ub2RZnsVzRWUw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E11%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E11 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OjwH_qOknJfR8WpYv0AHLVEGpxTO0_ACBECLQo-YJ5-LPPVOGSZVNlHQAuFOUvXOIdnB_8_as4yGzwagfgTiyg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E11%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E11 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZaqoDi90H4z1Y_1Qc95kMxNw1z9-i6oT43F7q05IEMW8XBX2jfUefmQiAFYyQQVv3-GoS4UwjGQwGDGmzjX-aw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E12%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E12 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9NYjmOJhHEZcyfnH0XeWotI6dTMS1ZS-HiMhVwTeGPVr0YM1ebu368m18sfCiLU6nsa9LlK3EoF1JMr4kfdbQg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E12%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E12 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UCOBkB5M9inzM8nPogcdxM_25CqmoU42QF19-A_QGDxfUfmAQIkh6UWRHtyXACAhYt3uOFc4yYitPgN6RUu4OA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E12%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E12 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"my-hero-academia-vigilantes-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tW-xaN7FgIXFPidAD8fUWmEftAsD9WGSUvilOK2TUubVXDuuXXmkGmXvpQ1SCtyfbOpGYxH6_WHr_AjBNaTViw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E13%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E13 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ikP71Cjsncu1S1JHAuzevPeAvyI0Gzbl-HMFzpSngx-wQAp3iBk-D8ALP53TSa3M42XBJIrjSPk04wNEfe3f2A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E13%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E13 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=x52qlc3m5kOA5Z3kTmuXMBr7aaVbIpgn6znppsLaHBIpt-wmTpxu21iiYmqIBFLNQf0xtXCIUnt-8M-bjReXWQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20My%20Hero%20Academia%20Vigilantes%20S01E13%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] My Hero Academia Vigilantes S01E13 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},

"trigun-stampede-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9Gg8yM1Fz-xWgbP1iAOP0PkA0eAQNv0t8iqZitycygG1sZwvcIDpIVhRu0pK6e3vCTXstjJf13G5gzk6X77vhw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E01 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tyXcGlVpC_3ZXy7fHygNy7OgVD7R8hkK0sKjYsGVt1IziIQqCvQ_u1qS3f6SHs6iNdBBQX-vzJu595TK8XnpzA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E01 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=G-lIth4u6f83Bcih5Fo4Oi7toMRdVhgcN6vhmIFfch5Mt9EqWGRYDlIMjLvbm0lUU9tg9GutkWQDrRhk3DkvfA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E01 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e596YCU4MEQYla1xIXRrzov-ZdSd7p5hZY4y4GMGEB8mqD9TH7kyg3RjPi4RjPa4yN22wQZjL550gl9B5Ualkw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E02 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PDGKn1VZ0l5dK5LB3N-0R0MuO-uKC3qxry7jNC7jgEfDPjZmxDLSr1w4xQieSlV_68MMxpCQskLVWJzwa6gFxA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E02 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HjZgF2W60ffjQpZNwKtflmkuuYHBcj2kJjNfVDLtYcQcRuNwbjOpyGVG0MHUOVIW7a7wLxETMG6KwYqba6fYgA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E02 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=u7qKvQNB_tXSSk2SZZVpC-MggCD1zee9tIndbrnrs9vJH0wJ0NNRfx2iSij5y-47qJGj7F0W62cDfdJFGTv26g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E03 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3_VgZ4kuSl7-GcIt_WrfsCLIgQ_bf_iGt3moDtDCgTxBniZcm4L4-igj54H2-OTGLl5Jge_JcF3RcX25t17wzw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E03 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GhjuZ8ptJXHPZOLs_OCPdDtozZyrjuQ8p1cWzD79ZHjWIIa-UcV2eDLAp0erPWw_nq2Jf6zJWghhfRh3mklZ_g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E03 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cdVvCrfqee1cDZK-KsEYxKCQmiI69_jiYcm9I0M371jA8APZiydRwUREqCdYjvFptpHpdjUnDWLitQjRzrdGAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E04 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hJn_TS2lBQsqycd-_-PK-8V5RPa2Nj3LrvqwxTb0dC0tcDpSbgCP0HZKVM5Lz5e8kCpxdXyuNRLFwGCv0lY0aQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E04 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=S2QyXRBspheopED879oXKzcs_RoB6lEGE7E6uod76X8beLSHbflAV47XvU95UNZZivvy_YkDBTH75Iu6OU-kmw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E04 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9_NCTOCTPqLlbCxkXm3FK1IrFkWFHCElmHg1jSrLjoUdg3IcGQB9eC28HXOFkJAeGxk6yOFYetAt45hZVWQr-w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E05 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gyziX40gIYEllw0z1V1yUp631NnTHDBPAiruUIMcBr8g5v8EFlJHNKuTkXtCHQkXBSPyGAmr2r7yOCdg9Ry-VA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E05 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=22htOziZnzjoeVsD0ZBvZdymDQP7Ljh3eQ76DD-HK82d5AWd9aaX6R3kOusp6imGA-UG1yFFPqnHMk0EQOdRzQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E05 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uLhKpHmqa4ujtw_uXqg2LLKhie_Zb_9ISx4fOn1nYqUfA_CzDdDVGJJmsf-Uq6G15DLrHYRLN5T6p_8oJ8Z3Ww&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E06 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=lYdToAuNMnYRu9FbEfeB_Mi-3--VEnytnpHxuZwUOQkgH3phjV6h0J7pIMi3ufQEwLuJoR7Ph7v3-2VHqTZdOQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E06 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cNAqK3Erf2rIrGGvenzPIbYI8NCtMGrGFa7NK1ggKd1GEE7StvWuYT6GPo12EKuA9RJmzP7FK73t3XkaQFhfHQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E06 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=r_92DUBzghO4L_PPrhil3_dNqhd2484BE7XA3_8ErPuGMMFcZpoZcSrNSawng5PldpVrEnto_FWhfcVFLy8S0Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E07 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=c7R5q4A0eBKYE5yIACYLiCrRbFqJV8FCzyD-bOI9hfuFRLO9TXyhrp9riL3lWwDLFF5Pqg7uuEdIdepxIRdpRQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E07 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Ci3Y1cOmh9_pvqJdUApvD9XDnPzIweb0aXzfYU_mqJKk7l70uwmHJRKkfcyNjG0taSvCuhaRA0rMALWpzcRiDA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E07 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=P6i7LTVMSD-AOLqBScAUGzkewNGpSU0QSLnIIWWve-pg4QvJbRjS7VTwXU2mROoveTsZAgAJDPnOkTm47RVMIw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E08%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E08 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=oMkQbF1jlauq_W7k0_riBhc9paKbxXr8boqxcFVSPJjEe9Rt5wNez3EV_dddEM8YhsH2gWOpUwskf_i7yF5XEQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E08 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_faebhEDI5Sbc0LVl-VneRrlv5OoycqJFUEgZ7qtJlqAYhltLLz3UOAEYWeCBpx7WkMaonn7daI5BBDBmTRDJg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E08 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RyGUHLRinnjF0i-WpSSflnGT4Pe7Y-i3zt9SHoCQ2gyNyjsIS_1Lt7hhMlFP6ZMaqqdhKvZAP3YIjdFCRtkwiA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E09%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E09 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6jvHQ4KVxzLgrjcXeNis1fNH2scuVnrT4-wn1D4Ej8u_DDGo-V1EToQ8mIodSN2kcP5wOF_yFaMWP30SvMNCdA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E09 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=I9tAt2FcDlDipJCDr3c2NzH0O4ICMXwb_FxQMlYaIsLZ-kQmoAOcYZfvfr1cZ5vZWMIN_VnEee2DSoPvlmEelQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E09%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E09 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wR8cx7wONaAx-GuxEJoNece-vn67T3IZLsSMDqhcPt9hS-l47eFVn0sZoBQEm9rZrRSH3H7N3lzSe2lafLwh6Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E10%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E10 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=__GUS9sCmfGQD4Ssmm4FALLJQikypJyFhxifdtuFHHtKNhn5Osjkla2_BrJCf2ij22nJw6eAkefJUNrlYpqEZw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E10 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OZZW6nN5Ua0U0rSaCByDlmyPihG1iL_QqPV1n_nhGiZkx-X01O3Y2IekSaEksIRdLPG1NtRBsgMnFl4wn3JEhw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E10%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E10 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XhY1Oo2nPrHHHp9V8OvIcnHp9O-AUD-wCe3vDReXX5_M1R4PLA1VoTaoGB0WXFtuJ-n9RsRMz0_H7QElL39EGg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E11%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E11 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zu4sFD9MdM6Rz0u5Lbsl-aulV_qSOdoPWq7OQ4mJXzYWnIFE5OJyok2KIuPOB3j8ywd7LTRuZYMUZeRdpEOkwQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E11 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UmLe4xLyz6YsLK2ZmbYE03ak5rAAU_3VU4fhWPcawfnAk7kEvsi9HBhyEmOG_pog9J7Eqcv0h2nY9jD85zKpTA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E11%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E11 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stampede-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7lWEgHFunjTJDPEVjy4Zkn5OV-n8n1XcFpdgHD-6TmJE7iaaDSJnQX5aRg7znjlyLV6dPQE51BmimUpwOkyncg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E12%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E12 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iy9bQKcHCCo8JyFw75NYA2BgSpnHuUeMNb5_VyrOOOuxMIYQhXEG43ZoaNO4YU5GjaJGif15mtS5PT0VG117Kw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E12 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Okbb9SOydZKdzArqSTxIGLsKAhYhPf14R6wvN78H4wBCFxl5lGIdSdc2WPKv-2Qo8CFIeC88jXs5vQHk_v7u6Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stampede%20S01E12%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stampede S01E12 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},

"trigun-stargaze-s2-2x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fFiHPmNkpTFWDIxtrULFG5ocr5mX9ltOdmnPA0weY4Pja_sEPR0O_Im5aYJ9esDpcxu3qxw7giQ4OMlIQ6sGQg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E01 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=52OI3FPWZLP5aNyPJWd9YvE6__ejKCUrmNqkJG0yNQUk8EfhzRGw4ihzNZlr9c9oMhISciwQ8LkRU6csRkEtog&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E01 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IaNKFgvf3Dse1x_GQDJ4hmMncVcOrjbzzhpVlTwpmtBxzUjPnBDVE4tNukY4AFqdZVP1GKBe0583e4aVL9Ay1A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E01 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GqkwgLMBV9wj1ERTsW8F5pLJYwgI7wkHAAWhospqrhSsEoKNmBXXc_qdJ2InfICuwPiiTyZPNQA5btAOzR-_vA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E02 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=N2YEZqDie5ohYMpshVYkoN_kws9hTkGvjHcqm57rAr--8ophjBvpkiFpt-nqCurVPPCEq5tfDatFhWvN5xH0pw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E02 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=n5cFc47i-AtCuIfEJAEUhIG_QcoNI5burNTHXSn-BeMh0IONzR5d70k3Y7TwEHw3_PlQerMjwspOitcsCxxCpw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E02 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RwBVXsDmiAUx6i-sr9-aWD2jpX485KLCRQTknp8k130R3EBnbFoQSPDfffm4fpPOrX0HguDCAJroO2A1GpOnMw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E03 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1I4Stn8bB_3xLO5PGnyl9pm6BEeOayAfYwldHY3OhiGg62FUWb657rSSO2MhDxzKgXAAfpZtJ-ZaGE-pbB314Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E03 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7Zw0BRwuFNt0atnOGEI2hIFcy8VOe2iAiPYYiBn2OiwYaU4jIZNJWhvc0mDy_s0uXFzWQ-cHQmKmqxjjoNoVVg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E03 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cDGtdHbFUBA8NXPx3tbdpahsahB4EXQwsjajGYwNHxmBiZJQMnX4crPQqp2ykcIl5txiDDO9pPMB_f8KjyHHMg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E04 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=L8aiZOaAC74qSbqGVzx2cexRX2FjwAYtt9vdljwf1Wah0zw7YkU5hpDQafheBrVq3j5OLp2_97GSNady8YAJeg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E04 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=kaL8RaoMypK83joXyr_XDoKlNi2wGpDNSZeSALP10LYQD7jwsq9eomx_4L2WFrjlhkTQzqQz2Xk26b9BgY9dDg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E04 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5bR7T4Jaxvw5wSGXJZaGp5_O5lNGAD0WD00Nelx8wXjYXFRIbvKaGNnEEFmMwuWAQ2o26NGa3dB9A9Nzs_wvKg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E05 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=CkFm6X2APJo1f5W9nuJ1I4bGx_8xHZzbKZFpV9ztR1uZAPC6sDtdp2t6UOa_USFI7vlDM_gjHKkWXKFa-tlkIA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E05 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BFGL4bVT_wxiucz7Ac7BZ0s28VtO_DlZAUW-y7cbNn7JkU0YMwrYub6JXtdIFNAxKjMflcbVPR1FQsRtJMJ6KQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E05 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gNIj5FjEOTD5zW3-s2_-4JR18nX5-6RjQ80mj_uiUEwXyhZbFZ1r-edBck0gjkih_ql5rMJsQjScCa3Ros675Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E06 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=aPrSmVek5JVzf6gwlnr1VU7GNqIBvU-V5mjyxK1JxBW5EQq_y4XfFl5b2I8ximZ7RXDgVdeG9otEU41LuCelDQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E06 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RH0uBRA1qgmcr8XMWKOefUIDmjNFEDOB9wiu9fuz7_6IAVwazM2ZL4tJPx8Xi1Svp_Wos8axFL1jRfCBfZ5LLg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E06 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zaREpdEOY2Ggf5joFFG-B6P7d13drJEQF4pAmzveQMNkvAkQJbrXZxsjsVVenlmIYnqVP7pMG1hBjiM94eQmMg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E07 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wV0CO99GIzsGJf8_Dr-E7c3Oc730Ha5UK2P0p3-qQxd7bRmCWM0R9mI776oXUkvtVYXnsCJT1UkqNsVkwrbzTA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E07 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ihBhrwfHRYI0BGjn29mNLxAg6gZS0xSED7_6dZ_YPobSWfsUZv_LN14OrH15cmYZDV39WwzXIsESrlyAkUv1fw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E07 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pKrhecnmOLFF-4-LEedv_xr46ZMYXPcrbdhNjf-2IrIgryv23Yd6dS_b1QA6gBvy7xlpYLFOxJUUKnn6EX0KcQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E08%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E08 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zpY-Xbg5iIlCzm8byJkCLTHCr8zBeYMfmAtSUOvJtw6KTFovR2F4C9XbcNPeVUbt487mXaRhuwTsK90j5XLNbQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E08 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=w-gTywRvAiTVERzJbESDDwGwXU4folPF38Zl90XeIR5lQ7y7sYehxtUz3yIlqFTBq7_tjNuzk8GAAPKCmPmf5w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E08 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bqa3JEplFed_YPmtmeV4_lMiuhwvWD-wWPoz7O_OMqB8YSW1nAF-_UIbQT-GvlQLj0nOuCzXoBkrHhUwwG4Ufg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E09%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E09 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Dxxudhka8yVGOvTaoWHQApoXtfr4AKgPIrwvmW0WvqXeg0IDTRVWXN-ntlyRIKKRCD7RKT1_R43KWdG62pZ-FA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E09 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OA2yczFMX3B8FpKRTqg9SOwtXcHqXmLDRS2GMPbomM28dnGL6ehDm-Awebjpt7sqrUlF-qIHLqvv-ce0oIM_-w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E09%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E09 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=R5QgsCmBik5MEjIcm1uvFrEtHfV8ECXfdSM0OV4RKOryCmWD2ZeOwcYymoYiqEONAMVqdaODor07JueEuVk37A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E10%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E10 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TATgAx_PWjZXV3JQrKTWwfFWLEfLjEtuzHT5LOKpajqSFFxFCwL7Jv2vlp9WEpEC8Xdi_ksd6aVZO0quIbUOPw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E10 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QDJIChMf0K4-HFEahUKKsifmcoShyhTnWXiRL3GIA9CApOfXl-sKG2o0da3RoX_uwqHtpDL0I0S94CdyaQu8ww&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E10%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E10 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rK_rHGpgoNjG9ymRfa_fshmMMGFfF2-8bWU5OSM7sUKZGXTkPIESnGzcqGZ9-_lyZ-qZ1R6j_rLoRBjAE_3Wig&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E11%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E11 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AGuwqR3eY3izMEJeeYyYss_3B15JqeXKwY4-PrwkHQQUnhab3roSp5CmTXG9upOHGdwYk7Bl4mIg0KUHPlthwA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E11 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GVWQ8qrYry1DUjAiGHJNhwbZisoOSd_GwgWuFIJFM1_zxfoLQy32w_0Krb-9V4zLgtr9l4191ydJOCLVFKnPEA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E11%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E11 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"trigun-stargaze-s2-2x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EwK5tGo38CryUP20EVVVJ5i7y5QI7E3dbmkNbOEuFbMtaBZlpaLzXfFkcDB-u3cs__JUi8MGu9OzzwcnM7T8hQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E12%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E12 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4SFaz6OdJVH-9CyAOof2L-xOEIOhwj7WXAqQ_ZoXbKf0qRoV-xAMcF7PJpCotcn9BoIaaHVHtLDYbPqFbcStUg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E12 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=omv8toly3hf0YCwR12I-puYdtTPcIeEU32XJrmEIDSmbxrL1_Pa31gnAjx0NrvrBZKjRGN0hqyN_EccoFSPsRQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Trigun%20Stargaze%20S02E12%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Trigun Stargaze S02E12 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},

"baki-dou-the-invincible-samurai-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AUlsj68LlEOGm8nkYhFTflgQoPkULtrejCbSMWixZtUV4yEvc2xUHEc9uskd7gLnKuQ3SCu8NvPn-5CnI7UBWQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E01%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E01 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mW6WHTPAIYi1tU-qCG9QBh2jQiVEqs7MrB6ysYGlSaRi4snpb96irREW0yedVpi2Qk845gR7UUqMhGbKUdLvUQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E01%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E01 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3JH01PqCvWBsOLHeMd1KpzeSVEAdDi1jyB_Xfeio86DyUPbb0ISCpfx-46PF3PHs3csP-ttSCSNxr-8x_r-lCg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E01%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E01 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Dufu4S34-qUvdaA2pvUS2ALNBGpB-BlKSeqyYge7ZeC-V-0mRxQ1GfvnZVz18DiJ_sQCLDva55BMnCyD0NpF7A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E02%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E02 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VvrrLRz2lRj_BoQPQ4Rew3yOHMk0poTaEudenBog4zk9aWBQzvRiokDS5x5VRbKXudiv59E11vDyiVZBqm6rnw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E02%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E02 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Byk51qizDzdYFf2aXLEZ_tXu34rQ7kZ3yqCXzOUaWjBsC9g0j6qjvQUaCgQGHF3FINfdQGYZZFeIusxy9GYvlg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E02%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E02 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ToVmYcOa5TzDfz4ba1KZNKqNFIHKPxYDoZjzB2NiGRQOY6TCwFHhl9yZw2oA4JAD5cl33neQUdmPcTVf_wQVuQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E03%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E03 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZAY7Q8XlLDImS6XnsDFfrk8G5G2hnxXzwChefofbBoihrLNJOG5q3PhEOe4_GTz9bSdXBvO4kf19OSFLgwbOPA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E03%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E03 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AxjfhF9v88grDU_zQbYRsxTRnD6FEz42L2FZBkAD5XilwTlxiGtEoJRWcJE1nG_m6ESczNBDBqzH4rGmbiFZxg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E03%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E03 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=teQpGlW0R_xepaRKxs-_p08aBElR0OZGtDFLVffL8BHdxjNQ1iavTcX8yMkM4Cm-D-ZT33POAD46JAHvm8jLFg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E04%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E04 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vWXu7v_1TBmAaWQi8nSswA4PxrOyQwO4GdMBcK10liYMQF9sAjYAcPGj4DURGOmuDj0QAyiyVEIvKFmp2cfKcA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E04%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E04 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MUqXc_mON7v49SO1WW2OeVbL3isZaadNs5tg4yzbcFA4ePvdlurYoZXU4NFNqfCq0_EoUafL231Sa1kfxpWfcw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E04%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E04 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=q1V5yfBisDCLB1e3SSCmkG-rN6PdXt7Va95LtLWbZdjqtgSPKkAxYxxatt8XcsO7MRDzh0xeQLnVGgyePS4rVA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E05%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E05 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KWCIrbu1Riki7rtiDDPZsyRnBAESWBevjOGDPNmvGdSZSwwwLUwiRlGM48jYzrWKpdAnZi5zH48GXsG84cQU1g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E05%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E05 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e2D5nv45-V9Tn_-Y1ZOxeglrWFmxM2vWGg0nuvkQr4lhdoMqhjwYLnTtpSxufPpnw9nJ8FFf7F9pvEz-Fz5TUw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E05%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E05 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SSf0-liWP2yMSP_Lw_hAXPxmrIboHo4wR3rP1eRYijrIZJHz8bwJ9ZY9IOmRrcPYoCVaJthWKrTt4fZ9sshSFA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E06%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E06 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=oZrgRUvQN5eojiYQgzuOWw2HvD4LY1frczSW9yX-IuHi1gSHaosXsh_ZL4guzr-v2kj8NMX3eLo-PKmfjUhJKw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E06%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E06 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=J14rLln6hlJfT38iU0lNusUG_RA3mwACeZnA1dmV_mYq0C-CrdqftmcyLLT5rDXyGozAyWijP_gXzddGBaF_lQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E06%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E06 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=M6mAblvLEIPUxNwHJgiZU0EJdmgBfLYMBnBzAWB-l_uQLKP2vPYWAl7Vz2O6vBD4LmV_ISxbgUlHa3p4UOScwQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E07%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E07 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=o-o5uEskVrepuG6-rtkbKJ7Xqtz7p7lh9StpMAq0ZY4AiaszPeV5Lfpv6tAWmn-NyuP0C6ZUgdRwEiUEOAondA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E07%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E07 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-brrz0sOWqcEvb3tKsS9jcuAKVjbL-_l4lQ3udGAVZ9jOIF2NwkeBtseFGlvmZGAUCQdXAPAvN_tMdmPG8cE_A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E07%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E07 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IWAFJ4Zedvskn2ro979pIOzUZ7l6P5H50jQg3oT_9tptQtpkzhEKAzQjS0dUqFWR0VAq5DqjMMg0SSHfboX8HA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E08%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E08 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=P7zmyhDeYSi1TLDQaHwwpeg1521L2u7GQuZTW7XskkWVDYGmq03meicAvTast74K3z28aNk1M4JcQmwAOKXdhw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E08%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E08 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9jgxfnev45iUYWDwaE8ZNMzXc4yMUqbvmR6qlqjZ95bqC7PBm4UR3qNkb8UYf2A8pXzhQfkCAuyNcLe6XxQt6w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E08%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E08 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mxHL-w-CfsJorGeVHKgMGTYD523sNVlclTuLIjiefivfXbse49MK8htWmOGsa9zVLNxmcZy8ySDRWyUce_-YBw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E09%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E09 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ulj3_CEqIZZ_iNuZJZgGhDcUE7dWZFGiJn7GRE7GTE7lsC4-q9_VxZJE-VBaZd2PIMsbMeHG9yLKus9svlwFwg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E09%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E09 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=apQYOGzE8NyRl0wzGvOKoHsuwLN8Fyf6dsHnjRcREG6djAczkh_n2I6YelHyEat-cjKZWbbWVNLX-5Ki1FhiAg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E09%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E09 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Kjzf9R5maMn3T21BLAFVKKKFeNdRCZgpNHgz0lB6zmFwhMeEHbu2SK9QyNsut8LRG5K-BgFvOZIoLeZwVebXWw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E10%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E10 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=F6ku2vsm4hY89Z38OcQdv3SfaQnmR2sro6hMfXJj-4nny4CFUHGtlDgIOfVB95IPypGP1XeqbRnvLjY06NMA4Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E10%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E10 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=f1c22RRsVije64x_nibsAUoZ8dynyQ-3TODTciurEl0pjc41LZB2fEdrCUhbJPzRQ0TguAQ61RERyGCqSBX_QA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E10%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E10 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bBUN2HI-wm7tK1bUSZgP2tt9gaBI5zLfpv-6D8v63e4ga2m4RMxkvw4f3tNtSvPVEYsie3uQ5pcJxmOV1qzF2A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E11%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E11 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pjI8CbQtEK5EFxOG6BM_jyG9W1QiDiyp6hbSFRnqH9ScEDoYrXaaKvUhVB6Q3bQCeAM01dhlFfmW3_b9TsEKAQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E11%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E11 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uIQN0zxE-k2bQbcqGm7szT1AV4s_IB6h1r-iw4iVwf79lXvTl4S7AUDRpBzNHq12HVzoKy8JTuDYruMSlgNV0w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E11%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E11 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jtm2oIuUevqBMvzzCJfnWpB-KELmveHZPhJB_wnbmSN64NO__vD8CmvxanethAyKhEJBlLKhhDqlnE7zlEHCXQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E12%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E12 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IvmnPvyXRfF1IZfXsbi2sTjyCek78ch5prKzU9HNTq6Aer7jQMDSyTX7EKNjKi-FFUac0v0qjIsBHmyZqVSeow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E12%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E12 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8D-EJSccNqNKyEnuCodMBNBsJu8gU6zafIwjlB0EDgljaa6zf2Dfnfp9Pi36ire1YJvQcmt1aObfDSoTTmn9tA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E12%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E12 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iv4jVydsUjpIdpXROEtR4A8Q-ATpopqJ7Qeejf8POzuOGIUltpGhb0sPDRTtkyrYBvBVBN4lTm3ZHUGN264A3g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E13%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E13 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XSHPEhv41x7lc3zoLqiAnIMeoQJhc1kJe8OWpC2oGrNqpt8PmyvwJH7cxJxuFYAW0KDNHYYb5kdFaUSQW2TEug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E13%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E13 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8hjqy48gacyYpy_3RO7W8aqHRZuxAcHGHYgjVCxRo8vgWVaqD2uTF4Hy86asv_8ipF60_sOQdxUvKiWwTPw1eA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E13%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E13 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x14": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LvxfoLz_ptwj26Nf9jycVBb2JbSdqHwgoPrS4nDkO75pbpsUVVQw1h4F7Hk5JwjlvvTC-bJC0OJ4N4JdZzhw1w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E14%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E14 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vYTz9qkd8wYrte-SE8wZHvRV-z3fP1BS6cvlxrHltSJN7d4LheR_wtfOy5ZU7xl54QvsK4g91RV94gkV7QzVhA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E14%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E14 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Qn41p6qI0iJWfeyKBfYHLtg9nLJYDB9K_rKDpHEofmMyCCkxAvGHymuFEXQihtq2goptUqAQlfn0ixUFWUYBGA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E14%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E14 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x15": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=921JuXJ0hNCexq0NK2gzoSKiyEpeH7SARSrtvzGI3Q9OXSrNijbapsa_vjrY9v7Wtknqwq1ewRZZcqBe7vtgRQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E15%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E15 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=g5L_ole9fvWDJp0pY69aEUZcnpalRm0ns5nXmuTPnsiZRDYBaFy1LKEDKJ3bX7b6f0vtyBp5bH-u1ct3hmZ2ug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E15%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E15 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KKV-6wKSGbTqjOuhzkn32Mr5Uuo7bQ1fU4Qnbc1MOi6n8NH7zN-hdVYOrUpwsiFaq7RUtGFkOLsviQZmE7gTiA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E15%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E15 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x16": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=U-K4YaUfDsLAALJcm1Llj1oHIy-sv7V2oIaml_92v-wxqcY5rf0RIifINTAAQD_fmnZT9VUsdBD9n0WFDSloSQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E16%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E16 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Iq9JIbGd5cBZjnHsTXxasHPFrmmNDOnAVIqls6_ugLtXjvdWfnr1rwEz_uyfe8KRPh8Pgm02bGXg-yINft2R_A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E16%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E16 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-6E-xMXr8MyDYBCLhBN5eVFUy4cUBQ8YDUZkhmLCNwLfN7j0uavvGkOfiGMbAVuR3awYB1C4cX4pHc2a1-eq6g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E16%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E16 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x17": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qFUTXVcrXejFT2xbKqQaozG5sg5-qQTvOJ6Aqnk3eg4vyQZbUTFn8aM1kVVI6LEecy7pQ75f0gHtzwRKtSHT5Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E17%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E17 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XUkWWZG7wchv7zlp68KVBf3V5G7jlHqXjYnBJCPODqn0Zbw-jNrYIZxsH3DrJeG7GfWItAHbhD-xACQvxC44dA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E17%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E17 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=CO6mGU13qW8QHs31hvcT4D1mFBUmglszWlxDkeX3f0DtrSJWHiJTpXBVYNjyN1_7o6hs_6HWoR3fR2LqzIGJgA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E17%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E17 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x18": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dOQ9UybGGw0wDKBLz_OnKLKDIF3TUfgDLuB1nfki1tCCAo1iJdo8Qkh7gctBtfLjHRvhhUzCy-qmWktJIy_wJw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E18%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E18 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=f9fzJu7et18QjuD4B0QVMh4LRPu4735K5e-uvLLVuOFpAiFagO-gWOtzKSRX2zqaBBRcYJu-NU_qcR4U1DjQZw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E18%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E18 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Kf6psz-X9OabfLu2Aq2oPDzvSZ33OjGbuTkg-wym2_hLRoJXjYVz69nW26R4Zud9DRkJCU4WkGBAea7yaSyu5w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E18%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E18 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x19": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fgi7WOcx6BsgNzA8Pa0jiN2QDkgXfBpmRPrX97SsEVxGE9znXx7UbmIaS101VN4f2kD58JYGchmW-bNvP4Y4Uw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E19%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E19 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Vmlxuo5JDkhX_ec0zDG5eb72NgzUaaa_e7-tcc1tUVV_r0vAhUIG6Cq9i2Lb_6cFkdwsXjarqNeKbL7xwjHtEA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E19%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E19 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ui1Yn1ImVBXzUC3WBpy3AxocibDYH6kP-35iy6lJeEIyWtzfiViuE8u0IMSs7I18Ta3v74IImOwuVlfe0lnQvA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E19%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E19 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x20": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Bl_XE7nGNEMOrtTiVJdjcsHJpPDiGBhC40g3Htia44XkPKAXwtSmxqs_cWjOq2ZIA1wS5VfyxKSMNREh8MEUOQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E20%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E20 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=txioSDW_7vxeELUdOLyjGyK4KVxrE7b1KFzRA-DdMOlSJ3tHR81JUldBu39VIjlVPo998Y9bf9BwXeNLvvJgnA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E20%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E20 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vbiE1qgvvmULspkoN2__GRzZFDDzX_pFWFzX_Sn2z4c9UpHvIMTR6J5pQ-3H9P_z9QQt6X0RK-sm2djf2ePobg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E20%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E20 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x21": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=brHKosfZJtaeE9Z_zTyVU1mlyK87B4_TKJj4rz_UH_5jJHSgLYPEXBkOO6J43_diT7HB28ABS20mAeQqvYb84w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E21%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E21 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vGAKMEDL6ABACJ0ROgrieb1ohAiZ-YgVJm_Yp716MD_qCRow059h7hMtvxTue-j9w6FiI_XOnicuRgQNFkbbew&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E21%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E21 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tsngdxXFa9fw6wY9oc09i6R7XZdau-NpqY3Z1U5aaRmGvs3h6r8GaXldKOSkSjInMSI9EGoVwVFUxGrsn4NOAg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E21%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E21 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x22": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2fvuGi_n5mTraOnQBGrM_XG1J0bo6dyGMqpwaRxUqPb6885cU-MeWavoXl9wPBS3ING7xuuIOgteBFBHmKEvKw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E22%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E22 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BRDXGBpDyKSn8xcltp1SsgNCnVWQ5GiUJVLLsFwICQ6x_qBVEzt6gjtWrZ50ydApUuZ9qwy8SeuoHZ1zoze_ig&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E22%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E22 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=lpMj6u1qDOI5I0EYwSy_IUyL8wx2pQqdWJc56W7SbXae89jHMRpaTK5K77GKdTm-ZI_xqqwr5D05TOz_Grfj8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E22%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E22 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x23": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pv1IYih0bX_5neh8_UG3nfUjJLgeSlBL2fh0J6LfHMgu-wMODDqbCTDBJlBTF18R-P3lOzElfkYDraosfQo4tg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E23%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E23 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=z6wIlN4kolyLHldOSrWawL1p-PMwWJrDL-b2LiAXRaNpYfzsuaqWvApBY6OuQVxmQnfuMsmgGKsH0WhHaFgNSg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E23%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E23 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Qz8WPmzE5CjiNjofRPWNxDGQc0gX5uTTVtCVpplB6HPV3MFMKuC8LobdmaeRMIol5RKchVf1h4Uah3GBFrDwpg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E23%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E23 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x24": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3XoyyehYFruXnDrjrbkIg-HkS-CBSkXIB2lLReUSGwRusXoAwwvWlGRwCOWveXX9399R1acgXdR8XZOdkwTyBQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E24%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E24 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Y03ZPcJFXTb8xvcR3fKOATNBpj51cjsK0_IzzlkcHkcDrTxblJNufbyO55CZIH4F4d9DcuKDfmzjrEd7m7FCeg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E24%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E24 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7vXKBMYl2GUVcJvycUDFj9Q8eyjkS8qoXxk68IvacfXY2PfLTc-aY58HuWZU71TAfnkiQ1XRcknd8zFp1eD4dg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E24%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E24 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},
"baki-dou-the-invincible-samurai-1x25": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-GQfiNSVwG7IBWDavi2Fh4AlNYg1ek14CQZsukhVXo_o5HrVHd2OLfFRC-BdnQuIggI7UIksSztbZKTvVtmnwA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E25%20480p%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E25 480p NF WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2RUceb1nU6UTRGAni3fLFa8eLHCgLA_apxYPau_nylIcalrg1XFngLvInjDbyaRjfW9iSaq-ecIuxq7fHerqGw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E25%20720p%20HD%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E25 720p HD NF WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1Fg-QwQbmZPSWVwiW3891Ma-EIwnr8zJmX6Yuv0GZtn_suBTu0OGxQGg28NMbjo7YRg81_ilYScYfadTPg1CYg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20BAKI-DOU%20The%20Invincible%20Samurai%20S01E25%201080p%20HEVC%2010bit%20NF%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] BAKI-DOU The Invincible Samurai S01E25 1080p HEVC 10bit NF WEB-DL Multi Audio ESub.mkv" }
  }
},

"arifureta-from-commonplace-to-world-s-strongest-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZYAe8Eu_d8BAcfgnWwvZY6AoWYpprR0AcI_iWddfY2Y_AEPGwsAOrnDOfRKkhdG2PWicWsmfkKw2wlnhszdoYA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E01 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FIPpG8GXcwVR-4POOS2joDQyqJvilMbMrNbj3y9pfHUGZnDWdosUIFzJeus9JVFdMCb3fWZka79vQoL3D2c-Ag&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E01 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NfLLk1tZCFzfc0LMJbQl5GH6kiciksobjgxD2XHpXlExzY_3Wd75QapWLkXHztR5gj6smIIk3EKpoGpZHnJRuw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E01 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nVIhcDthmoNs_Npr6HM9bqnCxjmLkndTURdLa79iAbOm1oNlNY0_Fo0WCMP4tiMlAsCcZNuD6DNBwAUbc-xT8g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E02 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mC6GTG5P4oSa9JEov3SHmPJmp9RJIkT1rYeq9pEFvMlM_N8jHBt_4wzmSRNuVBuVtzKRUcABmkxsKGNZC_L03Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E02 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IpYhsNzyfXD0QhBTJKP-QzJ9vUZjo9u6AOEjFNv1kq5OiMpk2mM1z35utcHocxOzCXdgdZxnouv9DrzcxmfL1Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E02 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NqgPoPhQuttzDQUMUcoFmbhNYql4DlZegoMFkP27d1B-cyTC5o4f-Xe7OKkDxOLXc-_MgqPCgRCGFtsOUXar4Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E03 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Wcmy47IFX8jQWK09YxjFCyzLi0kn-VNpGnjcGrkgDW5MKLGERXmkfI8ZE42KK6f8XugOYofZUzHzg33v9Aqf2g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E03 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xa_44d5rJWAQGzIhqu8IqRIgwAQNhgHCwrtqxYXkTAY-bEIzObZKQbEoGJ66P5Kw7ftzFgeZlMxWRVYLi4zy3g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E03 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-NOTRKN5iZ6s54rUsg8Esrj1rwYGPhTj-jkeGi2U1sXBKT6X2pTKcrYskxJN_lwq4XYb1MpWbRoLzP2E6NGJMA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E04 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6vzCkZZDJLziWNyqGv-6Ie_FA1Bs0E7w4Se7BbRMhs53eckNq-iw2b0fwfLMIth3vg5etpAW_hJDqa0si7Aapg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E04 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=oRVKKMUfRy9XN8axfXS9KfDaiKuocPu_0OyBjwsRPIduyGFW_uzxHvXY8C1IDWn-JrNZkc57MCE7TkpdYVmSGg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E04 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9Edzua5bGmJe0Zr68h4dgnJ4Qhg6l5io_xohVZonHTxllYgu0N2AQhEcpwUcSAar-kpFQfNqb1uV2catHgyFKg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E05 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JY4IwVtd-Yzcexs-jHtY8dA701QGFR_7C52SDo6ybu4MYF7evjprksqIXPp-oa11LIYIMbLAe-8xMH1R9vArHg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E05 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uX3v52wRR26Dqiu3kkoTK3bJjiZ_DIlPSjFjxZoHSVUg8DriU_YL7azRQqiozVWnMVZB5XWCqThH3P5gkst2ZQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E05 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6b67TPbHSXjSsMW6ay8LTpVcKBzI6aVKW8fIKlbU8pgIehQkytGG5d2gfE0EcmwQGdSKzq30yCeEinGXQ0z3-g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E06 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=H85NAow-W5qVc1zDCamGPIBP_NOEshpV3TRmFT0pIGzv9gm4Xh9J3rFZDYcOXcKohn0KP2HkZO7RAGK_Rl1G7Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E06 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=33ODasQ9M6PzDZxL61CVZQHpJkzDbJIyeOJgOcpCYlPi7qrMGMR9Mws7G4LJtYVWzRI1MZlnCxMEunosR5A0fA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E06 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ETEK4shc07ZveVG662F0JELnifRa0hzp1CbEdYWYwW6nN9-W3oHdVYDxYjbSxAAyRSYqboM-aCv4O2t3Xoenjg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E07 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Kr1sjHOqW_4gU4OAtKQFptzymWUdWPZYZ-87aayUxyDYSjjgQoljICQn8vhx62dp9l9ai_bpV-RUdrSKz2hQmA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E07 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zhOQSwpzYwu_VgpTUoCbVW7WQ8GevvCP4lXNrUdEi9YXAjZAk026UuD_6aVP5Ux7l-uMzL43shoAd8HtUqWq7A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E07 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EhxOXGIQYwI7GpCyIOxF5s9QnN7KPCkROCAGVtGm0xhGn3AVZHtVj3zvLGzyrMb-GAhnf9aawOZarS4WfHoa7g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E08%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E08 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=M064YcEaGL_VQCWUpdv7Hi03_MY5li8HciunGotg9akbroXmDLb9WTEhKLKoKGwxTOXae8xSx232Z471lOQPnA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E08 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ICe4iS6hQ3ld02D3exlImTfq8c30ZqLIafpW-FwjekPzZuLc7sxc5Nbc4uo7-5OX6MeOoTRnzN0Q2OIGHkS3Ow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E08 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GL88c2OTyW7_ivNkyB2UIht5DACs0Q28n_HBl89m3z6WyXaksU6BmwrcQcls1wWGeN09OoLtAqOdp7N3Ve80GA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E09%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E09 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=b3dl2ytAOuPlVjHSCrdcmS0YwAj4YXCBE8BzS03Mlpscj8kHYXc3fVVG-PkzcCrs31YxBt4iOzB3dShlJJqYpA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E09 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nC9r_nSNJDHwK-iZQRNtDZWMU-mIcfHN2aUErRN4NlNxURpwDBVHd6bKTxVEfuIG-zTRvWjzfiXJDGS3pu13hg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E09%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E09 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hMayRQqEg92-CvxJ9yh5kVGbUs-KIHZ92VRuofsYgwjkSgevb6poa9H-SrDJjtV0QGFTzrDA7y_AiBuqdjndHA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E10%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E10 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NCkg94pP3btRS5FPC79Zgisrla9znGBLHVncq3X0h5_Mty_67BB4NSSKIOWyKTGh8bWxJtCu8bhncHbY0csJpw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E10 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=H6PP6jeiy3ocCO2vQ9mQa5WO1wj-Y7GgVbmhwiHbGezVaRpE3DBcd4QbNkWWWHOF73x5_CciGLaimj4clac7hw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E10%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E10 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pHdfiB29YZUS-llN_VPqY9zgkfzhVBFWfyID35al-IZ0zXv85JhxN4iQ4-IuP8g96nszCH7EatGrWFX8JFXYOA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E11%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E11 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Yrb27Ld38eD71nA3yliCgJ2kRHu8zvhv48vY8VIWw3oCMPnN50tEolhyuIhZ9j8n0sKfOElJKUGDbXBOttvUJA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E11 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GMZJg0aDMD0_VSvJ_RMk6rI57nMg7bTpf92-kerO-ZjpQSTxK81VfXm2M5NmcaCP84_sYJ85W1a9yrAOnxLcQA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E11%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E11 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=H4iV6BZ5jwe6bm6ptvdiDx7K-os5JCHRmxMmp93wSgQT1j1TlC51PJSr6_VcqPSyEE7dIcflY8tTqh0haMfn3w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E12%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E12 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TucSNtXION9S2fjECOU79Svidora7s218zgkEEs2lKdoBNIqvaCYo0MxyiScmCzXGNg2AmbcSWlGPSmWs2kyVg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E12 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=miph8FM1jXt2ywYc2_Rg7niNdP0fkU77yHVqFu8FL9D0S39V4O35-BgWs1Aqqsk2eBfqfEBtk7mHsL74j4tDwQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E12%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E12 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=S-nbLrUCj5KuHD36rwha8y9IgylnI-wmffuTV2qnKTyCsMiY5hf7j1adgyhIni2-pUPZSgUBgil6pY5qTJNY7g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E13%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E13 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XkhDR79b2r90mm_AN9TvVAhPe5gRJovZzBVPVPmLD_AOdU9cEPQwD94ptlspIxhii5tTNGPSaZAFg8fq8PYPbw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E13%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E13 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jHOJKI-s7joz6wZiq8KnVggHcjOS6xmeLlHxe33bs7RrHabcfv4KoUkxnGSTszQdkqFVEHSTViby3ZkQLM3oDg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S01E13%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S01E13 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=guvfhg1_TY4EC-5RWAqY2rw3EM9-pjS_9KiX_WkwrL8NSZW59Q-IGcjCvKPt71gwX0A3kJHVN_zn57SU0sBQIA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E01 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WFgxceIWOSSFL5P89gDaHAKDjeoXnbC3JR7QfwykaoFyZ_UT4rqdHVXJ_-w-Jdi6hX_R8zeBBOFVduWd09OAhA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E01 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e6p12B8f7NkioWH0IXymTMb0SwHlzGQbJi9_KTKnbbVUdysIgjxItPuW0kApHRsa6r8cY_k5u1OGvxnWwuoQ2w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E01 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jMqoc0QFBZeDE8VOFa_evfYDDKS5nNOtr8g7ptIY9bLZ7pGsjxx0H3EFtkme2zMxddw2IbVqQBkNor9IKSb5lA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E02 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vR3yhxyC1W0PAwefGcMlzhSZ4Bv-eO69I0oIeZoZo85owztB1G08tGd8lmx3ooL-FnVNefFvHG_8aq42vM_32A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E02 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=scdbNLOnTQYrC35Bin3F82KlzXXPeroUfzFTi52hy61Lzx5aAoIQolZhceWtyJ7MG_v3pmFacbqLr6q2a73UbQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E02 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nko9KQpAy4cSqdm2T9ip6udbQg1yOvmigcpDSBJjv6YIHgw4qLWhSBChAtfevURIAqyCxAzbenCQT2apZQQjHg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E03 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AXrzLHlU5J-AnIpQ-MsnUBO9PGxYC1zILMEq852kw18UeVP7ro-IQmJ80ahx4iM5Jrnaa5Fb-gGZAyH8CEqSqw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E03 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-Q1yAPVvcTMXJOeB9U4enehGmdUiqOhjj5rI0gF8QvU01c6LST0sw5TFXTvnkShF6KVFLDqrp9DFeoSgJ65zYg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E03 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qQybXQbMnBdjWdDlLqbvZSFScYFqcbEK9rZFw5k_NsY6j935oyEaLoNFY3LtQBPTo_2q_DWjLQD5e5O77_emIQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E04 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GPPUFxsmIYZBZPHLeA5iHNIZZmjf1raDGgX_HpAlU8qKnDCdK8DJMs6JhJ7Qyqw6DmKHIFhLseCsTcQhURJwFQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E04 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=oN2eHVdXFseqg8RfhV9AC4r4AU-A6cGnvs26BhgNuN0bufydDbku2_M67Pv9MTkTouiOawuX60LJCFF4s2f4GQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E04 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-cxHGm9FXINy7QEUFblEGyhLIaS1J_QXo7-Timok4DVW7NBa7VZBsQ6cm10spfcP2PqIw2y2-AJHHyIyIg6BXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E05 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Zx9V8yQ84b8S6tWDlIBaKCSt-2hyYeavHhd5QRfgIaPUxyn8CeMQrG92UALuD_uVdbLSOI3jBf7nx14pEglvDQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E05 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vNmzoVrq7NRpFy5nHfyseR1gQaAYeA0ZsLD9q9F6WvI0YuyKR566g0PaaUg61XRtgESmxbc_vgCZLJbXVQTPkQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E05 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=j9nje-eoDVIowYX0JitLm4nXcYOeh-Zwbf_FnGMEYMl9dI7SJDy6y6W9SMoGayL0wB4Qp2xPttXQURqm0Jn3Dg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E06 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Y-KiKBvS6nb0MAt5kZ3aZ7Q4a5UnIuILHA1HPXVrnJc-k0Br42di2u35qCmD_Pk-tBqqW6oAV6y9LGO-XFpGHg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E06 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Z7Zcqb7iLXjnXc-weyrOeljuUgqXBcb1kcADL60LMsmb7i8HjVjqD6G3JzFKPQijeoidmDMpI5YZQhRm343B1g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E06 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9_hPoEzXfIU6lUMICg8uSuQ0NOgQPBSzr29PNdT0gyCj1P9GM0PxMKsF98rL-RG7Ve8UeSLzL7pVFivPvjWc6w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E07 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TPlhBEQBy6EY3PgREkkeqjp0a5ACWs5tImjGACIpYzL9N8zkFDhVXSkQnYaJD0sSZMZe-TYxOeqtzwTjcdQOWg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E07 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1vVYRMCqROUrIjVtnHZxQlPJJDgeuQEmscgoPL7WhPlZLk7iEtafQGKGDj7GaE0s9aRf_fZoBnNzxNXPwvldNQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E07 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Xc0SuE_5xG2IPwRATvIodX9xWBuf0h94xGUoRZ6oXlrBcI36wIWTLMBSZMU5oUVAf3MT4Q9xJ2_voFWhYcNTHQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E08%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E08 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vubO_Uc4mElgF9Lw9nvi-5CB_exMKOA3hZS3scXHklI_HGgTCBIgtNoqogTPyNskEclIn70xwCM3MaxLTIlXGQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E08 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gyrGzBNCGH5eUcMEo7QjK7racpAJ1kjaKqOI7ehV5NeIo1P6s2-rQOmoskrJfqowQ_Cm0z9o87Dz-EEnS-rxhQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E08 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gG3cdW1Xfuz5me_XlYEbLeWrxmv4HrTJyAFlQq3oPahs3eFG2UO-vCkLIhDPQy7cnPA8EH3hiW8MWCTMct9rbQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E09%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E09 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iISWUAZVYbgQ80Qdp5qjAAKnJ9t6IGjEkQWaXY--Mv4G4dAX2rNl70Nnqm8AgRJXUYoyp6Vu0WDTclsfE_uHgQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E09 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Vy-iA_ZuefM4tAtMvXS35vgCBY7rt7FXscTf7BI2sgdxhBsAex7AeoIx9gj9FczM2eMS3VzMKJNnmc-mVm7yLA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E09%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E09 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uIOoSKFTFVa8WiqWj0ysSGfLwoiIGrV8gNkkhxfK5GY-yUCHCnf5FMAMXm6vzwnViOwFft7Oqc9PibUDQTMIeA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E10%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E10 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=YqbQfvwBTLKCGt02EFNW2MI_LGgm4vaHsDxyS96RwcpcoV_PHbCxvCdsB8WnUg6QRR2-RkLZOxqHvfaMvJl2Bw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E10 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7IS1IO5R0PLdZXB3c2t8OwF1qws_VzTiYm1wh1yOU5Jf2s5U1KCaj8FnBVWGj8E6MMnjKLfF7T6lLujZ3eO1RQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E10%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E10 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=atdeUS6UNcPx4LhpvOtzmeC9wLqUo9533t-Gv6JDOEvOdkjEDiVidrFcSvsUqbgX2AQp9_lAMxpeqUeMaz4hzg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E11%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E11 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZviRBh9HOMwCKgYrIV6FD6su2165KzibhcIBAaCX6QUnrOiRhK0PrNnv8fiOqNYDCWXJINJq5IDj0me2Mxhi2Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E11 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=R9Te5jxLPE7aDrCeCLLDKZOCNmpgqFzVJ0x04KxQReRwTuwQ4BgPXXVhpXetg4bv8KkFALpRnk9-wIjMMi9Z0Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E11%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E11 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EVPU7mj9gijvOxvU22VEP_ScGCFVCGcq3AS8cGN25PgvUupIULL06IMQrftZA_afUzpS3KsTe4UrZ-RAd-yonw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E12%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E12 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fCcC82v0CBbG5vaMjtQICUiAjG36fc9HWjGVdpsrCDTabgsBDYE6_mtGji34RG6_SqWWgR8O_uGIUsmWrUq-Yw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E12 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zDTEVCUtPpvLS_VOpk6_Ru-rDEXNl9rAncIncqwhvieFItb7Xf12h7uxLxgukfgpAbx7wePPPvgMcszz-ljIxw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E12%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E12 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=q4lPR2_ghZCjpDHedFern7qEpY1G57K4vPAQ0SSoadB5SkEM3ECgDUMzVOSaWA5zHcXxK4MIlb4682pSAo4VVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E13%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E13 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=o_3FhwXdVhSlJadvKuprv7MH67CKhh8NdiQNaIJf4rdPn-VD1n27iu4rYG4q4Zri7W9gIhq4XrChb3B_fV0hog&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E13%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E13 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FpkLilNpwZW_7HxPjni096ChylcWq0r_0-GFIrrLAKaAdE8x9xgLGdQZwpih01K4y19zYHXsGKd2YySOaNXDDw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20S02E13%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest S02E13 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x14": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=V81WZBrN3glX1M4ovANb5grpB_xsaxwV9jaf_32n0vC7SVXAzRQ-8cI5-vIKeh_OxkasDX1rt8QDfuC54pgteg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20OVA%20S02E14%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest OVA S02E14 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1ML4QYbDulfQkT4gTpEqzyfcgoFV1EBRXtWkFl9_91TpUxNEm8uu3Mf5YBGBLmFwAwSAuiWqUW4dCQa949TuNw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20OVA%20S02E14%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest OVA S02E14 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FZTuSvroYMlpIF1Tcbf6gbUMHe1OzevdPiYtNKQ_Zrhp9b8d7svaIHAHWQ-AINrrKglD2OYdi9pPo2UEBpULwg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20OVA%20S02E14%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest OVA S02E14 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"arifureta-from-commonplace-to-world-s-strongest-s2-2x15": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rAn6oRgAd3MazgF9d81vueRbszGayar5GduAco6Fteo5uAoBqZNsisnNlrMsKIEi-R4Sgxz1aqTCMe-3WA6fGQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20OVA%20S02E15%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest OVA S02E15 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=aY-ltw3CiGUIRbmN0tpSJ6-C7fgUOayzg4PWhW2LvjJYGIGgm2RMsIia7HM_fq3sNYcxoC0O4zqYEUG9_QjaOQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20OVA%20S02E15%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest OVA S02E15 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=l2Q4Jg5PGzBzPITj43P9rHjv-RM3sd7iGkSEUsAnq_uXL82x-U1z4iTlnj1TVLcF1arBbAOmKA5Zl0rCOd9xLw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Arifureta%20From%20Commonplace%20to%20Worlds%20Strongest%20OVA%20S02E15%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Arifureta From Commonplace to Worlds Strongest OVA S02E15 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},

"chainsaw-man-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gXOAuaZeNUe6jQs2zUIvI2tgFqLTH5kSZvV4uZSahl_OH3xflp3bV1SKr8vIlHgeBiFfETv2AAF488ZcD1wB0g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E01%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E01 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xhInyCiEk_wyksyUrql941JinI5cUp3yiu32wKKnTu5nvL8XLy8hSJrRtgVb1Orn0ROMSjjS8nzoteXEC5E0Tw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E01%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E01 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zp409RQ8PZPdaqXnEFpI4JLI-TxDynHl8727ljm_Y-ikjgPB_7Rz7cfQSRRLMMiTudWDXyQWQSB7PK8xfSgYug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E01%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E01 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},
"chainsaw-man-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=H_o13FRevH2umlxkxuKM-fDBXV3QU05m6il_xQX-O62PWyMBZbyoOZy46UTf1PlEk4D4RKSO8dE0ymMRpZ_pRg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E02%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E02 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jASPVCOTpebs05VXdY8wx_iuhjjtfvTihJQtm13Dz0QSjKZkViuO52MI25EYKVzK5JdJ0PK5loLIpEY1WZMsVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E02%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E02 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1tMT-Ycfl3MSVBno8MAm7G4vQJGubJSjtgsPxi-qHL65SYHs6ArwJmNEVFjAKL4UDPVK9aedk-iPIPNwX1qguw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E02%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E02 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},
"chainsaw-man-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vez_aLkuO3XsU8OrZhAL_ItxPK4op0dV2zhJPJSOIawSZQ2xmXcaKHuV1xysaznTySxZaq6w5U4_TJVtbio9xA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E03%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E03 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TIKDTxFyZP0J_p1Jf4hhcD-a4pDsNx7VtNg0l5hbCwX2WDYt0XJ7RZjBj359gte5kfTJrthZ0KMmilIjSFdscQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E03%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E03 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=opW59zl4JxBpq65VcReljxrssl1LwTHZkSWd_V_ZOZCSRUGcXce443nPxHnj516hi_aCv-vi46prrRBE0kjmlQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E03%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E03 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},
"chainsaw-man-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bVzthi2Q2__mTWPBtVK6tm_cBTWzYDK6G2ehW9_Hb92GGko2xYwHz9Am9huzUIIW8igl0_yoZ1GFRFZToqQbWQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E04%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E04 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vAwgBmZtB0woAJURwzZRJZJyXC5urrKGbsfA67_BnZieH2b1KMG9WMEWwBbnHN1dOtcPyRgHS7AI1LTXsTvI0Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E04%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E04 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vEI5RzdCIzl7_kc1V-4CZMAUIQZjJsGnhvXACIOwbmeF5madx5tRIhJdgHQXFuVuq0ZknXSqVSrPK89hkfzC-g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E04%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E04 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},
"chainsaw-man-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qEQJNB4yD-pRs6O16Dea44adRQ1VEI5nRNk5oSqqAvQV8H07qoujAU0YN0FFctzkxTcPig64fowjUNZeGFwllw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20-%20%2005%20BD%20Multi-Audio%20480p%20AAC%20%5BEng-Subs%5D.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man -  05 BD Multi-Audio 480p AAC [Eng-Subs].mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9KoxycfjdEpDE4P9xu5T56Q_UlSVZK3-ezEOCsDUvEwKH2UgRqoRSqafQZjVo1-SoI9uFgF-2Auex4VonBGolw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20-%20%2005%20BD%20Multi-Audio%20720p%20AAC%20%5BEng-Subs%5D.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man -  05 BD Multi-Audio 720p AAC [Eng-Subs].mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=74xkQ-fWa1PIb8Fa4vtqeLq1iHl2nSXyflbrM4siVX7QA-dAICsubkkDRUfQEj-b7xzt2hB1e7ve9IsRGn72eA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20-%20%2005%20BD%20Multi-Audio%201080p%20AAC%20%5BEng-Subs%5D.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man -  05 BD Multi-Audio 1080p AAC [Eng-Subs].mkv" }
  }
},
"chainsaw-man-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=A-t-1RKYenfP30sDGY5z7Fh4RN4mVmFM9ZRUSTR3J6kgtfvfeVDpvsgvgWn2mMrX98ZbkGMSFxnuk_FT26rwGA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E06%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E06 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Q0AkdAoGSnhHkT-vjnRCTNwKjZ-epyYnYorPgcGeaCPVkf4zj7luxQdSWMKYlvYre_Zbz406fWuTGaMPtjIgPA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E06%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E06 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uqzYsdHbmCWN6zK98ixJrD8ZH4tVlHCd8ot72SbssBbdwj-DnPcR5Q9_9jya8y04awFv7kj9jV1hbKrrh4lFMw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E06%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E06 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},
"chainsaw-man-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_hOUUwQnVmbdj2JOV6mtXC0VkHw6LxOIpT2axJgYlH0vMgMMyipJyzxiq-cnxX4w9FtNu_x-LvW08uantGSlYg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E07%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E07 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Tp8R2iRPWs9n2Smjvl2M0UBYx7NGcCezfb3d-DWkbPEdZNCTRKpcY09LPnaximeCVMQzezPPqGyfNlWYVDIXlA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E07%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E07 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WcYwiJVoy9AxEi8FOgby10YwMiTGgt6s-D6Hb5ZiqYgt-cm_MoNzyJHKOi3aB-QzwzsxhuoDgKJfpYtk7paG1w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E07%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E07 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},
"chainsaw-man-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=CVcTrolNXyYvBTjRZ-I0RF00jobjJCSmYV5UZ-etk9lvxsf7DDELGIGuRe9158ih8XpONMjm5GvwDKprV5kjtA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E08%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E08 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hInCi-r1JFIlTIueZsTL001iHjhGtez4T8fc5z_J9M2LCPPG0Bv3CEq3Rbn3TjvRqtnj0OO_a7CC4pT43pEbDw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E08%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E08 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gA04UvNXo_ZfS7vgHJfeGeBPOYBe4eioUp_Sp9h0M9yGHH84EJQsHRvb1S0xAIDEITm9SStHy_B_l6J27zN4Ag&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E08%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E08 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},
"chainsaw-man-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7ZnjvnIW7Ww8EjB-bMP3TGjYII8e85jBbyGmRwkJhDuyDuOpl7WafS3Knxd6o9VAdGrsAtts27kOnGN1LZdzXQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E09%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E09 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IKS1Vvw9BCIebnI2cUR2PNUBgL_EMuxftUhtJh-jlktezQ2LAAAXZGgLx540nK7vsqM4jAXLFHecig9j8vgbAQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E09%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E09 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IcvyVdLhAH_D7h5bpdpzc3w6RL4emm7Eagfmql-S_prPwlE860aoAO_vA3jcrUysMM8xILPpukCkw5kEQLtAkA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E09%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E09 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},
"chainsaw-man-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=w8MwlwSQkXTTJkJ4poH5Bin_7WU3ud8G-a9X26zyhBzv0_o-I2nlLpiy9uGRdl5pWJE1-VWkNJDDuoqOVjQrog&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E10%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E10 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RSfg7peoFbaaktM-POdZseJQwdr_iu6FSnEtJFyjkMDUL2UUm4i_z5Qjo7l6g2PuEbTi7nuG7ckf3kaqHaNYrQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E10%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E10 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WFMy4H-h5YgsIeQdEU1CKBunUh9orOHu6G2ifdr1KHlEMmQPly2I5438FoR0q-FkD-JWLPcbEpI48f_g-GRrjg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E10%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E10 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},
"chainsaw-man-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dq7omG_4IJXeO0zVKdCHVrVcvgLq8Z6eukaJNXYAvHX6eEQvNu1_nAvh0uRF3g7cbjacjGyMKKOisCeU6jETeA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E11%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E11 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KexQe4gsXZkb34vB8SkxVAdjvSIlIstvnHRi0fOq25-Pyi311nvzwKWSY1ts_NbA2SF0k58s4fE6Nokc92kzVA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E11%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E11 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uNWg833tC0eohgswuyzAaRm7uAIAsIW3sSzKl_z75zXW7iSTnp4dcEQNFKe2AeLs676-VAaHOynOCj0J9U0Xhw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E11%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E11 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},
"chainsaw-man-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=q5Gwetqsgy5_QEZjYOcsBKp1wZAxhC76HN6UjsgTa55DQ1w_KTZMflHUjPYZNvspbGGjKKiObVTGjHcUEfEmSQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E12%20%5BBDRip%20480p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E12 [BDRip 480p x264] [Multi Audio] ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ifq-Sw1pVOnlc38T6YVmuCkehm6OOg9PyP--hrNjJ3jYv22waOoQ4Z_PKKAE3_Ig6zntU9mZZq7Y5b5Gz403CA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E12%20%5BBDRip%20720p%20x264%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E12 [BDRip 720p x264] [Multi Audio] ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2qesUhrM-PqoNgpiwc4b4eG665mWcGcM3Ao2UiGay84uQqE7oAB-66GFXYkiJoJq8u3p3B1Xw8bZ3T9a6tpJjg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Chainsaw%20Man%20S01E12%20%5BBDRip%201080p%20x265%2010bit%5D%20%5BMulti%20Audio%5D%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Chainsaw Man S01E12 [BDRip 1080p x265 10bit] [Multi Audio] ESub.mkv" }
  }
},


"captain-tsubasa-1x1": {
  qualities: {
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=c9Ulj7X37pVoCwIeZtHyydk-PgTerWAykNXmBtO4e_G5-K2-pEs2vJ5jx1x7uuCNbQO9TfSSI5-KDx6Eumy0ww&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E01%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E01 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Frjiy4XutaLeTE_ZRoN--y3Jdvi_yHrK4j5UD5S4RXUmMn9hNf9QM7WAIs90rsJZA9M35GMURdLq-OHV9ciRNg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E02%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E02 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tw1typqeB-Eu6ZsRID4sa-uxSjdObTsnNcyyX89d03uEVzygslAvAp_mVy9zYp_zhZcF0MKwlenerbYRC5ksBg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E02%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E02 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Me1jHvP_SLa9RUOObyqdUx6CvYeySkBQPFz-KXSEnTDqecifx6lOniBtJGYlUrvftNitF_zUakdlSA7GsxC3lA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E02%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E02 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gwUpXaYETfOWjFP_asU4jDhN0zvO5KtYQvynR35QFckgV_4KQh2a4DLLm3Usmv0GkSmxj85M2rIfBuKPx7s4KA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E03%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E03 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rolDrb8yWUOkSo_vf9m6qeI-Bqao9zrSZvfHXnG4asG_F8ERNOGk25DilzHXAsuZCM6FfjFfa17Lbd91DYXTlA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E03%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E03 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tbhATXeyXnen-XSReFrnQkGRgQ96Ynu90HS0ZFW7nT2M7AJR9DTQfkTNwskvOQuRyacmXAeMWWkq3ITYHDdKaA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E03%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E03 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EmVpQ00tl_4Hc4WIBQjC_JNmBqQUaFnlzoJWqluILbxGPNcMqNuDXebACVlEObG-9717PgRsHL5ZJAPAZoO2_w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E04%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E04 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3gR_sMASQ3XWsmuLjlPnd70Ia_6x-t8-__ChCdENg_P6GPnrbHw2Jty8wqfqnFsq4HFmLQ4yh3Z6xqTcTCVf7Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E04%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E04 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qiv5ip6d4cRlnN4NaVPtvC8URtUkgWD0oEMiyakiWSJV1RX2m7AntfufnX2FVyVti-pLzswH2a3yYa_JhGy5ZA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E04%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E04 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0o633bOCWDtqu7yMBhzkzliHZusb5oFk-EuHnQSOpDjIjOgJfWuIKMRi0ufx0Kt8voodvn0NXeoAa3x0ZznT8g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E05%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E05 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=slLN8CEPamxfj5Z9jhHu2f4TuLh5LucAa-jdA94AKg1YeMdVdB3TpoXhWH0Pzg3MfekDP7KlWCevknuou9N6AA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E05%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E05 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HEMISyiM4HHbhXDI2Bq7NGVyfUNjK5gPcyK2Y97y9kCLUj9ouwcSF0b1fabmFonSAZ1gR__PpWKtdgeVW-z5OA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E05%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E05 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qPIXkCaH_afpJo0iWUkAye8DWyuSrVw603Z1hwt8tI5SMg6tGy_A7sLtSaVYSWGQEoca2r1uBkq7FOMwYCqI7Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E06%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E06 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_DgLKYxVWzREFunhAIWuQcp9RwitWQLxBQi7Cs1yWUZ3-Ura63Az5k3c2BTDo6mFzpWhKyA7tHfp4tKfzbPKTg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E06%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E06 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TYf6ItQdn_twXorIGXmgNuytEvuxbruG1Q7MzKTkSddIfXy2n8fwEwtn5WQTEZPJWUJSm073ThSFb9q7ue4B2Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E06%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E06 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=YabODHg5FmUYA423g5GJ4UFZgIjqZMwtM0OV54UhDL2YlynJE2OpPTy1s1FpAZiN1oMhOR-2XkAOSN54rHU1yw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E07%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E07 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PgrCq3Ja-4ihyWMlQTySwwZVEo6JpcnSu7WTcHl-B_UMY97aVXdBaYSkswVpI5aTn05s4Ci5KGKvUJ-jQM0qXA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E07%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E07 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hYrYZSvV5ZDiUqct-KehzKyAwqpVFmUNPGneJ-KvH2Io9aqUXF62Jt3jIWWGIMwpRMsebHSg6fmfmRKpuAdY9g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E07%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E07 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HelO2gTpUDs_pkgSoXKfN63KAhkztp6c__s0NTJ8g8NhnUxjcOulkSv01Hkn3MQcBliD32B-w-Vfd5wspfdhzg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E08%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E08 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5fv4K6rN3tq4dWz1ojQJerkdHFC5Cfx9b66GlNx-ppBoVuBwMSpdgmGnlKJSCgdwR9CfVAB0E0G-be_1NO5IfA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E08%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E08 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7etRw08k5eAJSrFdz0xE8QNZMl8frOf2Kh0rJbE0mOlVgspNtC-5SztYN2oQlwE0llULxS6m_cj5cZyuATxgmg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E09%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E09 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wLsBkA3wEIZ2IOM6FpcMwuX0EcSHq_Kbv7I-C70S6TGbonWpAvq7bzJnd0AvZVrD1Vfh1vKtzdh2xsxW-e-szw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E09%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E09 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=36mam1nrTRZsquvG72sz6dYT-YfBnH-jjA5sKA1zpdiz5TUJlZ-ApkB7I7QkMC9-9RGN8Fq-ikskGxlnfkouow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E09%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E09 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mMY4Myl_xTmTmNJZo_wjTZ6UwJ2erbpbPRFu6FvorYfiJhAtD__VCaw44i8H-84kaIfBitL8h9IL_7mDothQ4Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E10%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E10 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iU_8DzgHiIhL_8eP_yynd48PyYf9LDjUv71p2HJmM0AOK3iTy3064eFjk4x9UE2cHxMIhdOgtJhh-hHvVolxVA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E10%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E10 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=M6-62EfHq8l3wTcA5hfVI2zW2P3H3i7OOSsTo9RT2MHMQCllfiRCbl9J8vR4wZGZw-o_f8UiS7KTr4LzrFB-NQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E10%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E10 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uLE-zd5lpVU9A-fya6cZghEVj9AUHoY1PicEMTh3HAVAwcRji4ucRPAtZvw33N7oe8XpkxWr3efRtcItk7IUYA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E11%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E11 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=m1dlvIJPLlsioA65gKBFnqlQWcve0V9JTD75qaUl6W3l9_5cNjETWWecUL-YeoTMVc6MoOTEAVFkkQFM3sO8rg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E11%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E11 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Mmx0hDQy_L6EpQIFVKsM6Cu4N6SMwxlgj-kmd8aGDLp6xzjBeIOEVgpvsQjzh8-jWElhvrE4onKBCK8HNDXeLg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E11%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E11 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wzaAvrdUXqf3gFpLsXH72oveZnL9jQ7hYq8IlsU6VEdSfjLhhDBUov2dUTokNzHBKmIV2LZfIHkh_gLbITwyLw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E12%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E12 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=n5qTjmaXnGDPgrehn-hL-SuDfiRasGcqP7_SrYw1zXTxam3Y_HGg4dLmrzz7JipktbjOFtLrcv4BXkIu3lIB9Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E12%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E12 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZmlDwnR0Y8WWX0rc2eEDyM64z3yVUuGoyXknWzRgWf3gx08uESYEF2mrRLeLifaQCV3OI-PXr239spm8-fv_CA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E12%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E12 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3aYqKGE5CtaN4C9LI0J10KOJAKNnjC6clM_wFO7hyl-nKmtgo28h1FxC7cZCem3vxSLajRca6zXyiLNdTSg20w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E13%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E13 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WHFEiYqISs0i9hvjKFwEOAFcc27TGMY3bBZObYL7qELgpDnebnPMs7DYUsFqu6wziyeWvEkzDV38U2TZFmyx2Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E13%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E13 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fWs9VaCgQfKD8Qfotya9zVAFrrLIZ_JnZRpoOzBSVlr6buXylBjxDGNTPNKNf13F2snTXEDc3SvK5QywH9UxrQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E13%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E13 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x14": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=R4DD2x0jdL546La8HIZJ655I4By4KIIW1APzlpttCsfLN5tQMyapelvNRUIwNrKKpUey7mAES3jqs7-Q4MMgPQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E14%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E14 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ReelXtIb3qLPL8zqOZGmDb8S0FYZ8UWMEIuOlZe6DQR3ghlRt2geL4krPoyDhb5ZxB6ofE-BmqhDh-AaZjv1eA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E14%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E14 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=CUnLAhb2FDVyeeA9vm1wbGA592XuuYCRVLjEoCha6BVUyU1XJbppmm8cSi3q-t8qotTc51nwrBf0bzz6-d6-cA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E14%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E14 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x15": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Lys9DDrmEafmuLp2r3N9nZ52pwyAXsqqV0Sxx68oxneRSX-lGJ50t7FSFc1NHSO4QdlOr8Sngi1JK7ag8oG2hw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E15%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E15 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iCTTZ58_cB8RmIynz6RxmazJODGxNK4jyncwFReqjg7WlFi0iwXkOj-uGNFfCBvF55S_rBLCxTCDs8W19sVPiA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E15%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E15 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Z5GxgrH-isJX1A3h0Rmi6MDFMKdXhjCgZvjdphu6O222xuJfzbel--jvXVQDXIIiyqvyKFXByDTr-rG9cud8PQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E15%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E15 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x16": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2R942_69-9sNyg6G5MgZSLVnPRI8B7qiRB7vCqY-sekAvafTM7UMfmKkaJ9Re-psS3BoruZ6Zc43rcpXYOgE-A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E16%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E16 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QnJZVmL0GrMekWMDw7116ygw2t_oZxlOUzg6y94ggWPK72-oAX6WTNQ46gSF3apalTgwOBT9isA08coiowSSOQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E16%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E16 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XAstoron5FXGxfN6mmoxIe3pjxyJI6sbiZk8B2CLXxfWQjWGwEgOuvH8k52PttgVqHHp3RUr_V-0dEyYmPhubA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E16%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E16 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x17": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EPrALeObHWcolwSNJCE4kvNQe8F9cNXoyj5GnV1xRmmaKFflbgMdmUsa8VT7Cvi_zOWNkNiIkTsqN0XfpsmG1g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E17%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E17 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=n2FqZROEWYCPmBEG9ybwfNi5HMrZZzDzBjvO6LsrdyZJQ6zCXO74zxXS63ZbfBnSQIJj9sf8vJ-F1fHmb-ls_A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E17%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E17 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=CSqcCn3qtH05xDMv7cHxE4FzhHhNQnnmI_pm6p9BOuyvCehMP382Wi9ORWujipjuWMtI0SM-YWhkqCOSY6fSAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E17%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E17 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x18": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hvrFDLmHLl-7FA7rRPn7QCdeJJ_Hz1a6tCUPgLRtzABZtuiqJPaBcwqw9M-8RLNF5Xl5Dqtm2bR0NC92oR8fKA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E18%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E18 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rbsCrpsFNzemp65WBzCUxS2MiUqirloORImlJO941IrqPPsVk5cFwKRBALMT-knid_BjeGhK4oUDiOvOL0v_Dw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E18%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E18 720p HD AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"captain-tsubasa-1x19": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IA_GaEWneBzcA6A8xa85cTPKunxFnZ2IieRKeVFxzazhR0DRKaSwZ0iwGs0oNoCIcfYWdn6Vqe9zEkFJE1Np-A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E19%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E19 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OCMUV13X1G_MV61k5EncyXKcICiau_D6PsnjNQ6BuubwLv1fbqeJ0GxjUmk_Q0q5gaM-5VvVoZSPx7p8m08BzQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E19%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E19 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zB-2D0S5AcMarBJJ8WoCAYIEhttpLZ0bA_uss84K4q--ouWLgROBpRy9wgcZbBGMLx5uuhS1lGbGzaGWuN6c8w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E19%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E19 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x20": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wD--Dlbp-V733FP2R3j37nPdyhG03zOgHTz8O0fR8iEgJh2WNbLtP5UdsQRhx-U-sgjKd2W40OMoflz7uJRq8g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E20%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E20 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=oufiT-6Yi0f0RF-F4KCSlTNo4Ie3xuib6lF6PrToVaOu0-mjjwwpoPskO7FOxCrYOyiICSmUB8PWANVsfBFZLA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E20%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E20 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7JwR4Etx__k0iJKYAFP4HgvRC7iMY8YBR0C6fTYkJ1254DJnIezFy_-wlgeYvXruAS75YMZlF1zom8CU9C5O2w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E20%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E20 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x21": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Lxo7YEM8yZ0MVmh9R0NkMHHwpOtnnW-_EGKRW3lefKzedjEg-MNycV_MOLH-Fduv0lHuAI9YiInxbEeeqz5avg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E21%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E21 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XX7r96soLYyYFesceTUD1ZCNMk6zlpBAsFmd4l6E1AqzzeIxdBm_tZQ4fFQP0o9kC6zTWgOKUUoeDIZ4q71H5Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E21%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E21 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=u5E-mpwiCjH6Y5jrDdRttsZtyNuQl4fjI-4WRSt15rnnFhzZXTZpg8_wJmpTVH2xPweE2bxCPZMIVwAW6TYo-w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E21%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E21 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x22": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rBlH6sVDoNzzQoJEUivqgQD1X6Uzge_WkvHzmOMOlVIPmIB6xJy85YnQ3OxkOqQYScjon0b4o_QNAuSeTHk3yA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E22%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E22 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QeJfh0t-MaPSVbVsoi4WM_RcS-4gLQ92e5MLqX7aa1svjtU-TkswPmULq1biKnaXvE3LWUgc9xzzOAUf2nJU-Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E22%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E22 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=oIt_41EqY48RLzk8Md1d5oZY_gR0a_PRESMcC4mepGn1iDPUPxROYigEfELG2kBsE6S6iT7tPpjPNRmnjypApA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E22%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E22 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x23": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=H9EGYemSgUC49EIHhV4xgYjzoy1ZPt6iP2F7WIa3k1IQI5cIKjdGk8zsAXNHwqW_mfuRax47yB34N6fh5r5CCg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E23%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E23 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Rn6g-sSn_0fNg1H9HSysfLX9CEbHGAdVBzdiS1OEnSVJ4-OBjCns_vrnMIj9LOLGGP_1ocoQBNld6XLlEU2hxA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E23%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E23 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gsoXxcUyzsm17WIXd4vyJ_H9YqQ8hIoCkc5_9pDqdHme5uz1ld7h_DJ-wqKEpD6LmRzn9J3cJYCJjAwzYIFpZQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E23%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E23 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x24": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=r1O6adWj_6X-MU3fYvbRy4QL2X8wQqbQfmpHCKkrjYVNKRYqDJ7FZ9qxwPG3R0NlFTiVdlhA6hzYGMmnWEV9Pw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E24%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E24 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QFORV34StmcYaRphVebaw-1XzkjbLYA99_Y-VW1zHzhunfD-aVqbhGYt53RTddPpIkFRQ4HUp-EeN2y0Y_X4rg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E24%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E24 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ml_RhoxPywAGJieCp8yCq8o4ngpyQNTnmyIxoa2XjIq2c9za10_8QGvnWVA-RpM6U72HS5n84TGyEBvb0SptGw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E24%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E24 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x25": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_TQ0W1lTACGOGgQfJm3qeQ8sZBpNV1NkcSSefe6oMbH7VDlcrHuG2wJDZPGxssz_Lw2bf-XMAqU3yHCrLva4cg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E25%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E25 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=60pWgmvj-t6IaKPQHYke9fiTrzpWE3uUT8M-lgcFc5n4FihDOOE4WdR1EdBiuiKWFLcVRzigPzY4cBKCm8i7Ag&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E25%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E25 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=p8KArsV9-Z-82xCydm5p2ADslAV3aDqGd13pPq-_gX9ydxuQn2p7xZTTlUE_Hr1Hv4D-TJd0suD0t7BeR0fUvQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E25%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E25 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x26": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ULombnEvkNO48g8_S35zSKXOjhVoMeFOjZBkG_WtWdSzvkTPgyCRG-Z8gg9Fwm9R2ASJmYz-uUooThNVZs5kAg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E26%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E26 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pHYFwgJGHve7SSkiy1VkV_LJkt_O70dLo03175wyb9nQE_ssGMI4WRTyGLwobeG_8VMZOLUccoyVDaGmQ9Y5KQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E26%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E26 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3QkI2u3nUXpIaspjozM3Hv7A3dABaFOzymTh_rZs4QHudVH9cYEbdMCDSFEjOVVSa07eF0Navuv_s7NVzWoOow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E26%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E26 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x27": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=49Ri31wQ-y3VMNdGIAeZ2GRaJrfxscUYVge_Ov7Oq2dchpXrMPKJhebOg8YD6O0dWfOctQcVCcQXQwx95zahgQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E27%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E27 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jPsY5ZvgxbsvAR8uTJ2DP9ILDU0EnFicdgYBq1KxlVQSJ_TODwE_QAfnK82gyGVj4q7eZwx5eXgb3xi46T4vWA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E27%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E27 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8GabP9h57ZM6um5fsZivknheQ2NXQWA3kew2OK6UJBlP2aLXarWGja5k2DtYOkR6xawIIthfNK4npa5jH7KcMg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E27%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E27 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x28": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mgj3yEdWbmWuZyEGm4vd59LNOPNE1ygcJNuFwAaN-bURd5hu6xoUgzzhVIMH39RxzXjjTjDyyDeh9n4CKDAfsw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E28%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E28 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=kundDqM_XYgYwFPU5ARfbi84GIQyukZUc2l_g23Q8aEU_8UMS9ODW82NeOiJ09G2ldAwZUvgunHzwqMhaec8dA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E28%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E28 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0wrm9bBwKbg32rifIchfNQGGjAIvssY01H6ZAswxfY3rs7eDFxKTwassV9KDKECkRcbbc5oyBMvaIp7do7xrsw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E28%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E28 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x29": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6zAxzjJexTM960OUi55a3c8sOWp62VOB4C0OVa5PrvKmipv3mcoZLscZ5d1mfVYC_IqwE-9rGfvw30ql1n7bkw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E29%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E29 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HaYpEfBJ3BtHI4GfAhF-iaP-FSArQ424NLUeqHCgUzQC6muiaJRksDOtDYC0qSKCeE8jwkI6Jzm_MpwlwzxnJQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E29%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E29 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UqRtbtYOqt4JPrxE838FzvCMQFUJg1kDIO81EbBOTUt-9w__qkeh1uSS7qE2DRvpmKlgpzIb_wSkvZJkwLgz1A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E29%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E29 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x30": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6KVOanJN0SIobw5zCd2cvjKvo--5wJ37zoRggueJ8qNOKNhKglY0ZVYBSJik3snr6nEzGhcTN-YUqhxfbKQm5A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E30%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E30 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e_XFCNbbh4x4i85_yLtmSQDdyMzxKPbgI3gj2vTYT4Bc6QXrTv0v7j5DEfUZI5FryGZJXrnAcqa64opaGcbptQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E30%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E30 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IeMxbe3Jdl2a_5drakpZYJ9A5G6w2mpEI0NUiGJT32HUW0GFHcJvO3KnKyUDQWGvtK4toX2o0VVK14daMmcX-Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E30%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E30 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x31": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=D7kjJyEJnxdET7HxpNFzL3AJGRiyoheoxXyE_TTIpJTwJRbwHVDsiLTdBeqGOeXGNn7ZS2thpmhzCugJreennA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E31%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E31 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JWsjwVIaUuXuHMVw1ZvQ-lA7PfcFRV45xYepoeae3lKCUbKrBS-RORRlANOpP1_rKYe59zXBo75251h_MamfNQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E31%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E31 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VYwNCOAxL0BaM7Xf9vu9pL9CeYAlvsWnc33kuxzL1e_23ymbKCna6OTBBPReLV80E8Fin3RoI4QgEyAN6p_LkA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E31%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E31 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x32": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TTFxunMwZPl6JPv2jsI_Ew1DJWp2AZseYV6mkrphf3Cha09c2teH8kvmENFWAkZp5nVFrNRKD1azFwzi9ONlyA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E32%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E32 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=kF1CUkJ0WmEpABitAY4TSx540WjPrAIWkUa09In29mkJxNb_KlWgLY-rqF9cROFizZ6odO4IXYtQnjhu5kZ-PA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E32%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E32 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=F-0gvftsP7ATpI_FaXeDxc0nZl0LDioHKujMRmsEIOItUHnNXnZR8VBqhKrR4XmMcm4dgnJIdX3yLclis1jZPA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E32%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E32 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x33": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4teOd8DAHhxq4GcRbKT_TNWhabGLg70QXoJ9jY0eRoYCCrc8Sv8eUHb1cDE-ZQ_bjvYFazdotkUzj2_GLwPSGg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E33%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E33 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gvpQMJkL340-P881-VB2lTEveKdbAUv0IYqNpvB79bpIFYkzpUMRRna-TstyhPgfPJsu_Reo5NjLzXSQNJ1dHw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E33%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E33 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=DMrsuBz1HhhaFRtxwyb8CBXau42BeNXUoYNFg5Chx2HTn8ImvaFV1MRaJM8p1dteJkJeYxLSDJkX2P8Feq3gxw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E33%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E33 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x34": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Z9i34nlWFD36FtbQKrtcJhZZnC3ke40M0bGSDvkBZLTjFHnT5trl9srHY0KEJNMfbkgrlKCu18apq0r0GUhVxA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E34%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E34 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wLZ-5R5TJWmvCjFMFSQLsULAm1v94WQ6SaXWxydoMfKNgoy4BJzAloMF9pQJArHr5AyaX9xwL0HbBdoR98sgdQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E34%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E34 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-kgxbqUxXCX6vLZAf6jzlLyr_12dZVqc4ukJU3odGJ-OIAOBe5ZMnOyksGwqItdSexCNKRBRe80R-kcJOlPI-w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E34%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E34 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x35": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8Hs1cIXyHUGGN6z3LcQQJdrt2OdkHl8ZYAlp43sANMpDKMtX3nggKNYiSBtQEsWX5h55EKvVdhbdFsEqGDWQOQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E35%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E35 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hF9-y56LthT_iFbPwlJfD0yHkhKBvERUnKaBVhHSk2N5111SDRFNy7fVl79gcpZFA6Lj0yxHXM2GKTjntMqcKQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E35%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E35 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Y2jZVjRVG9T8mfpVyzDr7QITeT1cJWWzq48Ospvb6HMSW8flO2rXlomu9a67lNt7IPwM__a2FY4lnk_XA2cRZA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E35%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E35 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x36": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=98b-3pr_ViB_6sgpywxXETC6pBWdAhLZjQI1MueKy9T8I9vXas7I_0ZnWuReDccdZXBpbLGwFHPSUM72QlgtOg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E36%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E36 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3-2mxsNOmj4uZIIlOCxbi2WKZBxxfwCn20QPzMNy4e_utM8ckYOQGKv0tW7aIBUVmy0n46HJlkqZ1qQx5W-NVg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E36%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E36 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PadAgmjcKney0KZl6naH33lcNCecgvJ9nzN_z6SYbOCeL2ikbkoZyUCL4gj6G-eEesrzb19_fqKa7Y25508aSg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E36%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E36 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x37": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=045_ukKxloFh5jeKD9cn_WuMjs-AQe6Za3eOj2aPOapcx3M9IU2xumfUhAIVhU_DzE3nvlyz-MFbPRie1PJuog&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E37%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E37 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MBNkv1uQ5S_B2idgXtAW9qxgDhGrcsfWOteIj8rQg0vNjXZUUjtpngB89D9jge3KoIPeFo2NBJocmCq5r7gFOA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E37%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E37 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SwHVktwkPiQh4Zh8N_Ah_k3r1VnkQ_YcRDhqShsbRmJH7RG1HCWTGpxdaLKBn1wESBJi_zGFlGPgT4YxLDi-Aw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E37%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E37 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x38": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7VbEETRh54N7ukI1MWcuNXs3z9l-w0Rjzs4tCGVUdZ_epGMM5BltgTgr3fP7zr-2yhMRmuBIltOl7e4uHrwBgw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E38%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E38 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=X4rlzHRrZwdpRV4cJqiZoo-k0OCoG-KgCjUaoaJss6AAJZcFOzy6Xr7othmLC5IJaVRKlnk8pr8fsL70IpzDOw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E38%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E38 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iOUles0iGpQLbAScUJ99J02nCeCfyvyIO_5fa6qH3ePpOrlO4UzIA_04f82_Ux3ZCso8HD3_chlSyPwLGsq-mA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E38%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E38 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x39": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_GEQk5AZYensmnN3vy2wBTmr9D13pkuFW-eS3FLjLY9pR8QaOMQhY826gy4LoDUt5Y5xgPhX-LtC85F2yrQ6_A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E39%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E39 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PpYxOGEEEY0h0amjv-hpVI1wEuRBf-duP6fHYL0j1SzPbXb-7TuiZyDdG0izqwQ7-anL7ALsr-5u94Qs6raLwQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E39%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E39 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=S2hwAf8CF_y27uwX6M7aAgYPQnMjHjaMrk4OEUHDoqvlZmWHmiJ41S_WLFFo-c6dedgxG-z_pA-C7Dd1rLOACw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E39%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E39 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x40": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WvCwwOKK3lnlu3xT01y9Tp3Y0h7JEyfO6AOEpX0fhR5ZRIW3yLIUv4vR6R1IPPjbSFDwwjiUbgqb6wb1E-XXkA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E40%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E40 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=W0ucebXCo622j2pyV99A4Z5YY0qG_q6xkg-kmG8LCjGaYv1n3yYjyIY_xm7XBdO4vCf-364QV9TL53r0CWH5MQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E40%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E40 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tU2UiG4szscua12vmeYOpHEE92szzAJE_e7RkjFWT1jFB5hkZsom6m1tqM4DNxDEbmqHqPZi2OkITLZnDDofEQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E40%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E40 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x41": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=oL89Z13ZhmGlYcB_VzUrnlRnopR7-_ujbPCvGRfUBu4puVxst4oIh7iTbSkrWbAzM3Zqo7ZWcwseVt-lhWzFtQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E41%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E41 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jQk--dLg1HytbakQBLyYxItGIw0ktxu1CEb2RbZetRQJf15J5URzHiq2c1jKdYMPL76i6b0FrDVClYybgIbDlQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E41%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E41 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=g4e0A0C2RBjYYNbbr-PCCYt2au5ySKF7v2k-NFBEALvV1UaHn0-SXD_pHHYvnl7dwtDQvlWGokV5XmD8I11TiQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E41%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E41 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x42": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=V7foFlacRAdI7bZC2IPVyvQxuXlmgqLuTCFP31fjiwAnCeRRYp7TXNkI2vBqNVf-XNObU0lTwbt5bjOrqw8u_g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E42%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E42 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HlEfkkr5s225W3Wm_vyzxyksOdLgNQuPsg_vAkqY_rnX4bIDAdEcokpMh3eUFBEHkPr0QgWFPVjN8F2xQBSOIQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E42%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E42 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=W8UgueL5zJYpWDaqvdinUCX85dNKMCYbkFbUOyIl_ONhwI9YUlPjyY9FxSmSVjqNJdda_R87ivwBzgR77MjmoA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E42%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E42 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x43": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cxTU3QxCaJA5FrYPYtv4W_TAUhVZErp6XN1-sGBQdcXhrXvEt8G0SJMRBO4-rBc0rgjtKmJ3MJTCw3vYk6xlhw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E43%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E43 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Gve9uMK0WDlo324NV5VvWdlJoDggf7_xZpcQKNN62QmZ1xu1yxGlQWfGeUggmCztB-Xmn1C9Gb6Ahwi-QIvr6A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E43%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E43 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zRq88xyES4N-VB9CmwgFEFamXLCsqvBFao__jTp4s3VMPJ7frsxLDY6_T5t_LcrPL5K9KrdChJj5ZaVcJpVBfg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E43%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E43 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x44": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=aGS6R3ihpZW77y9waDBhqJmMyr-KtXhyOOpZ9TPbXZCZt5CELdfEdAUYE_owz2OSocu7T4LwebDFtOuolbPbDQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E44%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E44 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Rb03XoBt3X-8IEXlBoX9VKMkD81pazLuZYDVV9BsDurgYo7ptqoyfo21sXbp7MpJayyzs2Xlrh8tcgE88rjDHQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E44%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E44 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=oXhgKLAa5dFgSLFoVRMrwWgY9JbFlFg7WAxfDAO92DZUQVZI-xqFtBYA1oLp1OEPalBhUXmKLsAn1h15RQFaiw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E44%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E44 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x45": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bgLn3pdkDe39zKgOmpNxvFb9BuSwTfcLEAnkdDRo1mkll5JBZi_y9qqizLrIuoqHlSaqQYIvtc810rMXlDbR7Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E45%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E45 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=R_sQMHIZO8BoQ1plGqi0aSUABLRw1oKm3DnkjSuVLPS1hZnPe0_jC4FBO-frB4KyErZaO3E-J_9_oPLSZ1Li-g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E45%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E45 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jpnJ53AUI2_cMY7WuM1_uUN4WcLv858H7QsEPmEVLRAbgARd-eIK8eeL1XZ81h1c0yBXMqsMlrZYoUXPc7mrBw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E45%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E45 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x46": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=98isAMtMB3FutamFu_egySPtTgaqnU4nlUuzmBP9FOjFQatE8UzG5FvMyXVzYQGbuRQ-TarU2MnVJSR-OXKDVA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E46%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E46 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=l10refcF7Nk4GMIUflxAZqrS5PrXpJrRCqs8oVgFdgAXg5TdvNZr3Yncs7bkLGxEWojhOiE2bElUT11oGq0EUA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E46%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E46 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Gtq9DvuQ4F29tnosoNydO2cgFokSQQLgtGZB0NMzHuEsquNcjxF2DLtsAfUmxu6uSCw4akQY15m_-7O5WpVVeg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E46%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E46 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x47": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=g71zlzSZVTbZoHL2Mm4mGMS3kHa6RmZTmcwx64Vw8H8zQz8DuhhkrihnMrqeTL_nfUWBG0MZPGkcbcZRaXEmLg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E47%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E47 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=T6VObVDw9noblPWSwyod4PaXmQq63xrijzD8wxb6xBJVstULopd-uXNhrOzk204qnmm1Eb2vUEVFVv1tIP0gVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E47%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E47 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=N6M8Po1dJ48MqZAgaXLOLY8Q6Elv-GX1GQtZkOwQqIRKL2hvUFC_NzAq8WBEv_b1U0YGKxYDkFoUOdvQXopECw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E47%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E47 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x48": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=j9tn3e9tO1YR6VHakNr4Iyjbs0rtMYW7wiictwLr4Rj8YY2KQ4-XnYWEJNMUsgSV5Dhr249GISiWmeTX10KfDQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E48%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E48 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IvnjRz0DL80d3w6v1RGLzF-k0aJVCeZoxS2HZNXPFC0b3Fo_DA68AOiEktQxqCGmFCAvdOdOmTE-tJMCXcomyw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E48%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E48 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ParNA_hlCF8xSll0pZuTZfFEmxojl6utLRWrI-7THxsGza15P6RWqyK7pUWC9kuYXdKRF2eOso4iIjsZdIFyMw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E48%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E48 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x49": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wqtAlB2h9L1i7EfCZB-2ltIJkaBLHk75IezmTeJV4DSp67qAt51shHbpSXabptw7Zwc8ZzSPqaGFltKKc9Lt3A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E49%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E49 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Lh9lXPFY-u3CLEMrZu96R5cHwmKEAcMPDtb7drv9biYRZ5x1YV2j1UJ64zTn5Zi9V0EqAS4ULaK9Uod1637CAg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E49%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E49 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7iNaYwjVsMRCpsbYUrzSHobj_5FC56HkwesCAOI9siJcHFHQXH_On-sMWFAd5VN240Z-fqidbDnWghUXPymcKA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E49%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E49 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x50": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1p9HZ61uBgRNf4tyAhReM216mRo15YsBUt15Y35J2e4V2tOj7f72gNUFQ93eg8S17-gQrNxq9JO78OWZlEuXHw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E50%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E50 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=aYYRviIMnmzEK1iLXBMccN4wANEL-tQzM6XYxO2I9DtBL6dCHInm33lPRu9i5Xyosg9Vtkck2inps6n_pVGlWA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E50%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E50 720p HD AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"captain-tsubasa-1x51": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=E_uJhIlWpPYH2XiGmfeZzbREdTNZfoqWUE5lktkewgGIX1w2pqayNli5GzKVDhnGGjh6yICF6p_Wkji-tTXkkA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E51%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E51 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=c4wm0IagRRU7h_umpCD2NbY2K587NNjS54mJYQmTRmOon4Pq2A9vumzRf-dPCKFy8gsvqQEzXCn4vv0qqU50WA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E51%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E51 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Wz2MdfHY6GUiUt7Ch7NSapGR3E-DahhfhWavcNRJ9AqPUQSKlvH5h_W1Coebi0jF6qthUKjNBaRu0ICZFZO1xg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E51%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E51 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},
"captain-tsubasa-1x52": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=exGVk94jhMF7oIgX2yN6SmSGTQXVsYPx0WohYcX9L1w8GlLkMzp5wjHx2t4ikh73M157Dz9as_ZZmFVN3h5hpg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E52%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E52 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gIPSCCmHL7M1xiGM2C05D86-kbbaiKx7TSnrEC9rRAdr3SBkSubI63cIxhRMc1j01RvVuNKi9JsE-j1tifDH0g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E52%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E52 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=G9z-Pt8EKeu-jkAUYl0Hh2pzVesoltE7AVT6gg8PlbaxmWTJQmfftLIFB_XbPqERvEjfLEY0llOPLhug-8hjSg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Captain%20Tsubasa%202018%20S01E52%201080p%20HEVC%2010bit%20AMZN%20WEB-DL%20Dual%20Audio%20DDP2.0%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Captain Tsubasa 2018 S01E52 1080p HEVC 10bit AMZN WEB-DL Dual Audio DDP2.0 ESub.mkv" }
  }
},

"re-zero-starting-life-in-another-world-s4-4x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZHw7fmX59SM601gSb1wsLwzfufaWCMzBLIDlTncXHn_mZPqh2CveVUwJKALbvakP_WkQqbHk0adwxasaA4v7Pw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E01%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E01 480p WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Hd9a4oBEp5aPfao25GwXgwfSBk3w18p6pOzccJRBjfy2uWOQJWgKM-QGesgUFwDkinE9EeXbPoZxMX94q9qkdg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E01%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E01 720p HD WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FlwyF_LSyWlgYrgI0RpQcCno9OfoWbwlTXGTRMdK6ZD5Cva9lUW9YN4sEx8Vti_t08XbECRmQzalEkcRtpUohA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E01%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E01 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"re-zero-starting-life-in-another-world-s4-4x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SoVEqR60_1suMCdg0HNvQ0Md2SDyefR7y8iHnESPUZyGC2uT6-dgy0MI7GgqnpCKJNiE0MPbp5IZnGgzDbVjcQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E02%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E02 480p WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7FQPTC3Um6YCZq-Ke8bhBTKR60Kn7hoz1KI2DoC3EMg-ESrO7v8Y2v4IcKqIZYC5gylTRPZZooF3vR8AfBpjMQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E02%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E02 720p HD WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LpuJRlrElh-bb0FzA5FtK2RjBcIlPAFs3pLRJujBZ_trKzMUXqoOzbfZuiJDoSSIhTIa3E6Nd4jshkJyi0eVAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E02%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E02 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"re-zero-starting-life-in-another-world-s4-4x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JIXwqXsMuHrblM0iroCLp4FJ95DG1u6GXsIxYbh1hf83gF3i1BRT0VI1V9odQFBVJZZk5XyAkUe_Z5SGmb2Elg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E03%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E03 480p WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HZnrgcsxAg1UrGk7bqh9hm35PQeCHn6ibDaJSQfVT8o8yzfVXfWAOru2OyaDTDmw8u2gVBlcoMLBovp-CPhQMw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E03%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E03 720p HD WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZiMCC5b47dUIJwQcEV8cGGFHaXqwX6nEUHJWBHKsyvO-XFjPv6ej9NSu05f8CURZDEjX6joSYFdIgEhBwXjX8g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E03%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E03 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"re-zero-starting-life-in-another-world-s4-4x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QFKD31YI4DDWfxBUmDJ14Scqy4CCvsvN7YpwXom2aObvnxBXdxse1qvNpd1thEq3JyhVr5Ki_FPArfvvO52AiA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E04%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E04 480p WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fEwcmXrN46dyHpn7HnBTMpRnlqBzRvU9tq5Yx3EUPJiRwwhPb5uVHl77LOtBY0HQFJokGEIdkrjWbFcSKkhwkQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E04%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E04 720p HD WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ibZY9rFo2L8U9iQZXblDuB6TYXUZHoo1URx3OIsK2cLqJ6vpojGNoUaGxhr0eIkPtU2djgSaRzx-gCN5aaGh5w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E04%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E04 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"re-zero-starting-life-in-another-world-s4-4x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=T4ZYiuYWxDJQCCNflkoMbr4Y7ec7zs2kEw8zoeRWQavR6lQZeyzdIzRUyIzmxrLgcwwWRpqgEydcUTyji85Ffg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E05%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E05 480p WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WtwyUBi2BS8lq01F20ci3F0LGoRvlFfNVcLqItnabBUyS2qkgYegr9I94jSMjHUrS5w65ef1tw5wuIHWaJ8b_Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E05%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E05 720p HD WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iqf_ufe-kbXfGptLRzJYIdjdS5OyE9pwSRTRlaa_c20lQ8shWWHDW-8Zq04HM9wMuj7r32wDl3gUuqOilu9byw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E05%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E05 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"re-zero-starting-life-in-another-world-s4-4x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wGWxWAI7nNboGK6LHVLNSuumAkzieW1W4wQSIOkSCLUHeKhITsf6rsiTEFbDt_HrJZRd7zmJqqxbyKqV-ty2Vg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E06%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E06 480p WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=T2Lw0jzcYgrFXSGR8hEnnZNkxeUCKNZs1kHIbQjOxaeMpottdPXFoytbHKa0Z8V2sjFw2MMuiRPf54VuCHYcXA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E06%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E06 720p HD WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AfTqv8vy1TppSo2tGtIGUPUkC1OAxfofcBfDSAhFRCWPgCT0XoiERq42Ws8H-5qifMTfTUm0Jcnieur4l6BhBw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E06%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E06 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"re-zero-starting-life-in-another-world-s4-4x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=lK-ph4TB8dom0E0DfVQueLgpZQuBPuGZHMiCBTtDRbhQ0cFsZOGbsoAfiTfyvdlG-8ellwdSUWWy-J5Sqs-bkg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E07%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E07 480p WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=c9xuOZnIOMca3CHRUa4aujbnFITisHvtAsEPan17BGFNrbIQ6bB6LztGlM7gMWndAZ7kcSP83J4REciXh2CFRg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E07%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E07 720p HD WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=A3LgQ8rL39zePZXNlUOrEvdqVQJk_ix9AEWj6Fgs7pJ7X9p_65LDnnUg4SKyF79P3zMCDvFNJ_2sAUCOIIidRQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E07%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E07 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"re-zero-starting-life-in-another-world-s4-4x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_SWhZFtKEKOSNbHAp265vqf651XlyG6UslhiBCT9jV4csodIcCiyJrmq8ibi6LfVuDuYOriXyc8UmN7OHH01JQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E08%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E08 480p WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LntHz21rYsdsnjZtu53RS9OkP-f9Lu_y4TQm4dRQPQ8vYBo5WPRv76_trymjW_mVHBCfIzG3fmIkUOxwmXCiSA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E08%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E08 720p HD WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Rf_quPKMfVTbl_i3-mpvINBzlpY2jyu7cH4eK2URlwM_-g_LJSADtG00tsH-qTsidHLtnokUk43UIBHhi0WSxQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E08%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E08 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"re-zero-starting-life-in-another-world-s4-4x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2VBkUbY3bW7PAJUgWm7wFEVTBwRcw_SfxzBLeO6xvqJqmUaMug-TUX_2RvF3C89zdWDYZ1VFDxH4EHqR6KW4mg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E09%20480p%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E09 480p WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6mAnE_8m7C4oDQZ6G1Jado79y8TlCG8xqZhEwWs6TCwDRwy1OyKAoe3sK8WgPsZYtn-L9qkZXiZh4fQWtO_o0A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E09%20720p%20HD%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E09 720p HD WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9XJuL6m_fEtdzRGEuaXMFWMAphhsk4UUwm9yLWD_ZISxGzOJKsfaZUS5_ap03bq_G6akZ_ap0X17P50gMpDoUA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S04E09%201080p%20HEVC%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S04E09 1080p HEVC 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=b5ec03w24p0pdk6xSrFrps625jLbFBYUH9-eew4ZKFHAlO9SlG2dRIr88g-1AckASWhJO7gBpU6wQZPeZ-zGow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E01 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LDMyhgOptu0TdZeBJc8qZ2jl3N87sxAuoUtq8rToqa1cJmk8dZitllkHetmsLlEBH_opjtOCJrLzyzWQx25K6g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E01 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OQk1bNjKDnhwrBOg1YW3Wv8iBUJtW0ZBGDkv2PSptTy4jyBYYXSQy2ARkVTxkTsdits7merLl3XOtF3knmUjnw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E01 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=krA0p4WdCRs6GMjI1Pv0pOZg1xRp66MpJqeDfcRwAKEyzu1qEkjZ18_j_NhrznOR8kg5b2QwG_IOCvvo6saimQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E02 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZLQL4RMl9SPtNkW4-2tFssL12ujtEHvxOijUdokpr12HclTaH2Kpd3cLrccOng3k3F7WL-SM4iIXl0gzXtXMEg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E02 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=U939G0ow11iFvPMkrmwXQgrfVxhZ3g28WEwQPz2aoygYloL-flWPuppNOWa4SiswSdedvCreQ324EioW_AFtIg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E02 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=f7GBVamC2xARFRZXD4_hAL1MWHsl8AlWtAcUpGEL2HI2iLyO6C7iYVXeG3xWsXL3uQ8k4Ok1qr-rjtHHku87pQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E03 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6tqGam1n_n2pvSZlVSUxQ26iIvXlVbn9E1Gsr5IuqjfnEVQn-Htk3LFCJkWs_y78o00CtdbR59Mrwb1Sktz9sQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E03 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tdAoDc2coN9PNu2pN1lC0DEicSTm1DIH4LzFTKHgaTZhEukrUDa_ETF1WT62Y2M6m87ouvf42JmkT5grzF0iAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E03 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zBwpWHtazeMH4dH0gsihfapivwtbTj4KuDsFJuTXFeyJ1vF4ySQgxTeEbMPZXG9JCmbhNXfc1GYtqgfSI-qu7g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E04 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=I8Xta9-L2Mtk8byLN86gmIu2owZLVsYuax_vJftyMLF1S-nHyoMziU6poy1p0Crx5LTm1yeHq3hovLcsIXUhuw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E04 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rS1kHpxdXuP5W-yPqhQFq3hJb_zul2w2RoSSC2TBUSimTDDA_ewHkFP9zANFy4tIdicaHZfMeV8a3iHk_-M25w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E04 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AzvRXTZSoN--S2XnL7HTv7FcRM7HCw738gVz6FhUIe_vup5Ok05MY3Ep2FRSsZqoqFxK2wJXk8boD8KCMudbiw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E05 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QGZ01Qxit9F4KUssqiUhVqgWMBOEK6Hm2zUb7hu6U6sawHl2YI7PDANXwVuUatrL_J75XEmaU9eFZrsjQO6gLA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E05 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=J3vJj0tMVjcl50OQg40e3F7pBgTHrN7IFLOxRkyK5rY53uz7hfxILxWQsCHyCdKHay0zndhIpoCyIBQQqn7mQg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E05 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0Z4kMf6wbV1xUJ5-1xsrAFQRIGa6sUnXllj8ceEPd9O6tr6yHTeec4YzfR2OK782d1b6TAlN1SB7k4l3aiehjQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E06 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OFPUuUpCihtDhbX3diipTqY014IqNml9c587FMttizB-DQoCI9SxsEKobd3fDcIOkPlObmH99DMRK4B6fWuqUw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E06 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=x6vT9B6qVMILDNPgpA5kKPJ6SUNVVItj5PXRSshxHnJF3OOozDoxlNiSg3ri9BXQM9F4jKoBjpR2flXQ96uxJw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E06 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2S1zVbwzKeTrOsdEJYurc1wRjv6eejdvO51I4iZzmO3BThmJleZTADgShZizdwVgZuQUWPi3MA2LxIGmw4QaPw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E07 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pXbp_lCyJgL-1mFLrjEElzFXT9pAJhiE1y1Qr_KHDFvj9-TJ0ctwv4wTeJ-69jSqe3JBpoG2ySS1v867euayow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E07 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fg6vEX0ON4JgaO2Qnyg62ddnAsL6H0B6oNiFeKYpdRhUYkLq_V7KB9A5gAFMVGMQaGzNKPh6_OxQJNi45UzaEA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E07 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7EduHbGDFSztDa_F_Qa_B6FlwAM0Dkgo945mhzHZxqa5b8XS2Bi6n5tazOjxRVv7aAd5pNNUDwJ_80Pfsj3ibA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E08%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E08 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WGfrrKh96c5Lnn9AZs3G_qbPpCpzTzQYEbx6DANLG-b7gPMWhU6h81VA21Ap95G1MGpZ8HmgIXgfRQIPJTKt2w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E08 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e0_nlfrH8xlDd6CLDxPTJKNSeoxECHYM_Rn6mOVPbIWeG9wlYJQVV6rCjdhrC89iqpv0jwubtZtX6ZrNX2ERuw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E08 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6sIJ1U-bmKSkGslDBoo4Vrp_vYEXsr8Kjl0AJEMf6HboyVUtPkMNbpfaaemjZkAooG545dnfYGs1Ow73KnNC4A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E09%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E09 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=raBOeh6VGULCZLGnVR7UST9xGHobWtXI93Qe8kNs8xH3QfoC-hw92dzVl8tUrlG6UEUldM4dQoLoLy8gezpJ7g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E09 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5Ao1CL0wVCpyU1KMt0siv7qKMhQwbtYqc4XA9R7REJEFxhUseOWwXRbNLYkLfzZ8kW27gPcuxZtk1WyCvfW6WA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E09%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E09 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TLII6rSlqKvA-GB0SU86SLFClF2hDkeJzEzYndTjubiQYxMvONgq_jqCzmdr2Mp6ThJsWILoD3laptQDSNCVcw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E10%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E10 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GdI9wLDbAh_LzcB8MYy3f-dKXA7LIBbVyPNVG6IUritA5zwaujIpU5e79fhoIPNl1aJiiutbBH2ugnLqFkVlZg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E10 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Xciw2sQhcA0zR0PCnxM5YMAF3YuR6fGq_51RW0z1jgZlV6FRniGPiZEQDPBwjZur0kMQ-8ZwEy0qzfmGX0aD6g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E10%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E10 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XhorGIkOL25HZOROFQIO7ZNZhA4sXHi8It16hgxQmQvQKlWoIoAhtVbqXUYP6z28ZuRU-jPrHRcwKq6aIUPSIA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E11%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E11 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4dLXUvNmj5gulYJ_RXP33CWNY48rRPKYZfM033y2b_fztXHXxeDweaaKVwkjIqzxRkRBfmBxBBzJRudjwD3n9w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E11 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HbqXuFcPHkG2_pT4QLJTgVt8hzQgJmUuux2E7tZpjFF8rn9w4LRdrKETSyz9dqigpOIBa9lNfzxnsKSH-U__zQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E11%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E11 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=R1ruvPN2ng2lrx-OWAs4yFpQa_M_wIbTeam5H8y4mwZs6UE6eLMdNk8jZz3Cinrdv_k6cc_zByWaVgF3RzRgGg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E12%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E12 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=22i8ba6JwmpJmNCfL8OimC-lJr2B5DPQuwjGquH7s2iDGXbcKGNF9u-_I_rgy07nySKGqwXr3fVCCuyPWzkCjQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E12 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ilSTGOkIwZFHOWWP0ot78LYgGhkP-nSjS1FvXHqdHDcCfIFbIK9sS3h_hnt7xLBEqNLhSa_yXz0py4JaXZb4og&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E12%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E12 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"eren-the-southpaw-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=l0KQXiorVHPxYELp1mjZaoURufwCvBk5oFfdY2JSQWwQrs4c7V_nZgvXxYzpG8Czyv_slxzuW5TJsqJGfYrN8A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E13%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E13 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rbg-7l0k4Y6EBGZGcd4mugXO9gB8e6JRLj3LZE1RcLs_DAu301fxuEUzD_gL1Q0hmgfXu4H5jxjwSiXODwBBZg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E13%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E13 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1rtr8YvLJGcLzDEhJMhpVmcgITEgKS9oBExwmmslf3lUyic__-OQ_h2qhHfn2jgn0zcLhTCrADuqPlh56uLBNg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Eren%20the%20Southpaw%20S01E13%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Eren the Southpaw S01E13 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},


"marriagetoxin-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9hmgOxNfYNEALcp6IpU88LWI-8vC_AhB2YX4nfV06M_rgDC1NjVEzYWCV6q89TKXHXPQ6iXI-D_3PQwoKyo1Iw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E01 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HVZs9AkHmx2zbSbwHvFUHYkCTls9D427HGdpogUB1dLFZPHgXDtN3hGuAUMWTy2gKzc3l2aKh_sZo67x4iqYYw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E01 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BgbRhSJ7U5UzTdwP2czGGsJniTh8chJZY2DqgNwK3WixSwvhYNupymcU3IGtnZ61Wqx8IV6JKiZwiACp2s-wgQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E01 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=82nl6Gg9Ohj6oWrbtzGokRTSOj3l4s26NVPOQs9MaJkjs3xBkDe4RivfHVXHWBgxLLgowdSp5Gh5NS7YYqpz6A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E02 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=99VpyfBPNFx8A3p_bcI5AFB3Gi9Gx_GjPALDM5CLJUZ4leqD3Mtb_pPVC54AK2N9W6Lt0vPOUz79Gn6zmx_ndg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E02 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UZwZ3vys5RqqHCJCOOageUaYJCSbTHpIxz45PqO7Mep9aV9ZjrY3C1DLoFG_nq2GFE3jk98A0dtY3CDaOZHasQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E02 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1x3R0A30RQ_r4jeDHzBzIh8pTGJxYi7sAp3t3ZBunOJSoCgsaKgBBJTKwrWzdX8Jrp-T5chBdHlhDyF5F_f1yA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E03 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5az3n-Hiv5PpcLv0d_zNCJvfbzaKLqa8r4KeWrH57NeqhyKPWxR0ed2Jmw0s-_SSel3hE_xp32DwmtRryKc__Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E03 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=16JvwNJHSbY7brkmZ2qXPcMhe-vsB3PPA2IHBNpo3GrSbAkZAVs-nZCaYCLOWENenPoqoC4iAqWAxZBaC7RdLw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E03 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=td_sXm3e53XVIY2nlMSp3pC1X5kZH5QMRKVS9tcOji3_4lneW0g6v2lFAviXOl4NifBa8gizrx3V75ro2xN2tA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E04 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8j6Fuv8-FkVNWP6C4-XjCquFYZn_o1g9vdwt0G2hcNtHeqEhZmE4M4QsJqld7juGRjb0-5H2x4q1byoUTA1aVw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E04 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zfBYxjnxWEi7g2PQh42WzI9iE6LxwVBswxZY6RGQC0JHL6I8LTJD_fonWQNfQiUMoRLdK_Z2n2n9nhu9jZ8r8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E04 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mg9DHTTsW5YNbmrLHEf2TzYymAyXQAksXaJyYMlc3t0lA9bKLi1Pn8vbDF9wsW0Ok7Cak2ayfjslOf_fkwwD0w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E05 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sHfHSLa89J8LN2v-_Sp69NLdO9_8OVkI99z4PHmcqO9JYstQCdocV8Hyg60oBWBvIG1dFwd6GnBZ9xjJFrANvQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E05 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=w3bFkogbCY1xMFsDgbnSV4UphVGgkOOxK4baS3zwyeVnqd1fRdRzBtI44S-NXFdwvwT5cDjsb8BA1s2gxg_vDg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E05 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MI0RokZKe8sEJtt4jyI5LpzihugjuBItrRfN5ET_1FRh3lLF40iL4bGlf2r1rbJAmuIJeNa3iq3JRNBvDvo4pQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E06 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Ki0m_TjEL4CN3yol0aqHvbehXAEN-TnbEjIthH_C4SpxM-6Vbqkqh9rhgIsxAUTV8m6SGKDSxqSbyqsMiXxO7w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E06 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0BgYSpQNbX0AsaXwgM9-Qs6DeZkUg-MncVfeCLeNNMRMI8_6YxVRAxRVnrDcZZ2w8LX05hNiXNqJ4VckDMclxw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E06 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UW6DircY7eWHeyWGoTSIdLIZ35sRVDITO8iAn1-9idL78MtR9z1CthzhALPmycEMIv8s57opA2YSax_0g3blGg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E07 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tDsUNR3NnXZFAIqLhqzAvR-inozIqYNxOG4nVN8kKSprvPqmgQ-iHXAxw4KQw-GwTKQPN7TnZikZiYvDfBwFgw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E07 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9kQBS0_M3tNybG_88Sw3VoUJfO3U8HHFOnr6Sg7v8rtDF_0KZgEiJP6tGJZJGxNuSShNF-63QsIf8O29-TeNcQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E07 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WrvSAeWI1_4ituPsD1uOSoJD2nO7UEQYznc8g6A5lm7JgKrUXCdob_O0HhIqOfpDiisXUJTIPuJCYgUo7JO5OQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E08%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E08 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7LfLRMF4Nw8oLS-0f6m2QBPQTP9wDTjhFQhfSu5K_gfOHOYaDH8ApVcbNjSLSJHyhp-Y96TBbrpgKEFWYXLOyA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E08 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=txbqNoURae4isWq0juJtqt-rNvko_ypdaKj8Y0d4hxEVtSTKRBJFkFbbsi2zQDKZOST24d3fELeN3LF5sI9gnw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E08 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=44tpYaUKCOBby-t9aKjE_Oh7rFujSULMNphVnBSMR9q8jpeX0VCLreNIKFKb3yHLFbemzgFMsMJ2f-n5Rl9H1Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E09%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E09 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ywu-9Xls5KwtyM8yvvJXqBu3BWtjt8QUdJhehYHod5c5bySqfLJUZXzlYdX8VITZPYon80kE9T1YPWtCNC_GNg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E09 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=N-1CC7evNXQhMomrxFUJeh6BEWteqn5SdbftkcsIw-npJIOk46L4DjD_WrRQQ47uDCWCylVogl3bTom1I7jRIw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E09%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E09 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sKaS0Ytnrb-4Hoytlgg4SH-NELU1dsFT0ig_7-XpD9a0JoAgloqJFrRjybwvJKOUqxD4i70YY7Nzjjc5anw9-g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E10%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E10 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_-fw7S7-pmerz2pxUEsQ9X_DYUYhMa5EfsB-hlptBNZ2AZggovsxFuFT86jXE_TNMTOiC4yW6eE34d2Z0EQVow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E10 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7xAIGMGzORDucpcmLJUF6aqqKneAK6rW3nnct6zjMOrGincb5e6SZWgs9r07VBhvzTHpmqjS2_h2NGhhW221oQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E10%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E10 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=yaxBWF1wVHzmaLOFuv5qrK4OfdLq6mrt1L5qnFQedKSQtjYd6Kw6fsv2Z5Ra_-Zu-goBJH7Tg4bRFyXrldGJsw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E11%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E11 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pj-kSpOqYO-toRF-fAOsgzjmMgSh03lPK4phiKCkJGh8077YyQ-dRGr60ZTTXI5mSbygrLliQQzxQq5hWnkXLg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E11 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VMQ4KknnYF4JaMfMRHs4oHlvl9kjQJdlZNe1vFQR9vp5srYA6aBKUNyblU2pl68WiyMsnsgGeiF3rwUf1HIV-w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E11%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E11 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=kGI_NXDVi7F-XAKIpogdEgC1qTmzoDWXfWOQU5FdX587jvzVW5545-Rh7vSq3tc1Fmw6QviqzTGWH5ATNG_DoQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E12%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E12 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ui7Mijr66Ik3Dvq_dT7CCWbRLeVvMwYSB4OL_edM3c6vM7Nx0uBXVjz316Cjqh7LAZYxsO_rP9g3fJvAjdvzzw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E12 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wVvCS0KvvqqVXiq4py0YNq0aVLXcwT6w01fEebzQFRNc1GOHPggCBwmJ60YysHAs19U1AHmssrP66gCmmQE_iA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E12%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E12 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"marriagetoxin-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FVi8jtnwlanpAs8Ckz1LFajmhFoX9u6fRBHQiQ7Xs8-7QgY8MDkRr5b7a3H608sIaRgbg5bC5TAw-qvM8JwkIg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E13%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E13 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EkMn9xxyP5uZXQJCNe0SO2lVwz8vUBXB-41pTbBlpW539QE0kzZKO78NgmbW36d1s3Uy73VdURajhLsdvVe-9Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E13%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E13 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MHAXicliWF53M_bANLdAVXBztMEexkGHkEZbMe5oU4MUN45PykXgayP53A2S0sGRa9aI9gTL1QBdGyTd95KRbg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Marriagetoxin%20S01E13%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Marriagetoxin S01E13 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},


"re-zero-starting-life-in-another-world-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IUeEvJgj2ipUYgwoGqjUFEbPkhv5Wz8d9KeYqg330Yv6WVCxauRdpYv_mujx4w21pv3TGW7PH2HYSBQ3oDW3bQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E01%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E01 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Qi1JcoORCtsFHSsw7dyzLBY-0XmuchfyIHEHHN9i5DrKNxOGP9dZOVPJIlTyTdoVU_cJSGl4g1WuUPKIJnUVHQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E01%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E01 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gUNm88Z8vBer2F9Y9VpVi7S2wxNQ6VkUTrlgxE7017ej5xfCOGTRw0zvNoo5Ba7qupBvgx9kv-ey6EQKQowxIw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E01%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E01 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=aRadDFxPSE7Iy67gUOiPMJgOPPfkTLz4ds-DsLyPBehYwo_T2hn3rE2InfR-vgbQ0LiDqXtkk-qk-LI7mOLO4Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E02%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E02 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=khFv5FvuUUHKz6d7ydF-xZRQvcHCuty-F_ZOLMIb0xXGlIIMgR3yjnhJdb0urSKzTcwQqlPVkWeCP9n3JDputQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E02%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E02 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iFxRC5OsIxG-woQaDdM7k_Zj83MBd3ae--yO_YKbFqpvEP1E8kaP6sBU7ZfVWikf8LAAVjvhbh3Y71mlegQjlg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E02%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E02 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PP2YIqLTARrhEW0A9Filz281oI7KbJlneSL2QkCU05Qu6zymvBezB-Uvl-aYbN6uatBBe1v1118mOrCsx3EicQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E03%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E03 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pkm850Lw6_cUcB6gZye2NE_sQV2T8AIozMvS0RRcTBXiCONmpLm7l8TBxYV3GWZWr3QezT-CoJY2tUkSaTnMww&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E03%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E03 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=StDbPOCDLYN68p5mKvI4h97p4EH94jGVDyu4AvAnFvdYP9ynqjPzyOJdu7Fst23eJwBd9UfUYCF9tOkTLvnH9g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E03%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E03 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QamCiZnQ9WbxdNsDh-Mu6zZGiFsXTY1mttcMKxcRvJrv_GoNTToxp9N7NvDcPnT8BhSqyXEVnnRy-OJJNYXeZQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E04%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E04 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bq2ycKj3jOfiFttz4sd5o9IC_pmncQzxnFAwpco5HSyWIz0bdeym4WKcYLMTk_nS1Lnj_2vjrrBgTeOwgCqdJA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E04%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E04 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OpttXfwOaBOmnU0yhEoa1ZEfOSMkPDTwWjPHXZNEyMyci1YwiT6tLoQLsmww6-ZgHP5wYc6wV4Br30iSd7k4Fw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E04%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E04 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MlkjkrXHBV0jHIugR7leBG7GajPNsA6790JmPRU1CNup3LsxZ3mP_gfdVG620SAcg6zjmda0NQOD_96L3V5L6A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E05%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E05 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xjwwVAHKaOQTO9-AhLUpdDjKZlX2K8OOgJiiQ7TgwtyHrNmdFqXlG1CthSpEdCeC4rbfZczXrLqLWdEB5A169g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E05%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E05 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Bupb1oAXvDWxrEUkj7H9yKsNzWBgo2QuJHyEawJAxF5X7W9kA2YHcAdup0yWMkLjiTItnpEsKgf5evgbjqUkqg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E05%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E05 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5VID3aLss8i46_BD5_687HFoUNfF9bLKkwYlheC2h9jShPPI1xamxAbu85dilh2XR1ILnKH9V-QfCw9uRmEFlA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E06%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E06 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QBJ5gcNRR5cJLzDtkTP-v9HGfhz5lWftB8xrHy4xr1qK9fROtw-pJoZZRaFdz-PrZsalup5SRPujOSM7J2dLxA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E06%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E06 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RVk93sRvA80JOX7btEqd0B0jlnkhTCs-bqUHVpgfUHhlZMGzIlXt43Rpig-SjR7vRB0uBMHAMd4ooEEPO_eDnw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E06%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E06 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jkiWRYCZK1bNUlIM6ufwaKZELyHkITHQ0XzZUQ3n2NWjn3-uzX6XFpHe4-AiFKTP-B1uGMaYH1V0t4kpTz99Sw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E07%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E07 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iFxm7Xmn_o0JePafbN4e9RGFZoqc6ZJ9yLtQ3bZoOE_ERe3K4MVHT9oeQT0uHKTHr-ebx9-EE9KazPDLCD6Tzg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E07%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E07 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cq2wBSp-jtZEcMlHbq450hsARnaOacinll6FHWdu27kofTo0GlmW_Gs6CA-sQP28vR3kH6agtKMAkdqQlwYKdA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E07%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E07 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iO-eZkhG0jnXm4SPe4ehIw0Ewnpq7qlFKgK6ZC-05PW-kD9ZHbmiKTAaVlLVRTzejldx3TU2SYzTHUM9QCnkbQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E08%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E08 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hSmjrYLyJoAl5jO1FE84x4kqTNCRoDZnaCEbaHyNNu4IgZVoDZ1Isy4pJWo85Kly7TxAE56e0SNmX5dwnoiMoQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E08%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E08 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mslpLiq6zIGhlmmUTuwcQdat_VFz_D-XVVeurDOMZvt4Nj41ZlVFoGkleT7zz63SFxTY7jJ7MJjV6VY2C7EUCQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E08%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E08 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iNZE_OvdDLaJs5MH8IlF4UUPjMMkPm6UoFfq99Re5DFT5LF2laAngExsak1su9AldcXTxtmD7BsW1C619mWBWA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E09%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E09 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QkWVvRtCuJHxrf3rpZrmfdhhgjy6ttkk6NYx0laTd9WKnuC2-ppF8QF9Kaw30uOxcFU6B65zovBE5K9lktOq1w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E09%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E09 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ngweIriaTRo8oxNXQg6BgU4dyNwzhVZ_KYy884Y1geplT6PLEzAPYnxDb3vmXY2sD9t9WNVLnuInDBaUpcTxXw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E09%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E09 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iIrQIc1an7cwssdPiWDhaK9nC7-T3pav3JRwL9T3p5-KL0YaKYZIM47ZkNqRik_TDmoXqG_9SIQsH0dnj2CVxw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E10%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E10 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qtt3EU3XCH5LR9qYPUVOvnLvzPb8WxuIyj-pebU3wWYMk0ERyULvlM3iZSPSx4xvJB91uf1EATXRU33EF20kWQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E10%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E10 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mzhBBUQz9Mu5m5bmzpRc2NaUpPxeHArhC3Bb4G4kPUcgtaPbfCYBBAGLaKGB9bKGSDS74aYZUYiXFgee9WO83Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E10%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E10 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4KBk-6DJhDcDpsZ4fIYQpHlSW_OnGHlq3C3yqghNbfpZdPphZ2pHH-zgK-LcHTWqp8OfX21gh_ALnOmkqN8K-Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E11%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E11 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xdo1wX3us7I0yrRang1zzR7BiSzEHeD1o_63X_4faL3hDBcEMZSImJ6BI3P1X8sKCqTOYExKVBUIueF75JbGtA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E11%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E11 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mFVlus55JYUWdIhaBqrSi_YTu8i_KSM5axKQ1fG9V-CbudghRUsmeGqG4KV5dc4xL3DV8Qttrjs_v_EpRAockQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E11%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E11 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BOfTBeVHbYr8QriWuZycdtZJ_5JRETgVp5y4tawTzqDFfYMbSk-y5KH-b3fxTNVa8fQrtrKonN7HIxZuf74SMw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E12%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E12 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bB_de13ngaYa1YEKnaXZ1Bx_MOZKOn_dul85tvfwWVT75kheIx_NcB8QBeFFODX2mbMMnRUjMa3MAeyHUMPiEw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E12%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E12 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=eHAOOnzRbsg54G0nXa26mus09Kw_VGHifdzv4IKEI1iOP4tKc7k_N15nUj6Q_iWKPTPLHcqyqkN7vM5EB0y1SQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E12%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E12 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},
"re-zero-starting-life-in-another-world-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9-Rp2RRAeCRGDCyM-BLSd20tX5P24eNZ7XUObCX2QTWYr6dEBesONxRiVpY5e7UJxLYYNSSP0wXeM-MgOfXnSw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E13%20480p%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E13 480p BluRay Multi Audio ESub Directors Cut.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nsIp6T2qLnf8SEv-n2f-TlUB1jxcQxuOW7tZhnc9txQWWE2O5j4ZlH6MXY_VSQMbI1Ve2wYrzVbk-dDGSobuDQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E13%20720p%20HD%20BluRay%20Multi%20Audio%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E13 720p HD BluRay Multi Audio ESub Directors Cut.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HZ4y-Lra6GTwGIjszRPQOExFi3CXrwh2s841CtXgxcPfWCmTymr2ijvM2hoHnHyxgEj8Sd9fhLdKk-HioVHlkA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Re%20Zero%20-%20Starting%20Life%20in%20Another%20World%20S01E13%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20DDP2.0%20ESub%20Directors%20Cut.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Re Zero - Starting Life in Another World S01E13 1080p HEVC 10bit BluRay Multi Audio DDP2.0 ESub Directors Cut.mkv" }
  }
},


"tokyo-ghoul-s3-3x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ErOtNJkqz6ERdG6qBqzmB5H6okS1t-natN-D9X0ywO_dpq6c3Qs0kNXIAeNiL0OLC7py-Ej8stywX6ncwSfj-Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E01%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E01 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=15LK2QX39Ori0jFlSvMsFuQc9A1SplN-69NbkWh36O5018jHLNsH3HpUgy9H9At4C51B4W4ZnajIiOVSXmjkQA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E01%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E01 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=b_bmX0GydHtwPMPXsXwhUEP9sgN8iV66Mk3PQAkGwiDj3d6PKSGcZ34wQMNoradjm3sScpKu0X7MUrM-ATUl0Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E01%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E01 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dSDeidGUIKIGEs4BvCncOjav1ncMehwMGhIWfEbsMQlw42FerNw-ODGCLmu4V4WHJs6rY7ptzfJ29IVTkBo9Jw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E02%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E02 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KpXKtVB3ox_omricyKnA7IdUfcVrfUDZ4YKfC7_xkuCfkwf7Zm68-LnIZ1qEZBT75gMfsOPcoEOUKOw8d1rxww&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E02%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E02 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3-omh8kByy1fpVRhUZpZlnksJIi11yq2g6yQG3r_SCHr26GFVVMi4rS_SFqsuYHXN_xZl1xxFQ7vApDi3-CGRQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E02%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E02 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AISNHxg8_mAr2L0nr2V3vPR4wtqyvfV8Ho-gA1gOpf4aNpgVDEA69OvyGeG_Yv8dpJCKlVMKU_BKeOLodXlsBQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E03%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E03 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xaJWpbbMLxf3HLZcDzrDUalnv4N8h85IOXI9DaFpwkriTjD3yC_NLrHY2DSeAXql03Rqq2EqMWNBqIIAaakDpw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E03%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E03 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dJijQseRvTZ83RN-lxO84bOQxudJqjqQLovnN9D9P0LDP3c1r96J_6d2bGawbDvSoQUwyfU8R_A2ZfUNQpGM2g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E03%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E03 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-JPwEu50AYj-eN3o-PV0N4kXwSmYYjjEjjLYPzfBkULDn5BhHDZ_saHz-9Oe2bVehWjaBvyxpdUnyHWPkuCGDQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E04%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E04 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=YepCGywLJJdmIUXqsfwqYDbLsk6DmXjDdk8mAzbI_UAXF1H019emGKlK7x4_-aFQQdttLLJ6Zgp-z6Bkl1h4Mg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E04%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E04 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3ZhJqiz12t1i2BFBCFXMj0kGSSgz8AnSmhiiODgXmbAqqB2CYkxFgikMI8xdkGv0h4CJjScSGBJ8Bxc0pi8QQw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E04%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E04 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-C604114cpDfNc-zKNrdX3OH_utiztqxbGnt9tyhWGFpCbgLocmEaEoKma7zSn_w1-08acGk5pXKo4OaY9RiOQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E05%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E05 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Uva2DBikjfhskP-T29HRoZ9LVQww1buFZjC1BdTwazA96k9TLc8keXwdoRlAvwSZjSNP18xGuvHBIe4G0CH7bw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E05%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E05 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1Ctobbw2SbwR6w3zMnxgLnKmRu9bNq2xDBTLEKVQV_nTpWU9ebteLCYtiZUiZgT2CKqYRkN-kFI3wZbKjj1ccQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E05%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E05 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=H9WsZP4sAPecR3m4XwFoA6ZyrhrWdrBriubGG5tSw2VhSPIJ8dhO5XqaovfT_pFRou187AUn3Z-bSV1R3NIwVw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E06%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E06 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BqeA1Hbg1w9HPwWb7E108mEUAdN8-kL_xYsifu8ZdYkU6_EAsVJZSYBpbYR2OfnGpSytPervH83llbKo5hSuOg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E06%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E06 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=DwuwIb2I_0GF3UVXO8gaX5y3ne1_vpo1MoXRvUl3AOVEHP_UjPzzYF5PBQLEslzsyKvVj_a2S1ueKQcc6wvVwQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E06%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E06 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tuNZLjTcLyATT36YleVdZ34z-FhvKkOh5A75WW20IJjQfjELEJsl4ABiC1fkUv-FS88jUbl_CyOJ8mKOAmJQhw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E07%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E07 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_vkMCg7mgzLxrs3Ta7YudEaAfre8n274r-llZeiPnX6nlO8A9-fKkRRiNNkPL7FlzwXXfnyYB0uEM6o1-sSF1A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E07%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E07 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6jg66AbGy6vN_LTjdDMdzl-r1Jl_YuZjgK32cJR4xRq54FMSd375COsZvg_oKBvk9XbeGVVbDtb2v2Z2eD8txg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E07%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E07 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_qjQHzJtdtXRpxV0uK8obsXyxYCg33pO-m2MHthra5TNEgccNcVoUedcBhOmZn_vSsKs148aRSlcVeGUZuotig&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E08%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E08 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=kc42T--ESXKkngHybe_RJojkI4lpXKo2iBnl2cy5FlYI-YXQzJvnG6Tey7fc7exkuEYcbOyDhKHc1BJ-7FT1QA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E08%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E08 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TDNhLqRtuOOxbF_8kOhEbeSYDsAjhfonHIr9VqhbTvw_tKmPDJSiHRXCdWRFe7O86w7AkRsX-hlIQxFZc0P_4w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E08%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E08 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5pkXTBmcjjNsuOkjIxgb3eqsaj5jUr6a_p0j-30mH8UyIp3hGiMVy3XyCESloLbU7ltzEwK8ff9KO2y4ESatMQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E09%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E09 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=c_dWZdMmBxBQ3vxZYHGF_XVYSWrOfan5VCQnZUO7U6rZhnGwypm4lvRW8BxkGkVvKuIuNYx3tujHUYI3UImnWg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E09%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E09 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=stW4HUu_DssdXj-fjngFkmftlDKUJTd7oXIOg0gPt3tNUKO92w21tYtUDzS4S3SQ5eUYSj51mFllMvgcyn7r9g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E09%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E09 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nj-KiXNnnhFtqaDE5aV2LPkIMLHmZEfJ7I14Dm0cHqnmqQ6Ks3ZzUHZDBBJTZmHtTIEGF1rDl3GAMb9z8F3SMQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E10%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E10 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Kdm3MemZo-G8eSUxafpwDpufmZFhxJKqVK3R0GY0bzjSy1ss9iGaMJiHgLbUI8vYo5H1v_8Mwe9witO3cxoH_g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E10%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E10 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Uu9ydEYI7Cmg1EBWUjQANGfcPawh15yqjQOtpUYvSG2dDeFHxTspbqQ9WuaeFDSAA8Vp0maReB6-qePQzJLUOw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E10%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E10 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OHCLCtCRl6GWZ4LBY3q5F5wCebM7Wr1xKb4HZtbGxcCkkeyeG-vwwoqTuEJgqwkJvHBSq8fK3BzAzErQXigTmQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E11%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E11 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1FRX9cu6sJXdA4xNtfZbHKbPSAOC76zom2FJTW0dqpgUGUeRwR1t_9f0VD4350uMw6mS3ZA7Xz6rahB5yxlumw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E11%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E11 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=F9IIaEnn8jbZK8crnAtpMZY6TJowaSae12gZ9TYOgAvHyYTfXqaUlQfa7XQcINKQ-QGagjaqqKf7p-rQZ4QIGg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E11%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E11 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=99w7F3wPgEswCMw9p9_LKfIhg-Y5JiXv5UEcdT5SO-VL9-hANx7bj4e6jG1KVE7hjz9OtfZFmDpixf17Bsmxxg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E12%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E12 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SwPKXUjo9S4s1-WOmgwENdzWf6FhZ2P-NCTm2Z9xgWItMY6oX3Z2VSYyaS4BsuRyu0yzG7MDkkz6sl82d4a4yw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E12%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E12 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=eNLi1tYNsKVNTwkl6txa-bLjpsiPOxBvSnBc1ZkOqJ870kqmGn4r6TwX3DlDPeYl6jMDmRH1-BKBAyJ82qOvjg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E12%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E12 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=L0U96eSpO8U9-pq2LG57TcILmzA5n_CVGvLhWTVRLpeSCYs0gVZjxzPFfXaRcf3SbHnU_5t3KjI9mWNYiJYzqg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E13%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E13 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=c2suGztcCsDxGlgp_VgDrhIvArg9jker6NSCdrlUWSCNxJbRMiJ84oge--HgoyhsQJ675A8WLQL4g3f8YNX2ug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E13%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E13 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5YhNYnt69bhCJgfZgZJisM8eJvkSgYeggS0Ad9X8Dl6F_WJEzyNdPnYCNsVGHYhmY7ROwLSJ5V8ARLkE-xXxUg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E13%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E13 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x14": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=DqyhIcJJrbjEEKzrjM1i5aYPangXAnBExV0d2wv2jOATxNCWhyjZ1V9SIq_Czx6XVqJqYTpHaWXyaJMLTdoXwQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E14%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E14 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZwGGBTjqi35O1uoX2Tl0qN_uu04PIRmRckqO-AAp9cC72X7fUEd72db3Aa4Qx-AacC-rAzrumWgVdZ6YiQoPsw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E14%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E14 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vzAYUITcsuBjefSxFqAdVLFAefaVTCO2p3TioEuv6lu9NYttcMQcZbpYVcn99QNiURepcXsli-3fI3WaC7ootg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E14%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E14 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x15": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dO7gfvJaIIraoY4Yoxe_ydy1kPPK3OURf614dTN9K8AxRTMnc6V1uPGwgCzWlGWT3BLL0FmFjOiNrachF6JLIg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E15%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E15 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AzWkfXhypJGSiB2v-as0YKW4k_k30sYa___8pL9-eNvwbDubHVe7JOEb-z6l9WJChU5mHbURFgXR2hdJZm7Apw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E15%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E15 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cCEnfe-tWZfUeozUTrsbKXJvUrPcYXrsSa_n7DUTYrB5_79yR84ts5XdZATaSwyXrK3TFJzlXrqtXL9w6-q9rw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E15%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E15 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x16": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nTcm4M7WJ-ju4aS9rfA2f295246hGuR6FTgzM6mKu1kdA8DWZTmq4DbUIv3khEr8cGe1rJjQprSWY3TI_tSJLQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E16%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E16 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=S14ICGaMJY32urBhozFDKXmN84gliVttfx8-QHtPUPYesgq9g7BhObp6zRy4_CywZ78fwGz2MZ_v-DfPWxAz1w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E16%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E16 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=f5sm8aDtv6IlPFyAoQAQ6RkhJL-VHAFKjrdKLIb34SxOQFJsGqTqBdpy0YQpDKZ-d1k7f_WCbWLWL59qLVrMTw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E16%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E16 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x17": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bljxcdrNwgd2bMLQFsKCD2wVjvcC3SugermlijjAMUXQmi-5R8bIgwdk3wD02s1_K1sIv9juH8ebfhOEhMk5Ng&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E17%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E17 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rScTUMte9BV52ebAbAKv6lKc-uynuJyrGrakKEpgazWYEfweN5lK9XTbpJaO9oi7vHRX5wcC7CA1U7Vl619fBA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E17%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E17 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rw-CYs2xxnTDp0-Ynuzf6LjVfLtT_JRwbpATX0WX_tlPQ2-lWGvQk0PuusCncqbsI2sRpQb4Cpf3N8ndDOlFhw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E17%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E17 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x18": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-u7YI90FkRVCxofSWoldOvXSIubJKhzh268F8b5Mji4bXX8ztfAGdmMLPu5XR5Wr0vKz9Jn6-EBiRiQU7f6FYw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E18%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E18 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tI4oQY1o9JzkgpFTJBeIJqsfWeJZU5dMlsL5K1AOd3sfw4uFS6gClNhHy3tvXsANZzRExtgUY6nccpZifv3HMQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E18%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E18 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qjBj-tLi27Ntx5P0DUCI84zsKjSef7uIwf0iUev1MD8bisyeJnyAoiklXv6sv8ECyxkkkCyURRzqvEjHNnxS4A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E18%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E18 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x19": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1Kxm1TorGM6tE-sLfJy2yMnPcH_inwTnT0aRMjD7RD1vyNDWYCfmpPOP8mKDSUDoHEq6orcTF7vZqnNccuaqww&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E19%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E19 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ATmNOKJItqhPpPx6uZiYbR-1vKFI-op019en6ZNzo9NalsSz03gb-7Bd-lgJp2O_qhUApSTG5C0UDkQuU5gWZQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E19%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E19 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sJAfpKs6UqKajVga0Md20EJkvUoVs3Q6kvqbuze9DHtfku3xPZbeOfHCBJj2J1_hMuj5xFEwwBDI0VlYrUBurw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E19%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E19 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x20": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JWCOMzCrNzICSvgr1u1OFzuKjiIF6M964pY1wLYMJi8QluMfUWyCnUPVNS62Q4Nb2OeTtXE6_ifl9fg8GUd7XA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E20%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E20 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZJPbZUNQVLqncFoOGC6HfSacIWiovBbVhrGkc3U1ZEK-xkAYmEc0aPc0E_9tDyvOFqpqIxNV2AoA1GWlacJ-eQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E20%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E20 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nRX7Na4CRWj6e2iwbuuHW2W522dVfSHO6PaDvGZ6fUH6mhwmMQ2JTLvzQdu6YJVw4qFoTmr3DsK6scTJIhu0kA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E20%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E20 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x21": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VwC6_G7z9TgJED75zmQ5Pdiik5OZ8IZg0fYVX6e418gwESMOwKCcQfJtEhEkNM_16zAbDvSKgXm4gmlJryM5BQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E21%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E21 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zCl66BZtkhnZoGLDEQhBRGHdiCnLfeP9T0RA8WATWtLg1WqygwAhWEshzTscMhswRocaM1pzmwoBiXQmJuw-sQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E21%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E21 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MNU5uTXTgCJLKE-eJPGQ2FJEvIFXpRYHqoBoYyUHoynkXGZ7yvjlRWNavFJnkc1dqA7NfiuZBMWROjB9svB_ew&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E21%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E21 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x22": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=f-hlZ2rNZwQmtHylKFlky4zwYwz79_BAgaWr-I1dCqT8agt3vWTyS4VZhRLei0IWIu6eCGtbdOKV7X-uGWr4Qw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E22%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E22 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=CXjb58QpoAjXvager-8zqKAG9gAtbJ5SbqPiV93EZQeSMX1xUxAuqzXaJC32Kk1fGBInLJDCg8niZ-GxuvJESw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E22%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E22 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2R5yINnaOEHvf5T8yDxB00FWadANX-55LNGxLkECTLqAwGWXqr_NgboogfB8ErHWJFp9GTdVnieoZPBUhmPwQw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E22%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E22 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x23": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=R7AfXazLaNNowp1NDH5CSnt21E3WnXdHrT7DpxZ8nZ7plXSvcOUW_xPmzogk98O0KIk7PanxfBTkCxSF_vKiYw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E23%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E23 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=K_bAOLQhGbIf5KljnVzKPBF03ZMmDAtIecVRF2-y4VF5gxUSAz7Tiw-v3zvLbLKL2q__AxTSNI2CW8LI_826Iw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E23%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E23 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=swylfjUfhrbXWqoPj4zOQ1KUpdJBe9ltvDEigoa36wIXS9fJJ_OhEJJweVAIV-s3C1_hSYPeboVPAlWWoRmZCA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E23%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E23 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s3-3x24": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=krp1hrrj8QjEqjoaQtmZsR-XjS-ZfrxfOQfHdkxMKKSth5Wu76wQTzekNy8yEdFkQJAlirBPtJo8g7Km-11EKQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E24%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E24 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cb6oF4cMVRvPgB_jw_TO6QC6TU76kNyrrgx0OTvm__Kwm9VnWY_VNxcEkU1mpgU2QTe35zW8SqoRMnQI0vMZlQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E24%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E24 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=m_Wn2Suy1WkVXm8-FQUa7HrKZJZoX9apz-LIkTkqwIyIuAHMC3S2UVpNgAwSRMb-DdOTiUTkSHXiCrYv4pUDRA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S03E24%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S03E24 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uwHQCAffR3odlEPK1yY1O640sR-ls3uBRn_zsfbLLDP0FIwh1-f8f6Rc3GQ-FG_EZSIc8SUZK_o2MNdIa6TEoA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E01%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E01 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jdaCnR8zx2JH9BUeCy_ExXEq0BQgzJDqnl8ztuh-fuPv1UteJlZWP-pKde2fht-y7bqP4BFwVcFHqKikS3vm5w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E01%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E01 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=I3lOSlOWPHyHAJzuedSjufSLLyoe-i9YQdPjdD0GcYTRFZaSTVaBNpdAoIRT39wkxBpFEWfb6eVaKeFHExVMXw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E01%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E01 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=atI2fqhxIf_gILM7M3AN8t1-JyZhrOT9swTNbHb5YYNioLKqwETDfLGwuSyyPhcfhfl9XcSgdFOL3Nr-tYbZag&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E02%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E02 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4Z3Ycgod9P-dn6sn4LgtVrGaFVrszgTdJowcUKI-wxeb9xIqxwoyMyDf-Djb08UNq0yJXdR2wjLJZu2go4srpA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E02%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E02 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ENR7UVnM_vv4Kh8yn-fFSFof3LHibXJE29pxlb0UgPeDy35yYN_nDPVKBB_NqQZu8f_HzPATISoMx9G1kD_13Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E02%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E02 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sQVfw5W4CVlwBGPC48gDc-3CRcGMhJEqAIQKtrhCOjEyiNgguJTvR2DHE3QbOeOgFQUel76fOXKXu83R-p0keg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E03%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E03 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hHtLhti_2qjiu2Dbe4-FL8rKp2vAt48zMp-DclnlSAaTePjh8d6e_vfRMmLjUvrZld4CtnSZfmB2nsborzONyg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E03%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E03 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FXqjuMMVjhqnbvkDAZUrRDjMVy9J4cTXMLYulQDBrQtlwuNdCsSz9SZv3nX2KciYpWTzD5jOJyRGy9YvHrUEng&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E03%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E03 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IFJayIIhwqdo7-UOJndH73a7Dwcrni5XQ2jXOUh1mEoCcSjOpemKlWwtSdpa6Y_RDDrqQVdZ3UHhc0XbL7Ra-g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E04%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E04 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NEaTOxHgXGZpOm0gD0jZLpCCu2rL0b0vECsfTLvGP86drJOrIdno2yfzbb_hxaPwN3XSMB1TvX7-ICbGLAfmhQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E04%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E04 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zbtSgzkVo_aS0DOYZMCSg9_L0MPMX4TgHFMhlqrIknMC4sIowJjbk81OTXjeAAaigtP0Es3GOx7ywE5m1sBCXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E04%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E04 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NNmE4bGqb985oqHfM_RBj1S8B2_vSOuDxYQqYnqGoTbGRqQzFB3qDStakzfi9D3Ybd_H0RwgB-Ya9wDPOWbIeQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E05%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E05 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jkbaoSaCijt-K_Co1iPG7aYgSMB2IoIsfEwk68s_pExBT6cBXkycwi1oiEepIICZzAw48ol3qb_6DaazYFbSkw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E05%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E05 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BF54gJgXCXH2Zo9xrmBq1x7Vs5BGWc51uldzV3EQpQkPeJ0bN3clpZXO9ErCb2gsqahBsH7-J7PAppxhdwqslA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E05%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E05 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-E4a6tU8BeCppWfV3AIYC2H0Ot9dj-l-43J7_zdG9s48_LMQjltaWFVp9-syF82NsQsqFhESUGUXFbM98-2mqQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E06%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E06 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8PBGeC6-VZP9hMqEIDPmVDyxaZSKt6tykgVtIqDzpUHi4zvpT1Talknut-jBGu3SFJkD9t5YpFPrIFMJx-8OQA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E06%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E06 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tynbWN71y9ulCs_lQNUA0oQxU2ey9KXLxHzcE22QPFpJbTgZqNDBTo_DnZ_wkZ1LhvZ3xLpEU30G314r40D9QQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E06%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E06 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=79hiEaJNrqVkneBPX3fiQi18OWg84VhfZjEKy1jaiBRt02WJt4lH-QC2GR_UzGi7yG_7ZWir9TGoe56XY7_mTg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E07%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E07 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Krh7MQVhBiQExzuNXuaxPCXSCxuc1OWDh80GemGZF-Fz1cPyrbheB3douzvM6iS_gmS3MiSkYh6UZfYUy79lAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E07%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E07 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e2tGpakb0Wg7OflRyzpgIfMfvE75ZrNkSutJQGlQ3IUsrkxe9Xzt7Uo3SbTpA35b_UsIsbGZBN5bvAgJmhNJ-A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E07%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E07 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=eOs2KKE5-b_WmBYETTV8FnMxWzNCPAB2coM2Ax_EOUe0LlK8ClT_eu25V3or98wzkpgzZAalGTpVC_7FDocs3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E08%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E08 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2RBW2d0AgapUTiXmykaTbJz-8PFaF3wQvboiFTHqzggqOyXSxCbPyaO9s_Qzkj1oO6N9yvAs0rYVQBV_dMuAkg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E08%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E08 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vGPsg-MWRULM1kVEJn8eaK9rqpcF2FIFVpIvp7tE407vOxxkWJcqf-uSmOJVOBmLNvzGgNt9MKYXSgNOptqlvw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E08%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E08 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9XdP_88WjOWaiWTdmrBKCa1FSTCz4ML5RM8aF_Rzcch8sCN221ReLgjPWeuuyOE99nSUxYcQ-YUZVvXtrk39rQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E09%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E09 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jxKB6rH9c_Vo9VZP3AjrZ2B7ykvS-T0q8SQpoTaP8zgWcJpBJAU0Fkgre7CPRZaBcdaoG7P5gfrxyGRDS8CUFw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E09%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E09 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=B2Jha9tKIfjxWt8dwFRcdX_0McA0zF_5RU8FwISUv22ARYLEjT96ZyynySlSergwyqv10fMXWIpIagydr55uQw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E09%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E09 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jPPY6XErmksWmbMQdghqPlgq08VygrUeIiwNya0w9Lzr9XOm8moW8BnK_jEr9-SNOxF_MsiS7laV5S_kVidLBA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E10%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E10 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UpHZDIHnLUV8mxkd-Qry89mg9qO9cgdex3hzneHjJA8NMuNftP0qSELMiaEguuRF9bJGNB5UQ65nq4pKcoJAJw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E10%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E10 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ev6UTv6l3Dvgiy5rCyK23AdMXeWiKCg99-yRY1Nv2c54K2Ss_6a2janNJH4PsBG24jHWXtllwK3iiAHdMpDGCw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E10%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E10 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_0DQHFYsf_UFjQJk0Q5Roelpa0MMHdrlt8U-Lb0v_DwAePZEgz46pUpIdUT7KmjPjrjKafzs8VHZYojPAQ8C0w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E11%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E11 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=p019VJDCDNigKadecj-f8EMcg1g2wDqT70cebHXFMNl_nMKeSe50Kk_k2jN3Ius3gLohQfM-Lice5mNNzex8xg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E11%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E11 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hqegGrThnlzWYSAme5E7TQRIlGT451Krr8fL7eNbJx6Wj4sVTtLwL_9kB6bFumvaGfPqvf29YmXjb9hUX7RWLQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E11%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E11 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-2x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sn-BBCfL4UltyQn7H8nVfgfK0P2gbdi2LyYu1akMYLKHJkE0yZDNcBgMft3MB6fPk-2T5zXVwpJ9yghoEZAoLQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E12%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E12 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IpchkdJMsmOon-jPDaK0CYxiNNELPUEJUY5n8J4nQNgxJTHYYYNfBB6IIFUO2cRNgV9zDxaIGH1f8Yz8X4ecXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E12%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E12 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bU4UzP5OzKZvevEYwI8NvHlWWrcTHeoIZdlKjp4yeBgYUseqQP9SmLIu483Q5erl0f_j7kxrCVgI7W4e220WZQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E12%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E12 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FUVnY0RF-00HJIlpYUOYGPzN-5aah5Q696QrBEVsEM_Kkxd_abzYwMCemYfBCeNWKBaOvAFxbWZPXC7HgVY9iQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E01%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E01 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hUtWg_NlKQ0yWMFFdm9y8w-DjHxCSUye-AWwtH77bl8sr2qff7tb-92QCHDvjHL_CTdh2EK7t7M-XxFpmcYGMg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E01%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E01 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=77_OsNzIIvkQtpScRivTmRpks7YFfv2slQfQp1gQCCwJOYc3IRZl48Tyd3-6upXW2Nun64BNLgfrThL9xXcbcg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E01%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E01 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RyubjlfeBsCxrpV-ebAkbTRYjMoTzRzsmp2PSR8Q0hiVEyUxkHGsiBPiQmLBCEl1dDzd8BwhCUzHsWQQPuGKAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E02%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E02 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vD545NrLAODliMvKxTmANvO1FcNgkY0PgU4pZ1k5yj6rJ36KYHCLzk5XM4Rfvfwzz8xPO6-6V0lO1oIVg3u0dw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E02%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E02 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ACiePRfE-w62dX3B56jpSizAKI0oW0OrkLLYnrDAPUhOUtE5L_IRN8X4EAvtLDYHGl0mVQh5zSlRczJWdU3buA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E02%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E02 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=a3ACCJinN5hbahK1gdh6YGU_yjl_mcghuQ08mn2NPK3xZoKh6afsU6-xSEuxf6IoQw31zTJo52s5dwA5DZEHgg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E03%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E03 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ze0IOJNwc1XcQ6V_U5Hk-laeatuLhe-ZGF1tPjAAG7Y5XS0ENUCWvvyAInowqzMhBLNr7X1uQi494v0J7Poerg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E03%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E03 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VqP75JcSSIAYmck2VresKSS-XVrozM-4j3bte7CZx-yPhG5EzlBQ1Sk0vW7e_GT9DECW_uzGY52esG3TuOQpoQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E03%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E03 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=L4tb7AIwROs44H6lVR912LzZvHYN6wf1Gv7Q4OOHEqpmY9ptWIHPLSyL5DbOGTsTNCC1nHNkSk3eUlwpcL-Wzg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E04%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E04 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=syEuJnulZVPgM9i-L8PQaoYVZC5OVbj4K_jowoogpolPSTAqFvMGyweDH3Y04RCy08VJvhp19jj35IjPlSSvGQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E04%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E04 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UsLIpxTpGsj7njxKQZ07cGNWz4YyXXKvuz2rVkt5HDNMXejE0z4XTEa_QNU-fmPpFNQ1XxZWeb2nHAuS9CdTsw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E04%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E04 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LdAOOMwENmx50cdm4fJd1QVVSyUIJv--snq2pEMBiBzuMrCwIkd7WvCQW_ngYeUxaBieTjF80_-hi6RHweSIpQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E05%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E05 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qooQEsKTP_7r7NvhYQvR73IDXC94EJEO6MpNJ9rAxapt63nJqQlMjUnVKZ9pmfXMDJqvhRDrnQD8E85MQeBgvg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E05%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E05 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NVAmgte3ErpEaJzfGC8SOYoQe7daRQJHyYkLa_eIpV880u6Be_stQbnl5XzvXUL_eoqJyo7R18naoZ-dGdClcQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E05%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E05 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MrVkyQr5p7R8CwWa5a1j_kOWQrPMzSrfeO6rC-JB9_9wFR1z9MegKkvpwgpz11CtOEGAG4wiajKYijFHt-wFbA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E06%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E06 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xtTYMfmjv4YJFE8jLllVsGrJ-uhLa__8cBDI24bAAaa4w13T19PS4r6UABORV6wA4imkRhc-Xt9TeOIbPVPzFQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E06%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E06 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GIbzZmoS9Oo9Ng8_2KvAXbkwJ4BndAPTtsgIhCZWQ55XF7IeHgO9yR86UgTg3C8Bis9W5DVKllLVGnyWTmxo0Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E06%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E06 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1f93hSknK_nMOZPdCEVyS_HTKwfLKnG3_x18oiF5H-362gA68mDs-JpUfnRB1NR9-6QK_UNIjuMwlHP8VMcP8w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E07%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E07 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cP2KI0IJJZuqNtK_BgxbmMEhWzmYLPJgHDj54mSBUAg0k_LqzXDUbKQlnvYoqCBRPuwAcXBlVC4qqrelxzwGdA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E07%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E07 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KUxjwzZ5gGNOs6Dc_dmr6XJR07HjSux22cdRApTKAEUbY8qXnIcjytGGTjpboIN_7PWmMb8NsfxWe3uNghhDLQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E07%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E07 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZQc4wcF0Xd4jUH-dvj0qLysMP3b9wKmewRlPHydYnufcQnOsx3bykBbfVanegcq358dAp6Yl5t14O2Fi1nutGQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E08%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E08 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ScKPyUBjtYA65GfuDOwYraFRgJqcuHguNmb2hcdGQu4J2lZNS7MkatGQcrHDWo7QuF9NVSUpLm250fhLq4X0AQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E08%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E08 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NS0pkkaS_4XiLUlpq0UkhUgYwvAvjrllEDqC1ebmtNWjr5kMqgJHft8Dz8ir-JaKAoh0c8CQtgwz6uApDKbYjg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E08%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E08 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PLHICuJvNQWqoGC5xOVzQq-ztadHRhzpqxwo653i5_nBJ6xg4pzmRbEh0BkfoeykYoywwE_VJuKwGrkBCNLJXQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E09%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E09 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OgeHZZzzqQqflfVDw-4-1NcosEY348q8FWETblrh8s5-XxS14Zsl1gAoutpr4hp4TMIBoEjnFVzlw-UsnmRhmw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E09%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E09 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=clQNxFb7e3qQlmHbFP3FvMqDLCC-Ku5CsX7GJzrL3nrAfhJS5_C0MQ3IXb7oWua_rwQ_NyATNMDVS4wg_flqvw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E09%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E09 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zSIeFnirA24Bucqe6w-_5O_Ril7GEVrpU3Dl1YQdCHA43HIdazHg2sVqLM3XROuobsQMQcALJvmuhltx5dBQUg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E10%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E10 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4rvapcF2vXtSn0cd4FlAkwLJY2JO_JUlE3taOhdhGYwpetIqruyL4BeR8uWDEF9AQwPfjRaSxaLj7-l27vuECA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E10%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E10 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-qNk8XjOsEOS6Lqbj4Pvcm0bcVkaKScq4bLWQsK_PO7gYqrUNB-f2ydRkGMSIR14iwSGcw_jz4fWil7KSk0Gug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E10%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E10 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wzERGyjS3vtFxMn3s0LINyG8Davs4IZuYQccRFrdjfamWM5LirOdTM5qDXym8WDaz1sOpmKvVr0Axqec13aolQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E11%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E11 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tbMKuPrylEecFzQo1FE2bAR8qkrWKreXNqDJ2Wn3lFp4biC7SGyKbm890kJHxJZjBBg9JL15AtIDaAzkAw1yFQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E11%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E11 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pJwCqXrpmQ5RT5v85no7AuMa6jGYNikVwepr92ISvVXCjOImrzAhbMZCX20Oi1IW-pjluNVvDu7DVCzsUbGJzw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E11%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E11 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Gt2bXgww7dy-r3x5387Gwb5_SN91zVjYpOBdDeM-wIvEnWTB3ZY8oaCPopLsyvYdwDVawmDEu_2jq9l4umFBDA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E12%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E12 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=p92gfzs5AYdpRLPSqnG_pG-Mp3jo-hSOKgGRE59JFeQwyfwjO-Ia9Yy-P-PmxkoxlhtbW2uEONWZikQ39SdT6A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E12%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E12 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tFphtXlpSk39KP_fYeprszGZ23jqa5Btt0PgmYVC2nmEEh6Tg6ECI-8Ig3IzFTEvV4IqCL0ESW4WAj7QoV069A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E12%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E12 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},

"tokyo-ghoul-s2-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uwHQCAffR3odlEPK1yY1O640sR-ls3uBRn_zsfbLLDP0FIwh1-f8f6Rc3GQ-FG_EZSIc8SUZK_o2MNdIa6TEoA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E01%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E01 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jdaCnR8zx2JH9BUeCy_ExXEq0BQgzJDqnl8ztuh-fuPv1UteJlZWP-pKde2fht-y7bqP4BFwVcFHqKikS3vm5w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E01%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E01 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=I3lOSlOWPHyHAJzuedSjufSLLyoe-i9YQdPjdD0GcYTRFZaSTVaBNpdAoIRT39wkxBpFEWfb6eVaKeFHExVMXw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E01%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E01 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=atI2fqhxIf_gILM7M3AN8t1-JyZhrOT9swTNbHb5YYNioLKqwETDfLGwuSyyPhcfhfl9XcSgdFOL3Nr-tYbZag&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E02%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E02 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4Z3Ycgod9P-dn6sn4LgtVrGaFVrszgTdJowcUKI-wxeb9xIqxwoyMyDf-Djb08UNq0yJXdR2wjLJZu2go4srpA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E02%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E02 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ENR7UVnM_vv4Kh8yn-fFSFof3LHibXJE29pxlb0UgPeDy35yYN_nDPVKBB_NqQZu8f_HzPATISoMx9G1kD_13Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E02%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E02 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sQVfw5W4CVlwBGPC48gDc-3CRcGMhJEqAIQKtrhCOjEyiNgguJTvR2DHE3QbOeOgFQUel76fOXKXu83R-p0keg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E03%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E03 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hHtLhti_2qjiu2Dbe4-FL8rKp2vAt48zMp-DclnlSAaTePjh8d6e_vfRMmLjUvrZld4CtnSZfmB2nsborzONyg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E03%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E03 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FXqjuMMVjhqnbvkDAZUrRDjMVy9J4cTXMLYulQDBrQtlwuNdCsSz9SZv3nX2KciYpWTzD5jOJyRGy9YvHrUEng&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E03%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E03 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IFJayIIhwqdo7-UOJndH73a7Dwcrni5XQ2jXOUh1mEoCcSjOpemKlWwtSdpa6Y_RDDrqQVdZ3UHhc0XbL7Ra-g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E04%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E04 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NEaTOxHgXGZpOm0gD0jZLpCCu2rL0b0vECsfTLvGP86drJOrIdno2yfzbb_hxaPwN3XSMB1TvX7-ICbGLAfmhQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E04%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E04 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zbtSgzkVo_aS0DOYZMCSg9_L0MPMX4TgHFMhlqrIknMC4sIowJjbk81OTXjeAAaigtP0Es3GOx7ywE5m1sBCXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E04%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E04 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NNmE4bGqb985oqHfM_RBj1S8B2_vSOuDxYQqYnqGoTbGRqQzFB3qDStakzfi9D3Ybd_H0RwgB-Ya9wDPOWbIeQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E05%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E05 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jkbaoSaCijt-K_Co1iPG7aYgSMB2IoIsfEwk68s_pExBT6cBXkycwi1oiEepIICZzAw48ol3qb_6DaazYFbSkw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E05%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E05 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BF54gJgXCXH2Zo9xrmBq1x7Vs5BGWc51uldzV3EQpQkPeJ0bN3clpZXO9ErCb2gsqahBsH7-J7PAppxhdwqslA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E05%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E05 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-E4a6tU8BeCppWfV3AIYC2H0Ot9dj-l-43J7_zdG9s48_LMQjltaWFVp9-syF82NsQsqFhESUGUXFbM98-2mqQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E06%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E06 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8PBGeC6-VZP9hMqEIDPmVDyxaZSKt6tykgVtIqDzpUHi4zvpT1Talknut-jBGu3SFJkD9t5YpFPrIFMJx-8OQA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E06%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E06 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tynbWN71y9ulCs_lQNUA0oQxU2ey9KXLxHzcE22QPFpJbTgZqNDBTo_DnZ_wkZ1LhvZ3xLpEU30G314r40D9QQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E06%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E06 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=79hiEaJNrqVkneBPX3fiQi18OWg84VhfZjEKy1jaiBRt02WJt4lH-QC2GR_UzGi7yG_7ZWir9TGoe56XY7_mTg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E07%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E07 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Krh7MQVhBiQExzuNXuaxPCXSCxuc1OWDh80GemGZF-Fz1cPyrbheB3douzvM6iS_gmS3MiSkYh6UZfYUy79lAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E07%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E07 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e2tGpakb0Wg7OflRyzpgIfMfvE75ZrNkSutJQGlQ3IUsrkxe9Xzt7Uo3SbTpA35b_UsIsbGZBN5bvAgJmhNJ-A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E07%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E07 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=eOs2KKE5-b_WmBYETTV8FnMxWzNCPAB2coM2Ax_EOUe0LlK8ClT_eu25V3or98wzkpgzZAalGTpVC_7FDocs3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E08%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E08 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2RBW2d0AgapUTiXmykaTbJz-8PFaF3wQvboiFTHqzggqOyXSxCbPyaO9s_Qzkj1oO6N9yvAs0rYVQBV_dMuAkg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E08%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E08 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vGPsg-MWRULM1kVEJn8eaK9rqpcF2FIFVpIvp7tE407vOxxkWJcqf-uSmOJVOBmLNvzGgNt9MKYXSgNOptqlvw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E08%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E08 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9XdP_88WjOWaiWTdmrBKCa1FSTCz4ML5RM8aF_Rzcch8sCN221ReLgjPWeuuyOE99nSUxYcQ-YUZVvXtrk39rQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E09%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E09 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jxKB6rH9c_Vo9VZP3AjrZ2B7ykvS-T0q8SQpoTaP8zgWcJpBJAU0Fkgre7CPRZaBcdaoG7P5gfrxyGRDS8CUFw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E09%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E09 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=B2Jha9tKIfjxWt8dwFRcdX_0McA0zF_5RU8FwISUv22ARYLEjT96ZyynySlSergwyqv10fMXWIpIagydr55uQw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E09%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E09 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jPPY6XErmksWmbMQdghqPlgq08VygrUeIiwNya0w9Lzr9XOm8moW8BnK_jEr9-SNOxF_MsiS7laV5S_kVidLBA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E10%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E10 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UpHZDIHnLUV8mxkd-Qry89mg9qO9cgdex3hzneHjJA8NMuNftP0qSELMiaEguuRF9bJGNB5UQ65nq4pKcoJAJw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E10%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E10 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ev6UTv6l3Dvgiy5rCyK23AdMXeWiKCg99-yRY1Nv2c54K2Ss_6a2janNJH4PsBG24jHWXtllwK3iiAHdMpDGCw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E10%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E10 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_0DQHFYsf_UFjQJk0Q5Roelpa0MMHdrlt8U-Lb0v_DwAePZEgz46pUpIdUT7KmjPjrjKafzs8VHZYojPAQ8C0w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E11%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E11 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=p019VJDCDNigKadecj-f8EMcg1g2wDqT70cebHXFMNl_nMKeSe50Kk_k2jN3Ius3gLohQfM-Lice5mNNzex8xg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E11%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E11 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hqegGrThnlzWYSAme5E7TQRIlGT451Krr8fL7eNbJx6Wj4sVTtLwL_9kB6bFumvaGfPqvf29YmXjb9hUX7RWLQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E11%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E11 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sn-BBCfL4UltyQn7H8nVfgfK0P2gbdi2LyYu1akMYLKHJkE0yZDNcBgMft3MB6fPk-2T5zXVwpJ9yghoEZAoLQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E12%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E12 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IpchkdJMsmOon-jPDaK0CYxiNNELPUEJUY5n8J4nQNgxJTHYYYNfBB6IIFUO2cRNgV9zDxaIGH1f8Yz8X4ecXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E12%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E12 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bU4UzP5OzKZvevEYwI8NvHlWWrcTHeoIZdlKjp4yeBgYUseqQP9SmLIu483Q5erl0f_j7kxrCVgI7W4e220WZQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E12%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E12 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},

"tokyo-ghoul-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FUVnY0RF-00HJIlpYUOYGPzN-5aah5Q696QrBEVsEM_Kkxd_abzYwMCemYfBCeNWKBaOvAFxbWZPXC7HgVY9iQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E01%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E01 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hUtWg_NlKQ0yWMFFdm9y8w-DjHxCSUye-AWwtH77bl8sr2qff7tb-92QCHDvjHL_CTdh2EK7t7M-XxFpmcYGMg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E01%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E01 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=77_OsNzIIvkQtpScRivTmRpks7YFfv2slQfQp1gQCCwJOYc3IRZl48Tyd3-6upXW2Nun64BNLgfrThL9xXcbcg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E01%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E01 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RyubjlfeBsCxrpV-ebAkbTRYjMoTzRzsmp2PSR8Q0hiVEyUxkHGsiBPiQmLBCEl1dDzd8BwhCUzHsWQQPuGKAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E02%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E02 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vD545NrLAODliMvKxTmANvO1FcNgkY0PgU4pZ1k5yj6rJ36KYHCLzk5XM4Rfvfwzz8xPO6-6V0lO1oIVg3u0dw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E02%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E02 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ACiePRfE-w62dX3B56jpSizAKI0oW0OrkLLYnrDAPUhOUtE5L_IRN8X4EAvtLDYHGl0mVQh5zSlRczJWdU3buA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E02%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E02 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=a3ACCJinN5hbahK1gdh6YGU_yjl_mcghuQ08mn2NPK3xZoKh6afsU6-xSEuxf6IoQw31zTJo52s5dwA5DZEHgg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E03%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E03 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ze0IOJNwc1XcQ6V_U5Hk-laeatuLhe-ZGF1tPjAAG7Y5XS0ENUCWvvyAInowqzMhBLNr7X1uQi494v0J7Poerg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E03%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E03 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VqP75JcSSIAYmck2VresKSS-XVrozM-4j3bte7CZx-yPhG5EzlBQ1Sk0vW7e_GT9DECW_uzGY52esG3TuOQpoQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E03%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E03 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=L4tb7AIwROs44H6lVR912LzZvHYN6wf1Gv7Q4OOHEqpmY9ptWIHPLSyL5DbOGTsTNCC1nHNkSk3eUlwpcL-Wzg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E04%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E04 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=syEuJnulZVPgM9i-L8PQaoYVZC5OVbj4K_jowoogpolPSTAqFvMGyweDH3Y04RCy08VJvhp19jj35IjPlSSvGQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E04%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E04 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UsLIpxTpGsj7njxKQZ07cGNWz4YyXXKvuz2rVkt5HDNMXejE0z4XTEa_QNU-fmPpFNQ1XxZWeb2nHAuS9CdTsw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E04%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E04 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LdAOOMwENmx50cdm4fJd1QVVSyUIJv--snq2pEMBiBzuMrCwIkd7WvCQW_ngYeUxaBieTjF80_-hi6RHweSIpQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E05%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E05 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qooQEsKTP_7r7NvhYQvR73IDXC94EJEO6MpNJ9rAxapt63nJqQlMjUnVKZ9pmfXMDJqvhRDrnQD8E85MQeBgvg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E05%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E05 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NVAmgte3ErpEaJzfGC8SOYoQe7daRQJHyYkLa_eIpV880u6Be_stQbnl5XzvXUL_eoqJyo7R18naoZ-dGdClcQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E05%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E05 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MrVkyQr5p7R8CwWa5a1j_kOWQrPMzSrfeO6rC-JB9_9wFR1z9MegKkvpwgpz11CtOEGAG4wiajKYijFHt-wFbA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E06%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E06 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xtTYMfmjv4YJFE8jLllVsGrJ-uhLa__8cBDI24bAAaa4w13T19PS4r6UABORV6wA4imkRhc-Xt9TeOIbPVPzFQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E06%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E06 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GIbzZmoS9Oo9Ng8_2KvAXbkwJ4BndAPTtsgIhCZWQ55XF7IeHgO9yR86UgTg3C8Bis9W5DVKllLVGnyWTmxo0Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E06%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E06 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1f93hSknK_nMOZPdCEVyS_HTKwfLKnG3_x18oiF5H-362gA68mDs-JpUfnRB1NR9-6QK_UNIjuMwlHP8VMcP8w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E07%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E07 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cP2KI0IJJZuqNtK_BgxbmMEhWzmYLPJgHDj54mSBUAg0k_LqzXDUbKQlnvYoqCBRPuwAcXBlVC4qqrelxzwGdA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E07%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E07 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KUxjwzZ5gGNOs6Dc_dmr6XJR07HjSux22cdRApTKAEUbY8qXnIcjytGGTjpboIN_7PWmMb8NsfxWe3uNghhDLQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E07%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E07 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZQc4wcF0Xd4jUH-dvj0qLysMP3b9wKmewRlPHydYnufcQnOsx3bykBbfVanegcq358dAp6Yl5t14O2Fi1nutGQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E08%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E08 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ScKPyUBjtYA65GfuDOwYraFRgJqcuHguNmb2hcdGQu4J2lZNS7MkatGQcrHDWo7QuF9NVSUpLm250fhLq4X0AQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E08%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E08 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NS0pkkaS_4XiLUlpq0UkhUgYwvAvjrllEDqC1ebmtNWjr5kMqgJHft8Dz8ir-JaKAoh0c8CQtgwz6uApDKbYjg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E08%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E08 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PLHICuJvNQWqoGC5xOVzQq-ztadHRhzpqxwo653i5_nBJ6xg4pzmRbEh0BkfoeykYoywwE_VJuKwGrkBCNLJXQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E09%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E09 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OgeHZZzzqQqflfVDw-4-1NcosEY348q8FWETblrh8s5-XxS14Zsl1gAoutpr4hp4TMIBoEjnFVzlw-UsnmRhmw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E09%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E09 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=clQNxFb7e3qQlmHbFP3FvMqDLCC-Ku5CsX7GJzrL3nrAfhJS5_C0MQ3IXb7oWua_rwQ_NyATNMDVS4wg_flqvw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E09%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E09 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zSIeFnirA24Bucqe6w-_5O_Ril7GEVrpU3Dl1YQdCHA43HIdazHg2sVqLM3XROuobsQMQcALJvmuhltx5dBQUg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E10%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E10 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4rvapcF2vXtSn0cd4FlAkwLJY2JO_JUlE3taOhdhGYwpetIqruyL4BeR8uWDEF9AQwPfjRaSxaLj7-l27vuECA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E10%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E10 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-qNk8XjOsEOS6Lqbj4Pvcm0bcVkaKScq4bLWQsK_PO7gYqrUNB-f2ydRkGMSIR14iwSGcw_jz4fWil7KSk0Gug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E10%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E10 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wzERGyjS3vtFxMn3s0LINyG8Davs4IZuYQccRFrdjfamWM5LirOdTM5qDXym8WDaz1sOpmKvVr0Axqec13aolQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E11%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E11 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tbMKuPrylEecFzQo1FE2bAR8qkrWKreXNqDJ2Wn3lFp4biC7SGyKbm890kJHxJZjBBg9JL15AtIDaAzkAw1yFQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E11%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E11 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pJwCqXrpmQ5RT5v85no7AuMa6jGYNikVwepr92ISvVXCjOImrzAhbMZCX20Oi1IW-pjluNVvDu7DVCzsUbGJzw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E11%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E11 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Gt2bXgww7dy-r3x5387Gwb5_SN91zVjYpOBdDeM-wIvEnWTB3ZY8oaCPopLsyvYdwDVawmDEu_2jq9l4umFBDA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E12%20480p%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E12 480p BluRay Multi Audio 2 Dubs ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=p92gfzs5AYdpRLPSqnG_pG-Mp3jo-hSOKgGRE59JFeQwyfwjO-Ia9Yy-P-PmxkoxlhtbW2uEONWZikQ39SdT6A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E12%20720p%20HD%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E12 720p HD BluRay Multi Audio 2 Dubs ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tFphtXlpSk39KP_fYeprszGZ23jqa5Btt0PgmYVC2nmEEh6Tg6ECI-8Ig3IzFTEvV4IqCL0ESW4WAj7QoV069A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S01E12%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%202%20Dubs%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S01E12 1080p HEVC 10bit BluRay Multi Audio 2 Dubs ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uwHQCAffR3odlEPK1yY1O640sR-ls3uBRn_zsfbLLDP0FIwh1-f8f6Rc3GQ-FG_EZSIc8SUZK_o2MNdIa6TEoA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E01%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E01 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jdaCnR8zx2JH9BUeCy_ExXEq0BQgzJDqnl8ztuh-fuPv1UteJlZWP-pKde2fht-y7bqP4BFwVcFHqKikS3vm5w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E01%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E01 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=I3lOSlOWPHyHAJzuedSjufSLLyoe-i9YQdPjdD0GcYTRFZaSTVaBNpdAoIRT39wkxBpFEWfb6eVaKeFHExVMXw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E01%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E01 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=atI2fqhxIf_gILM7M3AN8t1-JyZhrOT9swTNbHb5YYNioLKqwETDfLGwuSyyPhcfhfl9XcSgdFOL3Nr-tYbZag&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E02%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E02 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4Z3Ycgod9P-dn6sn4LgtVrGaFVrszgTdJowcUKI-wxeb9xIqxwoyMyDf-Djb08UNq0yJXdR2wjLJZu2go4srpA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E02%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E02 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ENR7UVnM_vv4Kh8yn-fFSFof3LHibXJE29pxlb0UgPeDy35yYN_nDPVKBB_NqQZu8f_HzPATISoMx9G1kD_13Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E02%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E02 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sQVfw5W4CVlwBGPC48gDc-3CRcGMhJEqAIQKtrhCOjEyiNgguJTvR2DHE3QbOeOgFQUel76fOXKXu83R-p0keg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E03%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E03 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hHtLhti_2qjiu2Dbe4-FL8rKp2vAt48zMp-DclnlSAaTePjh8d6e_vfRMmLjUvrZld4CtnSZfmB2nsborzONyg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E03%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E03 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FXqjuMMVjhqnbvkDAZUrRDjMVy9J4cTXMLYulQDBrQtlwuNdCsSz9SZv3nX2KciYpWTzD5jOJyRGy9YvHrUEng&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E03%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E03 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IFJayIIhwqdo7-UOJndH73a7Dwcrni5XQ2jXOUh1mEoCcSjOpemKlWwtSdpa6Y_RDDrqQVdZ3UHhc0XbL7Ra-g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E04%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E04 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NEaTOxHgXGZpOm0gD0jZLpCCu2rL0b0vECsfTLvGP86drJOrIdno2yfzbb_hxaPwN3XSMB1TvX7-ICbGLAfmhQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E04%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E04 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zbtSgzkVo_aS0DOYZMCSg9_L0MPMX4TgHFMhlqrIknMC4sIowJjbk81OTXjeAAaigtP0Es3GOx7ywE5m1sBCXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E04%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E04 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NNmE4bGqb985oqHfM_RBj1S8B2_vSOuDxYQqYnqGoTbGRqQzFB3qDStakzfi9D3Ybd_H0RwgB-Ya9wDPOWbIeQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E05%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E05 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jkbaoSaCijt-K_Co1iPG7aYgSMB2IoIsfEwk68s_pExBT6cBXkycwi1oiEepIICZzAw48ol3qb_6DaazYFbSkw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E05%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E05 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BF54gJgXCXH2Zo9xrmBq1x7Vs5BGWc51uldzV3EQpQkPeJ0bN3clpZXO9ErCb2gsqahBsH7-J7PAppxhdwqslA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E05%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E05 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-E4a6tU8BeCppWfV3AIYC2H0Ot9dj-l-43J7_zdG9s48_LMQjltaWFVp9-syF82NsQsqFhESUGUXFbM98-2mqQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E06%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E06 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8PBGeC6-VZP9hMqEIDPmVDyxaZSKt6tykgVtIqDzpUHi4zvpT1Talknut-jBGu3SFJkD9t5YpFPrIFMJx-8OQA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E06%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E06 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tynbWN71y9ulCs_lQNUA0oQxU2ey9KXLxHzcE22QPFpJbTgZqNDBTo_DnZ_wkZ1LhvZ3xLpEU30G314r40D9QQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E06%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E06 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=79hiEaJNrqVkneBPX3fiQi18OWg84VhfZjEKy1jaiBRt02WJt4lH-QC2GR_UzGi7yG_7ZWir9TGoe56XY7_mTg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E07%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E07 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Krh7MQVhBiQExzuNXuaxPCXSCxuc1OWDh80GemGZF-Fz1cPyrbheB3douzvM6iS_gmS3MiSkYh6UZfYUy79lAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E07%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E07 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e2tGpakb0Wg7OflRyzpgIfMfvE75ZrNkSutJQGlQ3IUsrkxe9Xzt7Uo3SbTpA35b_UsIsbGZBN5bvAgJmhNJ-A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E07%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E07 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=eOs2KKE5-b_WmBYETTV8FnMxWzNCPAB2coM2Ax_EOUe0LlK8ClT_eu25V3or98wzkpgzZAalGTpVC_7FDocs3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E08%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E08 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2RBW2d0AgapUTiXmykaTbJz-8PFaF3wQvboiFTHqzggqOyXSxCbPyaO9s_Qzkj1oO6N9yvAs0rYVQBV_dMuAkg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E08%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E08 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vGPsg-MWRULM1kVEJn8eaK9rqpcF2FIFVpIvp7tE407vOxxkWJcqf-uSmOJVOBmLNvzGgNt9MKYXSgNOptqlvw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E08%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E08 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9XdP_88WjOWaiWTdmrBKCa1FSTCz4ML5RM8aF_Rzcch8sCN221ReLgjPWeuuyOE99nSUxYcQ-YUZVvXtrk39rQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E09%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E09 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jxKB6rH9c_Vo9VZP3AjrZ2B7ykvS-T0q8SQpoTaP8zgWcJpBJAU0Fkgre7CPRZaBcdaoG7P5gfrxyGRDS8CUFw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E09%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E09 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=B2Jha9tKIfjxWt8dwFRcdX_0McA0zF_5RU8FwISUv22ARYLEjT96ZyynySlSergwyqv10fMXWIpIagydr55uQw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E09%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E09 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jPPY6XErmksWmbMQdghqPlgq08VygrUeIiwNya0w9Lzr9XOm8moW8BnK_jEr9-SNOxF_MsiS7laV5S_kVidLBA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E10%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E10 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=UpHZDIHnLUV8mxkd-Qry89mg9qO9cgdex3hzneHjJA8NMuNftP0qSELMiaEguuRF9bJGNB5UQ65nq4pKcoJAJw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E10%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E10 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ev6UTv6l3Dvgiy5rCyK23AdMXeWiKCg99-yRY1Nv2c54K2Ss_6a2janNJH4PsBG24jHWXtllwK3iiAHdMpDGCw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E10%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E10 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_0DQHFYsf_UFjQJk0Q5Roelpa0MMHdrlt8U-Lb0v_DwAePZEgz46pUpIdUT7KmjPjrjKafzs8VHZYojPAQ8C0w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E11%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E11 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=p019VJDCDNigKadecj-f8EMcg1g2wDqT70cebHXFMNl_nMKeSe50Kk_k2jN3Ius3gLohQfM-Lice5mNNzex8xg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E11%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E11 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hqegGrThnlzWYSAme5E7TQRIlGT451Krr8fL7eNbJx6Wj4sVTtLwL_9kB6bFumvaGfPqvf29YmXjb9hUX7RWLQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E11%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E11 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"tokyo-ghoul-s2-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sn-BBCfL4UltyQn7H8nVfgfK0P2gbdi2LyYu1akMYLKHJkE0yZDNcBgMft3MB6fPk-2T5zXVwpJ9yghoEZAoLQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E12%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E12 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=IpchkdJMsmOon-jPDaK0CYxiNNELPUEJUY5n8J4nQNgxJTHYYYNfBB6IIFUO2cRNgV9zDxaIGH1f8Yz8X4ecXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E12%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E12 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bU4UzP5OzKZvevEYwI8NvHlWWrcTHeoIZdlKjp4yeBgYUseqQP9SmLIu483Q5erl0f_j7kxrCVgI7W4e220WZQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Tokyo%20Ghoul%20S02E12%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Tokyo Ghoul S02E12 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Ifv9d1qsZ6uE4R0UKy-UNTVoy6Z6P9UzWNNXI2WVFnZxMQ3C3SI7sQMTZGxLGd49oymmzWaB40mkWgRDaKk1cQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E01%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E01 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZmpDCKCywT4kp90CZYHf72rV4z-eCbpsEQy2NxVEiGr032gNHyYbOiuQ1pLHIQmPgx_fHyDf7zWHIH9Mk9jsUA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E01%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E01 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SF4U_Aw-I6cZ-ZcnfXX_SBkaay-d82qHNrsSWq95z6SaYHddGjLV0bnCxbm5k772lwYgdL5A_3DOHP9GtLxEJA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E01%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E01 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=lMHmuSN_ePYNcn9S5k42EZKbYGNY8WBEjGDXK1oyv29Phl3yKcqbV7qZOLIN7n_a-_elIiqO0t13-3RK6sNTww&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E02%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E02 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Ux8Okq1LEiMofgNpdhKeE9eQG2YcMsPR7LRkdxpSSdfn2LdY3mNabZKjatqSplIZHguelFd0TnwyXprAN6Z9lw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E02%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E02 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=jKaal9HjbsPhQjL4GhpYhNQY0P7YX5p5QveSj11REK27te88GePCLAj1cJ2wVxVg3Mdkur1JdgJqu5eqMD0aJQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E02%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E02 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KqjFvaxvXkKp23I--RhmxUjr0e7X4FZwGXx-EgCLTdjeb43mkj9y8p69y-OcsaHbAVwxsb0Xl3iR_9wUvuLysg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E03%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E03 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MGaGN41ZRmvX69ThSdfDmf18twJdzBvjVPLyU9bKLSFy2sUi4E4Zogz7SWPF19-NcJSSMK-94EXykhemRwPcbw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E03%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E03 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-Pg931SE9yFqb62SCWn2HRlX7CXoo_uVq9hdTg-Qh5sIsauP9ESL64TyuvSEpMyzjDXmTryk9lnFegzplouYWg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E03%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E03 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=81Xs1lsbjrZRB7wAaIsDv8RkdeBire7i4Y8M_wOvpGYnsf-DSonrIPfn_0-D0bA7kXg4KdIDHXglIw27kTv3Uw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E04%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E04 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_y3w0TIap2xHScKc3sRMdXFHSgJ7t0fjx6tfF7qDej1SpFXArHtt2amaGuiDeMZO7OsgmxWRcvN1QLuwDjqGmQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E04%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E04 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=v0z-mtqCYc5YGWPYNWG_IWhuazvcWT5lT66-TccNxF2KXGUAafKoLUb5q3TIsJbtC2Tw9S4HUJCky20OToB81A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E04%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E04 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LfescWGAVpHP-gBhrREYG6wOncnnHY6J4x4OK8lu7YkTPkNM6lOlrV-FuuzP4vWpGX5M5c0CsK3nn_ydlaz5GQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E05%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E05 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RMaU07DxxcJVGOAEeih4vjPeCLLEOUA4KpoPvRlDQ0DbTmSRGMp8lcmdHkRz1MxtwbxrFz4iXDdwDEMcye5JNA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E05%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E05 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=bpnZXfPw3-a_i2nM3q0wqii2fIR26XvWjk-sLYvD9ubuBvrJzdprjUkHdjL7JN3WXXvQWkmSI-bimBR-3LomEQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E05%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E05 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_61CelDOl756zgZxzlK9F0vGThibDZCTvfh4uNtaNCoB7RsYfkFWP2zgabuz1oot5Ei96LrolR7AxmoUPBCVQQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E06%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E06 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tSiCwBmJ-pZGBAJh10esO4Is1PGbDrSD_11jMN9oYe0_4E5RtnznQEDkG31mO6wrvMPm16mLo0lQDt82tqdn3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E06%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E06 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Qf5hZyBdeMpDfKDr6fgzm7IFKiJWRmhMPSs7fA_g-ocx5OzfRkHa_-wbL5rfFL0dbIuUeuOLUWIHzmAYT4RjqQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E06%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E06 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JL08hVmV6N1mikij-8NdqJskAVswtv3irJDvwPYJRBEUTCkAZX-EJ32jHLmLh-gfJF-krlcDIcDDmhC8vXo1XA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E07%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E07 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rR5zWJWypeZOMRdJcHGztgEvsB4a9yJsxQTtuLtUBXyhlS8xBUOJK3EqubiSEEwaQv2va8r8LRABUJcHEt5dSg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E07%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E07 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6Y0KvmLLNIgfOsHVS16kz4qDp_nx84VAd59t6Ap1g0EzIqkzsDZq2elfJGZkFfPNIssNTSfuMMCHUbgwr5beyQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E07%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E07 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2p0fsxygWBFj7V-K_95mGORP_E6YTs6Gzv88nSjg1egzxpJRYi3OJfrqo9s9_AmMjERYXojOYqbiiM42KLfmpA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E08%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E08 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=P0tScB-UoP4GZEPdZZwLPrgQZFCGIr2NiR0Vm15EWoyAiip3p5GEvKPXL9KPbctn0c1ojCSTDJBAA1xSZU7H6w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E08%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E08 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5dTTXX7b2LITdYlfiFsW0rJqA51aJ8bh9GV-XjtQEC__K3iWo_W6N0LN76IwpFtxRQwBoPTnuIj19PYowHiqPA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E08%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E08 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=lUBrcDStm3p0dBGyxsinH7NrFD-_FxGKSh4jDTCDBwbwM5egetgSNaHsje-DZt6DKWTeXT-xcJzg8-DAXg1pBw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E09%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E09 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dMHpdXJ6yQMVj66x1gC8f9GGq4nMurxkl7taBqwRO1sHsC6XGBC94epprFPc0FLvk7tuDcatBkBM-vNnUBygXQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E09%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E09 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=kt767hQR6rmb9iJQdKbaHPqnrr-HsqlYQj72Adbcs5s3Y-YitnuazwC9DfA8wNg5Ogr_BbV1N50sSbYqbuzGig&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E09%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E09 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=T57AeqtcPI6KStZnLnTG9ui41cAihjvZxIfVROPQt3StgT7hJml6f7cFIaEJHlupzBoGwCYJmfG6MZikRndQgA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E10%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E10 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=eXdD0_a1590gIh_TGsEtgzjoTbSYEb7lEx1Y4qq1um1_zD9qt2tEqrdWh4MZLfUe2OS8crBiy-ESetGRW6GURg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E10%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E10 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=M5904Wl-3DEy56ML2uwXyIIhejRcQCbGgFzGAus0AnOJW5nVdVjeLo2NDtYQXkD5aKXnWVGc64stlr9Bwpw9bA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E10%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E10 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vWap9aBDbqcVyQdy9wdWFiEZfcC75omLzl59XacL3wE7EYLM6qOfsyF2d_j0EpSyoxea9zDMBdPBx9sJYaseNA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E11%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E11 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7d3kCmF1qDf7h5nDczz2qeCpLTDTo2REjrC_br07r3vXXSWd0DFyJpeMbEC4KPOsyL9YzqPOaPdeA2I_gCF38w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E11%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E11 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TjqkqY-V3LAgajd5YIC9QRmOf1XjpsuaK2d1vJuw5YMGms_oB086avM_fHi8G91mZA9wlJptsBjiI1rwvvrvOQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E11%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E11 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ufbm3b7hvpma0Q09gA9fEwRublgPWRMj_edQugeTNQPNrl5mowIiKxZMLiU6EcEOSxF_31DX8efGY4UmHyWQXw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E12%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E12 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Banb8PGyZvVkBDzxOc3bHp4cJZPhqD4knWJwTAgbEqUst8aWq5dp0Ob3KHHwEl979JtMdHSB3KbW-R4iP9azXQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E12%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E12 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mtW7mIlIvxNtEmDT7ipRDdpezZabEXlg17agwiRMwQhwAKnhnEc5FAVr_EoXhojvvdELmdfR9nC37n2GZb3iFA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E12%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E12 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5baoXuKZaIbr63orFEPAb75P0b07ykpScGv0_STUIQC7jtOk2E7tRLob8CVEr6DcJqw3IHsvaDa6X6tPu0eDjg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E13%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E13 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5AFuNPtOLCoKNmrE-VQjHIdKVBC17VTzo0w6Qyb7S2mmA67KGWrrHVfmWfODONaOjMkH3HAkLx-XqEiDQ7yyZQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E13%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E13 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4IYgj-SMLvsf1sOq2xVIZ-XS7s6_9nI5bEpWYx7EtFKTLcEfNOalLZu5WJXwv2Y483hZkvzJVOVEGBbH50AuJQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E13%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E13 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x14": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tIIPg8o3Ficc7ZbIjX0jo4OUj8jBWM-EKiLlzZWAUNul0pMEGWFY2_dACTFftW7oayVzRYXun7nUSFsmyKBRVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E14%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E14 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WxvnE1nHydfGrg6hhzGEwGSY02oiHjreMtOV5XZCMYF18pODCTc048fwIifpDzUQY6jguL1uFtl_dXGYkpjh3w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E14%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E14 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EurXUth6wuGzuNwWixBNtZlEqOFOR1HTEUKLAqHZv8HazX3EhupGV9D7q7LFIiS7XLWFmgsuGVQWpuvdxVidBw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E14%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E14 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x15": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NsAVEP-nYiHQIf1oUEA4d-ma9PhhyPQI2_NP2TU4co28gSwyZ00LFKjIJ5Jb4sUj2xFbeC-fEbaHiMGJBvK4Qg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E15%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E15 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=JIZUjh8yNXlnoBa0Gj1UA2wwvOtNEABjpb2OKMrfuO1mh0l2_YDIGdeN9-F3UXxmvKQkYi8RV6mlL8754JMcvQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E15%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E15 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Bfbiak-ehyOefS0JhoWYEXIK1BopAv8bhQNesIjm-7wSNiefymz25xBXfPGiBKjzz3JOlqkI70thIBQJPfRYow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E15%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E15 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x16": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7Z0x4QvyYslLAHaHzt_Spw_zN3qc3CXNSShUXDaqWWJU_tdN5R1x_2yN7BM2Z3w2LRR7xruSzQHDyghRHzT18g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E16%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E16 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8WTEZs3jD0pwAu2MJYemBDw8lG_T-5Puff9d2SmT3vjT2pLW8n6dBeg_MBSjtEpP0orQq6s64qHxMdhVUNbwRQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E16%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E16 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-0bY_UY1jIywPcm1iPURjyz-s6VqDBHckXU8X9XYOT7K2r80noSFs-7dd1opE6k1DF_KMcnwPUUPgt6xlja5Ug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E16%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E16 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x17": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6I99y12Aw5e2snN17ibnrmVOzVNxnYLjp2ZTAi2V9xRx0w0hR-eeno32C0XwZGzs5p5JXKKtPiso-PUW56tt9g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E17%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E17 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=h9teyxtUVxdxXXX9o-34kJP8bw1dudXiFB8C861ibMVBeCacXxSLiACpiIXeQm3b0-wLbzJJe6t1xVZFNaOIuQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E17%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E17 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x18": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=2VYb3BxJkE_nXkVARSL62pEyPe3hPf1xk7nPo1q-FPH4Pa_6bwlZBxOhTv8EPPR6hzzJ6e5QaqO9o_Y92W6Cyw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E18%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E18 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hfQ9UKBh_-X6Zk_1limOYA-L83NrJ0MLLoPoaqNOBi8MvlTM2NeOFt4LTZjL3mSJspPUMTh2WWadVgnw54wtjw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E18%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E18 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MMF-BZwbtuURyqjzuc6QTGM40tjSzoW_4dFWpHDHOkZ82txmtmXZBQ8zyuG4yMmWKLsN-NB9pv0_94b75oalmw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E18%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E18 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x19": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AeMji8wsq6LuPHBAA6Nb4vmaOSJgVIdBtToRztGPKPEWAmkgjlaHnKSOVgBkSkPIadzVtZFsaSe98_hXjgJKyw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E19%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E19 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=o95yrTFER5LRFYJTVW0cGQ-222451bohe9iEtEJsF2V_F7JxIDasFvfNqYcs6HK1Qd9XyYhsrZZ_aEz6w5l2Ug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E19%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E19 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=P7Gaz8J7uiRHVffYZQ1ljYulkVUQ70ECC9RWSrad0GCbPeQfXKjZ3Dwkk-P0s2KCPzUkPZMGG-uyuvwg5sceoA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E19%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E19 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x20": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VMpP8yBUN0pFntaYmSVAorWqh0VvtNwvLZhrPUQ7AIKpJA1BfxU98DOlf2oIQZ-8s-QxLhtXPqY36ABc33HFTg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E20%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E20 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AlEtVsj5Kvb8Erit7oyCQssAoGlHj871QapgIf0_vSwgo8B2FZwtXE42w4Lo5Z_I2YuwXKyaPuWq7UYNJh8ebw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E20%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E20 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zab5uk9g5iOx79JyLoxN8ivHNCM9JvYKg28K8uviASysuWHcHDFKl8Zfh0pSg9V3xjG0fSqN9jYXMBuLdMXMjQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E20%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E20 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x21": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1RPVrCM31GOgz98_WJZPKQvde4rbswTfnfgKVTKEfp7scVVTLgWpZL4E-MvAG66RGXPG5v_Hl1N5hGhz44BvJQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E21%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E21 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4MwDsg14nJpyVbHnpVxHg_tJ1eYHTAOkndQfw1IDFpZzWon9eDbzQI8FepVnNeNn19LBEiPHIazx-PDnyvT7Dg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E21%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E21 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1AJnzvMDahaqZ_ERWs2OG9EihqIIOQzIlH-VGxN0vZQoRyXk5AHa8-4hDkeDNnDGiDBrp1HOOCApmhcGoVvJvg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E21%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E21 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x22": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gwwHm93ZDBKWUTu_BKcV6mVP-sSdJZPc9HFoOOVIGY1qr0jk4NpTRJESzxF7cqY7poQfD1llGODvKm30FlZA_A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E22%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E22 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rqxrKVGY0ykO5U1ZPSLksMWt979wjHGfoOfmk_3KmNS1X8S6mc0QGKJbHhH-BFjcNBpaWPAsHG38u6e6IrIf1g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E22%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E22 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=j_yeNljQ_fBK6T4p7lx0HJxVgiG9NHeZaIhE2k8nKZY99C3VxKeA1tcyQEGpph8wyzlR-AZV9xsgIhxWpE3-Kw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E22%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E22 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x23": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=joTcB0amh2DGn1cAeXjlYKqmFvvOj-HM-iihFHusMM3rQyUVHEJsD4rkup1tXNtPA8GgAVqgV8RLeo88VBhoxQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E23%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E23 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=acSk8-MHAYeIU2CQhlFqvyjGWPETjhC1yqCsNtnJ9HGO2QZaiTvyD2Q_m2WGVJCR3ZqSFii1LIm4t6oMq-m8dQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E23%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E23 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6Tvm2GL3S_Gwh7X0T6LgxY7CB7-ovhHFJ3mZCLbSHSaOdCxrzhgaeLpOkw4g9hjCN0Nr-kvSektIgTf1Joh_BQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E23%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E23 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"sword-of-the-demon-hunter-kijin-gentosho-1x24": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4a3GIEryQmxc4mREHfYraUCy6LO_mDT8ULjhdUOKFDQtyp3Pfy9aJjFLfnkLoMQLFmzlby4-ZCjhkJjJCKSJNQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E24%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E24 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8yOrZxC99K0NClVy83LLLGC5HGtEPThEer0vIsi956qEdGRC0IQamfU6zFkywfLXMR372AFMYWzRdMTepTdrDA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E24%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E24 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Gq9quoWJAw7Io5rtgcvmRXNvvCNzB_5sXuKFhgfXEKIn17fsAxX_yEJsjnJwT-hiABF28yFWMUMQrmye5a2E1Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E24%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E24 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},

"clevatess-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6pJWtw5USjwsKht-D5wBwIGsg_FY3rJaLtV6UtwfJnKridvUjawBfEiDkLyZS3gWqwElWQZvw1Yx6mnjX7WsJQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E01 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=go7dO_YY4RIIZAYcOC4PghhmfbeAQ88wWbTK-EkCM4uuQyzMRAeJZnBSEWniU-ZpOdmbcMFfswEzjiGMpBSsxw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E01 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=28bSyWGuaGDr9s0GEANdrAEOAjnYWGge2agzKIYm7xrezg1Wyp1DqCTZGoy4lJA3htFQcDehkB4xuvztNr5NQw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E01 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0ddrRgMqpQAEfJ08Be5JM10auzu1uueKWqZr93dUubfhO_jbLlNHMQtWYe5aq6bcxFB8DtDuj_15dPPxxjDPzw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E02 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nnWR7iCkll_dqlyj0V1gYOz6Ya6zw8SMPc-oeUKGfPnbyGIv3kQFs9zMrrR1puoU7y-E4CigFzSNtmOOUB6Rqw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E02 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ryWZomWzdqwP9BZV61a_EDc28zZ6dBGQSYWxVNCc0nkEURnq1yMh0zUjfrIi32bB_y2sdmX12Bt6AvnwFn1LSQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E02 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cwoi7T03iNRvRilMlopst65YKqyu9AKgOJyfb8GnRY8G_HLTDmTa-ILaLQ7aMkxHi39kIxErh8gu5qs2ObdNKg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E03 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=YQYIVuLo7tn5958jNcANEmMhwVYqqxKjWITxZpu9JRbRHT9lOWHAriCjtWLmZ85uT76EySwGgmnfn6ix-AGbIw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E03 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=O0RL-6vWrq_NJoOWXhz6ru1XtLEVxjWkarVvLQ5Q69XCJjBooamxwRyjVQAHydJZOd1mb72ewVIANjRZGKgFuQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E03 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3PfoBGBY-NnR7d5UmdknMAi2g0JIsvuQYwPvcQUW6GVD6Og3NwqZEO3JehEH5OMBZ8Y7rLd-H1pOvQUwd0SNMQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E04 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VKz5Wwn4xJK4g5Z4cwFCMBPH1m86GchNTS924RTrdLqS0kb9l0pknvOMnxuFRRJS9yCVZe1LaonwmbHRaERFBA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E04 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=i_FvT7UxVW0OrE2g1U4lKcldZg45FBINPWo6dDfyKVVyKOEazft2EnlixzjIpg-itYVy046GfUKQsLZdQDWPWg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E04 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RKNyM5FmUu0M2KKqW8LkxA9-pae40kCIkQRvlxGtWWMBYcNRJNtaf0pf4cgyth8YZ2GsM3A6ja9UmebEs5kE0g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E05 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EaQgf4wuDvEj83AcVjS-SMwWekE4wMEPqz0Hhx5-w54O3fvKxn9tlflvdxewEddBtkk8j0_wy6pWVEoYj5op8g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E05 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uXpRtPq4yxSss5MUBUYxJeKCzFjFbk4554wv0vB6a3VPcPTlXtrzhe2Yv_Am-0rV_MgZVGhZro1rjpN8C7kgXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E05 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=64P-svXddbvurFxj720Z1YeSpE6s8tkIuxuyfqf4TMW52LPJ4ud1Hktw3s1ujJ0zu6OyL-4wq115bCzoSdhqCg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E06 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=70V8NiqYnwCmb2yimuXIUN1PXbI7k69FtIW8kSg3O1x8sbXLXdl47a1T6q_utF9nzjf5V7AjplCCGUj_lSVucQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E06 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hbxmhCHtSsNMSOCFp1fwS7Oi6GAXT1SG1v8kE2n7gqwSKhjryzc_xhy4YQzKa-yeQXf1Rk1n3TS9tTKzviO_Ug&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E06 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=CqkFMPsey1wY1lxpUgKFF2fiqodchZWH7TpZE0QQQkyP4GA7nXMqI05H1nWKMP40E3nvLyHikZknKwYPmSvEWQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E07 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iv0JrUhDtmRzR1CR1vGgWcTfWApz9wa5jsOd-_BhomQo6SGl9G43asZyXGtHT-RhDQk1anFinzhM9jWYTyn1nQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E07 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=aiCsp8nAVYWMhRVLXeigQPkPfwdwr5a_U2PpNGeh7rd4AbjFm04wqiMy-b5sUq2n_3r1KaursVpjWd59fkDWsw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E07 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=E4vQ6yKscflOKhSIzkQkObM70XQvQ52TL2LOHfG6xS8kB1VHEROT0YVcMDMgh6DgQk_U-8na20kdoOZLR6_aDw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E08%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E08 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=joS1rdAJ7dKy7pMYXTieBN969xOP1rsLbogJ2LxCJfD9VXtOtpVqPYZgxJmyq_JgX8ZvUgM2wPud8T47CQmZTA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E08 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AuOsS9QmXvtPxZpKkvS4vBngCiIutzN65mZWpuR3glfQtDmD5LW0Ep50dWXLvwPlwYtCO_6jngKIuinOF22FUw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E08 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HXh-3QKgZE_jAv8nRZ8t1YRd-3v9h_f24RDI2HdiA-X_kaYUwn-0PNFmGaa59LPMcmHEz8-KLHPwTKtFfAss4w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E09%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E09 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=14ULN0uLeOD_JtDnaryx6FxUX59Sq1kiFK5V2UwrnWGL2miUR28CLv8NST_YhoIoD634pvRTltKk9pgB7Le4Nw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E09 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=DG02pdBCZ9ldOJgDow8Gzi1UMQA2EMUMbKUgxptaqTgPrgbUj-3l5FuTahkxPbsMdi4SK7rXnhzCVJd0bbBXpw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E09%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E09 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-G_tOWzd11kGt7LAEr3NFEHLTYXu00v2gvTITPvM6C7BpDACYmloj7qZHgysTTc7UIw7Hv9uvPWEmkRR1OrlnQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E10%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E10 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=d4YMlUR8rskOna_jOcorJsb7oNJNHjArYaUITpjDiL9Zi1Tof7KPDo4pwU9pQ0SzHW6IpHOJP06o-Qh3wNZ9RQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E10 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EjiMle5wekSm78z0GDgowWzAQC2i8tW2mOupvM7V7F7hPSq3PfT0WhUdOezIIXcq2ZYmhisZ9AgF__Vebv6aoQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E10%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E10 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nk2RxPJ83fCv3_w1E5QLssOhgoLKFXxwMncwtZ20riO_UZ5m6mAEF-jbIBOQhpBPp0py2bnAwzsXfTYyb0KS7g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E11%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E11 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Hr9j4yCxmu1G8aU0kPVLdO3fx1LicfBNNVGthk8Wk0dVAJ4RtJSkC1kbydpm_T8fTUWB20Ewa2jCbE9AWtyv6g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E11 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wBHJXkWp4XSroznQ1kXn_RFKPugfuimbjxz5cRaITx2CfCT93x3rVs1mYyaXovNHanYe7dAEB9x4zUvJzjtNPw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E11%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E11 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"clevatess-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e10wcmCY46sGewiVePEMZe1DkvX5JRFSBeGQEmxQUNIKVJRh3IPODpMqgaPwWAiM28j8MsodNbJ5ipHT42JatQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E12%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E12 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iDr-iZg9bI4-v4a3ydDIoR8TECRr-D3gOMJAqF_UugIhTJxoJo_YgriIwVg2YaS5dQYbGRWpwOpzxNJtmafxRg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E12 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=CCJB-cRgLZ2hLRgKhl7ZPR9cvIgo05mAr_ka5IQWrMYGe5GhJDX_21PTZ2EvdRSHVNuqpH-OdTklHLiRmhaVwQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Clevatess%20S01E12%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Clevatess S01E12 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},

"demon-slayer-kimetsu-no-yaiba-infinity-castle-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ep9yhwzFIZlUm-0LpkYpFYakdfRf3dW08PZ6nfQ2JEI-RR7BzqGE6LszApRr6aOCk9UrQ18_sGZl6UYIDjErtg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20Infinity%20Castle%202025%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba Infinity Castle 2025 480p.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=wmtRlrtIzhflxID8cs5h0vEnLfbkehbiKBLy5irCZWg7YBq0eNOJbJIHXFXVQVDbTkntnZUIdDLkyODA3eEyfw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20Infinity%20Castle%202025%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba Infinity Castle 2025 720p HD.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QCkzMu3Zk5o5WJ4qpgvodYJrAZ9YiaYB2pez3vL4eMEwVEQ-icSMhZD-WmoJ86NmrOIgum0RIbxVXFSvOsn3eg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Demon%20Slayer%20Kimetsu%20no%20Yaiba%20Infinity%20Castle%202025%201080p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[ Visit On Telegram @HindiAnimestuff ] Demon Slayer Kimetsu no Yaiba Infinity Castle 2025 1080p FHD.mkv" }
  }
},
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

"id-daemons-of-the-shadow-realm-s1-1x1": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KoJbb3pJ4kHjhOirufw4MgDZz1AIcpsMM5N9z1eJYAGOm8xYnOIn4aCkJvlZSq7DuMCZl-rU-SOTric8swDyAA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E01%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E01 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cJpJGNKVynjbfsc7J03965o4Srx2-YFiiLyoIPcAgu8-AQ4_Yjlvhy4Dez7gB4DW0lDlktvmXXiEtb2kDFPrOA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E01%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E01 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NOMpK71uwzoMGZze-WngaLU15W5e1VnhkXq5S818ZxGumepWgb2IGhRrcLV7Jx5sHq5nQ6hOcmcH78hIK_EU_A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E01%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E01 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qV9XxFlbBB6F09RIx-R8lkgDUHd6niNsINPcWYb38SFCBtpPVjBNaFTb827WK-gY0LpKRY5qzESciHKAWzLnyQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E02%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E02 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=u3VL3ZfZnXnZpUq3Ubv0LGGAMCzrVEtt91363z3TOeuKe1QDcE_fFu1YESce_IH1mV6E5uCl8ELDaGYeMHQA7Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E02%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E02 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-e7p-nuqPXK8NTcv7c0hpNYvvRRz3i2nWNxKL7j3X8LzK7fZxPZMqDZ-CTj7MUYAs2iEhpY4E1DqmOguBCom_g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E02%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E02 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=endxSNlV5EevRy7jiIbvP84rxmwNM0yGdkwX786wOPWII47v570y-FOm0wg-gFPCcwPin2-29a3g-swbxUVY5w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E03%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E03 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dD7To_VYw5BMzF3qhqUPTtf2Oz2acWVj5FRIQLRi9klSIWoL0goMxt-BU8_lsgaiRy3nbI30LPZFJHerUQnmVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E03%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E03 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=131vDzwpYb7n4wNou7ap-RWMsp5vBuDJdp_2jNLGahoWqB7POo1oIKo_Hj_pfW81pqTyScoTzj-lcTJ031eQ2A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E03%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E03 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_rAC7ksrdl378EI7rWXYR1BT8KdUKBe_qTqIhkMLuv6dCdXXKUf_4Da_0UhlyeQ0bW2Q_wMaPIfSqEfu4g7lcA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E04%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E04 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4ML-3zQ2_XkHZZ2Lixv0j6Szv3Nng8J6w19VN-TNTju0-BlCiU9zoBlpxevdKryyGOTUJ3T-4nFY6DzjJmx6Sw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E04%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E04 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ho7lWOVlnse9CufWHNzf-2UB0A1DytS1PsqZE7lIYb6MIpMXo0uyzIlIApZh9sS9ucGWnHVjjGcWU2HLA37XnQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E04%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E04 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_fDjDGbU5Fg228JxL6wedf4CgiIjy474qjjZovEaG3v59aUxkcUBiNqGM_PdqBDIIJhe08H8L9Iv4kH4yIisrA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E05%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E05 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6wXLVsjdHfvbO741YhTrgE5QhcCtGX4qcA-4Tx3DTEMJ62ljas4yD8jIUCkFJMsEq1wg01Nj2p7jxgzwxRIHCQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E05%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E05 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gojJ4Kryj8pf3ORbd8XvULc33baPwVMTyLp5ohIoI_nEOXcl1k6kmiwW-o0UW7WlLga10S4G46UpkGFQE4KYgQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E05%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E05 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QiOgnhvk1IcPTjGpRqbVgSHVZbhATMCRYuPFn6t7wUBxdQPAy2448p5Zn4vJXrW8KFDpPYhMx3115lFxG0H3lQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E06%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E06 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RndsWIOvqPRszusqzES6ObKert2CAZLkPfgG2ssmBYVS6pwu6vGN7rqAu0h0jrFEyGhWfTfYjo1Xdr-JTPDNCQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E06%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E06 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_Nqmg_v2GCm7h1qU5B28II_705Jvm2cR9cPgKgei34wGHhWbaekAHXTV-4DwZFsodbBzzk-mmh9NBWznFz94qw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E06%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E06 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0yIUbkzYGT5XtXZD_baMnuHfE1MwSoP9_fKXoOW7f5ODUdgST3cs4f_CxkHZBnLeLNH3q2nSPS8bNyb3Lgqh9w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E07%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E07 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NiBurWfD1UUW472fW3IvArJ8SlbwyyO9TEdobJdPdwGRAPEo-CdRgrZnrJXYkbrCq3cPqyNOWCPuLLWmHrHnZw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E07%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E07 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=aHVLUCv8DnFGWHh0ddIwq6_3u2Ub9JhY8vxuj2pz-fDDD5b17JNOGKKmzodz_Mou4Wm8znGtzRK8i2zBSmWixQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E07%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E07 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ZHo7AJ75xUaT5MOlQe0qrS7cMthYuUbh_Pyr9WiQT6lB9mVhUPXL7wIiqwrzs3cc3oSL2ayPvdLJmMGLNrj16g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Yowayowa%20Sensei%20S01E08%20480p%20WEB-DL%20Dual%20Audio%20ESub%20Uncensored.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Yowayowa Sensei S01E08 480p WEB-DL Dual Audio ESub Uncensored.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pQBrBtuDiA9U_o_dD3YtcC_RdvR7qWYZAa1ds2zIXa8uoMZSUTH9JAaRqRg5ieLaBqrnN2f9u7A1odufCY2x-Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E08%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E08 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xirhA5S4IfgIdpPBLkdTey3r96JOkxDvXRJHk8a4h61ToPY2p4u_kbqO0IDsLO61uigVY8MDP8eiyb9I5LEakg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E08%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E08 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gQJLTUHxJ6r21n4S0WwQMkTXpkSFO0YfetnpcR349TXNojyBfY3SN7WrPKYPocEpv8_QJdrfnl6sDDEytRYA1Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E09%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E09 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=guBKk92xa8LsAWIRM1W6NliPx5kH9calH3lH5jT1ZhONsysHjx5HaBmHP4z1CNvgM1x1CsRMXb9Om1w_dJt7zA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E09%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E09 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=B5e8as2ryvCqOiWnunWOMo6wITn8H99ksw5qY8EqqsmeeoBuD0HVKTMmc2YVZwGHeBdMNrz9dHEK_-VntE6N8g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E09%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E09 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iHCZk3ZL0T8_7YSdMT-3eMDHpANbTFXfPnhUs7MtzOfwtAWWXYpR3sNOE2oADHnCaWc76ktXyFycOB5CDM2CNw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E10%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E10 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pTSwNjo08-fo8iCvmsDf1VQ4KFVG5coD316kPhrr7V81WVtik0HViRUseVrCRVy5jhwH9L8baCzK8uOTaSGeAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E10%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E10 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=aocM6jRMNdrEGoc0XNaqXMb8F2tSmJ1ud8yWegHFRrcsJs1oQEndo4mBjGPe7MTBjFnfUtjEQPYDz_IdTV1zHA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E10%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E10 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7DvVHhOvgual5KQEUDAnmec4VM6JGH6ut8objCkiTKq4Z6ZVCTrNGZD5-LyoZiPYJf_wSP7ctcZxICLC_LN-5g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E11%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E11 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tkAAbP8ekDR89Xobuh1IzInhY8s2kio1-qeiA_rgFPgNhUazix_rHA683DrybcoqQIz1VuVszcC5hId_O9hIFw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E11%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E11 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ESOY_rEYDMD8YAEQMbfO87r6cwqi4VNib4YDSUDqibdOx8Cr2lCpWIqc9xabv3Vv-3XPn0BuG4YA1knhRqw3Yw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E11%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E11 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=xRCB9U8tHTnLKRIEwezuh01RJRfNmeIPnee_2avlIdHc2LA6zvXUv2UIckQ_1j6IeSfR9rsPpwV6vQxjWhqjnw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E12%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E12 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gLA6k9-PcG65AI7FJApKQ2sUnPCmdkIzXOABvpa1R8CxWUlDcBMJNraKMW3R7JiHQZbMaKgIrh2HSVEBmlcS0w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E12%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E12 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SR8smdjYBAikRNNRPmhjKMFOJIVp9mvcJaRvWRl_tuO6GBZJhHAjaS4dRHyXDYtMDjXxorcoNZ8oywmx88jfmw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E12%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E12 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x13": {
  qualities: {
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=83w78ShfOqf_sWBl1sH2mc3Ox_tFyFmKPe_pJHcNcUqH-VZgg2YAWV4699Rlnxk6zCVrj4rsWuB_Pb6stH2dAw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E13%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E13 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=phalXvrB4KA4r4vgyLHDEHsgtuKmbPgKh2dmudKEtDhkYgxaNjA_wDO7lc96Goojw1UwHtS5YtafYaq8qhPQ5w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E13%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E13 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
  }
},
"id-daemons-of-the-shadow-realm-s1-1x14": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=K1zPQ3l-o4p3OsCT4OyXGd3Ju3buuRbhESiboUdzkrjL1QDjjN4O8CMWvjea3I9J5NfzdcBQ_WT_3Uo3uBkd8w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E14%20480p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E14 480p x264 WEB-DL Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uFaAuGAGmW0OkebvQqN_8TINnOM3-cODKkf9B654ARIuJ-nlRV1cOT5TxMuSwibb99FZUTUvuenk5o7ZKZmKoQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E14%20720p%20x264%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E14 720p x264 WEB-DL Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XcdmagANF-AEvvUJBNnRWQFzYCHVnA8ULrr_8MUC6SOp6MyqSty_69flepo45l-Bg7nfCFY0KKOwVc_PO71sPQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Daemons%20of%20the%20Shadow%20Realm%20S01E14%201080p%20x265%2010bit%20WEB-DL%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Daemons of the Shadow Realm S01E14 1080p x265 10bit WEB-DL Multi Audio ESub.mkv" }
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
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FR89OQ3wwhsBQuxzTiNp0FSt35qlBusdCH_RLO8ICimZxg1oV5kgPPA4tATxGsrbEonm3ZZzRPm_xoy3Kcy7Mw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E01%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E01 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-dmSzpVrScFxyHcbUZ25Gyai5LSG6WyRVA-c4BB4wWn9RaOcXP_letn7ngBwduyFhS1a-OJCbLbLWBtB-nebsQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E01%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E01 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=W92eW3edowifBE19P0DI1eRHyZ7K0hH9akAtoNeEiwummIgsA4bkbbsqHk5x7X6E67g8auDib5_MMT2Cnl5GtQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E01%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E01 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x2": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HLfZX8HAp3Z4jcKoqT0KEoYZkGnCp-Vfp_USsnITWKeYBpcEuNnWybHJ0MJ82sHBsyRuInqfrgp9YvUKLA501w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E02%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E02 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mIVEt99EatpB_KkpoaO14x6Nwx-yf__EWnMaLTA3klExwKxyV2tXgkN3GLYhWG4kwetrtVW-Ov-gJqrAffvofQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E02%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E02 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LV2G5Y2udlj30wr0agg4GByW2cRFYJhtQPbAl9AtMae8MqZESJCDGYWIIKh8VCuijhhgIhai4PRrcxhkLCkCSQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E02%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E02 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x3": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VOY0tI3cu26jZDHxAu6Vux3NWJaex-fLU5rkknuLbN7sssCS6lSSb7MZvCUh2uOt1YURXjnFigC5D0TZGBExEw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E03%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E03 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VurXkC-aQZhJVA8XEe5oeswJlS5ZVH9U0KtSHkv9xhW0yFZ1UnFObryoNAa1q3n0FZvkvM3yLZUs-wd-rLyp9g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E03%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E03 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=c8VfToHtGB5mJEmI8Sq19pE2TvFvWqoN8s-DA-ydum_B9wSi-7JH5b6UkCBKnZkrAklsHeDaqFWTikdiLiwJjA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E03%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E03 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x4": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=lLBKkw5jHSBWl18vtGrY9k8fHza_h1Lavp2buQ4sqSgF7pS5_vI-5sHYpp4bsb9vn_qHgXLcbsRXF9KTe4sRpg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E04%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E04 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=_jVTor_dvykiZfly-wdP0WUE2L-xLGUskrPS9jwsYpvDuxV5vznlGwk3uZ0CrcWGA2UJ5nQ62FA5D23cUYAuaw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E04%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E04 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=arJOTyhqWvmuTmfOXU_qlaSAYqnhYCObdVONbY0_Qbn7vGWv69-kaW2sjQQuoemDBS0JkOHRElviVdzUfcDLog&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E04%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E04 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x5": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=A3F9UMxJF6pvoN_t0MhCZsSz0fp4c_SIz_GiBySBxvRAIYHUHJ9iBVhNgvlBtiW10BWouQDvsX4nSP_DesDQvA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E05%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E05 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=ldfgXMib2KRjimQgAAR7iDBzoY1LNR8gqxut-UbTlAuXVbRL1xB-9Ta7NjeTQqwCag5FS1q1fZJl70qWsnScJQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E05%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E05 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tFt-j8W2ewd3rGp-9fKAslF_fSB-v1tG2Me1m2KUlVLcRnztQjD9xqSFCKqBd36Zu8GYNvIqY_j3rua0DK9uvA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E05%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E05 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x6": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0SxSMioVEe8WEDjJiEykh8rD7gVi-pehPKhDwJ0s0LDi1EXroxlvstu8f6xM8TcGW2IIuzBXmWSy5hdXCfNvTQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E06%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E06 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=n__kABnPUJ2158bETfFiLa6XyARnjHu_xEwVurL86CSj4YMDYGGcn1DJjyNlTrG8f0nQSebJMwS2lAyPsq963w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E06%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E06 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=e2a5c1TJ3gU7nnkfm6UO6EVxiSapaBvrged8rr8txgUuDgNmt5dfClB32156Ghwg0YJobOCvQzaU8WOlPG_xgw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E06%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E06 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x7": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6yhn8lH75EpjuqBydFax0_oEuBZvs8FUUMWTnuSe-uczrCy5F-1w3ZBWNvPiTYTp6u3SwFYunn12HMU6o9YKmg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E07%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E07 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=LBB7GKzbKc_YubFR07OoTXnpKsvM4dPyttBwyJPiDzLItXZgnCZsUbKgsNujbF_xkH6Yye6EG7jb1Ro1FIfPQQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E07%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E07 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vfKTGPQ0qT5ScyldvhaZ8yqU3WLfjt_8gXXO0w3lhbLic3ivq-DHpMbozM3NaZwDI80VKe0cd4WTXHF7-Mo1MA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E07%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E07 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x8": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=keYgt-7OwDbHmmQqbScDb3S6Pl3q9rW8Bw3eYcQTnQ62sFAE_50pSTZEyEJNVOwKhz_aK2s21P7E7OqOiKjRrw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E08%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E08 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=c_9ZMrRSCuOVjv1trG34tcFF_QrUL_O4EavuU5YH2Bag2isMMWOWE3EvDWoUL6cfogQjIHs6ALOlOzUdpJTtAA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E08%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E08 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NYZl5hQLepjybBp7xXDyhXkLjnxSdhfOWaVrd1QWUmXXi76M6iEjiXvywcGIVXisprDRm_-LlXhwK8PFo28GFQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E08%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E08 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x9": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SfNRJdhbn_OFcOFGAY87u3QaXnA6TinqvgTQPMd50fX54nOEuvlFjiwMfZZdYMpuXz7KIGChJHGhBjY5mRSCOg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E09%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E09 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mFc7NmEETFPJDNGWwX6r8SW5rvUOVmgkaRn5Vgrvif6jtkhnktBZSlVtVi38HlgXqsmAHNM2iir-_csykydoVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E09%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E09 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NjtNRKxFEqenqNQCsLf_rLzmJonwi7t5lwcSO25NAkhgVwl6ta48QE9adqj7OkpPe6Sn4zgI2F-0XAmyjfvY6Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E09%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E09 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x10": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=j6NCAwUyDIgGBy9sDEJ5gcK5QPpiCfNzxzHCPH279dNpaC0LnpmY_p-WDVmoOmDth4tKBJmmGRDdFYpTTvUI2w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E10%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E10 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VRpiv1V5MCt4dnkjulNrp-VUiwFQI8qarILFgH1E-5_wbm1APwX-Fd33CLlLLOWyjgZKT2bSpIxRBKuHSO8FVg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E10%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E10 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=33pg-QtSOSkhs1kAFQmDYKhyMJcDzDCfkqboXKLR1IQiyYcgFMY-kGsG2ZA6TXbcYyiTQM2lE_4Zz4bcfhlsJg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E10%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E10 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x11": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8IEDj_-pDLknUdcRdlGbQvIOv7a0mTTE2P4QIeuKNrz95lWpVrtYT9O0GOwUzQENVx-XLYX6aed4lztKPqMCXw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E11%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E11 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=DFIqdMGw6eoFwcqkoWzgJhaPAO3PMeBEV0cagkwOQimieerHR-fRwvZDmQxmiwQjKHNWyqKuHSG56GEoSZppwQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E11%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E11 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=H7l_dy5eiDBOmvrhPYrEgGYlmieZ3Y2FuZdANJtO6xoytT00TJtOYPk9zzK1UBPx-jWqRUxN3aa_0ni9Tpu7dA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E11%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E11 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x12": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GBfhcgYR39L-f7dkjGfdpeoMIbJsQ0sHtywcyKR5v86n0ojR5VBpDd1Bhh98jDMhffKdzuTg8MokbX45-ABSVA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E12%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E12 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=baF3jyyFRHOhmWJ9twuBjYIHlVSifPFqbhzfTQ2NoeFb4VSLE4qGl0M7I9QVdo25O14HBvUOxL4V5_ZWBOaEUQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E12%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E12 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=anpxnmJRhr6PJKr_ARL9xp9M9oWCHr64gBaazzKvNEm-UB6D7zMxxX5jJBxaw9zuU-1sPL31JZ8l5Hg9LBQ51w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E12%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E12 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x13": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pYBV28TGd0aYCZpHSbL6k8sr5f_y2LHVCaelhqShIv1CSGVwNX107Y6fd95RvjCcJii7zdioKfWa5vQg9JLKjA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E13%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E13 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Vq63CBmrNYzMLEpO3I5_s0viQUC-5ryunfWaUyA_YZaw4ceHPcAbWjHY0CMBk-osHci92DX1jTN3UoN437XI2A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E13%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E13 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OAXC6FjvId2jas7n54gk3URmoxNtzCkrsCdSQsYQ6yhSiQsK5Fja4RB07pB_p-M9hInE2zKsbkkld_5YDgRWpg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E13%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E13 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x14": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TELZjPCG76vY5hbc0zSN9p1YJjqUImOi5kwn1ZEGoOXNWzEGN8n4I-piX4N5M0BlAT6H4xscQQr_L2yPVHhwYw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E14%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E14 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Y-wErbItW8KQo7OJTwbrh3axFjtcsFwD6v3QpvreVVRUYS2P01YuQHyWnDF7L7siv-etOgngFc0CtVvltk9xgg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E14%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E14 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9RoMBhSvuK2aN3fhlZIhzkb1jzFQQXaDZ_7LFJIFz-4z5BrMiF8psTCyv68TFjTqvoCfZ344sBRrtiXOPs0Fng&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E14%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E14 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x15": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=EuLlcat6_FAlhq7NswHenZuEf8yj9iOSQ7B-QAspnmjjXHGZC7omISBbpJLbGGt5HRwCxa_T6-yd6az112tWgA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E15%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E15 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=79b0s0bVAu-5lhTPgqstUhy7Kw0-C6QC-anA01QzTSz-HB2u9vLbOwiWGClQLx_FuDg1b_KcRqDbvw4p4-58Dw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E15%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E15 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4pxZ-wlQw7eHsZx_vKv36YOfasQJCOCVNJ1RBwtNpahyslGe6lmXBJoWWfsO7Iin3m4vZS-8d6NXCEs9rEplrA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E15%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E15 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x16": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=TjM2OW7SWabViDdH_2VkA2ohdES0rrynSXFdpc6Ckokjn71fQoaJTSqmdVR8m8ZZ7v-c0EL69rPXHoTGw3AfFA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E16%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E16 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=kPGZYaesvsNe-jOA4Rhafo-IjVXqEfatPzkKfAWhuv9jxNjdyxIF2ItzWHKq8xtBox9jel3glJROyxqvXFehwQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E16%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E16 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AnM8wNJC0rplRRH-_5dSWtQgYHA_fmhDKh7KIMNdP9xJadIYuB61ZE_J-xwaf-v8sDdAu9kLWejLaOepkb0Cwg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E16%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E16 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x17": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9jHSApjxg8hlG6kJNYdVDqM6QrFUDikmkontPJCfN7M1Ok2fxgr6xWWlNDU6rHmjchZN04AyL0Zy0ylwKWulEQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E17%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E17 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=l_C3AlYRGKMv2zNepUQvheg9hjoi6T1N1G0QaLo-CHEz29_H_k67IRp3n2wDOtvh-Dwzs--HrlFcjQMiqL6TKA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E17%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E17 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x18": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=5RNQcUn9PkB1vNdjNdz3sHpusf06gP4o5He-r6DxLn5naX6LK_o1xVg8Dg99z1rjUwgamzeXJDPgO4M1-gwKXA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E18%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E18 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Lxzb22VA5EmDzfPbibiKp0FP8tjLkqphumhxEc9AQxqsdMbP1E6wD8qVCYDGg3kZeQVo89a1CWgoeu7b6d50UQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E18%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E18 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=urdgpLwSHfdsCoIsMBsyG3X_Aa9HsOyW1FO3LALsYYQSkUdzD6pdX4CL0GJCnOAm0a7fx0mh9AJ-6BzS76k_9Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E18%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E18 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x19": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vgj3r4ZvjyJz_5R4nM1x3QiBAvHNfveXxnqES-VXC5DmcqRLbqKi3ZPu8rERnAJ1C8z0ZNGRhl52umNSynoHzA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E19%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E19 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8gpJwhRiPp2DC6XfKwpTHef2tHul84q0ZiStNVVM2rlpoFUfhFbecrgXCZCc2cCV19wiBHPjsVg2cxNelvYN3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E19%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E19 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=S50mASaoKIr_VuxQg69Wy6v6NZfW_8PtYcY_xdVneI3hbNnrYntyYxfgqg_vJRca0ukZIkLHkbJESOGteFUNeg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E19%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E19 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x20": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=P5v-66pTz9PHlF8vatMgd87S8HLt1zWPCLjYjyh65m6IXoqNCIZoTNV25dNzcOVTq5GsR7Y7At71PEgq974mHw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E20%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E20 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GPsa4ep6E1k9Ot83QdiUg6-AbqfdzaCyi6iTNFr1PvUjnNM0-B0a6_kAgKnsdRJ5kZbPPcLPCtpuSo4oYFGKvQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E20%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E20 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QvjyQByOQ4Fzpo8ygNVVUjSSADcmoIjLNPTxz5atIcENV_fAtqGIJkYSH0ELTU99928hvQ3VlKAOnWFjGS6U5g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E20%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E20 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x21": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PveCs7qi_FJHpnkfBMNaiKsQGUQNrVrdEkU7voJGLCUL9ONPQxOzcfwkteBbOyXQKYoWh6qgMuIYIRe163MqVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E21%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E21 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=3pX_XmtCfeTjvQT1wr5d7YOkWOv1oXsja9N4BnHZehol0yxjtsV8TDsQhHXi0zzvNUjpgJF_WVrqKYZbFNMs5Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E21%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E21 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=sP1naKHv5-vgmNad9V8tOivoBsAE-ZH9tDr04d7akDAqEcPP8y2MAU3CcXb6GssN2rESqTC7RuqR2NvK2nwTVQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E21%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E21 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x22": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8zQH8-rgtFe1M8cp2uWyhs5DrHrHKiHypHokcnhIfks2qRWm2QbZ9xjZdK6n2_GLSv_qErTWPP0-z0vr2OsFBQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E22%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E22 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=oTA3q94F1gHsO4w_Xq5PYCN4yBjU7tl2ZC5_BxZ4FoeULPCCWO6rVVSC4Q8eqX4KxPCpePWOEtt50MY5NNxixA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E22%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E22 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zJBgnyZdNEjjVUDK9obNKII1MaLyA_YX5KgpL8kKCjqyMuWUgQe_I3QHlfdlDyRdjcKr_4YkTZLfNWkCQTbuiw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E22%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E22 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x23": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=S93ztrMSivsId1-tO6MB6SXqaxtlFMYQbHncny7ST8j-AxAOFp78gqJCeSKJJmlC8RaHhf67VUPS6LzmANijbQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E23%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E23 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9t82ZZUS6vlgzE3BoH1uGAdo8EGyKtH5bHYmjtxHsViclc04ZrZbhMsUOERBVEWbd9kymHHtt84t6Y7m2zEQww&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E23%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E23 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rX1jV4iHAO3f91EXW61pnHMoQII9sEtjNnAIGBurpltQNlv11fVasMXfhff-5-7NtwxrWTvGxQivTEjjCCfZ3g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E23%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E23 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x24": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=76mhBSN0ffsxdeWktYna88zQYWo8KJhcBi80fKTVdwg3rgcDcQ5D4qgCV5cyQrvQiX1RhGG0tLlh-LN4jSfrTA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E24%20480p%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E24 480p AMZN WEB-DL Dual Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Dx7drMLayCNHUPiGfVQW2e9V-3WZxBUcrrEAqK5-yrVDvTr0f2HLK03eEwpo-yuJcFc9CApCP8BNvoC2oeaZpQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E24%20720p%20HD%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E24 720p HD AMZN WEB-DL Dual Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8gj82ZbonYlLalLVaqXGvK8jBULDGvvmXAy2eTrZhpCYPsgGk2ZY0jva4HZy5upCWZcFxV-L4rlzuC58WDu3Sg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Sword%20of%20the%20Demon%20Hunter%20S01E24%201080p%20HEVC%20AMZN%20WEB-DL%20Dual%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Sword of the Demon Hunter S01E24 1080p HEVC AMZN WEB-DL Dual Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x27": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=BAnOq52hdR4zk_hHtbLDrkmCSIC7EGA8iKaaNKaO1gQBFS5-ca5vK7S9h0op3KGo3MB-sAMfaZOrR3QMEBXcYg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E27%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E27 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0HEP73V1lJmR6dXd2DZEux7o6OOGVMPFWeKGF_YSMDM3DdLNGcfBULU3oKY6SUovX3STuoCAx_5LAJpn4AEU0A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E27%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E27 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uO4v5_nnx7pFddrkeXVpIl_J_T-0C-fdaWzc04VA9KSKV9vdvcbz-2I53yJ5Y-47fdwevXGWbQgNv3n_GuBCYg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E27%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E27 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x28": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=C9jNOJW1V9IXfF-Ml6PNTtdnk-kXAUXBeYxaiiO4e-RlIpgZQ9LshEQmbYedrU70pGtWKj_x-dY8ZlNDW6kNRA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E28%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E28 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0yxxHhBZUyofTmzQxozn991dieOtkMg2UA01wvaUTV13XU6AXWZU9oVBj90mEF7J1LmRAWnrqCqzqT1JwyXCeA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E28%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E28 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=lpVBKbC1SPE3Fzzk0cru5ZlbIqC-6ixM-EiiJV1TUZcweXTO9YQmnG5l7Ug3d5VW2OEztjYioq2OXILmj19Xzg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E28%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E28 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x29": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=RK3y-EbgmWAXNTHZFaXbPEG93SJu_CPPHPSvs2K2a3gOusAsk3pksO2IDPZX1KlyjUTSxc6e1Der6r3miIkNCw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E29%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E29 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iwJPwU2j5KOmoPVJqzB9LZpL2JLzfM5saV8lcpzgHOQj8Y4CfhaHVcqOQ7ozJE9bcqcX_DLavKGrGj3tCB6fNw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E29%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E29 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=8vwqGuRCV3EUixIyR2FN2UpuVUMUnpzh7hB6QvOSnBJyzxj1f-wLwovMd41Iy2TLwQiA2sHZrul4XqWtJvGSKA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E29%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E29 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x30": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=z657jROEs6LjX5Jaen-r5BxwzqTwi1JvaNrc2YzAmREUrFIrX2q_8vhbOZqbLeE2P8FxfLrwmviLVvU0r1hg3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E30%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E30 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=uD9zac6v5Bzfy2VArTjEFr1Kl7mydGC7Ga_Ns1UIFeXAiyS2gllocGOzPBRE-ii5CAP9tZdFTtFrVsgcOd369A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E30%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E30 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=d9Is5SxXb4trEs9ZBIu4RRQpXAnaDPzmynY2SHyR80c70ksj7-yy0pZaCYwzmGwJeJgpLuBC15Eaik0N2QwQQg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E30%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E30 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x31": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9qbHysp2LQuCU4GisyW0EU_-7UFnpWXpP-BlT9qrY1orr6bDmLdUnznbqUQjnV--BaDmnw9Eb200bhr4vfd31g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E31%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E31 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XhYeh2ReBXAROjduVcqgupSmh3rcdRC8BN9whDp6tVT1I5cb_O-LOI6CvSpvgdAAJ7fmwxlD-ww0cAb5_D8XQQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E31%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E31 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=u4qJmCN6jMH3gVNvPAGgnubdu3_Sm00dXDXaicfW8oHzzrftB1d62EICpCnHErEvOtO9sgmv7mIWvIErviQXuA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E31%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E31 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x32": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qu2DJE-Gmj4dT5g733T9NFVUlWAKztEGka7OuYvTzjg3OEOBBOcRpbzxt7GJpbD7HFAcy71j55lHcuytbSRd2w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E32%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E32 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GgRQA-bmGoaPy0Q_g-l8jxfPMdy1JpMTBTUoaAX8xmUZze7QbmRWqwPE0lOh339nrK3OC6PUOfm6jxO7ycAUZg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E32%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E32 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=0ZpvpzTHdGvTeVJGCpzP144mC7UEERzL_cUcYqApdzo-zRKsHOdc58b9c5JRYk7WU0hdtI0qaMxLlR9B3RKkUQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E32%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E32 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x33": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=PqyOg2Mn4hUPXF-WPqYwaCPakkqzm-JqHlScSSa_mLr_mGTXIsNWs4Ux1uDGs3B6YK_ee8EwzxTEaFUWfTreIg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E33%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E33 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vF6hP-5eeKTVqYmV2AoatLg-TsvfSzQ-rESAeLDqlskdaEpQnotRglCBhigqLh1UqwDva1bfsUtAtN6LdSB-Aw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E33%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E33 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=rBAalGYaB4qkLdFPVOcngwwAke5ziPFUNiaS5wLuTR_6XPgrWziD9ZDgohLm-zqPsuaiQJR-3icj1RnI5UJuEQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E33%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E33 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x34": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hDcF3k23RYg4uUauC8xVkQ39R0xs1aNCFw81hnYXiz_GqBXlC4t5nS2cfD_WH1JHXUH56MmoflZ63BI4-YPsjg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E34%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E34 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hLWQ4IOHUnX17WdVqfAUqjkMAoGlc7Waj9B_MxkrHLPHx-4FN3CzCEtInJhrcR8VMeN5L6RsTzu2FtyXy5WETQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E34%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E34 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=aI0i-jJ5xqGQD4b5YPJiTGdvRqCAqyh4viIIOYMUhDq11LJpvDVD32TrIychg8clGpFSL0z9cmTrxlv2hO2tRA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E34%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E34 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x35": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=zAHOrLJJpj_g_ojvUop3NIvVMQixTBRwppyTPXGzGTRiAjqWUGpwhXd3OVr3OwyRhe5PDypi9KCjcY5N5rXkuw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E35%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E35 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KK1ErJi94Z8ZOsdyCQJ-jfuTb_oJtEis4Gz4WigSXTeawLhrJAIfWyz_3h_MBqPKJMUlKTY4qVIwgyORAgA5Cw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E35%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E35 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gHvX5XcCpgTEfDaUVbDrdHUMlVw-Zwv8k8CkFu9I1qD7xrAD_BEol-QOPj4C7weLZv2YnNEFfPSyfkTWy_lS8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E35%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E35 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x36": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=iKh3NmzT4P8wuo82tO8eWspjZBrSkTcAAaDD0EftRgMrHnRBnSHUiMiAhEIG7d-e2syfj3F6B-5Pns9FTzgPIA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E36%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E36 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=FqqQG1vTCaZjNV2ZDN_OdN7Um5_jwboY9ltk3x948NRaOmPiBMS42lxsUCIpR4OfZURiN_cKexwgD3yV_iXs3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E36%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E36 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qv6bv6IQ3spdCv0-IVBj5cV44VxvOcFRyYnZOqQpp8crRxh8K5uoaWkH9uVEvYZb8SUwKW82gXFaFkkLsE1lqQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E36%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E36 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x37": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-heSMKEFllyYH3HCxG_9ThRaiizvbV4diYE_EXLFqc3LzvnGooIc2otqpAJc0lv4FJiJkoGfDDNDDjozv5rsnA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E37%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E37 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=yFdkiBwDOtK_2JcWeldWCTvh6s_P84J9cN_ckNfQyS6OI7bKGrrxu9DXphe5fq8dQszjt6faZqpW8z7FsKjbZg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E37%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E37 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=HI0ZPvsNhjZxXOLzfGbLaYbnBR8HZddHRqrHyWofjs0GJj9yzqDECWVY8GFWuB3hE-87MjeLLLeGKAOcgeYGCA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E37%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E37 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x38": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=mWTk487tIQtCTad6RNWah6nBnA-vsBEYSEgawBgaYtJyClDiixkcQ10IR4ZKelgFKS-hGD854UQtA55ZbX9kNw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E38%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E38 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=u0qO5CkOqujhz6ZvB93CAYKjkhOUi1O9is-aL8pjjoOjTjha3zhaCssarWHsVIKdpF-OXGVqIOrraNyLPcroDw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E38%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E38 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SiCBKeZ2lYV9-H_4ntOm5yHCINI_agsjotn-RYxA6wd3CO7g85pbMiHtxI4trvOMC6dhWGS3COh23OCRdi49yw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E38%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E38 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x39": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AIizHb2JhlVmnWoK2iIwqRT3aybPHTxEMfvtX3XtLi09xxifB0gJmdqq901V8RUX0uXeCQ4p-6Ofx2TzVH-tpg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E39%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E39 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=6c8WiBbbJzsEwqtAJsQiM3GfowrJw2ugce-uTQQRGIGdXCpJcAWbiv5813UBYQI4ZipuacImvXx5Brxia7K2Kw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E39%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E39 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=QtwTL-3BzMPMEZUiocqzJAKHN_thAQgUN0RXGZ8qG6Tfs6wmTBibX6zqgXwvo2NQa9sbR49LbCaQCVvybwe4qg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E39%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E39 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x40": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=o4In-49wZJeT3JB_qMpLXhMkzhHI0XzGQbpXnTfRrIEUg5xPhxWYwrMh2zhOdsPdriU4oJ0NmavXuG6bWT2mKg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E40%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E40 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VLN6TiFVpnuThYcY22FzZO5R_g9DHJDWRT2gyKG7GwVZwljqMFugwU1Nu86VyhicTaJQyQsY2Nk4LSzDQgLi1Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E40%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E40 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-XPB7cjRdPCDTFcwghGrGPRtNiXAG3ldPNDCsFPncNepoi0OS4_Z8wilSJhtKSjDGU6HeoP5Z9JPrIh6agfOoQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E40%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E40 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x41": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OXD-ZuV8JKiVbh0YcuUBC9O1O-6OEUQ3oYDHe79iYBSCSQJMUr3wCC0k9hiSLWbvAXmaNWMRMM-8UMeeZB4H2A&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E41%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E41 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Eh66FEaMt6D-L_k9VLo_kbe1d6tjwu-uKs-5shmBmWA5o4KwLPBo7GBqgnjM1armuzm6097BC66c3dLJPgM8hA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E41%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E41 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VLUH82W1HXd-R2C8AmN3BJIYxHG69VM3g_o-xrbrL6Zfs1NGwdO9lw0c2E7oym9cvseb_NDnuemXNnBdDkDAfw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E41%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E41 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x42": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=26wQ3j2iabhGxTaXszsiSWv0dJ-jOVv0JUsExIF6sPr-C1QpZScNs-DpR3fL5HYwQZ5eyDzWI7mmVAY5VgmFZw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E42%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E42 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MJ2dDsIlvH8HhyHa9LN02x3UlbfPVGpVDz-tp3z1S6OudOt1mDLmrlCmJpOHIRwDbYRrCUEnGZVM7p4sXPGPmQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E42%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E42 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=T35pEnMgHziMhoalzqvG-fHTSL4z3MeVw_WQDDgwHpJltbFg9lJlau3WqLKXy7oEYPJ8QEVb-gVdHxKmGOX_vQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E42%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E42 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x43": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1qCgp5TqlZ7hwfghEr3fLJNpEyby4fE2T78rgdgSASGDimlEX-u_Be-gN2J6Ito8gAgPvSiFXe2ff9ALCa-zxg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E43%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E43 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=B_9OTY_I1ywdrR0icvwRBX-ExYFZxUdyW-Yoyr04mvRmCfP5jmJ0Q_LrwyLJqfV3NyOjDnFCLRMuuUIeAb9n6Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E43%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E43 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OpAQ8LncKceVhsYiPXzJzH1trQ-FJHmuEy5emuC72K7uXjHW3J5HiBdtNxq7zJ54iat4VnnEY0OIYzIyTsUoUw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E43%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E43 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x44": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=m83bqaG5GaY_t85LQA4WHW0pzmYBFwzEPrriUaNeFbv2FtVf2hy6LnHZKpRsiyZdwOjS_QsQGHc0rCwErTdn1w&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E44%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E44 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1yd5a5rWHYmeut_1K6Y8Jn_be8Uj7u2MrusZo9ZXs7IyCSIkGsre4BdsmVcBl3znWBXvUYtFAmmeugLOu07PXg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E44%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E44 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9Ozhq_KNlpaZtDi_g7d7iXZ4Pb6UjhgndFkXP4CT2Y87Dtyigyn3o9lNZpndNFpfajLI5NW1zXR7rsnRlPwcnA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E44%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E44 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x45": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=KhYyrXXyGCsTjq8bdrbR-7n33bKTeZNmUv9Q_2fVUpjqOlU2K0pAPDXktqOX-eqXtiYhBDmiNs_TyP9LUc1JlQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E45%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E45 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=vkQOxIkmVELwgiDCoi7r9ux-3fWIBt_rbrvk9JkL53P72smOSL03bhkozkrXgVrgdG-LDTWmDhYp8k-SJcYEQA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E45%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E45 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SYZf1gxX_otPzQ-e1eDE6dpdrlxQ7M_qWrVrHrV4VoNFiF3u18DVAXVpyPEetGbGCTrFIbXH8ACTopTHwxXhrw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E45%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E45 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x46": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=-djkkOli2sjVycJJMtjlJ9ZvVIvixCKeBXMeOSROK30iiYxxOsqpPQK-tc9DYxeGhqaf49NtF3PN0YkdQhfcgg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E46%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E46 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=GVC_m9d7IchSfvF7PgcqIvXu2e5a6C-QU_AdHap7tm4PIE8acQQuJesUQeiLEOFxchPqLnoRW4Rlh8XNBSC5ZQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E46%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E46 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=45zd9Q80Wy4Q8sy9lPQBa_sdnzseYmR1bUU_G_u1hc8HkoWIGGYqrn9KZ8pC_4_Id300DuAzuIc3pfGc3jYsJQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E46%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E46 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x47": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=WO3_dn0GVZFE8jTomRi3K4mfTLk3_PN2AiJFc8Omi42tti3T7fSK8HwD3Mdp7hqIo5T-Tiy_kso4cYkbBncV1Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E47%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E47 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tlCiVIGY42knT_WhYpDOnqRq4oY8mufoNQiurYXwdHMGi5VmZt2hx4-lOTeV688Oq645PjWIpO4HRjfoWm7rdA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E47%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E47 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=OPOWpF5-M_C0Dh3aemY1PHBoRzFQSnOeyTSNwBYIkiNYPykNzNRs3SC1tU8jCMBY9JExZlwiP26hUZaBNRI6hQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E47%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E47 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x48": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Ahj_2XQKBzoH2_NWnZrWqDHb6XtadfrfODXUtgcr3SWDRn4dtf0nXMcN_5jkPN0bSjhzez-zetilo12u4UIwcQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E48%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E48 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=DaLRr_5Ssu6t_4avgY30Iiwn6L2qyULz9r01Q8u8N9YB4WczuRCC6Q_hzObcqeRc_qNDYru9PlEMCkOgV7Sagg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E48%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E48 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=MTTS4chZZ4pwgNCHrmMGgMcN4Jvhfz3RI2YtEZxZ1vHcJRSsaAmH6p8mSeSrnVY2AGA83Vz2QBMk0rEj7ymB8Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E48%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E48 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x49": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=SgF2QavcY7Yoj1EKb8r4F8u23VDCEoGz2L-HDpvCyKX6FiZwAGvI7o4i03NZS6p468m4hYT5kUDeX2SUaSdQYQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E49%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E49 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Ak_6YknkITWe9EGZTnIzdsN1ke8ZtxKyqMa3al-hYVG9-jniwIEsWvQXiyMDunR36ZqEQQR0k44cD3-fyMojBA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E49%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E49 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=XCgILC5A0GZkpgvNWNhrv0tziflTagEpAJgzzh19LD3uHiXl3QId32HmvWFWyU8eWnEvUiplKCIxki7SGusKWA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E49%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E49 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x50": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=gaPuCQi33n_0jMWgwgonYrxGUI5Fcs1YddJfGdclw5OzpPe6-c-nnoQ0nMsEviBDeIOu-pElj6ytMVD_ni4ilw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E50%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E50 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=dvvSrplT9khsMZqDQvarxz3XuHdgcAbjASP8GTIoOmsl6fW0cAkzafnoiAljF0JikzrtONm6JSdIVXNpQx_v3Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E50%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E50 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nu28DVrU4paDyu-snnT--NyedIoMpZRIbXSfoPEEnacg85f71FfTgVRsp-I6XO83PN4yEMvT5LJY5irZ9J3uWA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E50%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E50 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x51": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=X_A4vRFo67I-JFrnBNon5WFVkqZuZZyUpFNoHdoxAG-0f-0TtpKlqqnw_Rwgbsp6BViOwgxIdGZzRJpWR0WvRw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E51%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E51 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=pB4GNFKWN0xaCJik_iWdjSOcDaOE0EE1rUo9-IGakJkk1jWQTEv6epQPpp39P-xoY1L1bHR74tCNo92xFPSLwA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E51%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E51 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=AaMbmhUFRkYeA-nZTKcBG4MBvIgZc_ZVsc2NrNuX5MUkt7bbdymmVScqwLXe9aEro3D_RPvREpoKYTOPODQ6AA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E51%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E51 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x52": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=E7azmzW5lEBLE57eBehpl0KHtxm2iCgjAy9ewyUT3_j2p7VyI4A1nm8YLlv-PQB2KfKycfl7CU546ICZu0Irhw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E52%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E52 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=n2t2g6HDnKgCH0z-4ShEEQszY4S755JBXAZ2g4x2XPyZGYwFQuXtJy-LPiLr_byA6ONNuU6UbXJkXLhUVkH7fQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E52%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E52 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=n2t2g6HDnKgCH0z-4ShEEQszY4S755JBXAZ2g4x2XPyZGYwFQuXtJy-LPiLr_byA6ONNuU6UbXJkXLhUVkH7fQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E52%201080p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E52 1080p HD BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x53": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=cySzIfgGNxUKlcxeYOsvIIIxriDHx_ZSpkzNZeneryRLhuWLN6-NoA71DCJUTP5gv0ArP5RLlEVzzfwDFRReow&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E53%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E53 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=w6oR7ESWrJ4LTfW0FuY3oVlZMNSopnQ4TK9SW5_-rhrqkkftZaYyJP4NYJEooLOWS7ftmEKCNFVrpW3nwqCJRQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E53%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E53 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=VGkiiaptLRQzqU834sOZ08SQTtJIhnj08nKl-5ZiEUPh1HNsOQwB5kLmQwmq3LfrhaD8dsqn_SrNaDHizupcHw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E53%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E53 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x54": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=Pz8jFbdS3avnPXdAO7tVxkYWSixkOY7LGdnwheJXeMc7OgVzmuYmtSN1K2Rgh5SiTYDSBLUG8sXk48HdhBcCdw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E54%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E54 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=7L812PCc2ukWeTDGcJmisTDTPlgzrlOIM237B1j631DzmHv_w2hZsQqRp3T1MRCFRPAl1pi82yvQYOzzTaue7Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E54%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E54 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=hWT_oOPx1TFuY_F0eKhNOs1UxeAwXlvVproxrFZ0pEG0G8UToq1Gzt1vY2tnXWatrBYDdi4icsNV-zRQVXJdgw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E54%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E54 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x55": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=v39rmj7D6z07q2TVKe6L3g-61cROtO49-1-16N1x9uJlnBnIQ8_qaoZANqfixGBc_gdKo7GuYkr-gFwDk_flgQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E55%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E55 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=qW98CEcLFDsx1622N-fuJ_uYgfkVmIyYS6BxOfkVs6OcFtWMEEZSi6IPyO7WRhbMsKe2Ufoq-TMDH78TfU1FQQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E55%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E55 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tIG8vSaB_fr03bqGfAwPXX_Eqcsb3nSaglqN0Hz-JERw-Gm92e1mZTDe0KZWFO8p4AzyvUmSVquTeTNRKE-Fbw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E55%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E55 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x56": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9FX5BMkSJRYQAMo0AtAn1IkwSm5BR0C7MSgI4nPwg4crjZ8lAd7tBryS_kNej7_L68vOiGis90ewPo4M5UEqsA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E56%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E56 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=h9olCCg6H0MwOpjEysrI74AESVICOr79wYPUDottDV6cJsBvYz7rJK4GTu1T5sp5sCjrNVLdfTSre5JIohNRFg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E56%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E56 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=nIGlOGEH24euzKrurLJ8aNyZIucESEwQFFHYwqK8CJgQbVjW3C6TZWiLqRzvW9y3rpV950Pmscx3mZtLNva-nA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E56%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E56 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x57": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=9r4P8Jtxeliqm8O02On8JWXyIzSam4DTgoIVRyU5Lrur8UFttP_DGZYJ2kFXAQ7a3oENgI61PPJGWq7QqQQTkA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E57%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E57 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=NGtZJrewT4Ox1fyyUXyF6BFpGComvrP96dd67s9YKt1hFq_YxeIRPoR3TbIcAOqt_BVnGc_7fR6X5l_cNs5PxQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E57%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E57 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=B7EntE8sR03HAJ6uLLZtLoyIDoeE69Cprj0EDGyJELSqcu8CCj894xupayvTMNebijB0MJrumpC_5wEHVt-JNw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E57%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E57 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x58": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=1hawqRINMNfsSWcX2o5fPiGc58Phz_MEDKDQAifZSwPO16tjncWETB-aaljMFv58mky2o1t0rQnHsMSPXVOz7Q&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E58%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E58 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=D9RtMSknmnsvkGjhyvt4m9qs2N0xGgkbnCYJdCERvJhuLFmpe60Mr8DE5EPypnF7E1hwfG5yKavzn2uMBaGD6g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E58%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E58 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=tRzxUvAJ0-IgA7Qerq9GoG0tahZ7B6eUXUD4rKg3DT7ELz9yNeW93pgq0tSngtYYJANIges85A30Ig-zDP3ZwA&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E58%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E58 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x59": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=fpbRDXO-PSYF1O9oyaoaku_RIhB8vf1zheZIBAT4MtGC5d4HSuWEVmhZZPNXZ2HTBtJV-xEJBhW09SVxATrU_g&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E59%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E59 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=4OPjrrAtV6SodkxwSc6w43aWe0AE3w9PpqtC6K4rXwhzvjh1k3Vj1Fb8dU-VIUE6i1bdwSKP-0Hnpa6jY7phTw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E59%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E59 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=73zsh_FplK4xOVhqccf2LYNMkUhygxTcpvVsKv2K6p1VxtPqLQw74PPE6KQC_-99YyGKrkPd0qiO70rJP4iIWw&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E59%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E59 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
},
"fullmetal-alchemist-brotherhood-1x60": {
  qualities: {
    "480p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=A__nieUnyWWY2Ghm8KawPqS_A_7o9jqB-HIW4ktvR6vneo72tPS4xRryLdT6VUIsvYW6Uxc_u7K3t9PVzHZQsQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E60%20480p%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E60 480p BluRay Multi Audio ESub.mkv" },
    "720p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=j4VY6YMNvCqHQuuKlx7PBxPoECX4ViSJOZRtva0tawwkTrcnyE7u0wTIzII99Bg6728JnnDsbDLR-5fHxS2goQ&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E60%20720p%20HD%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E60 720p HD BluRay Multi Audio ESub.mkv" },
    "1080p": { type: "stream", src: "https://icy-feather-221c.jakcminasi.workers.dev/?id=aCq7MEDUcPe7OinEmsrLCBvWYgGE3mG_GVjt2-BFxkJstk89EGpWQwzQcK17PrAdX6G7MBn_TNXsEmds2z9_eg&name=%5BVisit%20On%20Telegram%20%40HindiAnimestuff%5D%20Fullmetal%20Alchemist%20Brotherhood%20S01E60%201080p%20HEVC%2010bit%20BluRay%20Multi%20Audio%20ESub.mkv", downloadName: "[Visit On Telegram @HindiAnimestuff] Fullmetal Alchemist Brotherhood S01E60 1080p HEVC 10bit BluRay Multi Audio ESub.mkv" }
  }
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
