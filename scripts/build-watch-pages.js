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

  async function getPlayToken() {
    const res = await fetch(\`/api/token?id=\${encodeURIComponent(EPISODE_ID)}\`);
    if (!res.ok) throw new Error("Could not get playback token");
    return res.json();
  }

  async function mountPlayer() {
    const frame = document.getElementById("player-frame");
    try {
      const { token } = await getPlayToken();
      const playUrl = \`/api/play?id=\${encodeURIComponent(EPISODE_ID)}&token=\${encodeURIComponent(token)}\`;

      if (EMBED_TYPE === "iframe") {
        // Third-party embed page — shown directly in an iframe, no HLS
        // guess-and-fallback (that mismatch was why the preview used to
        // fail to load). allowfullscreen + the allow list below cover
        // autoplay, fullscreen, and Chromecast/PiP inside the embed.
        // webkitallowfullscreen/mozallowfullscreen are legacy duplicates
        // some mobile browsers still check before granting fullscreen to
        // a cross-origin iframe.
        frame.innerHTML = \`<iframe id="embedFrame" src="\${playUrl}"
          allowfullscreen webkitallowfullscreen mozallowfullscreen
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          referrerpolicy="strict-origin-when-cross-origin"></iframe>\`;

        // Show our own backup fullscreen button, since the embed's
        // internal fullscreen icon can silently fail inside an iframe
        // on some mobile browsers.
        const fsBtn = document.getElementById("fullscreenBtn");
        fsBtn.hidden = false;
        fsBtn.onclick = () => {
          const el = document.getElementById("embedFrame");
          const req = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen;
          if (req) req.call(el);
        };
      } else {
        // Direct file (mp4 etc.), proxied byte-for-byte through /api/play
        // so the real CDN/worker URL is never visible in the Network tab.
        // A plain <video> element is used — no external player license
        // needed, and it has its own native fullscreen/controls that work
        // reliably since the src is same-origin (our own /api/play).
        frame.innerHTML = \`<video id="videoEl" controls autoplay playsinline
          style="width:100%;height:100%;background:#000;" src="\${playUrl}"></video>\`;
      }
    } catch (err) {
      frame.innerHTML = '<p class="empty-row">Playback failed to load. Please refresh or try again shortly.</p>';
      console.error(err);
    }
  }

  document.getElementById("downloadBtn").addEventListener("click", async () => {
    try {
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
