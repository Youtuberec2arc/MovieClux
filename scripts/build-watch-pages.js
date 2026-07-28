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
const { ANIME_DATABASE, cleanTitle, getSeriesGroup } = require("../public/anime-data.js");

const OUT_DIR = path.join(__dirname, "..", "public", "WatchOnline");

// The three quality buttons the site always shows. An episode only lights
// up the ones listed in its own `qualities` array (anime-data.js) — the
// rest render disabled. If an episode has no `qualities` array at all
// (the common case today), none of this renders — it just falls back to
// a single "Download Now" button labeled with the anime's `quality` field.
const QUALITY_LABELS = { "480p": "480p", "720p": "720p HD", "1080p": "1080p FHD" };

function esc(str) {
  return String(str ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function episodePagePath(animeId, season, epNumber) {
  return `${animeId}-${season}x${epNumber}.html`;
}

/** Watch pages live one folder down (/WatchOnline/), so relative asset
 * paths like "assets/poster.jpg" need a "../" prefix to resolve — but an
 * absolute URL (e.g. a direct TMDB image link) must NOT get that prefix. */
function resolveAsset(p) {
  return /^https?:\/\//i.test(p || "") ? p : `../${p}`;
}

function renderEpisodeGridItems(anime, currentEpNumber) {
  return anime.episodes.map(e => `
    <a class="episode-card ${e.number === currentEpNumber ? "active" : ""}"
       href="${episodePagePath(anime.id, anime.season || 1, e.number)}">
      EP ${e.number}
    </a>`).join("");
}

/** A small poster+title card, used by both the Other Seasons and
 * Recommendations tabs (server-rendered at build time — no client JS
 * needed for either). */
function renderMiniCard(otherAnime) {
  const ep1 = (otherAnime.episodes && otherAnime.episodes[0]) || { number: 1 };
  const href = episodePagePath(otherAnime.id, otherAnime.season || 1, ep1.number);
  return `
    <a class="mini-card" href="${href}">
      <img src="${resolveAsset(otherAnime.poster)}" alt="${esc(cleanTitle(otherAnime.title))}" loading="lazy">
      <span class="mini-card-title">${esc(cleanTitle(otherAnime.title))}</span>
    </a>`;
}

function renderOtherSeasonsTab(anime) {
  const group = getSeriesGroup(anime);
  const others = ANIME_DATABASE.filter(a => a.id !== anime.id && getSeriesGroup(a) === group);
  if (others.length === 0) {
    return `<p class="empty-row">No other seasons yet — more may be added later.</p>`;
  }
  return `<div class="mini-card-grid">${others.map(renderMiniCard).join("")}</div>`;
}

function renderRecommendationsTab(anime) {
  const myGenres = new Set(anime.genres || []);
  const recs = ANIME_DATABASE.filter(a =>
    a.id !== anime.id && (a.genres || []).some(g => myGenres.has(g))
  ).slice(0, 12);
  if (recs.length === 0) {
    return `<p class="empty-row">Recommendations will show up here once more titles share a genre with this one.</p>`;
  }
  return `<div class="mini-card-grid">${recs.map(renderMiniCard).join("")}</div>`;
}

/** Quality download buttons: 480p / 720p HD / 1080p FHD, each disabled
 * unless that quality is actually listed on the episode, plus an optional
 * Zip Pack button when the anime has one. Falls back to a single plain
 * "Download Now" button for episodes that don't define `qualities` at
 * all (still the vast majority of the catalog today). */
function renderDownloadButtons(anime, episode) {
  const qualities = episode.qualities; // e.g. ["480p","720p","1080p"]

  if (!qualities || !qualities.length) {
    return `<button id="downloadBtn" class="btn btn-primary btn-block" data-quality="">⬇ Download Now</button>`;
  }

  const buttons = Object.keys(QUALITY_LABELS).map(q => {
    const available = qualities.includes(q);
    return `<button class="dl-quality-btn" data-quality="${q}" ${available ? "" : "disabled"}>
      ⬇ ${QUALITY_LABELS[q]}
    </button>`;
  }).join("");

  const zipBtn = anime.zip
    ? `<button id="zipDownloadBtn" class="dl-zip-btn">📦 Zip Pack Download</button>`
    : "";

  return `
    <div class="dl-quality-row">${buttons}</div>
    ${zipBtn}`;
}

/** Quality switcher pills next to the episode title — only rendered when
 * the episode actually lists more than one playable quality. Switches
 * which print the player loads (re-mounts on click). */
function renderQualitySwitcher(episode) {
  const qualities = episode.qualities;
  if (!qualities || qualities.length < 2) return "";
  return `<div class="quality-switch" id="qualitySwitch">
    ${qualities.map((q, i) => `<button class="qs-btn ${i === 0 ? "active" : ""}" data-quality="${q}">${QUALITY_LABELS[q] || q}</button>`).join("")}
  </div>`;
}

function renderPage(anime, episode) {
  const season = anime.season || 1;
  const eps = anime.episodes;
  const idx = eps.findIndex(e => e.number === episode.number);
  const prevEp = idx > 0 ? eps[idx - 1] : null;
  const nextEp = idx < eps.length - 1 ? eps[idx + 1] : null;
  const displayTitle = cleanTitle(anime.title);
  const pageTitle = `${episode.title} — ${displayTitle} — CrunchyEpisode`;
  const defaultQuality = (episode.qualities && episode.qualities[0]) || "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(pageTitle)}</title>
<link rel="icon" type="image/png" href="/crunchyepisode.png">
<link rel="apple-touch-icon" href="/crunchyepisode-180.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#ef2748">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../watch-style.css?v=4">
</head>
<body>

<header class="site-nav">
  <a href="../index.html" class="brand"><img src="../assets/logo.png" alt="CrunchyEpisode"></a>
  <div class="nav-search">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
    <input type="text" id="searchInput" placeholder="Search anime…" autocomplete="off">
  </div>
  <div class="nav-right">
    <button class="icon-btn" aria-label="Share" id="shareBtn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.6" x2="15.4" y2="6.4"/><line x1="8.6" y1="13.4" x2="15.4" y2="17.6"/></svg>
    </button>
    <button class="icon-btn" aria-label="Favorite" id="favoriteBtn">
      <svg viewBox="0 0 24 24"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/></svg>
    </button>
  </div>
</header>

<section class="player-section" style="position:relative;">
  <!-- Click-to-play: nothing is fetched from /api/token or /api/play until
       the visitor actually taps play, so just opening the page doesn't
       burn any data on video/embed loading. -->
  <div id="player-frame" style="cursor:pointer;">
    <img src="${resolveAsset(anime.poster)}" alt="${esc(displayTitle)}"
         style="width:100%;height:100%;object-fit:cover;display:block;">
    <button id="playOverlayBtn" aria-label="Play"
      style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
      width:68px;height:68px;border-radius:100px;border:none;cursor:pointer;
      background:rgba(0,0,0,0.55);color:#fff;font-size:26px;
      display:flex;align-items:center;justify-content:center;">▶</button>
  </div>
  <!-- Backup fullscreen button: fullscreens the whole player-frame
       container (not the inner iframe/video directly), which sidesteps
       cross-origin iframe fullscreen quirks on mobile browsers. -->
  <button id="fullscreenBtn" class="fs-btn" aria-label="Fullscreen">⛶</button>
</section>

<div class="episode-meta">
  <h1>${esc(episode.title)}</h1>
  ${renderQualitySwitcher(episode)}
</div>

<div class="series-row">
  <img class="series-thumb" src="${resolveAsset(anime.poster)}" alt="Poster">
  <div class="series-info">
    <h3>${esc(displayTitle)}</h3>
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

${renderDownloadButtons(anime, episode)}

<nav class="tab-nav">
  <button class="tab-link active" data-tab="episodes">Episodes</button>
  <button class="tab-link" data-tab="related">Other Seasons</button>
  <button class="tab-link" data-tab="recommendations">Recommendations</button>
</nav>

<section class="tab-panel" id="tab-episodes">
  <div class="panel-header">
    <span>${eps.length} Episode${eps.length === 1 ? "" : "s"}</span>
  </div>
  <div class="episode-grid">${renderEpisodeGridItems(anime, episode.number)}</div>
</section>

<section class="tab-panel" id="tab-related" hidden>
  ${renderOtherSeasonsTab(anime)}
</section>

<section class="tab-panel" id="tab-recommendations" hidden>
  ${renderRecommendationsTab(anime)}
</section>

<section class="detail-section">
  <div class="detail-banner" style="background-image:url('${resolveAsset(anime.banner)}')"></div>
  <p class="description">${esc(anime.description)}</p>
  <div class="tag-row">${(anime.genres || []).map(g => `<span>${esc(g)}</span>`).join("")}</div>
  <!-- Audio: the site is Hindi-dub focused, so we always advertise just
       Hindi here even if the underlying file is multi-audio. -->
  <div class="tag-row muted"><span>Audio: Hindi</span></div>
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
    <a href="javascript:void(0)" data-info-page="terms">Terms</a>
    <a href="javascript:void(0)" data-info-page="privacy">Privacy</a>
    <a href="javascript:void(0)" data-info-page="contact">Contact</a>
    <a href="javascript:void(0)" data-info-page="sitemap">Sitemap</a>
  </div>
  <p class="footer-copy">© 2026 CrunchyEpisode. All rights reserved.</p>
</footer>

<!-- Shared modal for Terms/Privacy/Contact/Sitemap (same placeholder
     content system as the homepage — edit FOOTER_PAGES below). -->
<div class="info-modal-overlay" id="infoModalOverlay"></div>
<div class="info-modal" id="infoModal">
  <div class="info-modal-head">
    <h3 id="infoModalTitle">Title</h3>
    <button class="info-modal-close" id="infoModalClose" aria-label="Close">✕</button>
  </div>
  <div class="info-modal-body" id="infoModalBody"></div>
</div>

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
  let currentQuality = ${JSON.stringify(defaultQuality)};

  async function getPlayToken() {
    const res = await fetch(\`/api/token?id=\${encodeURIComponent(EPISODE_ID)}\`);
    if (!res.ok) throw new Error("Could not get playback token");
    return res.json();
  }

  async function mountPlayer() {
    const frame = document.getElementById("player-frame");
    try {
      const { token } = await getPlayToken();
      const qParam = currentQuality ? \`&quality=\${encodeURIComponent(currentQuality)}\` : "";
      const playUrl = \`/api/play?id=\${encodeURIComponent(EPISODE_ID)}&token=\${encodeURIComponent(token)}\${qParam}\`;

      if (EMBED_TYPE === "iframe") {
        frame.innerHTML = \`<iframe id="embedFrame" src="\${playUrl}"
          allowfullscreen webkitallowfullscreen mozallowfullscreen
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          referrerpolicy="strict-origin-when-cross-origin"></iframe>\`;
      } else {
        // Direct file (mp4 etc.), proxied byte-for-byte through /api/play
        // so the real CDN/worker URL is never visible in the Network tab.
        frame.innerHTML = \`<video id="videoEl" controls autoplay playsinline
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture disableRemotePlayback
          oncontextmenu="return false"
          style="width:100%;height:100%;background:#000;" src="\${playUrl}"></video>\`;
      }

      const fsBtn = document.getElementById("fullscreenBtn");
      const playerSection = document.querySelector(".player-section");
      fsBtn.onclick = () => {
        const isFs = document.fullscreenElement || document.webkitFullscreenElement;
        if (isFs) {
          (document.exitFullscreen || document.webkitExitFullscreen)?.call(document);
          return;
        }
        const req = playerSection.requestFullscreen || playerSection.webkitRequestFullscreen || playerSection.mozRequestFullScreen;
        if (req) req.call(playerSection).catch(() => {});
      };
      document.addEventListener("fullscreenchange", () => {
        fsBtn.textContent = document.fullscreenElement ? "✕" : "⛶";
      });
    } catch (err) {
      frame.innerHTML = '<p class="empty-row">Playback failed to load. Please refresh or try again shortly.</p>';
      console.error(err);
    }
  }

  let playerStarted = false;
  document.getElementById("player-frame").addEventListener("click", () => {
    playerStarted = true;
    mountPlayer();
  }, { once: true });

  // Quality switcher (only present when the episode has 2+ qualities) —
  // re-mounts the player with the newly selected quality. If playback
  // hasn't started yet, it just remembers the choice for when it does.
  document.getElementById("qualitySwitch")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".qs-btn");
    if (!btn) return;
    document.querySelectorAll(".qs-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentQuality = btn.dataset.quality;
    if (playerStarted) mountPlayer();
  });

  // ---------------------------------------------------------
  // Downloads — either a single "Download Now" button (episodes with no
  // declared qualities), or one button per available quality plus an
  // optional Zip Pack button. All routed through /api/download-link,
  // which token-protects the real URL and auto-shortens via GPLinks.
  // ---------------------------------------------------------
  async function startDownload(btn, quality) {
    const originalLabel = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Preparing…";
    try {
      const qParam = quality ? \`&quality=\${encodeURIComponent(quality)}\` : "";
      const res = await fetch(\`/api/download-link?id=\${encodeURIComponent(EPISODE_ID)}\${qParam}\`);
      if (!res.ok) throw new Error("download-link request failed");
      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      alert("Download link could not be generated. Please try again.");
      console.error(err);
    } finally {
      btn.disabled = false;
      btn.textContent = originalLabel;
    }
  }

  document.getElementById("downloadBtn")?.addEventListener("click", (e) => startDownload(e.currentTarget, e.currentTarget.dataset.quality || ""));
  document.querySelectorAll(".dl-quality-btn").forEach(btn => {
    btn.addEventListener("click", (e) => startDownload(e.currentTarget, e.currentTarget.dataset.quality));
  });
  document.getElementById("zipDownloadBtn")?.addEventListener("click", (e) => startDownload(e.currentTarget, "zip"));

  document.getElementById("moreInfoBtn").addEventListener("click", () => {
    document.querySelector(".detail-section").scrollIntoView({ behavior: "smooth" });
  });

  // ---------------------------------------------------------
  // Favorite button — toggles this anime's id in the same
  // "ce_favorites" localStorage list the homepage Favorites row
  // reads from (that's now the only place a title gets favorited).
  // ---------------------------------------------------------
  const ANIME_ID = ${JSON.stringify(anime.id)};
  function loadFavorites() {
    try { return JSON.parse(localStorage.getItem("ce_favorites") || "[]"); } catch { return []; }
  }
  function saveFavorites(list) {
    try { localStorage.setItem("ce_favorites", JSON.stringify(list)); } catch {}
  }
  function refreshFavoriteBtn() {
    const btn = document.getElementById("favoriteBtn");
    const active = loadFavorites().includes(ANIME_ID);
    btn.classList.toggle("active", active);
  }
  document.getElementById("favoriteBtn").addEventListener("click", () => {
    let list = loadFavorites();
    if (list.includes(ANIME_ID)) list = list.filter(id => id !== ANIME_ID);
    else list.unshift(ANIME_ID);
    saveFavorites(list);
    refreshFavoriteBtn();
  });
  refreshFavoriteBtn();

  // ---------------------------------------------------------
  // Share button — builds a formatted info block (title, rating,
  // genres, quality, audio, episode count) and shares it via the
  // native share sheet where available, falling back to copying
  // the text to the clipboard.
  // ---------------------------------------------------------
  document.getElementById("shareBtn").addEventListener("click", async () => {
    const shareText = ${JSON.stringify(
      `• ${displayTitle} Season ${season}\n` +
      `— Rating: ${anime.siteRating || anime.tmdbRating || "N/A"}/10\n` +
      `— Genres: ${(anime.genres || []).join(" | ")}\n` +
      `— Quality: ${anime.quality || "HD"}\n` +
      `— Audio Tracks: Hindi\n` +
      `— Total Episode: ${eps.length}\n\n` +
      `Watch here: `
    )} + window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: ${JSON.stringify(displayTitle)}, text: shareText });
      } catch (err) {
        // User cancelled the share sheet — nothing to do.
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert("Copied to clipboard!");
      } catch (err) {
        alert(shareText);
      }
    }
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

  // ---------------------------------------------------------
  // Footer info modal (Terms/Privacy/Contact/Sitemap) — placeholder
  // text, edit directly below whenever you're ready.
  // ---------------------------------------------------------
  const FOOTER_PAGES = {
    terms: {
      title: "Terms & Conditions",
      html: '<p>Placeholder terms text — replace this with your real Terms & Conditions whenever you\\'re ready.</p><p>CrunchyEpisode does not host any video files. Every episode links out to third-party servers; we are not responsible for their content or availability.</p>'
    },
    privacy: {
      title: "Privacy Policy",
      html: '<p>Placeholder privacy text — replace this with your real Privacy Policy whenever you\\'re ready.</p><p>We don\\'t collect personal information beyond what\\'s needed for basic site functionality (e.g. your on-device Favorites list, stored only in your browser).</p>'
    },
    contact: {
      title: "Contact",
      html: '<p>Placeholder contact info — replace this with your real contact details (email, Telegram, etc.) whenever you\\'re ready.</p>'
    },
    sitemap: {
      title: "Sitemap",
      html: '<p>Placeholder sitemap — replace this with a real list of site sections/links whenever you\\'re ready.</p>'
    }
  };
  function openInfoModal(key) {
    const page = FOOTER_PAGES[key];
    if (!page) return;
    document.getElementById("infoModalTitle").textContent = page.title;
    document.getElementById("infoModalBody").innerHTML = page.html;
    document.getElementById("infoModalOverlay").classList.add("open");
    document.getElementById("infoModal").classList.add("open");
  }
  function closeInfoModal() {
    document.getElementById("infoModalOverlay").classList.remove("open");
    document.getElementById("infoModal").classList.remove("open");
    document.getElementById("infoModalBody").innerHTML = "";
  }
  document.querySelectorAll("[data-info-page]").forEach(el => {
    el.addEventListener("click", e => { e.preventDefault(); openInfoModal(el.dataset.infoPage); });
  });
  document.getElementById("infoModalClose").addEventListener("click", closeInfoModal);
  document.getElementById("infoModalOverlay").addEventListener("click", closeInfoModal);
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
