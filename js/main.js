const projects = [
    { title: "Project One", category: "Production", img: "images/1.jpg" },
    { title: "Project Two", category: "Digital", img: "images/2.jpg" },
    { title: "Project Three", category: "Creative", img: "images/3.jpg" },
    { title: "Project Four", category: "Motion", img: "images/4.jpg" },
    { title: "Project Five", category: "Branding", img: "images/5.jpg" },
    { title: "Project Six", category: "Web Design", img: "images/6.jpg" },
    { title: "Project Seven", category: "UI/UX", img: "images/7.jpg" },
    { title: "Project Eight", category: "Video", img: "images/8.jpg" }
];

const portfolioGrid = document.getElementById('portfolio-grid');

function loadProjects() {
    if(!portfolioGrid) return;
    
    portfolioGrid.innerHTML = projects.map(project => `
        <div class="portfolio-card">
            <img src="${project.img}" onerror="this.src='https://via.placeholder.com/400x500/111/fff?text=Nova+Studio'" alt="${project.title}">
            <div class="portfolio-overlay">
                <p style="color: #6c4cff; font-weight: bold; margin-bottom: 5px;">${project.category}</p>
                <h3 style="font-size: 24px;">${project.title}</h3>
                <a href="#" class="view-btn" style="color: white; text-decoration: none; margin-top: 15px; font-size: 14px; border-bottom: 1px solid #6c4cff; align-self: flex-start;">View Project</a>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadProjects);
