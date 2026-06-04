const projects = [
    { title: "E-Commerce Platform", category: "Web Development", image: "images/p1.png" },
    { title: "Mobile Banking App", category: "UI/UX Design", image: "images/p2.png" },
    { title: "Social Media Dashboard", category: "Web App", image: "images/p3.png" },
    { title: "Fitness Tracking App", category: "Mobile App", image: "images/p4.png" },
    { title: "NFT Marketplace", category: "Blockchain", image: "images/p5.png" },
    { title: "Travel Booking Site", category: "Web Design", image: "images/p6.png" }
];

const portfolioGrid = document.getElementById('portfolio-grid');

function loadProjects() {
    if(!portfolioGrid) return; // جلوگیری از خطا در صورت نبودن المان
    
    portfolioGrid.innerHTML = projects.map(project => `
        <div class="portfolio-card">
            <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">
            <div class="portfolio-overlay">
                <p style="color: #ff007f; font-size: 0.8rem; font-weight: bold; text-transform: uppercase;">${project.category}</p>
                <h3 style="margin: 5px 0 0 0; color: white; font-size: 1.4rem;">${project.title}</h3>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadProjects);
