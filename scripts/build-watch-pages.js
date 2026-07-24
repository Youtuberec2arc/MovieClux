#!/usr/bin/env node
/**
 * scripts/build-watch-pages.js
 * ---------------------------------------------------------
 * Generates a fully static HTML file per episode into
 * /public/WatchOnline/, named:
 *
 *     {animeId}-{season}x{episodeNumber}.html
 *     e.g. WatchOnline/chainsmoker-cat-1x1.html
 *
 * This replaces the old single watch.html?id=...&ep=... page.
 * Run automatically on every deploy (see package.json "build"
 * script / vercel.json buildCommand), or manually with:
 *
 *     node scripts/build-watch-pages.js
 *
 * All the data baked into each page comes from anime-data.js
 * (public metadata only). The actual video URLs are NEVER read
 * by this script and never appear in the generated HTML —
 * pages call /api/token then /api/play at runtime instead.
 * --------------------------------------------------------- */

const fs = require("fs");
const path = require("path");
const { ANIME_DATABASE } = require("../public/anime-data.js");

const OUT_DIR = path.join(__dirname, "..", "public", "WatchOnline");

function esc(str) {
  return String(str ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function episodePagePath(animeId, season, epNumber) {
  return `${animeId}-${season}x${epNumber}.html`;
}

function renderEpisodeGridItems(anime, currentEpNumber) {
  return anime.episodes.map(e => `
    <a class="episode-card ${e.number === currentEpNumber ? "active" : ""}"
       href="${episodePagePath(anime.id, anime.season || 1, e.number)}">
      EP ${e.number}
    </a>`).join("");
}

function renderPage(anime, episode) {
  const season = anime.season || 1;
  const eps = anime.episodes;
  const idx = eps.findIndex(e => e.number === episode.number);
  const prevEp = idx > 0 ? eps[idx - 1] : null;
  const nextEp = idx < eps.length - 1 ? eps[idx + 1] : null;
  const pageTitle = `${episode.title} — ${anime.title} — CrunchyEpisode`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(pageTitle)}</title>
<link rel="icon" type="image/png" href="/crunchyepisode.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../watch-style.css">
<!-- Bitmovin Player: used for direct/"stream" sources so the download UI,
     right-click "Save video as", and long-press context menu are fully
     controlled by us instead of the browser's native <video> chrome. -->
<link rel="stylesheet" href="https://cdn.bitmovin.com/player/web/8/bitmovinplayer-ui.css">
<script src="https://cdn.bitmovin.com/player/web/8/bitmovinplayer.js"></script>
</head>
<body>

<header class="site-nav">
  <a href="../index.html" class="brand"><img src="../assets/logo.png" alt="CrunchyEpisode"></a>
  <div class="nav-search">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
    <input type="text" id="searchInput" placeholder="Search anime…" autocomplete="off">
  </div>
  <div class="nav-right">
    <button class="icon-btn" aria-label="Bookmark" id="bookmarkBtn">
      <svg viewBox="0 0 24 24"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/></svg>
    </button>
  </div>
</header>

<section class="player-section" style="position:relative;">
  <!-- Filled at runtime by an <iframe> or <video>/Bitmovin player pointed at
       /api/play — the real video URL never appears in this HTML. -->
  <div id="player-frame"></div>
  <!-- Backup fullscreen button: some embed players' own fullscreen icon
       doesn't work reliably inside a cross-origin iframe on mobile, so
       this calls the Fullscreen API directly on the iframe element. -->
  <button id="fullscreenBtn" class="fs-btn" aria-label="Fullscreen" hidden>⛶</button>
</section>

<div class="episode-meta">
  <h1>${esc(episode.title)}</h1>
  <span class="views-count"><span id="liveCount">0</span> views</span>
</div>

<div class="series-row">
  <img class="series-thumb" src="../${anime.poster}" alt="Poster">
  <div class="series-info">
    <h3>${esc(anime.title)}</h3>
    <span class="series-sub">Anime Series</span>
  </div>
  <button class="btn btn-ghost" id="moreInfoBtn">More Info</button>
</div>

<div class="action-row">
  <a class="action-btn ${prevEp ? "" : "disabled-link"}" ${prevEp ? `href="${episodePagePath(anime.id, season, prevEp.number)}"` : "aria-disabled=\"true\""}>⏮ Prev</a>
  <a class="action-btn ${nextEp ? "" : "disabled-link"}" ${nextEp ? `href="${episodePagePath(anime.id, season, nextEp.number)}"` : "aria-disabled=\"true\""}>Next ⏭</a>
</div>

<div class="notice-bar" id="noticeBar">
  <span>⚠ If playback doesn't start, please refresh the page.</span>
  <button class="notice-close" aria-label="Dismiss">✕</button>
</div>

<button id="downloadBtn" class="btn btn-primary btn-block">⬇ Download Now</button>

<nav class="tab-nav">
  <button class="tab-link active" data-tab="episodes">Episodes</button>
  <button class="tab-link" data-tab="related">Related</button>
  <button class="tab-link" data-tab="recommendations">Recommendations</button>
</nav>

<section class="tab-panel" id="tab-episodes">
  <div class="panel-header">
    <span>${eps.length} Episode${eps.length === 1 ? "" : "s"}</span>
  </div>
  <div class="episode-grid">${renderEpisodeGridItems(anime, episode.number)}</div>
</section>

<section class="tab-panel" id="tab-related" hidden>
  <p class="empty-row">No related titles yet — more anime are being added soon.</p>
</section>

<section class="tab-panel" id="tab-recommendations" hidden>
  <p class="empty-row">Recommendations will show up here once more titles are on the site.</p>
</section>

<section class="detail-section">
  <div class="detail-banner" style="background-image:url('../${anime.banner}')"></div>
  <p class="description">${esc(anime.description)}</p>
  <div class="tag-row">${(anime.genres || []).map(g => `<span>${esc(g)}</span>`).join("")}</div>
  <div class="tag-row muted">${(anime.languages || []).map(l => `<span>${esc(l)}</span>`).join("")}</div>
</section>

<section class="detail-section">
  <h3>Cast</h3>
  <div class="cast-grid">${(anime.cast || []).map(c => `<span>${esc(c)}</span>`).join("")}</div>
</section>

<section class="detail-section glass-card">
  <h3>Anime Information</h3>
  <div class="info-grid">
    <p><strong>Year:</strong> <span>${esc(anime.year)}</span></p>
    <p><strong>Rating:</strong> <span>${esc(anime.tmdbRating)}</span> TMDB</p>
    <p><strong>Type:</strong> <span>${esc(anime.type)}</span></p>
  </div>
</section>

<footer class="site-footer">
  <img src="../assets/logo.png" alt="CrunchyEpisode" class="footer-logo">
  <p>CrunchyEpisode is a fan-made index of anime episodes. We don't host any video files ourselves — every episode links out to third-party servers.</p>
  <div class="footer-links">
    <a href="javascript:void(0)">Terms</a>
    <a href="javascript:void(0)">Privacy</a>
    <a href="javascript:void(0)">Contact</a>
    <a href="javascript:void(0)">Sitemap</a>
  </div>
  <p class="footer-copy">© 2026 CrunchyEpisode. All rights reserved.</p>
</footer>

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getDatabase, ref, runTransaction, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

  // ADD YOUR FIREBASE CONFIG HERE (same project for every page)
  const firebaseConfig = { databaseURL: "https://YOUR-PROJECT-ID.firebaseio.com" };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // Per-episode live view counter. Nothing on the page can edit this value —
  // it only ever goes up, once per page load, via the transaction below.
  const EPISODE_ID = ${JSON.stringify(episode.id)};
  const viewsRef = ref(db, \`watch/\${EPISODE_ID}/views\`);
  runTransaction(viewsRef, (current) => (current || 0) + 1);
  onValue(viewsRef, (snap) => {
    const v = snap.val();
    document.getElementById("liveCount").innerText = v ? v.toLocaleString() : "0";
  });
</script>

<script>
  // ---------------------------------------------------------
  // Loads the player through the secure backend proxy. The
  // real CDN URL is never present in this file or in the
  // network request the browser makes visible — /api/play
  // either 302-redirects (embed type) or streams the bytes
  // itself (stream type) after verifying a short-lived token.
  // ---------------------------------------------------------
  const EPISODE_ID = ${JSON.stringify(episode.id)};
  const EMBED_TYPE = ${JSON.stringify(episode.embedType || "iframe")};
  const EPISODE_TITLE = ${JSON.stringify(episode.title || "")};
  // Bitmovin player key — only enables the SDK, it isn't a secret that
  // needs hiding, but the actual video URL still only ever comes from
  // our own /api/play token flow below.
  const BITMOVIN_KEY = "ca3325d1-4688-4f50-925f-ff6b003a41bc";

  let currentPlayUrl = null; // kept only so the download button can reuse it
  let bitmovinPlayer = null;

  async function getPlayToken() {
    const res = await fetch(\`/api/token?id=\${encodeURIComponent(EPISODE_ID)}\`);
    if (!res.ok) throw new Error("Could not get playback token");
    return res.json();
  }

  // Blocks the right-click / long-press ("Save video as…", "Copy video
  // address", iOS callout, etc.) menu on the player itself.
  function lockDownContextMenu(el) {
    el.addEventListener("contextmenu", (e) => e.preventDefault());
    el.style.webkitTouchCallout = "none";
    el.style.userSelect = "none";
  }

  function wireFullscreenButton(getFsTarget, useBitmovinApi) {
    const fsBtn = document.getElementById("fullscreenBtn");
    fsBtn.hidden = false;
    fsBtn.onclick = () => {
      if (useBitmovinApi && bitmovinPlayer) {
        bitmovinPlayer.isFullscreen() ? bitmovinPlayer.exitFullscreen() : bitmovinPlayer.enterFullscreen();
        return;
      }
      const el = getFsTarget();
      if (!el) return;
      const req = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen;
      if (req) req.call(el);
    };
  }

  async function mountPlayer() {
    const frame = document.getElementById("player-frame");
    lockDownContextMenu(frame);
    try {
      const { token } = await getPlayToken();
      const playUrl = \`/api/play?id=\${encodeURIComponent(EPISODE_ID)}&token=\${encodeURIComponent(token)}\`;
      currentPlayUrl = playUrl;

      if (EMBED_TYPE === "iframe") {
        // Third-party embed page — shown directly in an iframe. We don't
        // control the page inside it, so its own download/long-press
        // behavior (if any) is outside our reach — this is the one case
        // Bitmovin can't help with, since there's no direct media URL to
        // hand it, only a whole embed page.
        frame.innerHTML = \`<iframe id="embedFrame" src="\${playUrl}"
          allowfullscreen webkitallowfullscreen mozallowfullscreen
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          referrerpolicy="strict-origin-when-cross-origin"></iframe>\`;

        wireFullscreenButton(() => document.getElementById("embedFrame"), false);
      } else {
        // Direct file (mp4 etc.), proxied byte-for-byte through /api/play
        // so the real CDN/worker URL is never visible in the Network tab.
        // Bitmovin renders its own UI here, so the browser's native
        // <video> right-click/long-press "download" entry never appears,
        // and there is no separate player-side download button to strip —
        // only our own #downloadBtn below offers a download.
        frame.innerHTML = '<div id="bitmovinContainer" style="width:100%;height:100%;"></div>';
        const container = document.getElementById("bitmovinContainer");
        lockDownContextMenu(container);

        const conf = {
          key: BITMOVIN_KEY,
          playback: { autoplay: true, muted: false },
          ui: true
        };
        bitmovinPlayer = new bitmovin.player.Player(container, conf);
        bitmovinPlayer.load({
          title: EPISODE_TITLE,
          progressive: playUrl
        }).catch((err) => console.error("Bitmovin load error:", err));

        wireFullscreenButton(() => container, true);
      }
    } catch (err) {
      frame.innerHTML = '<p class="empty-row">Playback failed to load. Please refresh or try again shortly.</p>';
      console.error(err);
    }
  }

  document.getElementById("downloadBtn").addEventListener("click", async () => {
    try {
      // Always fetches a fresh download token+link rather than reusing
      // currentPlayUrl, so an expired playback token can't break downloads.
      const { token } = await getPlayToken();
      window.location.href = \`/api/play?id=\${encodeURIComponent(EPISODE_ID)}&token=\${encodeURIComponent(token)}&mode=download\`;
    } catch (err) {
      alert("Download link could not be generated. Please try again.");
    }
  });

  document.getElementById("moreInfoBtn").addEventListener("click", () => {
    document.querySelector(".detail-section").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll(".tab-link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".tab-link").forEach(l => l.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.hidden = true);
      link.classList.add("active");
      document.getElementById(\`tab-\${link.dataset.tab}\`).hidden = false;
    });
  });

  document.getElementById("noticeBar").querySelector(".notice-close").addEventListener("click", (e) => {
    e.target.closest(".notice-bar").style.display = "none";
  });

  document.getElementById("searchInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      window.location.href = \`../index.html?q=\${encodeURIComponent(e.target.value)}\`;
    }
  });

  mountPlayer();
</script>
</body>
</html>
`;
}

function build() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let count = 0;
  for (const anime of ANIME_DATABASE) {
    for (const episode of anime.episodes || []) {
      const filename = episodePagePath(anime.id, anime.season || 1, episode.number);
      const outPath = path.join(OUT_DIR, filename);
      fs.writeFileSync(outPath, renderPage(anime, episode), "utf8");
      count++;
      console.log(`  ✓ WatchOnline/${filename}`);
    }
  }

  console.log(`\nBuilt ${count} watch page(s) into ${path.relative(process.cwd(), OUT_DIR)}/`);
}

build();
