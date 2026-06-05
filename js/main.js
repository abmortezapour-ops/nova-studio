const projects = [
    { title: "AI Technology Lab", category: "Web Development", image: "images/p1.png", link: "#", pdf: "files/Artificial-Intelligence-The-Future-of-Technology.pdf" },
    { title: "Modern Brand Identity", category: "Branding", image: "images/p2.png", link: "#", pdf: "files/Timeless-Value.pdf" },
    { title: "Social Dashboard", category: "Web Design", image: "images/p3.png", link: "#", pdf: null },
    { title: "Mobile Fitness App", category: "UI/UX Design", image: "images/p4.png", link: "#", pdf: null },
    { title: "Corporate Catalog", category: "Graphics", image: "images/p5.png", link: "#", pdf: null },
    { title: "Cinema Edit Pro", category: "Video Editing", image: "images/p6.png", link: "#", pdf: null },
    { title: "E-commerce Launch", category: "E-commerce", image: "images/p7.png", link: "#", pdf: null },
    { title: "Minimalist Poster", category: "Digital Art", image: "images/p8.png", link: "#", pdf: null }
];

const portfolioGrid = document.getElementById('portfolio-grid');

function loadProjects() {
    if(!portfolioGrid) return;
    
    portfolioGrid.innerHTML = projects.map(project => `
        <div class="portfolio-card">
            <img src="${project.image}" alt="${project.title}">
            <div class="portfolio-overlay">
                <p class="proj-cat">${project.category}</p>
                <h3 class="proj-title">${project.title}</h3>
                <div class="card-btns">
                    <a href="${project.link}" class="view-btn">Project Details</a>
                    ${project.pdf ? `<a href="${project.pdf}" target="_blank" class="pdf-link">View PDF</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadProjects);
// عملکرد کلیک روی کارت‌های سرویس
document.querySelectorAll('.service-card').forEach(card => {
    card.style.cursor = 'pointer'; // نمایش نشانگر دست روی کارت
    card.addEventListener('click', () => {
        const serviceName = card.querySelector('h3').innerText;
        const contactSection = document.querySelector('#contact');
        const messageBox = document.querySelector('.contact-form textarea');
        
        // اسکرول به بخش تماس
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // پر کردن متن پیام به صورت خودکار
        messageBox.value = `Hi, I'm interested in your "${serviceName}" service. Please provide more details.`;
        messageBox.focus();
    });
});
// انیمیشن و پیام برای پرداخت بیعانه
const depositLink = document.querySelector('.deposit-link a');
if (depositLink) {
    depositLink.addEventListener('click', function(e) {
        e.preventDefault(); // جلوگیری از پرش صفحه
        
        // ایجاد یک افکت درخشش لحظه‌ای روی دکمه ارسال
        const submitBtn = document.querySelector('.contact-form .btn-primary');
        submitBtn.innerHTML = "Redirecting to Payment...";
        submitBtn.style.background = "linear-gradient(45deg, #00ff88, #00bd65)"; // تغییر رنگ به سبز به نشانه تایید
        
        setTimeout(() => {
            alert("Redirecting to secure payment gateway...");
            // window.location.href = "لینک درگاه پرداخت شما"; 
            submitBtn.innerHTML = "Send Message";
            submitBtn.style.background = ""; // بازگشت به حالت اول
        }, 1000);
    });
}
