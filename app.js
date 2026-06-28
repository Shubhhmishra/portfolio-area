// app.js
fetch('./content.json')

function initApp() {
    renderAchievements(SITE_DATA.achievements);
    renderProjects(SITE_DATA.projects);
    renderEditing(SITE_DATA.editing);
}

// Add logic to populate 3D Orbit with video thumbnails
function renderOrbit() {
    // Logic to loop through SITE_DATA and create 3D meshes
}

document.addEventListener('DOMContentLoaded', initApp);

// Change your app.js to fetch the JSON file
async function loadData() {
    const response = await fetch('./content.json');
    const data = await response.json();
    return data;
}

async function initApp() {
    const SITE_DATA = await loadData(); // Wait for content.json to load
    renderAchievements(SITE_DATA.achievements);
    renderProjects(SITE_DATA.projects);
    renderEditing(SITE_DATA.editing);
    renderOrbit(SITE_DATA.videos); // Call your 3D logic
}

function renderOrbit(videos) {
    videos.forEach((video, index) => {
        // 1. Create a plane/geometry
        // 2. Load the video thumbnail as a Texture
        // 3. Position it in the orbit scene based on 'index'
    });
}