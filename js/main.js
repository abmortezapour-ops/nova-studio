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

const container = document.getElementById('portfolio-container');

if(container) {
    container.innerHTML = ''; // پاکسازی محتوای قدیمی
    projects.forEach(proj => {
        // چک کردن اینکه آیا فایل PDF است یا خیر
        const isPDF = proj.link.toLowerCase().endsWith('.pdf');
        
        const cardHTML = `
            <div class="portfolio-card" onclick="window.open('${proj.link}', '_blank')">
                <img src="${proj.img}" class="portfolio-img" alt="${proj.title}">
                <div class="portfolio-overlay">
                    <div class="card-info">
                        <h3>${proj.title}</h3>
                        <p>${proj.category}</p>
                    </div>
                    ${isPDF ? `<div class="pdf-tag">View PDF</div>` : ''}
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// اسکرول نرم برای بخش سرویس‌ها
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        const service = item.getAttribute('data-service');
        const messageBox = document.querySelector('.contact-form textarea');
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        if(messageBox) {
            messageBox.value = `Hello Nova Studio,\nI am interested in: ${service}.`;
            messageBox.focus();
        }
    });
});
