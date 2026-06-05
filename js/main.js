const portfolioData = [
    { id: 1, title: "Modern Brand", img: "images/p1.png" },
    { id: 2, title: "Digital Art", img: "images/p2.png" },
    { id: 3, title: "Web Design", img: "images/p3.png" },
    { id: 4, title: "Mobile App", img: "images/p4.png" },
    { id: 5, title: "Cyber Punk", img: "images/p5.png" },
    { id: 6, title: "Neon Vision", img: "images/p6.png" },
    { id: 7, title: "UI Concept", img: "images/p7.png" },
    { id: 8, title: "Studio X", img: "images/p8.png" }
];

const grid = document.getElementById('portfolio-grid');

if (grid) {
    grid.innerHTML = portfolioData.map(item => `
        <div class="portfolio-item">
            <img src="${item.img}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x250/2b002b/ff007f?text=Project+Image'">
            <div style="position:absolute; bottom:0; left:0; right:0; padding:20px; background:linear-gradient(transparent, rgba(0,0,0,0.8));">
                <h4 style="color:white; margin:0;">${item.title}</h4>
            </div>
        </div>
    `).join('');
}
