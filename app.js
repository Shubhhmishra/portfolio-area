// 1. Logic to fetch your content from the JSON file
async function loadData() {
    try {
        const response = await fetch('./content.json');
        if (!response.ok) throw new Error("Could not load content.json");
        return await response.json();
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

// 2. The main initialization function (Only one exists now!)
async function initApp() {
    console.log("App is initializing...");

    // Wait for the data to load
    const SITE_DATA = await loadData();

    if (SITE_DATA) {
        // Now call your render functions using the loaded data
        renderAchievements(SITE_DATA.achievements);
        renderProjects(SITE_DATA.projects);
        renderEditing(SITE_DATA.editing);
        renderOrbit(SITE_DATA.videos);
    }
}

// 3. Logic to populate 3D Orbit
function renderOrbit(videos) {
    if (!videos) return;
    videos.forEach((video, index) => {
        // Logic for your 3D meshes goes here
        console.log("Rendering video mesh:", video.title);
    });
}

// 4. Run the app once the page is fully loaded
document.addEventListener('DOMContentLoaded', initApp);