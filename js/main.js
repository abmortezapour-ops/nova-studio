const projects = [
    { title: "E-Commerce Platform", desc: "Full-stack online store", img: "images/saas-concept.png" }, // اصلاح شد
    { title: "Analytics Dashboard", desc: "Real-time data visualization", img: "images/tt.png", pdf: "files/Artificial-Intelligence-The-Future-of-Technology.pdf" },
    { title: "SaaS Landing Page", desc: "Modern landing page", img: "images/saas-2.png" }, // اصلاح شد
    { title: "Startup Launch Page", desc: "High-converting page", img: "images/marketing.png" }, // اصلاح شد
    { title: "Real Estate Portal", desc: "Property listing platform", img: "images/timeless.png", pdf: "files/Timeless-Value.pdf" },
    { title: "Marketing Tool", desc: "Growth automation", img: "images/logo.png" }, // اصلاح شد
    { title: "Brand Identity", desc: "Logo design system", img: "images/copilot.png" }, // اصلاح شد
    { title: "Pet Care App", desc: "Smart health tracking", img: "images/saas-concept.png" } // تکرار برای پر شدن گرید
];

function loadProjects() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = projects.map(project => `
        <article class="portfolio-card">
            <img src="${project.img}" 
                 alt="${project.title}" 
                 class="portfolio-img" 
                 onerror="this.src='https://via.placeholder.com/400x250?text=Image+Not+Found'">
            <div class="portfolio-overlay">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                ${project.pdf ? `<a href="${project.pdf}" target="_blank" class="pdf-btn">View PDF</a>` : ''}
            </div>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadProjects);
