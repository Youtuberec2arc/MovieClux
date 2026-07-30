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
 * seriesGroup: shared string across every season of the same
 *          franchise (e.g. every "Farming Life..." season uses
 *          "farming-life-in-another-world"). Powers the "Other
 *          Seasons" tab on the watch page. Defaults to the
 *          anime's own id if omitted (so it just won't match
 *          anything else, which is safe for standalone titles).
 * quality: plain text shown on the share card and used as the
 *          single download-button label when an episode doesn't
 *          define a `qualities` array (see below). e.g. "720p HD".
 * episodes[].qualities: OPTIONAL array like ["480p","720p","1080p"]
 *          — only add this once you actually have more than one
 *          print of that episode AND have added the matching
 *          `qualities: {...}` object for it in
 *          api/_data/videoSources.js. This array is just the
 *          public list of which quality buttons to render; the
 *          real URLs stay server-side. Omit it entirely for a
 *          normal single-quality episode.
 * zip: OPTIONAL — set to `true` on an anime object once you've
 *          added a `zip` link for it in videoSources.js, to show
 *          the "Zip Pack Download" button on its watch pages.
 * --------------------------------------------------------- */

const ANIME_DATABASE = [
{
  id: "sword-of-the-demon-hunter-kijin-gentosho",
  title: "Sword of the Demon Hunter: Kijin Gentosho",
  type: "TV",
  ageRating: "PG-13",
  year: "2020",
  duration: "22m",
  tmdbRating: "7.2",
  siteRating: "N/A",
  quality: "1080p",
  zipUrl: "/quality-not-available.html",
  seriesGroup: "sword-of-the-demon-hunter-kijin-gentosho",
  poster: "https://image.tmdb.org/t/p/original/8BNGnDKMaDvpmkTd6z9pQL97Upe.jpg",
  banner: "https://image.tmdb.org/t/p/original/8BNGnDKMaDvpmkTd6z9pQL97Upe.jpg",
  genres: ["Animation", "Drama", "Fantasy"],
  languages: ["Hindi"],
  tags: ["Multi Audio"],
  description: "Kadono village’s shrine maiden has a guardian every generation. During Edo period, guardian Jinta confronts a demon foretelling a future Demon God’s rise tied to their era. His quest to prevent this spans centuries.",
  cast: [],
  isAvailable: true,
  section: "new",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "sword-of-the-demon-hunter-kijin-gentosho-1x1", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 2, title: "Episode 2", id: "sword-of-the-demon-hunter-kijin-gentosho-1x2", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 3, title: "Episode 3", id: "sword-of-the-demon-hunter-kijin-gentosho-1x3", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 4, title: "Episode 4", id: "sword-of-the-demon-hunter-kijin-gentosho-1x4", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 5, title: "Episode 5", id: "sword-of-the-demon-hunter-kijin-gentosho-1x5", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 6, title: "Episode 6", id: "sword-of-the-demon-hunter-kijin-gentosho-1x6", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 7, title: "Episode 7", id: "sword-of-the-demon-hunter-kijin-gentosho-1x7", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 8, title: "Episode 8", id: "sword-of-the-demon-hunter-kijin-gentosho-1x8", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 9, title: "Episode 9", id: "sword-of-the-demon-hunter-kijin-gentosho-1x9", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 10, title: "Episode 10", id: "sword-of-the-demon-hunter-kijin-gentosho-1x10", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 11, title: "Episode 11", id: "sword-of-the-demon-hunter-kijin-gentosho-1x11", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 12, title: "Episode 12", id: "sword-of-the-demon-hunter-kijin-gentosho-1x12", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 13, title: "Episode 13", id: "sword-of-the-demon-hunter-kijin-gentosho-1x13", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 14, title: "Episode 14", id: "sword-of-the-demon-hunter-kijin-gentosho-1x14", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 15, title: "Episode 15", id: "sword-of-the-demon-hunter-kijin-gentosho-1x15", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 16, title: "Episode 16", id: "sword-of-the-demon-hunter-kijin-gentosho-1x16", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 17, title: "Episode 17", id: "sword-of-the-demon-hunter-kijin-gentosho-1x17", embedType: "stream", qualities: ["480p","1080p"], seedViews: 0 },
    { number: 18, title: "Episode 18", id: "sword-of-the-demon-hunter-kijin-gentosho-1x18", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 19, title: "Episode 19", id: "sword-of-the-demon-hunter-kijin-gentosho-1x19", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 20, title: "Episode 20", id: "sword-of-the-demon-hunter-kijin-gentosho-1x20", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 21, title: "Episode 21", id: "sword-of-the-demon-hunter-kijin-gentosho-1x21", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 22, title: "Episode 22", id: "sword-of-the-demon-hunter-kijin-gentosho-1x22", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 23, title: "Episode 23", id: "sword-of-the-demon-hunter-kijin-gentosho-1x23", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 24, title: "Episode 24", id: "sword-of-the-demon-hunter-kijin-gentosho-1x24", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 }
  ]
},
{
  id: "clevatess",
  title: "Clevatess",
  type: "TV",
  ageRating: "PG-13",
  year: "2025",
  duration: "45m",
  tmdbRating: "7.8",
  siteRating: "",
  quality: "1080p",
  zipUrl: "/quality-not-available.html",
  seriesGroup: "clevatess",
  poster: "https://image.tmdb.org/t/p/original/jMQ7IMljkAOV2DqQtK82dWjWm76.jpg",
  banner: "https://image.tmdb.org/t/p/original/jMQ7IMljkAOV2DqQtK82dWjWm76.jpg",
  genres: ["Animation", "Fantasy", "Drama"],
  languages: ["Hindi"],
  tags: ["Multi Audio"],
  description: "One of the Lords of Dark Beasts, Clevatess’s reign shatters when he revives a hero he personally slayed and adopts an orphaned humanoid baby—the last hope to save a dying world. Now bound together, what fate awaits this unlikely trio?",
  cast: [],
  isAvailable: true,
  section: "new",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "clevatess-1x1", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 2, title: "Episode 2", id: "clevatess-1x2", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 3, title: "Episode 3", id: "clevatess-1x3", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 4, title: "Episode 4", id: "clevatess-1x4", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 5, title: "Episode 5", id: "clevatess-1x5", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 6, title: "Episode 6", id: "clevatess-1x6", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 7, title: "Episode 7", id: "clevatess-1x7", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 8, title: "Episode 8", id: "clevatess-1x8", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 9, title: "Episode 9", id: "clevatess-1x9", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 10, title: "Episode 10", id: "clevatess-1x10", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 11, title: "Episode 11", id: "clevatess-1x11", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 12, title: "Episode 12", id: "clevatess-1x12", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 }
  ]
},


