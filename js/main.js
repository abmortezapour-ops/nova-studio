// انتخاب سرویس و انتقال به فرم تماس

document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {

        const serviceName = item.getAttribute('data-service');
        const contactSection = document.getElementById('contact');
        const messageBox = document.querySelector('.contact-form textarea');

        // اسکرول نرم
        contactSection.scrollIntoView({
            behavior: 'smooth'
        });

        // ریست رنگ همه کارت‌ها
        document.querySelectorAll('.service-item')
            .forEach(i => i.style.borderColor = '#222');

        // هایلایت کارت انتخابی
        item.style.borderColor = '#ff00ff';

        // قرار دادن متن آماده
        messageBox.value =
`Hello Nova Studio,

I am interested in: ${serviceName}

Please contact me with more details.`;

        messageBox.focus();
    });
});
