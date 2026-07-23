// Remove Skeleton and load data
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("skeleton-loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    // Populate UI with WATCH_DATA
    document.getElementById("title").innerText = WATCH_DATA.title;
    document.getElementById("rating").innerText = WATCH_DATA.rating;
    document.getElementById("genres").innerText = WATCH_DATA.genres.join(" • ");
    document.getElementById("languages").innerText = WATCH_DATA.languages.join(" | ");
    document.getElementById("description").innerText = WATCH_DATA.description;
    document.getElementById("episodeTitle").innerText = WATCH_DATA.episode;
    document.getElementById("year").innerText = WATCH_DATA.year;
    document.getElementById("runtime").innerText = WATCH_DATA.runtime;
    document.getElementById("platform").innerText = WATCH_DATA.platform;
    document.getElementById("downloadBtn").href = WATCH_DATA.download;
    
    if(WATCH_DATA.poster) document.getElementById("poster").src = WATCH_DATA.poster;
    if(WATCH_DATA.banner) document.getElementById("heroBanner").style.backgroundImage = `url(${WATCH_DATA.banner})`;

    initBitmovinPlayer();
});

function initBitmovinPlayer() {
    const playerConfig = {
        key: "ca3325d1-4688-4f50-925f-ff6b003a41bc",
        playback: {
            autoplay: true,
            muted: false
        },
        ui: {
            playbackSpeedSelectionEnabled: true // Playback Speed
        },
        cast: {
            enable: true // Chromecast Support
        },
        remotecontrol: {
            type: 'apple' // AirPlay Support
        }
    };

    const container = document.getElementById("bitmovin-player");
    const player = new bitmovin.player.Player(container, playerConfig);

    const source = {
        title: WATCH_DATA.title,
        description: WATCH_DATA.episode,
        hls: WATCH_DATA.video, // or dash: WATCH_DATA.video
    };

    player.load(source).then(() => {
        console.log("Player successfully loaded.");

        // Resume Playback Logic
        const savedTime = localStorage.getItem(`resume_${WATCH_DATA.id}`);
        if (savedTime && savedTime > 0) {
            player.seek(parseFloat(savedTime));
        }

        // Save progress every 5 seconds for resume playback
        player.on(bitmovin.player.PlayerEvent.TimeChanged, (event) => {
            if (Math.floor(event.time) % 5 === 0) {
                localStorage.setItem(`resume_${WATCH_DATA.id}`, event.time);
            }
        });

    }).catch((error) => {
        console.error("Error loading video", error);
        container.innerHTML = `<div class="error-msg">Error loading video. Please try again.</div>`;
    });
}
