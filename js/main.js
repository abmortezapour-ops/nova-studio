const projects = [
    { title: "E-Commerce", desc: "Online Store", img: "images/saas-concept.png" },
    { title: "Analytics", desc: "Data Viz", img: "images/tt.png", pdf: "files/Artificial-Intelligence-The-Future-of-Technology.pdf" },
    { title: "Landing Page", desc: "Modern UI", img: "images/saas-2.png" },
    { title: "Marketing Tool", desc: "Automation", img: "images/marketing.png" },
    { title: "Real Estate", desc: "Property Portal", img: "images/timeless.png", pdf: "files/Timeless-Value.pdf" },
    { title: "Brand Identity", desc: "Logo System", img: "images/logo.png" },
    { title: "Pet Care", desc: "Smart App", img: "images/copilot.png" },
    { title: "Launch Page", desc: "Startup", img: "images/saas-concept.png" }
];

function loadProjects() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = projects.map(p => `
        <article class="portfolio-card">
            <img src="${p.img}" alt="${p.title}" class="portfolio-img" onerror="this.src='https://via.placeholder.com/400x200?text=Check+Image+Name'">
            <div class="portfolio-overlay">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                ${p.pdf ? `<a href="${p.pdf}" target="_blank" class="pdf-btn">View PDF</a>` : ''}
            </div>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadProjects);
