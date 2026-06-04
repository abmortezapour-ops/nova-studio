// 1. لیست کامل ۸ پروژه پورتفولیو
const projects = [
    { title: "AI Technology", category: "Motion", img: "images/p1.png", link: "files/Artificial-Intelligence-The-Future-of-Technology.pdf" },
    { title: "Timeless Design", category: "Web", img: "images/p2.png", link: "files/Timeless-Value.pdf" },
    { title: "Nova Logo", category: "Branding", img: "images/p3.png", link: "#" },
    { title: "Marketing Pro", category: "UI/UX", img: "images/p4.png", link: "#" },
    { title: "SaaS Concept", category: "Design", img: "images/p5.png", link: "#" },
    { title: "Interface Studio", category: "Motion", img: "images/p6.png", link: "#" },
    { title: "Digital Value", category: "Visuals", img: "images/p7.png", link: "files/Timeless-Value.pdf" },
    { title: "Future Launch", category: "Concept", img: "images/p8.png", link: "#" }
];

// 2. ساخت خودکار کارت‌ها در صفحه
const container = document.getElementById('portfolio-container');

if(container) {
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
}

// 3. اسکرول به فرم تماس هنگام کلیک روی سرویس‌ها
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        const service = item.getAttribute('data-service');
        const messageBox = document.querySelector('.contact-form textarea');
        
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        if(messageBox) {
            messageBox.value = `Hello Nova Studio,\nI am interested in: ${service}.\nPlease provide more info.`;
            messageBox.focus();
        }
    });
});
