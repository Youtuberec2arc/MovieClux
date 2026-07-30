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
