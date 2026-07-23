// generate-pages.js

// Example Database / JSON Array of all your Animes
const animeDatabase = [
    {
        id: "chainsmoker-cat-s01e01",
        title: "Chainsmoker Cat",
        isAvailable: true // You uploaded this
    },
    {
        id: "one-piece-e1071",
        title: "One Piece",
        isAvailable: false // You haven't added this yet
    }
];

/**
 * Generator Function
 * Use this to extract HTML for your other pages (Home page, list pages, etc.)
 */
function generateWatchButton(animeData) {
    // Check if the anime is marked as available in your database
    if (animeData.isAvailable) {
        return `
            <a class="watch-btn" href="/watch/index.html?id=${animeData.id}">
                ▶ Watch Online
            </a>
        `;
    } else {
        // Fallback for unavailable episodes
        return `
            <a class="watch-btn disabled-btn" href="/this-ep-not-available.html">
                ▶ Watch Online
            </a>
        `;
    }
}

// Example usage to generate HTML list:
function generateAllButtonsHTML() {
    let htmlOutput = "";
    animeDatabase.forEach(anime => {
        htmlOutput += `<div class="anime-card">
            <h3>${anime.title}</h3>
            ${generateWatchButton(anime)}
        </div>\n`;
    });
    return htmlOutput;
}

// console.log(generateAllButtonsHTML());
