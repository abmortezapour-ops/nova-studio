const portfolioData = [
    { id: 1, title: "Modern Design", desc: "توضیحات پروژه ۱", img: "images/p1.png", pdf: "files/p1.pdf" },
    { id: 2, title: "Creative Branding", desc: "توضیحات پروژه ۲", img: "images/p2.png", pdf: "" },
    { id: 3, title: "Web Solution", desc: "توضیحات پروژه ۳", img: "images/p3.png", pdf: "" },
    { id: 4, title: "Digital Marketing", desc: "توضیحات پروژه ۴", img: "images/p4.png", pdf: "" },
    { id: 5, title: "Tech Interface", desc: "توضیحات پروژه ۵", img: "images/p5.png", pdf: "" },
    { id: 6, title: "Mobile App", desc: "توضیحات پروژه ۶", img: "images/p6.png", pdf: "" },
    { id: 7, title: "Visual Identity", desc: "توضیحات پروژه ۷", img: "images/p7.png", pdf: "" },
    { id: 8, title: "Nova Future", desc: "توضیحات پروژه ۸", img: "images/p8.png", pdf: "" }
];

const grid = document.getElementById('portfolio-grid');
if (grid) {
    grid.innerHTML = portfolioData.map(item => `
        <div class="portfolio-item" onclick="openModal('${item.title}', '${item.desc}')">
            <img src="${item.img}" alt="${item.title}">
            ${item.pdf ? `<a href="${item.pdf}" class="pdf-btn" target="_blank" onclick="event.stopPropagation()">View PDF</a>` : ''}
        </div>
    `).join('');
}

function selectService(name) {
    document.getElementById('message-box').value = "I am interested in " + name;
    document.getElementById('contact').scrollIntoView();
}

function openModal(title, desc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('captionModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('captionModal').style.display = "none";
}
