// لیست پروژه‌ها با آدرس صحیح پوشه images
const projects = [
    { title: "E-Commerce", desc: "Online Store Concept", img: "images/saas-concept.png" },
    { title: "Analytics Tool", desc: "Data Visualization", img: "images/tt.png" },
    { title: "Digital Marketing", desc: "Marketing Automation", img: "images/marketing.png" },
    { title: "Real Estate", desc: "Property Management", img: "images/timeless.png" },
    { title: "Pet Care App", desc: "Mobile Application", img: "images/copilot.png" },
    { title: "SaaS Dashboard", desc: "Modern UI System", img: "images/saas-2.png" }
];

function renderPortfolio() {
    console.log("شروع ساخت پورتفولیو...");
    const grid = document.getElementById('portfolio-grid');
    
    if (!grid) {
        console.error("خطا: portfolio-grid پیدا نشد!");
        return;
    }

    let html = "";
    projects.forEach(p => {
        html += `
        <article class="portfolio-card" style="border: 1px solid #333; padding: 10px; border-radius: 10px; background: rgba(255,255,255,0.05);">
            <img src="./${p.img}" alt="${p.title}" style="width: 100%; border-radius: 5px;" onerror="this.src='https://via.placeholder.com/400x250?text=Image+Not+Found'">
            <div class="portfolio-info" style="margin-top: 10px;">
                <h3 style="color: #ff00ff;">${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        </article>`;
    });

    grid.innerHTML = html;
    console.log("پورتفولیو با موفقیت ساخته شد.");

    // حذف اجباری لودینگ
    const loader = document.getElementById('loading-screen') || document.querySelector('.loading-screen');
    if (loader) {
        loader.remove(); // حذف کامل از صفحه
    }
}

// اجرای اسکریپت به محض لود شدن
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    renderPortfolio();
} else {
    window.addEventListener('DOMContentLoaded', renderPortfolio);
}
