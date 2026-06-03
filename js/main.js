const projects = [
    { title: "Project 1", desc: "Design Concept", img: "images/p1.png", link: "p1.pdf" },
    { title: "Project 2", desc: "UI/UX Design", img: "images/p2.png", link: "p2.pdf" },
    { title: "Project 3", desc: "Branding", img: "images/p3.png", link: "p3.pdf" },
    { title: "Project 4", desc: "Marketing", img: "images/p4.png", link: "p4.pdf" },
    { title: "Project 5", desc: "Web App", img: "images/p5.png", link: "p5.pdf" },
    { title: "Project 6", desc: "Interface", img: "images/p6.png", link: "p6.pdf" },
    { title: "Project 7", desc: "Visual Identity", img: "images/p7.png", link: "p7.pdf" },
    { title: "Project 8", desc: "SaaS Landing", img: "images/p8.png", link: "p8.pdf" }
];

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = ""; 

    projects.forEach(p => {
        const card = document.createElement('a');
        card.href = p.link || "#";
        card.className = "portfolio-card";
        card.target = "_blank";

        card.innerHTML = `
            <div class="card-content">
                <img src="${p.img}" alt="${p.title}" class="portfolio-img">
                <div class="portfolio-overlay">
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <div class="pdf-button">View PDF</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // مخفی کردن لودینگ بعد از رندر شدن کارت‌ها
    const loader = document.querySelector('.loading-screen');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }
}

window.addEventListener('load', renderPortfolio);