{
  id: "demon-slayer-kimetsu-no-yaiba-infinity-castle",
  title: "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
  type: "Movie",
  ageRating: "PG-13",
  year: "2025",
  duration: "2h 35m",
  tmdbRating: "8.4",
  siteRating: "8.4",
  quality: "1080p",
  zipUrl: "/quality-not-available.html",
  poster: "https://image.tmdb.org/t/p/original/fWVSwgjpT2D78VUh6X8UBd2rorW.jpg",
  banner: "https://image.tmdb.org/t/p/original/fWVSwgjpT2D78VUh6X8UBd2rorW.jpg",
  genres: ["Animation", "Action", "Adventure"],
  languages: ["Hindi"],
  tags: ["Multi Audio", "BluRay", "BDRip"],
  description: "The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.",
  cast: [],
  isAvailable: true,
  section: "latest",
  season: 1,
  episodes: [
    { number: 1, title: "Full Movie", id: "demon-slayer-kimetsu-no-yaiba-infinity-castle-1x1", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 }
  ]
},
{
  id: "that-time-i-got-reincarnated-as-a-slime-s4",
  title: "That Time I Got Reincarnated as a Slime Season 4",
  type: "TV",
  ageRating: "PG-13",
  year: "2026",
  duration: "24m",
  tmdbRating: "8.1",
  siteRating: "8.1",
  quality: "720p",
  zipUrl: "/quality-not-available.html",
  poster: "https://image.tmdb.org/t/p/original/94MjsZUyxubodMPJdWOVkcJ0bdU.jpg",
  banner: "https://image.tmdb.org/t/p/original/94MjsZUyxubodMPJdWOVkcJ0bdU.jpg",
  genres: ["Animation", "Action", "Adventure"],
  languages: ["Hindi", "Tamil", "Telugu", "English", "Japanese"],
  tags: ["Multi Audio", "WEB-DL", "1st Dub"],
  description: "Average 37-year-old Minami Satoru dies and is reincarnated as the most unremarkable creature imaginable-a slime.",
  cast: [],
  isAvailable: true,
  section: "latest",
  season: 4,
  episodes: [
        { number: 1, title: "Episode 1", id: "that-time-i-got-reincarnated-as-a-slime-s4-1x1", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 2, title: "Episode 2", id: "that-time-i-got-reincarnated-as-a-slime-s4-1x2", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 3, title: "Episode 3", id: "that-time-i-got-reincarnated-as-a-slime-s4-1x3", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 4, title: "Episode 4", id: "that-time-i-got-reincarnated-as-a-slime-s4-1x4", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 5, title: "Episode 5", id: "that-time-i-got-reincarnated-as-a-slime-s4-1x5", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 6, title: "Episode 6", id: "that-time-i-got-reincarnated-as-a-slime-s4-1x6", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 7, title: "Episode 7", id: "that-time-i-got-reincarnated-as-a-slime-s4-1x7", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 8, title: "Episode 8", id: "that-time-i-got-reincarnated-as-a-slime-s4-1x8", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 }
  ]
},

