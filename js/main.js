const projects = [
    { title: "E-Commerce", desc: "Online Store Concept", img: "images/saas-concept.png" },
    { title: "Analytics Tool", desc: "Data Visualization", img: "images/tt.png" },
    { title: "Digital Marketing", desc: "Marketing Automation", img: "images/marketing.png" },
    { title: "Real Estate", desc: "Property Management", img: "images/timeless.png" },
    { title: "Pet Care App", desc: "Mobile Application", img: "images/copilot.png" },
    { title: "SaaS Dashboard", desc: "Modern UI System", img: "images/saas-2.png" }
];

function init() {
    const grid = document.getElementById('portfolio-grid');
    
    if (!grid) {
        console.error("خطا: المان portfolio-grid پیدا نشد! مطمئن شوید در HTML وجود دارد.");
        return;
    }

    let html = "";
    projects.forEach(p => {
        html += `
        <article class="portfolio-card">
            <img src="./${p.img}" alt="${p.title}" class="portfolio-img" onerror="this.src='https://via.placeholder.com/400x250?text=Image+Error'">
            <div class="portfolio-overlay">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        </article>`;
    });

    grid.innerHTML = html;
    console.log("کارت‌ها با موفقیت رندر شدند.");

    // حذف لودینگ
    const loader = document.querySelector('.loading-screen');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }
}

// اجرای مطمئن
window.addEventListener('load', init);
