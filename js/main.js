// 1. Portfolio Data - Corrected Paths
const portfolioData = [
    { id: 1, title: "Modern Brand Identity", desc: "Modern neon visual identity design for leading tech brands.", img: "images/p1.png", pdf: "files/p1.pdf" },
    { id: 2, title: "Crypto Dashboard", desc: "Advanced UI design for cryptocurrency exchange platforms.", img: "images/p2.png", pdf: "" },
    { id: 3, title: "Nova E-Commerce", desc: "High-performance online store design with ultra-fast loading speed.", img: "images/p3.png", pdf: "" },
    { id: 4, title: "Mobile App Design", desc: "Unique user experience (UX) for iOS and Android applications.", img: "images/p4.png", pdf: "" },
    { id: 5, title: "Motion Graphics", desc: "Engaging promotional videos for social media marketing.", img: "images/p5.png", pdf: "" },
    { id: 6, title: "3D Product Render", desc: "High-quality 4K 3D product rendering for web integration.", img: "images/p6.png", pdf: "" },
    { id: 7, title: "Social Media Pack", desc: "Professional template design for Instagram posts and stories.", img: "images/p7.png", pdf: "" },
    { id: 8, title: "Corporate UI Kit", desc: "Comprehensive Design System for large-scale organizations.", img: "images/p8.png", pdf: "" }
];

// 2. Render Portfolio Grid - Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('portfolio-grid');
    if (grid) {
        grid.innerHTML = portfolioData.map(item => `
            <div class="portfolio-item" onclick="openModal('${item.title}', '${item.desc}')">
                <img src="${item.img}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">
                ${item.pdf ? `<a href="${item.pdf}" class="pdf-btn" target="_blank" onclick="event.stopPropagation()">PDF View</a>` : ''}
            </div>
        `).join('');
    }

    // 3. Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.onsubmit = async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    document.getElementById('success-msg').style.display = 'block';
                    contactForm.reset();
                    setTimeout(() => { document.getElementById('success-msg').style.display = 'none'; }, 5000);
                } else {
                    alert("Something went wrong. Please try again.");
                }
            } catch (error) {
                alert("Error sending message. Please check your connection.");
            } finally {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        };
    }
});

// 4. Modal Functions (Keep these outside for onclick access)
function openModal(title, desc) {
    // Note: Since your HTML doesn't have the Modal markup, 
    // we'll just log it or alert it to prevent errors for now.
    // To show a real modal, you need the modal HTML structure.
    console.log("Opening project:", title);
}

function closeModal() {
    console.log("Closing modal");
}
