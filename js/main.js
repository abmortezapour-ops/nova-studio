document.addEventListener('DOMContentLoaded', () => {

    // 1. منطق کارت‌های سرویس (اسکرول به فرم و پر کردن پیام)
    const serviceCards = document.querySelectorAll('.service-card');
    const messageArea = document.getElementById('message-area');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceName = card.getAttribute('data-service');
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            messageArea.value = `Hi, I'm interested in your "${serviceName}" service.`;
        });
    });

    // 2. منطق لینک پرداخت
    const depositBtn = document.getElementById('deposit-btn');
    depositBtn.addEventListener('click', (e) => {
        e.preventDefault();
        depositBtn.innerText = "...Redirecting to Payment";
        depositBtn.style.color = "#ff007f";
        setTimeout(() => {
            alert("Redirecting to secure gateway...");
        }, 1000);
    });

    // 3. منطق فرم AJAX (ارسال بدون رفرش)
    const form = document.getElementById("my-form");
    const status = document.getElementById("form-status");
    const btn = document.getElementById("submit-btn");

    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault(); 
            
            const data = new FormData(event.target);
            btn.innerText = "Sending...";
            btn.disabled = true;

            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "✓ Message sent successfully!";
                    status.style.display = "block";
                    status.style.color = "#00ff88"; // سبز موفقیت
                    form.reset();
                    btn.innerText = "Send Message";
                    btn.disabled = false;
                    setTimeout(() => { status.style.display = "none"; }, 5000);
                } else {
                    status.innerHTML = "Oops! Something went wrong.";
                    status.style.display = "block";
                    status.style.color = "#ff4444"; // قرمز خطا
                    btn.disabled = false;
                }
            }).catch(error => {
                status.innerHTML = "Error connecting to server.";
                status.style.display = "block";
                btn.disabled = false;
            });
        });
    }

    // 4. لود کردن نمونه کارها (در صورت نیاز به لیست)
    const projects = ["Project 1", "Project 2", "Project 3"];
    const grid = document.getElementById('portfolio-grid');
    if(grid) {
        projects.forEach(p => {
            const div = document.createElement('div');
            div.className = 'project-card';
            div.innerText = p;
            grid.appendChild(div);
        });
    }
});
