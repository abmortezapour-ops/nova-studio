const projects = [
    { title: "Creative Design", category: "Branding", img: "images/p1.png" },
    { title: "Motion Graphics", category: "Video", img: "images/p2.png" },
    { title: "Web Development", category: "Digital", img: "images/p3.png" },
    { title: "Social Media", category: "Marketing", img: "images/p4.png" },
    { title: "UI/UX Design", category: "App Design", img: "images/p5.png" },
    { title: "Content Creation", category: "Creative", img: "images/p6.png" },
    { title: "Photography", category: "Production", img: "images/p7.png" },
    { title: "Studio Work", category: "Art", img: "images/p8.png" }
];

const portfolioGrid = document.getElementById('portfolio-grid');

function loadProjects() {
    if(!portfolioGrid) return;
    
    portfolioGrid.innerHTML = projects.map(project => `
        <div class="portfolio-card">
            <img src="${project.img}" onerror="this.src='https://via.placeholder.com/400x500/111/fff?text=Loading...'" alt="${project.title}">
            <div class="portfolio-overlay">
                <p style="color: #6c4cff; font-weight: bold; margin-bottom: 5px;">${project.category}</p>
                <h3 style="font-size: 24px; color: white;">${project.title}</h3>
                <a href="#" class="view-btn" style="color: white; text-decoration: none; margin-top: 15px; font-size: 14px; border-bottom: 1px solid #6c4cff; align-self: flex-start;">View Project</a>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadProjects);