{
  id: "daemons-of-the-shadow-realm-s1",
  title: "Daemons of the Shadow Realm Season 1",
  type: "TV",
  ageRating: "PG-13",
  year: "2026",
  duration: "24m",
  tmdbRating: "7.5",
  siteRating: "7.5",
  quality: "720p",
  zipUrl: "/quality-not-available.html",
  poster: "https://image.tmdb.org/t/p/original/i4t9z7QDNPJjg59vJunCHdh0mj2.jpg",
  banner: "https://image.tmdb.org/t/p/original/i4t9z7QDNPJjg59vJunCHdh0mj2.jpg",
  genres: ["Animation", "Anime", "Drama"],
  languages: ["Hindi", "Japanese"],
  tags: ["Multi Audio", "WEB-DL", "1st Dub"],
  description: "Daemons of the Shadow Realm follows an epic journey in a mysterious fantasy world filled with dark powers and hidden threats.",
  cast: [],
  isAvailable: true,
  section: "latest",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "daemons-of-the-shadow-realm-s1-1x1", embedType: "stream", seedViews: 0 },
    { number: 2, title: "Episode 2", id: "daemons-of-the-shadow-realm-s1-1x2", embedType: "stream", seedViews: 0 },
    { number: 3, title: "Episode 3", id: "daemons-of-the-shadow-realm-s1-1x3", embedType: "stream", seedViews: 0 },
    { number: 4, title: "Episode 4", id: "daemons-of-the-shadow-realm-s1-1x4", embedType: "stream", seedViews: 0 },
    { number: 5, title: "Episode 5", id: "daemons-of-the-shadow-realm-s1-1x5", embedType: "stream", seedViews: 0 },
    { number: 6, title: "Episode 6", id: "daemons-of-the-shadow-realm-s1-1x6", embedType: "stream", seedViews: 0 },
    { number: 7, title: "Episode 7", id: "daemons-of-the-shadow-realm-s1-1x7", embedType: "stream", seedViews: 0 },
    { number: 8, title: "Episode 8", id: "daemons-of-the-shadow-realm-s1-1x8", embedType: "stream", seedViews: 0 },
    { number: 9, title: "Episode 9", id: "daemons-of-the-shadow-realm-s1-1x9", embedType: "stream", seedViews: 0 },
    { number: 10, title: "Episode 10", id: "daemons-of-the-shadow-realm-s1-1x10", embedType: "stream", seedViews: 0 },
    { number: 11, title: "Episode 11", id: "daemons-of-the-shadow-realm-s1-1x11", embedType: "stream", seedViews: 0 },
    { number: 12, title: "Episode 12", id: "daemons-of-the-shadow-realm-s1-1x12", embedType: "stream", seedViews: 0 },
{ number: 13, title: "Episode 13", id: "daemons-of-the-shadow-realm-s1-1x13", embedType: "stream", qualities: ["480p","720p"], seedViews: 0 }
  ]
},
{
  id: "farming-life-in-another-world",
  title: "Farming Life in Another World",
  type: "TV",
  ageRating: "PG-13",
  year: "2023",
  duration: "24m",
  tmdbRating: "7.2",        // IMDb rating (tumne bola tha IMDb se lena)
  siteRating: "7.2",
  quality: "720p",
  seriesGroup: "farming-life-in-another-world",
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
  id: "farming-life-in-another-world-s2",
  title: "Farming Life in Another World (Season 2)",
  type: "TV",
  ageRating: "PG-13",
  year: "2026",
  duration: "24m",
  tmdbRating: "7.2",        // IMDb rating — same combined series entry as Season 1
  siteRating: "7.2",
  quality: "720p",
  seriesGroup: "farming-life-in-another-world",
  poster: "https://image.tmdb.org/t/p/original/zkrJW2bzwzeY0yqGaQ36rO2UBi2.jpg",
  banner: "https://image.tmdb.org/t/p/original/zkrJW2bzwzeY0yqGaQ36rO2UBi2.jpg",
  genres: ["Animation", "Romance", "Fantasy"],
  languages: ["Japanese", "English", "Hindi"],
  tags: ["Multi Audio", "WEB-DL", "1st Dub"],
  description: "When a godlike figure gives Hiraku a chance to live again, he wishes to be healthy, to live peacefully, to speak the local language, and to spend his days on an idyllic farm.",
  cast: [],
  isAvailable: true,
  section: "new",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "farming-life-in-another-world-s2-1x1", embedType: "stream", seedViews: 0 },
    { number: 2, title: "Episode 2", id: "farming-life-in-another-world-s2-1x2", embedType: "stream", seedViews: 0 },
    { number: 3, title: "Episode 3", id: "farming-life-in-another-world-s2-1x3", embedType: "stream", seedViews: 0 },
    { number: 4, title: "Episode 4", id: "farming-life-in-another-world-s2-1x4", embedType: "stream", seedViews: 0 },
    { number: 5, title: "Episode 5", id: "farming-life-in-another-world-s2-1x5", embedType: "stream", seedViews: 0 },
    { number: 6, title: "Episode 6", id: "farming-life-in-another-world-s2-1x6", embedType: "stream", seedViews: 0 },
    { number: 7, title: "Episode 7", id: "farming-life-in-another-world-s2-1x7", embedType: "stream", seedViews: 0 },
    { number: 8, title: "Episode 8", id: "farming-life-in-another-world-s2-1x8", embedType: "stream", seedViews: 0 },
    { number: 9, title: "Episode 9", id: "farming-life-in-another-world-s2-1x9", embedType: "stream", seedViews: 0 },
    { number: 10, title: "Episode 10", id: "farming-life-in-another-world-s2-1x10", embedType: "stream", seedViews: 0 },
    { number: 11, title: "Episode 11", id: "farming-life-in-another-world-s2-1x11", embedType: "stream", seedViews: 0 },
    { number: 12, title: "Episode 12", id: "farming-life-in-another-world-s2-1x12", embedType: "stream", seedViews: 0 }
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
  quality: "720p",
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
  ageRating: "PG-13",
  year: "2009",
  duration: "24m",
  tmdbRating: "N/A",
  siteRating: "N/A",
  quality: "1080p",
  zipUrl: "/quality-not-available.html",
  seriesGroup: "fullmetal-alchemist-brotherhood",
  poster: "https://image.tmdb.org/t/p/original/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
  banner: "https://image.tmdb.org/t/p/original/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
  genres: ["Animation", "Action", "Fantasy"],
  languages: ["Hindi"],
  tags: ["Multi Audio"],
  description: "Two brothers search for a Philosopher’s Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
  cast: [],
  isAvailable: true,
  section: "new",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "fullmetal-alchemist-brotherhood-1x1", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 2, title: "Episode 2", id: "fullmetal-alchemist-brotherhood-1x2", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 3, title: "Episode 3", id: "fullmetal-alchemist-brotherhood-1x3", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 4, title: "Episode 4", id: "fullmetal-alchemist-brotherhood-1x4", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 5, title: "Episode 5", id: "fullmetal-alchemist-brotherhood-1x5", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 6, title: "Episode 6", id: "fullmetal-alchemist-brotherhood-1x6", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 7, title: "Episode 7", id: "fullmetal-alchemist-brotherhood-1x7", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 8, title: "Episode 8", id: "fullmetal-alchemist-brotherhood-1x8", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 9, title: "Episode 9", id: "fullmetal-alchemist-brotherhood-1x9", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 10, title: "Episode 10", id: "fullmetal-alchemist-brotherhood-1x10", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 11, title: "Episode 11", id: "fullmetal-alchemist-brotherhood-1x11", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 12, title: "Episode 12", id: "fullmetal-alchemist-brotherhood-1x12", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 13, title: "Episode 13", id: "fullmetal-alchemist-brotherhood-1x13", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 14, title: "Episode 14", id: "fullmetal-alchemist-brotherhood-1x14", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 15, title: "Episode 15", id: "fullmetal-alchemist-brotherhood-1x15", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 16, title: "Episode 16", id: "fullmetal-alchemist-brotherhood-1x16", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 17, title: "Episode 17", id: "fullmetal-alchemist-brotherhood-1x17", embedType: "stream", qualities: ["480p","1080p"], seedViews: 0 },
    { number: 18, title: "Episode 18", id: "fullmetal-alchemist-brotherhood-1x18", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 19, title: "Episode 19", id: "fullmetal-alchemist-brotherhood-1x19", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 20, title: "Episode 20", id: "fullmetal-alchemist-brotherhood-1x20", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 21, title: "Episode 21", id: "fullmetal-alchemist-brotherhood-1x21", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 22, title: "Episode 22", id: "fullmetal-alchemist-brotherhood-1x22", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 23, title: "Episode 23", id: "fullmetal-alchemist-brotherhood-1x23", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 24, title: "Episode 24", id: "fullmetal-alchemist-brotherhood-1x24", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 27, title: "Episode 27", id: "fullmetal-alchemist-brotherhood-1x27", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 28, title: "Episode 28", id: "fullmetal-alchemist-brotherhood-1x28", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 29, title: "Episode 29", id: "fullmetal-alchemist-brotherhood-1x29", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 30, title: "Episode 30", id: "fullmetal-alchemist-brotherhood-1x30", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 31, title: "Episode 31", id: "fullmetal-alchemist-brotherhood-1x31", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 32, title: "Episode 32", id: "fullmetal-alchemist-brotherhood-1x32", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 33, title: "Episode 33", id: "fullmetal-alchemist-brotherhood-1x33", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 34, title: "Episode 34", id: "fullmetal-alchemist-brotherhood-1x34", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 35, title: "Episode 35", id: "fullmetal-alchemist-brotherhood-1x35", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 36, title: "Episode 36", id: "fullmetal-alchemist-brotherhood-1x36", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 37, title: "Episode 37", id: "fullmetal-alchemist-brotherhood-1x37", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 38, title: "Episode 38", id: "fullmetal-alchemist-brotherhood-1x38", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 39, title: "Episode 39", id: "fullmetal-alchemist-brotherhood-1x39", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 40, title: "Episode 40", id: "fullmetal-alchemist-brotherhood-1x40", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 41, title: "Episode 41", id: "fullmetal-alchemist-brotherhood-1x41", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 42, title: "Episode 42", id: "fullmetal-alchemist-brotherhood-1x42", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 43, title: "Episode 43", id: "fullmetal-alchemist-brotherhood-1x43", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 44, title: "Episode 44", id: "fullmetal-alchemist-brotherhood-1x44", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 45, title: "Episode 45", id: "fullmetal-alchemist-brotherhood-1x45", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 46, title: "Episode 46", id: "fullmetal-alchemist-brotherhood-1x46", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 47, title: "Episode 47", id: "fullmetal-alchemist-brotherhood-1x47", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 48, title: "Episode 48", id: "fullmetal-alchemist-brotherhood-1x48", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 49, title: "Episode 49", id: "fullmetal-alchemist-brotherhood-1x49", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 50, title: "Episode 50", id: "fullmetal-alchemist-brotherhood-1x50", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 51, title: "Episode 51", id: "fullmetal-alchemist-brotherhood-1x51", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 52, title: "Episode 52", id: "fullmetal-alchemist-brotherhood-1x52", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 53, title: "Episode 53", id: "fullmetal-alchemist-brotherhood-1x53", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 54, title: "Episode 54", id: "fullmetal-alchemist-brotherhood-1x54", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 55, title: "Episode 55", id: "fullmetal-alchemist-brotherhood-1x55", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 56, title: "Episode 56", id: "fullmetal-alchemist-brotherhood-1x56", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 57, title: "Episode 57", id: "fullmetal-alchemist-brotherhood-1x57", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 58, title: "Episode 58", id: "fullmetal-alchemist-brotherhood-1x58", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 59, title: "Episode 59", id: "fullmetal-alchemist-brotherhood-1x59", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 60, title: "Episode 60", id: "fullmetal-alchemist-brotherhood-1x60", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 }
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
    quality: "1080p",
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
  },

