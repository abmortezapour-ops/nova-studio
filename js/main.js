// 1. Portfolio Data - Professional English Descriptions
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

// 2. Render Portfolio Grid
const grid = document.getElementById('portfolio-grid');
if (grid) {
    grid.innerHTML = portfolioData.map(item => `
        <div class="portfolio-item" onclick="openModal('${item.title}', '${item.desc}')">
            <img src="${item.img}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">
            ${item.pdf ? `<a href="${item.pdf}" class="pdf-btn" target="_blank" onclick="event.stopPropagation()">PDF View</a>` : ''}
        </div>
    `).join('');
}

// 3. Select Service and Auto-Fill Form (English)
const serviceSelect = document.getElementById('service-select');
const messageInput = document.getElementById('message');

if (serviceSelect && messageInput) {
    serviceSelect.addEventListener('change', () => {
        const selectedService = serviceSelect.value;
        if (selectedService && messageInput.value.indexOf(selectedService) === -1) {
            messageInput.value = `Hello, I'm interested in your ${selectedService} service.`;
        }
    });
}


// 4. AJAX Form Submission
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
                // Success message
                const successMsg = document.getElementById('success-msg');
                successMsg.style.display = 'block';
                
                contactForm.reset();
                
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            } else {
                // Handle non-JSON error responses if necessary
                const errorData = await response.text(); // Or response.json() if the server sends JSON errors
                console.error("Form submission error:", errorData);
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Network or fetch error:", error);
            alert("Error sending message. Please check your connection.");
        } finally {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    };
}

// 5. Modal Control Functions
function openModal(title, desc) {
    const modal = document.getElementById('captionModal');
    if (modal) {
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-desc').innerText = desc;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('captionModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable background scrolling
    }
}

// Close modal if clicking outside of its content
window.onclick = function(event) {
    const modal = document.getElementById('captionModal');
    if (modal && event.target == modal) {
        closeModal();
    }
}
