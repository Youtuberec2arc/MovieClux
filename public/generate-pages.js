/**
 * generate-pages.js
 * ---------------------------------------------------------
 * Turns ANIME_DATABASE (anime-data.js) into the card markup
 * used across the homepage: Latest Episodes, New on Site,
 * Favorites, and live Search Results — plus the hamburger
 * drawer (static links + a genre grid built live from
 * whatever's actually in ANIME_DATABASE) and the mobile
 * bottom nav (Home/Trending/Search/Favorites/Menu).
 *
 * Favorites can only be ADDED from a watch page's "Favorite"
 * button now (no heart icon on the homepage cards) — this file
 * still reads/displays whatever's already in localStorage so
 * the Favorites row keeps working.
 *
 * Everything that reads ANIME_DATABASE here is defensive: if
 * it's ever emptied out, sections just show an empty-state
 * message instead of throwing.
 * --------------------------------------------------------- */

/** Static pages now live in /WatchOnline/{animeId}-{season}x{episode}.html */
function watchHref(anime, episodeNumber) {
  if (!anime.isAvailable) return "javascript:void(0)";
  const ep = episodeNumber || (anime.episodes && anime.episodes[0] && anime.episodes[0].number) || 1;
  return `WatchOnline/${anime.id}-${anime.season || 1}x${ep}.html`;
}

// ---------------- Favorites (localStorage, shared with watch pages) ----------------
// Same key/format as the "Favorite" button on watch pages (api key: ce_favorites,
// a plain array of anime ids). This file only ever READS it for the Favorites
// row — adding/removing now happens exclusively from a watch page.
function loadFavorites() {
  try { return JSON.parse(localStorage.getItem("ce_favorites") || "[]"); } catch { return []; }
}
function isFavorited(id) { return loadFavorites().includes(id); }

/** Builds a single card's inner HTML. No heart/like button — favoriting
 * only happens from the watch page now. */
function generateAnimeCard(anime) {
  const epCount = (anime.episodes || []).length;
  return `
    <a class="anime-card ${anime.isAvailable ? "" : "disabled-card"}" href="${watchHref(anime)}">
      <div class="card-thumb">
        <img src="${anime.poster}" alt="${cleanTitle(anime.title)}" loading="lazy"
             onerror="this.parentElement.classList.add('no-art')">
        <span class="badge badge-rating">★ ${anime.siteRating || anime.tmdbRating || "N/A"}</span>
        <span class="badge badge-age">${epCount} EP</span>
        ${!anime.isAvailable ? '<span class="badge badge-soon">Coming Soon</span>' : ""}
      </div>
      <div class="card-info">
        <h4 class="card-title">${cleanTitle(anime.title)}</h4>
        <span class="card-meta">${anime.type || "TV"} • ${anime.duration || "--"}</span>
      </div>
    </a>`;
}

/** Renders every anime whose `section` matches into the given container id. */
function renderSection(containerId, sectionName) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = ANIME_DATABASE.filter(a => a.section === sectionName);

  if (items.length === 0) {
    container.innerHTML = `<p class="empty-row">More titles are on the way — check back soon.</p>`;
    return;
  }

  container.innerHTML = items.map(generateAnimeCard).join("");
}

function renderFavorites() {
  const section = document.getElementById("favoritesSection");
  const grid = document.getElementById("favoritesGrid");
  if (!section || !grid) return;

  const items = ANIME_DATABASE.filter(a => isFavorited(a.id));
  if (items.length === 0) {
    grid.innerHTML = `<p class="empty-row">No favorites yet — open any episode and tap "Favorite" to save it here.</p>`;
  } else {
    grid.innerHTML = items.map(generateAnimeCard).join("");
  }
}

/** Fills the hero banner with the newest "latest" title. */
function renderHero() {
  const hero = document.getElementById("heroSection");
  const featured = ANIME_DATABASE.find(a => a.section === "latest") || ANIME_DATABASE[0];
  if (!hero) return;

  if (!featured) {
    hero.innerHTML = `<div class="hero-content"><h1>No titles yet</h1><p class="hero-description">Check back soon.</p></div>`;
    return;
  }

  hero.style.backgroundImage = `linear-gradient(180deg, rgba(10,10,14,0.2) 0%, rgba(10,10,14,0.95) 100%), url(${featured.banner})`;

  document.getElementById("heroRating").innerText = `★ ${featured.siteRating || featured.tmdbRating}`;
  document.getElementById("heroType").innerText = featured.type || "TV";
  document.getElementById("heroYear").innerText = featured.year || "";
  document.getElementById("heroTitle").innerText = cleanTitle(featured.title);
  document.getElementById("heroDescription").innerText = featured.description;
  document.getElementById("heroWatchBtn").href = watchHref(featured);
}

