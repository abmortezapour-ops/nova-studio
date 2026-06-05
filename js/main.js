// ۱. دیتای پروژه‌ها - تصاویر باید در پوشه images با این نام‌ها باشند
const portfolioData = [
    { id: 1, title: "Modern Brand Identity", desc: "طراحی هویت بصری مدرن و نئونی برای برندهای تکنولوژی.", img: "images/p1.png", pdf: "files/p1.pdf" },
    { id: 2, title: "Crypto Dashboard", desc: "رابط کاربری پیشرفته برای پلتفرم‌های تبادل ارز دیجیتال.", img: "images/p2.png", pdf: "" },
    { id: 3, title: "Nova E-Commerce", desc: "طراحی و توسعه وب‌سایت فروشگاهی با سرعت بارگذاری فوق‌العاده.", img: "images/p3.png", pdf: "" },
    { id: 4, title: "Mobile App Design", desc: "تجربه کاربری منحصر‌به‌فرد برای اپلیکیشن‌های iOS و Android.", img: "images/p4.png", pdf: "" },
    { id: 5, title: "Motion Graphics", desc: "ساخت ویدیوهای تبلیغاتی کوتاه و جذاب برای سوشال مدیا.", img: "images/p5.png", pdf: "" },
    { id: 6, title: "3D Product Render", desc: "رندرینگ سه بعدی محصولات با کیفیت 4K جهت استفاده در وب.", img: "images/p6.png", pdf: "" },
    { id: 7, title: "Social Media Pack", desc: "طراحی قالب‌های حرفه‌ای برای پست و استوری اینستاگرام.", img: "images/p7.png", pdf: "" },
    { id: 8, title: "Corporate UI Kit", desc: "طراحی سیستم طراحی (Design System) برای سازمان‌های بزرگ.", img: "images/p8.png", pdf: "" }
];

// ۲. رندر کردن خودکار بخش پورتفولیو در گرید
const grid = document.getElementById('portfolio-grid');
if (grid) {
    grid.innerHTML = portfolioData.map(item => `
        <div class="portfolio-item" onclick="openModal('${item.title}', '${item.desc}')">
            <img src="${item.img}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">
            ${item.pdf ? `<a href="${item.pdf}" class="pdf-btn" target="_blank" onclick="event.stopPropagation()">PDF View</a>` : ''}
        </div>
    `).join('');
}

// ۳. تابع انتخاب سرویس و اسکرول به فرم تماس
function selectService(serviceName) {
    const messageBox = document.getElementById('message-box');
    if (messageBox) {
        messageBox.value = "درود؛ من به سرویس «" + serviceName + "» علاقمند هستم. لطفاً برای جزئیات بیشتر با من در تماس باشید.";
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        messageBox.focus();
    }
}

// ۴. مدیریت ارسال فرم به صورت AJAX (بدون رفرش صفحه)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.onsubmit = async (e) => {
        e.preventDefault(); // جلوگیری از رفتن به صفحه Formspree
        
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
                // نمایش پیام موفقیت سبز رنگ
                const successMsg = document.getElementById('success-msg');
                successMsg.style.display = 'block';
                
                contactForm.reset(); // پاک کردن فرم
                
                // مخفی کردن پیام بعد از ۵ ثانیه
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            } else {
                alert("خطایی رخ داد. لطفاً دوباره تلاش کنید.");
            }
        } catch (error) {
            alert("ارسال پیام با خطا مواجه شد. اتصال اینترنت را بررسی کنید.");
        } finally {
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    };
}

// ۵. توابع کنترل مودال (پنجره بازشونده توضیحات)
function openModal(title, desc) {
    const modal = document.getElementById('captionModal');
    if (modal) {
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-desc').innerText = desc;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // جلوگیری از اسکرول صفحه وقتی مودال باز است
    }
}

function closeModal() {
    const modal = document.getElementById('captionModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// بستن مودال در صورت کلیک خارج از کادر محتوا
window.onclick = function(event) {
    const modal = document.getElementById('captionModal');
    if (event.target == modal) {
        closeModal();
    }
}
