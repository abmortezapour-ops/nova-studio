const projects = [
    { 
        title: "E-Commerce", 
        desc: "Online Store Concept", 
        img: "images/saas landing page concept.png" // نام کامل و اصلی را اینجا بنویسید
    },
    { 
        title: "Analytics Tool", 
        desc: "Data Visualization", 
        img: "images/TT Interphases.png" 
    },
    { 
        title: "Digital Marketing", 
        desc: "Marketing Automation", 
        img: "images/Launch smarter. Grow faster..png" 
    },
    { 
        title: "Real Estate", 
        desc: "Property Management", 
        img: "images/Timeless Value.png" 
    },
    { 
        title: "Pet Care App", 
        desc: "Mobile Application", 
        img: "images/Copilot_20260519_032312.png" 
    },
    { 
        title: "SaaS Dashboard", 
        desc: "Modern UI System", 
        img: "images/Launchory — SaaS Landing Page Concept.png" 
    }
];

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    let html = "";
    projects.forEach(p => {
        // استفاده از encodeURIComponent برای مدیریت فاصله‌ها در نام فایل
        const safePath = p.img.split('/').map(part => encodeURIComponent(part)).join('/');
        
        html += `
        <article class="portfolio-card">
            <img src="${safePath}" alt="${p.title}" class="portfolio-img">
            <div class="portfolio-overlay">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        </article>`;
    });

    grid.innerHTML = html;

    const loader = document.querySelector('.loading-screen');
    if (loader) loader.style.display = 'none';
}

window.addEventListener('load', renderPortfolio);
