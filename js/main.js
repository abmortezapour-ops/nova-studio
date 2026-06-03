const projects = [
    { title: "E-Commerce Platform", desc: "Full-stack online store", img: "images/saas-1.png" },
    { title: "Analytics Dashboard", desc: "Real-time data visualization", img: "images/tt.png", pdf: "files/Artificial-Intelligence-The-Future-of-Technology.pdf" },
    { title: "SaaS Landing Page", desc: "Modern landing page", img: "images/saas-concept.png" },
    { title: "Startup Launch Page", desc: "High-converting page", img: "images/saas-2.png" },
    { title: "Real Estate Portal", desc: "Property listing platform", img: "images/timeless.png", pdf: "files/Timeless-Value.pdf" },
    { title: "Marketing Tool", desc: "Growth automation", img: "images/marketing.png" },
    { title: "Brand Identity", desc: "Logo design system", img: "images/logo.png" },
    { title: "Pet Care App", desc: "Smart health tracking", img: "images/copilot.png" }
];

const portfolioGrid = document.getElementById('portfolio-grid');

function loadProjects() {
    portfolioGrid.innerHTML = projects.map(project => `
        <article class="portfolio-card">
            <img src="${project.img}" alt="${project.title}" class="portfolio-img">
            <div class="portfolio-overlay">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                ${project.pdf ? `<a href="${project.pdf}" target="_blank" class="pdf-btn">View PDF</a>` : ''}
            </div>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadProjects);
