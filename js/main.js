document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.getElementById('portfolio-grid');

    // لیست پروژه‌ها - نام فایل‌ها را دقیقاً بر اساس آنچه در پوشه files و images دارید چک کنید
    const projects = [
        { title: "Project 1", image: "images/p1.png", link: "files/project1.pdf", type: "pdf" },
        { title: "Project 2", image: "images/p2.png", link: "files/project2.mp4", type: "video" }, // مثال برای ویدیو
        { title: "Project 3", image: "images/p3.png", link: "files/project3.pdf", type: "pdf" },
        { title: "Project 4", image: "images/p4.png", link: "files/project4.pdf", type: "pdf" },
        { title: "Project 5", image: "images/p5.png", link: "files/project5.pdf", type: "pdf" },
        { title: "Project 6", image: "images/p6.png", link: "files/project6.pdf", type: "pdf" },
        { title: "Project 7", image: "images/p7.png", link: "files/project7.pdf", type: "pdf" },
        { title: "Project 8", image: "images/p8.png", link: "files/project8.pdf", type: "pdf" }
    ];

    function loadProjects() {
        if (!portfolioGrid) return;
        
        portfolioGrid.innerHTML = projects.map(project => `
            <a href="${project.link}" class="portfolio-card" target="_blank">
                <img src="${project.image}" alt="${project.title}" class="portfolio-img" 
                     onerror="this.src='https://via.placeholder.com/400x400?text=Nova+Studio'">
                <div class="portfolio-overlay">
                    <h3>${project.title}</h3>
                    <p>Click to View ${project.type.toUpperCase()}</p>
                    <div class="pdf-button">VIEW PROJECT</div>
                </div>
            </a>
        `).join('');
    }

    loadProjects();
});
