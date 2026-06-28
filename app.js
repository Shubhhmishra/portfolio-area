// 1. Fetch data
async function loadData() {
    const response = await fetch('./content.json');
    return await response.json();
}

// 2. Render Functions
function renderAchievements(achievements) {
    const container = document.getElementById('ach-grid');
    container.innerHTML = achievements.map(a => `
        <div class="glass">
            <h3>${a.title}</h3>
            <p>${a.blurb}</p>
        </div>
    `).join('');
}

function renderProjects(projects) {
    const container = document.getElementById('project-grid');
    container.innerHTML = projects.map(p => `
        <div class="glass">
            <h3>${p.name}</h3>
            <p>${p.blurb}</p>
            <small>Stack: ${p.stack.join(', ')}</small>
        </div>
    `).join('');
}

function renderEditing(editing) {
    const container = document.getElementById('editing-grid');
    container.innerHTML = editing.map(e => `
        <div class="glass">
            <h3>${e.title}</h3>
            <p>${e.blurb}</p>
        </div>
    `).join('');
}

// 3. Main initialization
async function initApp() {
    const SITE_DATA = await loadData();
    renderAchievements(SITE_DATA.achievements);
    renderProjects(SITE_DATA.projects);
    renderEditing(SITE_DATA.editing);
}

document.addEventListener('DOMContentLoaded', initApp);