document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    // موفقیت
                    statusMessage.innerText = 'Message sent successfully!';
                    statusMessage.className = 'form-status success';
                    submitBtn.classList.add('success');
                    submitBtn.innerText = 'Sent!';
                    contactForm.reset();
                } else {
                    // خطای سرور
                    throw new Error();
                }
            } catch (error) {
                // خطا در ارسال
                statusMessage.innerText = 'Oops! Something went wrong.';
                statusMessage.className = 'form-status error';
                submitBtn.innerText = 'Try Again';
            } finally {
                // پاک شدن پیغام بعد از ۳ ثانیه
                setTimeout(() => {
                    statusMessage.style.display = 'none';
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('success');
                }, 3000);
            }
        });
    }
});
