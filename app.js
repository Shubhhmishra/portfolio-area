// app.js
import { SITE_DATA } from './data.js';

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