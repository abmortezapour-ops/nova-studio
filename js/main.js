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

function loadProjects() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = projects.map(project => {
        // ایجاد مسیر نسبی برای گیت‌هاب (حذف اسلش اول در صورت وجود)
        const imagePath = project.img.startsWith('/') ? project.img.substring(1) : project.img;
        
        return `
            <article class="portfolio-card">
                <img src="${imagePath}" 
                     alt="${project.title}" 
                     class="portfolio-img" 
                     onerror="this.src='https://via.placeholder.com/400x250?text=Image+Not+Found'">
                <div class="portfolio-overlay">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    ${project.pdf ? `<a href="${project.pdf}" target="_blank" class="pdf-btn">View PDF</a>` : ''}
                </div>
            </article>
        `;
    }).join('');
}

// اطمینان از اجرای کد بعد از لود شدن کامل صفحه
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProjects);
} else {
    loadProjects();
}
