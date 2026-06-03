const projects = [
    { title: "E-Commerce", desc: "Online Store Concept", img: "images/saas-concept.png" },
    { title: "Analytics Tool", desc: "Data Visualization", img: "images/tt.png", pdf: "files/Artificial-Intelligence-The-Future-of-Technology.pdf" },
    { title: "Digital Marketing", desc: "Marketing Automation", img: "images/marketing.png" },
    { title: "Real Estate", desc: "Property Management", img: "images/timeless.png", pdf: "files/Timeless-Value.pdf" },
    { title: "Pet Care App", desc: "Mobile Application", img: "images/copilot.png" },
    { title: "SaaS Dashboard", desc: "Modern UI System", img: "images/saas-2.png" }
];

// استفاده از این تابع باعث می‌شود به محض آماده شدن ساختار، کارت‌ها رندر شوند
function renderProjects() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    let html = "";
    projects.forEach(p => {
        const pdfLink = p.pdf ? `<a href="${p.pdf}" target="_blank" class="pdf-btn">View PDF</a>` : "";
        html += `
        <article class="portfolio-card">
            <img src="./${p.img}" alt="${p.title}" class="portfolio-img" onerror="this.src='https://via.placeholder.com/400x250?text=Image+Not+Found'">
            <div class="portfolio-overlay">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                ${pdfLink}
            </div>
        </article>`;
    });

    grid.innerHTML = html;
    
    // مخفی کردن لودینگ اگر وجود داشته باشد
    const loader = document.querySelector('.loading-screen');
    if (loader) {
        loader.style.display = 'none';
    }
}

// اجرا در هر دو حالت برای اطمینان ۱۰۰٪
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
} else {
    renderProjects();
}