{
  id: "solo-leveling",
  title: "Solo Leveling",
  type: "TV",
  ageRating: "PG-13",
  year: "2024",
  duration: "24m",
  tmdbRating: "8.5",
  siteRating: "8.5",
  quality: "1080p",
  zipUrl: "/quality-not-available.html",
  seriesGroup: "solo-leveling",
  poster: "https://i.imgur.com/HPAScdZ.jpg",
  banner: "https://i.imgur.com/HPAScdZ.jpg",
  genres: ["Animation", "Action", "Adventure"],
  languages: ["Hindi"],
  tags: ["Multi Audio", "WEB-DL"],
  description: "In a world of gifted hunters and monsters, a weak hunter Sung Jinwoo gains extraordinary powers through a mysterious program, leading him to become one of the strongest hunters and conquering even the strongest dungeons.",
  cast: [],
  isAvailable: true,
  section: "latest",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "solo-leveling-1x1", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 2, title: "Episode 2", id: "solo-leveling-1x2", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 3, title: "Episode 3", id: "solo-leveling-1x3", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 4, title: "Episode 4", id: "solo-leveling-1x4", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 5, title: "Episode 5", id: "solo-leveling-1x5", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 6, title: "Episode 6", id: "solo-leveling-1x6", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 7, title: "Episode 7", id: "solo-leveling-1x7", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 8, title: "Episode 8", id: "solo-leveling-1x8", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 9, title: "Episode 9", id: "solo-leveling-1x9", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 10, title: "Episode 10", id: "solo-leveling-1x10", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 11, title: "Episode 11", id: "solo-leveling-1x11", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 12, title: "Episode 12", id: "solo-leveling-1x12", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 }
  ]
},
{
  id: "solo-leveling-s2",
  title: "Solo Leveling Season 2",
  type: "TV",
  ageRating: "PG-13",
  year: "2025",
  duration: "24m",
  tmdbRating: "8.5",
  siteRating: "8.5",
  quality: "1080p",
  zipUrl: "/quality-not-available.html",
  seriesGroup: "solo-leveling",
  poster: "https://image.tmdb.org/t/p/original/rsOApVLbIQEcNkqSlOxNPyg3FyI.jpg",
  banner: "https://image.tmdb.org/t/p/original/rsOApVLbIQEcNkqSlOxNPyg3FyI.jpg",
  genres: ["Animation", "Action", "Adventure"],
  languages: ["Hindi"],
  tags: ["Multi Audio", "WEB-DL"],
  description: "In a world of gifted hunters and monsters, a weak hunter Sung Jinwoo gains extraordinary powers through a mysterious program, leading him to become one of the strongest hunters and conquering even the strongest dungeons.",
  cast: [],
  isAvailable: true,
  section: "latest",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "solo-leveling-s2-1x1", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 2, title: "Episode 2", id: "solo-leveling-s2-1x2", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 3, title: "Episode 3", id: "solo-leveling-s2-1x3", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 4, title: "Episode 4", id: "solo-leveling-s2-1x4", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 5, title: "Episode 5", id: "solo-leveling-s2-1x5", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 6, title: "Episode 6", id: "solo-leveling-s2-1x6", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 7, title: "Episode 7", id: "solo-leveling-s2-1x7", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 8, title: "Episode 8", id: "solo-leveling-s2-1x8", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 9, title: "Episode 9", id: "solo-leveling-s2-1x9", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 10, title: "Episode 10", id: "solo-leveling-s2-1x10", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 11, title: "Episode 11", id: "solo-leveling-s2-1x11", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 12, title: "Episode 12", id: "solo-leveling-s2-1x12", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 13, title: "Episode 13", id: "solo-leveling-s2-1x13", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 }
  ]
},
{
  id: "yowayowa-sensei",
  title: "Yowayowa Sensei",
  type: "TV",
  ageRating: "18+",
  year: "2026",
  duration: "24m",
  tmdbRating: "N/A",
  siteRating: "N/A",
  quality: "1080p",
  zipUrl: "/quality-not-available.html",
  poster: "https://image.tmdb.org/t/p/original/1WDp9RjN7odYw490WLNw79iceLa.jpg",
  banner: "https://image.tmdb.org/t/p/original/1WDp9RjN7odYw490WLNw79iceLa.jpg",
  genres: ["Animation", "Comedy", "Adult"],
  languages: ["Hindi"],
  tags: ["Multi Audio", "WEB-DL", "Uncensored"],
  description: "The comedic days of a nervous teacher who everyone sees as fearsome.",
  cast: [],
  isAvailable: true,
  section: "new",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "yowayowa-sensei-1x1", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 2, title: "Episode 2", id: "yowayowa-sensei-1x2", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 3, title: "Episode 3", id: "yowayowa-sensei-1x3", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 4, title: "Episode 4", id: "yowayowa-sensei-1x4", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 5, title: "Episode 5", id: "yowayowa-sensei-1x5", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 6, title: "Episode 6", id: "yowayowa-sensei-1x6", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 7, title: "Episode 7", id: "yowayowa-sensei-1x7", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 8, title: "Episode 8", id: "yowayowa-sensei-1x8", embedType: "stream", qualities: ["1080p"], seedViews: 0 }
  ]
},
{
  id: "demon-slayer-kimetsu-no-yaiba",
  title: "Demon Slayer Kimetsu no Yaiba",
  type: "TV",
  ageRating: "PG-13",
  year: "2019",
  duration: "25m",
  tmdbRating: "8.6",
  siteRating: "8.6",
  quality: "1080p",
  zipUrl: "/quality-not-available.html",
  poster: "https://image.tmdb.org/t/p/original/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
  banner: "https://image.tmdb.org/t/p/original/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
  genres: ["Animation", "Action", "Adventure"],
  languages: ["Hindi"],
  tags: ["Multi Audio", "BluRay"],
  description: "A family is attacked by demons and only two members survive, Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
  cast: [],
  isAvailable: true,
  section: "new",
  season: 1,
  episodes: [
    { number: 1, title: "Episode 1", id: "demon-slayer-kimetsu-no-yaiba-1x1", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 2, title: "Episode 2", id: "demon-slayer-kimetsu-no-yaiba-1x2", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 3, title: "Episode 3", id: "demon-slayer-kimetsu-no-yaiba-1x3", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 4, title: "Episode 4", id: "demon-slayer-kimetsu-no-yaiba-1x4", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 5, title: "Episode 5", id: "demon-slayer-kimetsu-no-yaiba-1x5", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 6, title: "Episode 6", id: "demon-slayer-kimetsu-no-yaiba-1x6", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 7, title: "Episode 7", id: "demon-slayer-kimetsu-no-yaiba-1x7", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 8, title: "Episode 8", id: "demon-slayer-kimetsu-no-yaiba-1x8", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 9, title: "Episode 9", id: "demon-slayer-kimetsu-no-yaiba-1x9", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 10, title: "Episode 10", id: "demon-slayer-kimetsu-no-yaiba-1x10", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 11, title: "Episode 11", id: "demon-slayer-kimetsu-no-yaiba-1x11", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 12, title: "Episode 12", id: "demon-slayer-kimetsu-no-yaiba-1x12", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 13, title: "Episode 13", id: "demon-slayer-kimetsu-no-yaiba-1x13", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 14, title: "Episode 14", id: "demon-slayer-kimetsu-no-yaiba-1x14", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 15, title: "Episode 15", id: "demon-slayer-kimetsu-no-yaiba-1x15", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 16, title: "Episode 16", id: "demon-slayer-kimetsu-no-yaiba-1x16", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 17, title: "Episode 17", id: "demon-slayer-kimetsu-no-yaiba-1x17", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 18, title: "Episode 18", id: "demon-slayer-kimetsu-no-yaiba-1x18", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 19, title: "Episode 19", id: "demon-slayer-kimetsu-no-yaiba-1x19", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 20, title: "Episode 20", id: "demon-slayer-kimetsu-no-yaiba-1x20", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 21, title: "Episode 21", id: "demon-slayer-kimetsu-no-yaiba-1x21", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 22, title: "Episode 22", id: "demon-slayer-kimetsu-no-yaiba-1x22", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 23, title: "Episode 23", id: "demon-slayer-kimetsu-no-yaiba-1x23", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 24, title: "Episode 24", id: "demon-slayer-kimetsu-no-yaiba-1x24", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 25, title: "Episode 25", id: "demon-slayer-kimetsu-no-yaiba-1x25", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 },
    { number: 26, title: "Episode 26", id: "demon-slayer-kimetsu-no-yaiba-1x26", embedType: "stream", qualities: ["480p","720p","1080p"], seedViews: 0 }
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

/** "Farming Life in Another World (Season 2)" -> "Farming Life in Another
 * World Season 2" — strips a single trailing "(...)" without touching
 * anything else in the title. Used everywhere a title is displayed. */
function cleanTitle(title) {
  return String(title || "").replace(/\s*\(([^)]+)\)\s*$/, " $1").trim();
}

/** Falls back to the anime's own id when seriesGroup isn't set, so an
 * un-grouped title just never matches anything else (safe default). */
function getSeriesGroup(anime) {
  return anime.seriesGroup || anime.id;
}

// Node (build script) needs to `require` this file; browsers just use the
// globals above. This export is a no-op in the browser.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ANIME_DATABASE, findAnimeById, formatViews, cleanTitle, getSeriesGroup };
}
