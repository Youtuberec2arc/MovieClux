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

// ---------------- Favorites (localStorage, per-device) ----------------
function loadFavorites() {
  try { return JSON.parse(localStorage.getItem("ce_favorites") || "[]"); } catch { return []; }
}
let FAVORITES = loadFavorites();
function saveFavorites() {
  try { localStorage.setItem("ce_favorites", JSON.stringify(FAVORITES)); } catch { /* storage unavailable */ }
}
function isFavorited(id) { return FAVORITES.includes(id); }
function toggleFavorite(id) {
  const idx = FAVORITES.indexOf(id);
  if (idx > -1) FAVORITES.splice(idx, 1); else FAVORITES.unshift(id);
  saveFavorites();
  document.querySelectorAll(`.card-fav[data-id="${id}"]`).forEach(btn => btn.classList.toggle("active", isFavorited(id)));
  renderFavorites();
}

/** Builds a single card's inner HTML. */
function generateAnimeCard(anime) {
  return `
    <div class="anime-card ${anime.isAvailable ? "" : "disabled-card"}">
      <a href="${watchHref(anime)}" class="card-link">
        <div class="card-thumb">
          <img src="${anime.poster}" alt="${anime.title}" loading="lazy"
               onerror="this.parentElement.classList.add('no-art')">
          <span class="badge badge-rating">★ ${anime.siteRating || anime.tmdbRating || "N/A"}</span>
          <span class="badge badge-age">${anime.ageRating || "N/A"}</span>
          ${!anime.isAvailable ? '<span class="badge badge-soon">Coming Soon</span>' : ""}
        </div>
        <div class="card-info">
          <h4 class="card-title">${anime.title}</h4>
          <span class="card-meta">${anime.type || "TV"} • ${anime.duration || "--"}</span>
        </div>
      </a>
      <button class="card-fav ${isFavorited(anime.id) ? "active" : ""}" data-id="${anime.id}" aria-label="Toggle favorite">♥</button>
    </div>`;
}

document.addEventListener("click", (e) => {
  const favBtn = e.target.closest(".card-fav");
  if (!favBtn) return;
  e.preventDefault();
  toggleFavorite(favBtn.dataset.id);
});

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
    grid.innerHTML = `<p class="empty-row">No favorites yet — tap the ♥ on any title to save it here.</p>`;
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
  document.getElementById("heroTitle").innerText = featured.title;
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
// Used by search, the Series/Movies nav counts, the drawer's A-Z/Series/
// Movies links, and genre taps — one code path so behavior stays consistent.
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
// Searches every anime uploaded on the site (title, genres, tags), not just
// the ones shown in Latest/New — so nothing on the site is unreachable by
// search even if a title only ever appears in one row.
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

  // Support ?q= coming from a watch page's own search box.
  const q = new URLSearchParams(window.location.search).get("q");
  if (q) {
    input.value = q;
    performSearch(q);
  }
}

function wireNavCountFilters() {
  const seriesLink = document.getElementById("cnt-series-link");
  const moviesLink = document.getElementById("cnt-movies-link");
  if (seriesLink) seriesLink.addEventListener("click", e => {
    e.preventDefault();
    showFilteredResults(ANIME_DATABASE.filter(a => a.type !== "Movie"), "Anime Series").scrollIntoView({ behavior: "smooth" });
  });
  if (moviesLink) moviesLink.addEventListener("click", e => {
    e.preventDefault();
    showFilteredResults(ANIME_DATABASE.filter(a => a.type === "Movie"), "Anime Movies").scrollIntoView({ behavior: "smooth" });
  });
}

// ---------------- Hamburger drawer ----------------
// A rotating color palette for genre chips — purely cosmetic, cycles
// through regardless of how many/few genres actually exist in the data.
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

  document.querySelector(".notice-close")?.addEventListener("click", (e) => {
    e.target.closest(".notice-bar").style.display = "none";
  });
});
