document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Create Custom Cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 2. Glass Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 4. Service Selection Logic
    const cards = document.querySelectorAll(".service-card");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            cards.forEach(c => c.classList.remove("selected"));
            this.classList.add("selected");
            
            const service = this.dataset.service;
            subject.value = "Project Inquiry: " + service;
            message.value = `Hi Nova Studio,\n\nI'm interested in "${service}". Let's talk!`;
            
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            setTimeout(() => message.focus(), 800);
        });
    });

    // 5. Magnetic Buttons
    document.querySelectorAll(".magnetic").forEach(btn => {
        btn.addEventListener("mousemove", function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener("mouseleave", function() {
            this.style.transform = "translate(0, 0)";
        });
    });

    // 6. Form handling (now moved from index.html)
    const form = document.getElementById("contactForm");
    const btn = document.getElementById("submitBtn");
    const status = document.getElementById("formStatus");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم
        
        btn.classList.add("btn-loading");
        btn.disabled = true;
        status.textContent = "Sending...";
        status.className = "form-status"; // پاک کردن کلاس‌های قبلی

        const formData = new FormData(form);
        
        fetch('https://formspree.io/f/maqkalgp', { // استفاده از آیدی فرم صحیح
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // فرمspree پاسخ JSON می‌دهد
            }
        })
        .then(response => {
            if (!response.ok) {
                // اگر پاسخ خطا بود (مثلا 4xx یا 5xx)
                return response.json().then(data => { throw data; }); // تلاش برای دریافت جزئیات خطا از JSON
            }
            return response.json(); // در صورت موفقیت، پاسخ JSON را برگردان
        })
        .then(data => {
            // ارسال موفقیت آمیز بود
            status.textContent = "Message sent successfully!";
            status.className = "form-status success";
            form.reset(); // پاک کردن فیلدهای فرم
            // در صورت نیاز، می‌توان دکمه پرداخت را نیز اینجا نمایش داد یا فعال کرد
        })
        .catch(error => {
            // خطایی رخ داد (چه در شبکه، چه در پاسخ Formspree)
            console.error('Form submission error:', error);
            let errorMessage = "An error occurred. Please check your connection or try again later.";
            if (error.errors) {
                // اگر Formspree خطاهای مشخصی برگردانده باشد
                errorMessage = error.errors.map(e => e.message).join(", "); // دریافت پیام خطاهای مشخص
            } else if (error.message) {
                errorMessage = error.message;
            } else if (typeof error === 'object' && error !== null) {
                 errorMessage = Object.values(error).join(", "); // نمایش مقادیر خطا در صورت وجود
            }
            status.textContent = errorMessage;
            status.className = "form-status error";
        })
        .finally(() => {
            // در هر صورت، دکمه را به حالت اول برگردان
            btn.classList.remove("btn-loading");
            btn.disabled = false;
        });
    });

}); // پایان DOMContentLoaded
