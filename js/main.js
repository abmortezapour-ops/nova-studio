const projects = [
    { 
        title: "E-Commerce", 
        desc: "Online Store Concept", 
        img: "images/saas landing page concept.png",
        link: "project1.html" // نام فایل صفحه پروژه شما
    },
    { 
        title: "Analytics Tool", 
        desc: "Data Visualization", 
        img: "images/TT Interphases.png",
        link: "project2.html"
    },
    { 
        title: "Digital Marketing", 
        desc: "Marketing Automation", 
        img: "images/Launch smarter. Grow faster..png",
        link: "project3.html"
    }
    // می‌توانید بقیه را هم اضافه کنید
];

function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    grid.innerHTML = ""; // پاکسازی محتوای قبلی

    projects.forEach(p => {
        const safePath = encodeURI(p.img);
        
        // ایجاد کارت به صورت یک لینک (Anchor Tag)
        const card = document.createElement('a');
        card.href = p.link || "#";
        card.className = "portfolio-card";
        card.style.display = "block"; // برای جلوگیری از به هم ریختگی
        card.style.textDecoration = "none";

        card.innerHTML = `
            <div class="card-content">
                <img src="${safePath}" alt="${p.title}" class="portfolio-img" 
                     onerror="this.src='https://placehold.co/600x400/000/fff?text=Image+Not+Found'">
                <div class="portfolio-overlay">
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <span class="view-project">View Case Study (PDF)</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    const loader = document.querySelector('.loading-screen');
    if (loader) loader.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', renderPortfolio);