/** Series / Movies counts shown in the nav, based on each title's `type`. */
function renderNavCounts() {
  const seriesCount = ANIME_DATABASE.filter(a => a.type !== "Movie").length;
  const moviesCount = ANIME_DATABASE.filter(a => a.type === "Movie").length;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = `(${val})`; };
  set("cnt-series", seriesCount);
  set("cnt-movies", moviesCount);
}

// ---------------- Shared "filtered results" view ----------------
function showFilteredResults(items, label) {
  document.getElementById("heroSection").style.display = "none";
  document.getElementById("latestEpisodesRow").style.display = "none";
  document.getElementById("newRow").style.display = "none";
  document.getElementById("favoritesSection").style.display = "none";

  const resultsRow = document.getElementById("searchResultsRow");
  resultsRow.style.display = "";
  document.getElementById("searchResultsTitle").textContent = `${label} (${items.length})`;
  document.getElementById("searchResultsGrid").innerHTML = items.length
    ? items.map(generateAnimeCard).join("")
    : `<p class="empty-row">Nothing here yet — check back soon.</p>`;
  return resultsRow;
}

function showHomeView() {
  document.getElementById("searchInput").value = "";
  document.getElementById("heroSection").style.display = "";
  document.getElementById("latestEpisodesRow").style.display = "";
  document.getElementById("newRow").style.display = "";
  document.getElementById("favoritesSection").style.display = "";
  document.getElementById("searchResultsRow").style.display = "none";
}

// ---------------- Live search ----------------
function performSearch(rawQuery) {
  const query = rawQuery.trim().toLowerCase();
  if (!query) { showHomeView(); return; }

  const results = ANIME_DATABASE.filter(a => {
    const haystack = `${a.title} ${a.type} ${a.year} ${(a.genres || []).join(" ")} ${(a.tags || []).join(" ")}`.toLowerCase();
    return haystack.includes(query);
  });
  showFilteredResults(results, `Search Results for "${rawQuery}"`);
}

function wireSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  input.addEventListener("input", () => performSearch(input.value));

  const q = new URLSearchParams(window.location.search).get("q");
  if (q) {
    input.value = q;
    performSearch(q);
  }
}

function wireNavCountFilters() {
  const seriesLink = document.getElementById("cnt-series-link");
  const moviesLink = document.getElementById("cnt-movies-link");
  if (seriesLink) seriesLink.addEventListener("click", e => { e.preventDefault(); showFilteredResults(ANIME_DATABASE.filter(a => a.type !== "Movie"), "Anime Series").scrollIntoView({ behavior: "smooth" }); });
  if (moviesLink) moviesLink.addEventListener("click", e => { e.preventDefault(); showFilteredResults(ANIME_DATABASE.filter(a => a.type === "Movie"), "Anime Movies").scrollIntoView({ behavior: "smooth" }); });
}

// ---------------- Hamburger drawer ----------------
const GENRE_COLORS = ["#5ec8f0", "#4ee6a8", "#c9e04e", "#f0a24e", "#e05ecb", "#8a7bf0", "#f05e5e", "#4ef0d1"];

function renderDrawerGenres() {
  const grid = document.getElementById("drawerGenreGrid");
  if (!grid) return;

  const genres = [...new Set(ANIME_DATABASE.flatMap(a => a.genres || []))].sort();

  if (genres.length === 0) {
    grid.innerHTML = `<p class="empty-row">No genres yet.</p>`;
    return;
  }

  grid.innerHTML = genres.map((g, i) =>
    `<button class="drawer-genre-item" data-genre="${g}" style="color:${GENRE_COLORS[i % GENRE_COLORS.length]}">${g}</button>`
  ).join("");
}

function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("drawerOverlay").classList.remove("open");
}
function openDrawer() {
  document.getElementById("drawer").classList.add("open");
  document.getElementById("drawerOverlay").classList.add("open");
}

