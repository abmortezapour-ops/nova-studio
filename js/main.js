const portfolioData = [
    { id: 1, title: "Modern Brand", desc: "A complete rebranding for a tech startup focusing on neon aesthetics.", img: "images/p1.png", pdf: "files/brand.pdf" },
    { id: 2, title: "Cyber App", desc: "Mobile application interface with dark mode and high contrast colors.", img: "images/p2.png", pdf: "" },
    { id: 3, title: "Web Vision", desc: "A high-performance portfolio website for a famous photographer.", img: "images/p3.png", pdf: "files/web.pdf" },
    { id: 4, title: "Neon Motion", desc: "3D animations and motion graphics for a music festival.", img: "images/p4.png", pdf: "" }
];

// رندر کردن پورتفولیو
const grid = document.getElementById('portfolio-grid');
if (grid) {
    grid.innerHTML = portfolioData.map(item => `
        <div class="portfolio-item" onclick="openModal('${item.title}', '${item.desc}')">
            <img src="${item.img}" alt="${item.title}">
            ${item.pdf ? `<a href="${item.pdf}" class="pdf-btn" target="_blank">View PDF</a>` : ''}
        </div>
    `).join('');
}

// انتخاب سرویس و انتقال به باکس پیام
function selectService(serviceName) {
    const messageBox = document.getElementById('message-box');
    messageBox.value = `I am interested in ${serviceName}. Let's talk about...`;
    document.getElementById('contact').scrollIntoView();
}

// مدیریت مودال (کپشن)
function openModal(title, desc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('captionModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('captionModal').style.display = "none";
}

// بستن مودال با کلیک بیرون از کادر
window.onclick = function(event) {
    const modal = document.getElementById('captionModal');
    if (event.target == modal) closeModal();
}
