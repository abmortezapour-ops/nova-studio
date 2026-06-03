const projects = [
    { 
        title: "E-Commerce", 
        desc: "Online Store Concept", 
        img: "images/saas landing page concept.png",
        link: "project1.pdf" // آدرس فایل PDF یا صفحه پروژه
    },
    { 
        title: "Analytics Tool", 
        desc: "Data Visualization", 
        img: "images/TT Interphases.png",
        link: "project2.pdf"
    },
    { 
        title: "Digital Marketing", 
        desc: "Marketing Automation", 
        img: "images/Launch smarter. Grow faster..png",
        link: "project3.pdf"
    }
];

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = ""; 

    projects.forEach(p => {
        // استفاده از encodeURIComponent برای حل مشکل فاصله و کاراکترهای خاص در نام فایل
        const safePath = p.img.split('/').map(part => encodeURIComponent(part)).join('/');
        
        const card = document.createElement('a');
        card.href = p.link || "#";
        card.className = "portfolio-card";
        card.target = "_blank"; // باز شدن PDF در تب جدید

        card.innerHTML = `
            <div class="card-content">
                <img src="${safePath}" alt="${p.title}" class="portfolio-img">
                <div class="portfolio-overlay">
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <div class="pdf-button">View Case Study (PDF)</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    const loader = document.querySelector('.loading-screen');
    if (loader) loader.style.display = 'none';
}

window.addEventListener('load', renderPortfolio);