function wireDrawer() {
  document.querySelector(".menu-btn")?.addEventListener("click", openDrawer);
  document.getElementById("drawerClose")?.addEventListener("click", closeDrawer);
  document.getElementById("drawerOverlay")?.addEventListener("click", closeDrawer);

  document.getElementById("drawer-az-link")?.addEventListener("click", e => {
    e.preventDefault();
    const sorted = [...ANIME_DATABASE].sort((a, b) => a.title.localeCompare(b.title));
    showFilteredResults(sorted, "A-Z Anime List").scrollIntoView({ behavior: "smooth" });
    closeDrawer();
  });
  document.getElementById("drawer-series-link")?.addEventListener("click", e => {
    e.preventDefault();
    showFilteredResults(ANIME_DATABASE.filter(a => a.type !== "Movie"), "Anime Series").scrollIntoView({ behavior: "smooth" });
    closeDrawer();
  });
  document.getElementById("drawer-movies-link")?.addEventListener("click", e => {
    e.preventDefault();
    showFilteredResults(ANIME_DATABASE.filter(a => a.type === "Movie"), "Anime Movies").scrollIntoView({ behavior: "smooth" });
    closeDrawer();
  });

  document.getElementById("drawerGenreGrid")?.addEventListener("click", e => {
    const btn = e.target.closest(".drawer-genre-item");
    if (!btn) return;
    const genre = btn.dataset.genre;
    const items = ANIME_DATABASE.filter(a => (a.genres || []).includes(genre));
    showFilteredResults(items, genre).scrollIntoView({ behavior: "smooth" });
    closeDrawer();
  });
}

// ---------------- Mobile bottom nav ----------------
function wireMobileBottomNav() {
  document.getElementById("mbnTrending")?.addEventListener("click", () => {
    showHomeView();
    document.getElementById("latestEpisodesRow").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("mbnSearch")?.addEventListener("click", () => {
    showHomeView();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => document.getElementById("searchInput")?.focus(), 350);
  });
  document.getElementById("mbnFavorites")?.addEventListener("click", () => {
    showHomeView();
    document.getElementById("favoritesSection").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("mbnMenu")?.addEventListener("click", (e) => {
    e.preventDefault();
    openDrawer();
  });
}

// ---------------- Footer / drawer info modal ----------------
// One shared lightweight modal for Terms / Privacy / Contact / Sitemap and
// "How To Download". Content is placeholder text you can edit directly
// below (FOOTER_PAGES) whenever you're ready.
const FOOTER_PAGES = {
  terms: {
    title: "Terms & Conditions",
    html: `<p>Placeholder terms text — replace this with your real Terms & Conditions whenever you're ready.</p>
           <p>CrunchyEpisode does not host any video files. Every episode links out to third-party servers; we are not responsible for their content or availability.</p>`
  },
  privacy: {
    title: "Privacy Policy",
    html: `<p>Placeholder privacy text — replace this with your real Privacy Policy whenever you're ready.</p>
           <p>We don't collect personal information beyond what's needed for basic site functionality (e.g. your on-device Favorites list, stored only in your browser).</p>`
  },
  contact: {
    title: "Contact",
    html: `<p>Placeholder contact info — replace this with your real contact details (email, Telegram, etc.) whenever you're ready.</p>`
  },
  sitemap: {
    title: "Sitemap",
    html: `<p>Placeholder sitemap — replace this with a real list of site sections/links whenever you're ready.</p>`
  },
  "how-to-download": {
    title: "How To Download",
    html: `<div style="aspect-ratio:16/9;border-radius:10px;overflow:hidden;margin-bottom:12px;">
             <iframe src="https://drive.google.com/file/d/1cSYc_7gEJ4MsSk0Td00CavLCKknJWx_x/preview"
               style="width:100%;height:100%;border:0;" allow="autoplay" allowfullscreen></iframe>
           </div>
           <p>Tap the Download Now button on any episode page, pick a quality, and follow the on-screen steps.</p>`
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
  // Stop any embedded video (e.g. the How To Download iframe) from
  // continuing to play in the background once the modal is closed.
  document.getElementById("infoModalBody").innerHTML = "";
}

function wireInfoModal() {
  document.querySelectorAll("[data-info-page]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      openInfoModal(el.dataset.infoPage);
    });
  });
  document.getElementById("infoModalClose")?.addEventListener("click", closeInfoModal);
  document.getElementById("infoModalOverlay")?.addEventListener("click", closeInfoModal);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderSection("latestGrid", "latest");
  renderSection("newGrid", "new");
  renderFavorites();
  renderNavCounts();
  renderDrawerGenres();
  wireSearch();
  wireNavCountFilters();
  wireDrawer();
  wireMobileBottomNav();
  wireInfoModal();

  document.querySelector(".notice-close")?.addEventListener("click", (e) => {
    e.target.closest(".notice-bar").style.display = "none";
  });
});
