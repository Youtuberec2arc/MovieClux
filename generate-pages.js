/**
 * generate-pages.js
 * ---------------------------------------------------------
 * Turns ANIME_DATABASE (anime-data.js) into the card markup
 * used across the homepage: Latest Episodes, New on Site,
 * and Upcoming. Only one function to touch when the card
 * design changes — every row calls the same generator.
 * --------------------------------------------------------- */

/** Builds a single card's inner HTML. */
function generateAnimeCard(anime) {
  const ep = anime.episodes && anime.episodes[0];
  const watchHref = anime.isAvailable
    ? `watch.html?id=${anime.id}`
    : "javascript:void(0)";

  return `
    <a class="anime-card ${anime.isAvailable ? "" : "disabled-card"}" href="${watchHref}">
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
  document.getElementById("heroWatchBtn").href = featured.isAvailable
    ? `watch.html?id=${featured.id}`
    : "javascript:void(0)";
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderSection("latestGrid", "latest");
  renderSection("newGrid", "new");
  renderSection("upcomingGrid", "upcoming");
});
