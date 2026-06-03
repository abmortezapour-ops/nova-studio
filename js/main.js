const projects = [
    { title: "E-Commerce", desc: "Online Store Concept", img: "images/saas-landing-page-concept.png" },
    { title: "Analytics Tool", desc: "Data Visualization", img: "images/tt.png", pdf: "files/Artificial-Intelligence-The-Future-of-Technology.pdf" },
    { title: "Digital Marketing", desc: "Marketing Automation", img: "images/marketing.png" },
    { title: "Real Estate", desc: "Property Management", img: "images/timeless.png", pdf: "files/Timeless-Value.pdf" },
    { title: "Pet Care App", desc: "Mobile Application", img: "images/copilot.png" },
    { title: "SaaS Dashboard", desc: "Modern UI System", img: "images/saas-2.png" }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = projects.map(p => `
        <article class="portfolio-card">
            <img src="${p.img}" alt="${p.title}" class="portfolio-img" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/400x220?text=Image+Not+Found';">
            <div class="portfolio-overlay">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                ${p.pdf ? `<a href="${p.pdf}" target="_blank" class="pdf-btn">View PDF</a>` : ''}
            </div>
        </article>
    `).join('');
});

