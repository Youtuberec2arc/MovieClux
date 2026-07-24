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
 * --------------------------------------------------------- */

const ANIME_DATABASE = [
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
    { number: 1, title: "Episode 1", id: "fullmetal-alchemist-brotherhood-1x1", embedType: "iframe", seedViews: 0 }
  ]
}
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
        // "stream"  -> direct mp4/hls file, played with Bitmovin through the proxy
        // "iframe"  -> third-party embed page, shown in a sandboxed iframe via the proxy
        embedType: "iframe",
        // Seed count only, shown until the live Firebase counter takes over.
        seedViews: 640000
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
