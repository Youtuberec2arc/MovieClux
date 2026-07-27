/**
 * anime-data.js
 * ---------------------------------------------------------
 * Single source of truth for every title on the site — but
 * ONLY public metadata lives here. This file ships to every
 * visitor's browser, so it must NEVER contain a real CDN /
 * video URL. Real video sources live server-side only, in
 * /api/_data/videoSources.js, keyed by the same episode id
 * used here (see "id" inside each episode).
 *
 * generate-pages.js (homepage cards) and scripts/build-watch-pages.js
 * (static /WatchOnline/*.html pages) both read from this file,
 * so nothing has to be written twice.
 *
 * section: "latest" | "new"  -> which homepage row the card
 *          shows up in. (The old "upcoming" row has been
 *          removed from the site entirely.)
 * isAvailable: false -> card still renders, but the watch
 *          button is disabled.
 * season:  numeric season this batch of episodes belongs to.
 *          Used to build the WatchOnline filename:
 *          {animeId}-{season}x{episodeNumber}.html
 * episodes[].id: the PUBLIC episode id passed to /api/play —
 *          this is what the frontend is allowed to know.
 *          The real CDN URL it maps to is server-side only.
 * episodes[].embedType:
 *          "stream" -> direct file link (.mp4/.m3u8/worker
 *                      download link) — played with a plain
 *                      native <video> tag through the proxy.
 *          "iframe" -> third-party embed/player PAGE (not a
 *                      raw file) — shown in an <iframe> via
 *                      the proxy.
 * --------------------------------------------------------- */

