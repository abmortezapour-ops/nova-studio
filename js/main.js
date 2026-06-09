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
});
