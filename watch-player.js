/**
 * watch-player.js
 * ---------------------------------------------------------
 * Reads ?id= (and optional ?ep=) from the URL, looks the
 * title up in ANIME_DATABASE (anime-data.js), and fills in
 * the whole watch page: player, meta row, action buttons,
 * tabs, episode grid, and the detail sections at the bottom.
 * --------------------------------------------------------- */

const PLAYER_KEY = "ca3325d1-4688-4f50-925f-ff6b003a41bc";

const params = new URLSearchParams(window.location.search);
const animeId = params.get("id") || "chainsmoker-cat";
const epNumber = parseInt(params.get("ep") || "1", 10);

const anime = findAnimeById(animeId) || ANIME_DATABASE[0];
const episodeIndex = Math.max(0, (anime.episodes || []).findIndex(e => e.number === epNumber));
const episode = anime.episodes[episodeIndex] || anime.episodes[0];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("skeleton-loader").style.display = "none";
  document.getElementById("main-content").style.display = "block";

  populatePage();
  wireActionButtons();
  wireTabs();
  wireNotice();
  renderEpisodeGrid();
  loadServer(0); // start on the first server ("Sub")
});

function populatePage() {
  document.getElementById("title").innerText = anime.title;
  document.getElementById("episodeTitle").innerText = episode.title;
  document.getElementById("description").innerText = anime.description;
  document.getElementById("year").innerText = anime.year;
  document.getElementById("rating").innerText = anime.tmdbRating;
  document.getElementById("type").innerText = anime.type;
  document.getElementById("downloadBtn").href = episode.download || "#";

  document.getElementById("genres").innerHTML =
    (anime.genres || []).map(g => `<span>${g}</span>`).join("");
  document.getElementById("languages").innerHTML =
    (anime.languages || []).map(l => `<span>${l}</span>`).join("");
  document.getElementById("castList").innerHTML =
    (anime.cast || []).map(c => `<span>${c}</span>`).join("");

  if (anime.poster) document.getElementById("poster").src = anime.poster;
  if (anime.banner) document.getElementById("heroBanner").style.backgroundImage = `url(${anime.banner})`;

  document.title = `${episode.title} — ${anime.title} — Anicraze`;

  document.getElementById("moreInfoBtn").addEventListener("click", () => {
    document.querySelector(".detail-section").scrollIntoView({ behavior: "smooth" });
  });
}

function wireActionButtons() {
  const eps = anime.episodes;
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const hasPrev = episodeIndex > 0;
  const hasNext = episodeIndex < eps.length - 1;
  prevBtn.disabled = !hasPrev;
  nextBtn.disabled = !hasNext;

  prevBtn.addEventListener("click", () => {
    if (hasPrev) goToEpisode(eps[episodeIndex - 1].number);
  });
  nextBtn.addEventListener("click", () => {
    if (hasNext) goToEpisode(eps[episodeIndex + 1].number);
  });

  document.querySelectorAll(".server-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".server-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadServer(parseInt(btn.dataset.server, 10));
    });
  });
}

function goToEpisode(number) {
  const url = new URL(window.location.href);
  url.searchParams.set("id", anime.id);
  url.searchParams.set("ep", number);
  window.location.href = url.toString();
}

function wireTabs() {
  document.querySelectorAll(".tab-link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".tab-link").forEach(l => l.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.hidden = true);
      link.classList.add("active");
      document.getElementById(`tab-${link.dataset.tab}`).hidden = false;
    });
  });
}

function wireNotice() {
  const notice = document.getElementById("noticeBar");
  notice.querySelector(".notice-close").addEventListener("click", () => {
    notice.style.display = "none";
  });
}

function renderEpisodeGrid() {
  const grid = document.getElementById("episodeGrid");
  const eps = anime.episodes || [];
  document.getElementById("episodeCount").innerText = `${eps.length} Episode${eps.length === 1 ? "" : "s"}`;

  grid.innerHTML = eps.map(e => `
    <div class="episode-card ${e.number === episode.number ? "active" : ""}" data-ep="${e.number}">
      EP ${e.number}
    </div>
  `).join("");

  grid.querySelectorAll(".episode-card").forEach(card => {
    card.addEventListener("click", () => goToEpisode(parseInt(card.dataset.ep, 10)));
  });

  document.getElementById("refreshEpisodes").addEventListener("click", () => renderEpisodeGrid());
}

/**
 * Loads a server by index. Tries Bitmovin first (adaptive UI,
 * resume-playback, Chromecast/AirPlay); if the source can't be
 * played that way it falls back to an <iframe> embed instead.
 */
function loadServer(serverIndex) {
  const server = episode.servers[serverIndex] || episode.servers[0];
  const container = document.getElementById("bitmovin-player");
  container.innerHTML = "";

  const playerConfig = {
    key: PLAYER_KEY,
    playback: { autoplay: true, muted: false },
    ui: { playbackSpeedSelectionEnabled: true },
    cast: { enable: true },
    remotecontrol: { type: "apple" }
  };

  const player = new bitmovin.player.Player(container, playerConfig);
  const source = { title: anime.title, description: episode.title, hls: server.url };

  player.load(source).then(() => {
    const resumeKey = `resume_${anime.id}_ep${episode.number}`;
    const savedTime = localStorage.getItem(resumeKey);
    if (savedTime && savedTime > 0) player.seek(parseFloat(savedTime));

    player.on(bitmovin.player.PlayerEvent.TimeChanged, (event) => {
      if (Math.floor(event.time) % 5 === 0) {
        localStorage.setItem(resumeKey, event.time);
      }
    });
  }).catch(() => {
    // Fall back to a plain iframe embed for this server.
    container.innerHTML = `<iframe src="${server.url}" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`;
  });
}