const ANIME_DATABASE = [
{
  id: "farming-life-in-another-world",
  title: "Farming Life in Another World",
  type: "TV",
  ageRating: "PG-13",
  year: "2023",
  duration: "24m",
  tmdbRating: "7.2",        // IMDb rating (tumne bola tha IMDb se lena)
  siteRating: "7.2",
  poster: "https://image.tmdb.org/t/p/original/pT4OoVQE8zGJ0Z0GZpJotK5Vzsj.jpg",
  banner: "https://image.tmdb.org/t/p/original/pT4OoVQE8zGJ0Z0GZpJotK5Vzsj.jpg",
  genres: ["Animation", "Romance", "Fantasy"],
  languages: ["Japanese", "English", "Hindi"],
  tags: ["Multi Audio", "BluRay", "1st Dub"],
  description: "When a godlike figure gives Hiraku a chance to live again, he wishes to be healthy, to live peacefully, to speak the local language, and to spend his days on an idyllic farm.",
  cast: [],
  isAvailable: true,
  section: "new",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "farming-life-in-another-world-1x1", embedType: "stream", seedViews: 0 },
    { number: 2, title: "Episode 2", id: "farming-life-in-another-world-1x2", embedType: "stream", seedViews: 0 },
    { number: 3, title: "Episode 3", id: "farming-life-in-another-world-1x3", embedType: "stream", seedViews: 0 },
    { number: 4, title: "Episode 4", id: "farming-life-in-another-world-1x4", embedType: "stream", seedViews: 0 },
    { number: 5, title: "Episode 5", id: "farming-life-in-another-world-1x5", embedType: "stream", seedViews: 0 },
    { number: 6, title: "Episode 6", id: "farming-life-in-another-world-1x6", embedType: "stream", seedViews: 0 },
    { number: 7, title: "Episode 7", id: "farming-life-in-another-world-1x7", embedType: "stream", seedViews: 0 },
    { number: 8, title: "Episode 8", id: "farming-life-in-another-world-1x8", embedType: "stream", seedViews: 0 },
    { number: 9, title: "Episode 9", id: "farming-life-in-another-world-1x9", embedType: "stream", seedViews: 0 },
    { number: 10, title: "Episode 10", id: "farming-life-in-another-world-1x10", embedType: "stream", seedViews: 0 },
    { number: 11, title: "Episode 11", id: "farming-life-in-another-world-1x11", embedType: "stream", seedViews: 0 },
    { number: 12, title: "Episode 12", id: "farming-life-in-another-world-1x12", embedType: "stream", seedViews: 0 }
  ]
},
{
  id: "tamons-b-side",
  title: "Tamon's B-Side",
  type: "TV",
  ageRating: "PG-13",       // ⚠ nahi diya tha, default rakha — change kar lena
  year: "2026",
  duration: "24m",
  tmdbRating: "N/A",        // ⚠ nahi diya tha
  siteRating: "N/A",
  poster: "https://image.tmdb.org/t/p/original/1iTCxEIK1xlmIXjHcLjt0UyOU8w.jpg",
  banner: "https://image.tmdb.org/t/p/original/1iTCxEIK1xlmIXjHcLjt0UyOU8w.jpg",
  genres: ["Animation", "Comedy", "Romance"],
  languages: ["Hindi"],
  tags: ["Multi Audio", "WEB-DL", "Uncensored"],
  description: "A 2026 TV anime series, 24 minutes per episode, dubbed in Hindi with multi-audio WEB-DL releases.",
  cast: [],
  isAvailable: true,
  section: "latest",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "tamons-b-side-1x1", embedType: "stream", seedViews: 0 },
    { number: 2, title: "Episode 2", id: "tamons-b-side-1x2", embedType: "stream", seedViews: 0 },
    { number: 3, title: "Episode 3", id: "tamons-b-side-1x3", embedType: "stream", seedViews: 0 },
    { number: 4, title: "Episode 4", id: "tamons-b-side-1x4", embedType: "stream", seedViews: 0 },
    { number: 5, title: "Episode 5", id: "tamons-b-side-1x5", embedType: "stream", seedViews: 0 },
    { number: 6, title: "Episode 6", id: "tamons-b-side-1x6", embedType: "stream", seedViews: 0 },
    { number: 7, title: "Episode 7", id: "tamons-b-side-1x7", embedType: "stream", seedViews: 0 }
    // Episodes 8-13 not added yet — bhejo jab mile
  ]
},
{
  id: "fullmetal-alchemist-brotherhood",
  title: "Fullmetal Alchemist: Brotherhood",
  type: "TV",
  ageRating: "PG-13",      // ⚠ tumne nahi diya, maine default rakha — change kar lena agar chahiye
  year: "2009",
  duration: "25m",
  tmdbRating: "8.7",
  siteRating: "8.7",
  poster: "assets/fullmetal-alchemist-brotherhood-poster.jpg",
  banner: "assets/fullmetal-alchemist-brotherhood-poster.jpg",
  genres: ["Action & Adventure", "Animation", "Anime Series", "Drama", "Sci-Fi & Fantasy"],
  languages: ["Hindi", "English", "Japanese"],
  tags: ["Amazon Prime Video", "Animetimes"],
  description: "Disregard for alchemy's laws ripped half of Edward Elric's limbs from his body and left his brother Alphonse's soul clinging to a suit of armor. To restore what was lost, the brothers seek the Philosopher's Stone. Enemies and allies – the corrupt military, the Homunculi, and foreign alchemists – will alter the Elric brothers course, but their purpose will remain unchanged and their bond unbreakable.",
  cast: ["Romi Park", "Rie Kugimiya", "Shin-ichiro Miki", "Fumiko Orikasa", "Megumi Takamoto"],
  isAvailable: true,
  section: "new",           // "New on Site" row mein dikhega — "latest" karna ho to yahan badal dena
  season: 1,
  episodes: [
    // FIXED: source is a raw worker .mp4 link, not an embed/player PAGE —
    // must be "stream" so it plays via the native <video> tag through the proxy.
    { number: 1, title: "Episode 1", id: "fullmetal-alchemist-brotherhood-1x1", embedType: "stream", seedViews: 0 },
    { number: 2, title: "Episode 2", id: "fullmetal-alchemist-brotherhood-1x2", embedType: "stream", seedViews: 0 },
    { number: 3, title: "Episode 3", id: "fullmetal-alchemist-brotherhood-1x3", embedType: "stream", seedViews: 0 },
    { number: 4, title: "Episode 4", id: "fullmetal-alchemist-brotherhood-1x4", embedType: "stream", seedViews: 0 }
  ]
},
{
    id: "chainsmoker-cat",
    title: "Chainsmoker Cat",
    type: "TV",
    ageRating: "PG-13",
    year: "2026",
    duration: "24m",
    tmdbRating: "8.7",
    siteRating: "6.8",
    poster: "assets/chainsmoker-cat-poster.jpg",
    banner: "assets/chainsmoker-cat-poster.jpg",
    genres: ["Animation", "Anime", "Anime Series", "Comedy", "Sci-Fi & Fantasy"],
    languages: ["English", "Hindi", "Japanese", "Tamil", "Telugu"],
    tags: ["smoking", "chain smoking", "based on manga", "trashed house", "fantasy", "urban fantasy"],
    description: "Yani is a catgirl with a seriously bad smoking habit. She smokes so much that her apartment smells like ash and is littered with cigarette butts — and plenty of other clutter besides. As her landlord's patience and her loved ones' concerns both run thin, Yani has to decide what she actually wants her future to look like.",
    cast: ["Yuko Natsuyoshi", "Misato Matsuoka", "Yurie Funato", "Ayaka Shimizu", "Shiori Izawa"],
    isAvailable: true,
    section: "latest",
    season: 1,
    episodes: [
      {
        number: 1,
        title: "Episode 1",
        // Public id only — resolved to a real source by /api/play server-side.
        id: "chainsmoker-cat-1x1",
        // FIXED: this is a direct .mp4 worker link, not an embed page —
        // must be "stream" so it plays through the native <video> tag
        // instead of being forced into a broken download-triggering iframe.
        embedType: "stream",
        // Seed count only, shown until the live Firebase counter takes over.
        seedViews: 640000
      },
      {
        number: 2,
        title: "Episode 2",
        id: "chainsmoker-cat-1x2",
        embedType: "stream",
        seedViews: 0
      }
    ]
  }

  // Add the next title here, e.g.:
  // {
  //   id: "one-piece",
  //   title: "One Piece",
  //   section: "new",
  //   isAvailable: false,
  //   season: 1,
  //   episodes: [ { number: 1, title: "Episode 1", id: "one-piece-1x1", embedType: "stream", seedViews: 0 } ]
  // }
];

// Shared helpers -------------------------------------------------

function findAnimeById(id) {
  return ANIME_DATABASE.find(a => a.id === id) || null;
}

function formatViews(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(0) + "K";
  return String(n || 0);
}

// Node (build script) needs to `require` this file; browsers just use the
// globals above. This export is a no-op in the browser.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ANIME_DATABASE, findAnimeById, formatViews };
}
