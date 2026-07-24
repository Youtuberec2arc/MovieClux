/**
 * generate-pages.js
 * ---------------------------------------------------------
 * Turns ANIME_DATABASE (anime-data.js) into the card markup
 * used across the homepage: Latest Episodes, New on Site, and
 * live Search Results. (The old "Upcoming" row has been
 * removed from the site — see index.html.)
 * --------------------------------------------------------- */

/** Static pages now live in /WatchOnline/{animeId}-{season}x{episode}.html */
function watchHref(anime, episodeNumber) {
  if (!anime.isAvailable) return "javascript:void(0)";
  const ep = episodeNumber || (anime.episodes && anime.episodes[0] && anime.episodes[0].number) || 1;
  return `WatchOnline/${anime.id}-${anime.season || 1}x${ep}.html`;
}

/** Builds a single card's inner HTML. */
function generateAnimeCard(anime) {
  return `
    <a class="anime-card ${anime.isAvailable ? "" : "disabled-card"}" href="${watchHref(anime)}">
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

/** Fills the hero banner with the newest "latest" title. */
function renderHero() {
  const hero = document.getElementById("heroSection");
  const featured = ANIME_DATABASE.find(a => a.section === "latest") || ANIME_DATABASE[0];
  if (!hero || !featured) return;

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

// ---------------- Live search ----------------
// Searches every anime uploaded on the site (title, genres, tags), not just
// the ones shown in Latest/New — so nothing on the site is unreachable by
// search even if a title only ever appears in one row.
function performSearch(rawQuery) {
  const query = rawQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  document.getElementById("heroSection").style.display = isSearching ? "none" : "";
  document.getElementById("latestEpisodesRow").style.display = isSearching ? "none" : "";
  document.getElementById("newRow").style.display = isSearching ? "none" : "";

  const resultsRow = document.getElementById("searchResultsRow");
  resultsRow.style.display = isSearching ? "" : "none";
  if (!isSearching) return;

  const results = ANIME_DATABASE.filter(a => {
    const haystack = `${a.title} ${a.type} ${a.year} ${(a.genres || []).join(" ")} ${(a.tags || []).join(" ")}`.toLowerCase();
    return haystack.includes(query);
  });

  document.getElementById("searchResultsTitle").textContent = `Search Results (${results.length})`;
  const grid = document.getElementById("searchResultsGrid");
  grid.innerHTML = results.length
    ? results.map(generateAnimeCard).join("")
    : `<p class="empty-row">No anime found for "${rawQuery}".</p>`;
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
  const goTo = (predicate, label) => {
    document.getElementById("searchInput").value = "";
    document.getElementById("heroSection").style.display = "none";
    document.getElementById("latestEpisodesRow").style.display = "none";
    document.getElementById("newRow").style.display = "none";
    const resultsRow = document.getElementById("searchResultsRow");
    resultsRow.style.display = "";
    const items = ANIME_DATABASE.filter(predicate);
    document.getElementById("searchResultsTitle").textContent = `${label} (${items.length})`;
    document.getElementById("searchResultsGrid").innerHTML = items.length
      ? items.map(generateAnimeCard).join("")
      : `<p class="empty-row">Nothing here yet — check back soon.</p>`;
    resultsRow.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const seriesLink = document.getElementById("cnt-series-link");
  const moviesLink = document.getElementById("cnt-movies-link");
  if (seriesLink) seriesLink.addEventListener("click", e => { e.preventDefault(); goTo(a => a.type !== "Movie", "Anime Series"); });
  if (moviesLink) moviesLink.addEventListener("click", e => { e.preventDefault(); goTo(a => a.type === "Movie", "Anime Movies"); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderSection("latestGrid", "latest");
  renderSection("newGrid", "new");
  renderNavCounts();
  wireSearch();
  wireNavCountFilters();

  document.querySelector(".notice-close")?.addEventListener("click", (e) => {
    e.target.closest(".notice-bar").style.display = "none";
  });
});
