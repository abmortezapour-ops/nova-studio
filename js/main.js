// 1. لیست پروژه‌های پورتفولیو
const projects = [
    { title: "Project One", category: "Motion", img: "images/p1.png", link: "files/project1.pdf" },
    { title: "Project Two", category: "Web", img: "images/p2.png", link: "files/project2.mp4" },
    { title: "Project Three", category: "Branding", img: "images/p3.png", link: "files/project3.pdf" },
    { title: "Project Four", category: "UI/UX", img: "images/p4.png", link: "files/project4.pdf" },
    { title: "Project Five", category: "Design", img: "images/p5.png", link: "files/project5.pdf" },
    { title: "Project Six", category: "Motion", img: "images/p6.png", link: "files/project6.mp4" }
];

// 2. ساخت کارت‌های پورتفولیو
const container = document.getElementById('portfolio-container');
projects.forEach(proj => {
    container.innerHTML += `
        <a href="${proj.link}" target="_blank" class="portfolio-card">
            <img src="${proj.img}" class="portfolio-img" alt="${proj.title}">
            <div class="portfolio-overlay">
                <h3>${proj.title}</h3>
                <p>${proj.category}</p>
            </div>
        </a>
    `;
});

// 3. انتخاب سرویس و اسکرول به فرم تماس
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        const service = item.getAttribute('data-service');
        const messageBox = document.querySelector('.contact-form textarea');
        
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        messageBox.value = `Hello Nova Studio,\nI am interested in: ${service}.\nPlease provide more info.`;
        messageBox.focus();
    });
});
