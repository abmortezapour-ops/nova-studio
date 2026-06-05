document.addEventListener('DOMContentLoaded', () => {
    // Scroll and fill form from cards
    const serviceCards = document.querySelectorAll('.service-card');
    const messageArea = document.getElementById('message-area');

    if (serviceCards && messageArea) {
        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                const serviceName = card.getAttribute('data-service');
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                messageArea.value = `Hi, I'm interested in your "${serviceName}" service.`;
            });
        });
    }

    // Deposit Button Logic
    const depositBtn = document.getElementById('deposit-btn');
    if (depositBtn) {
        depositBtn.addEventListener('click', (e) => {
            e.preventDefault();
            depositBtn.innerText = "...Redirecting to Payment";
            setTimeout(() => { alert("Redirecting to secure gateway..."); }, 1000);
        });
    }

    // Formspree AJAX Submission
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
                    status.style.color = "#00ff88";
                    form.reset();
                    btn.innerText = "Send Message";
                    btn.disabled = false;
                    setTimeout(() => { status.style.display = "none"; }, 5000);
                } else {
                    status.innerHTML = "Oops! Something went wrong.";
                    status.style.display = "block";
                    status.style.color = "#ff4444";
                    btn.disabled = false;
                }
            }).catch(error => {
                status.innerHTML = "Connection Error.";
                status.style.display = "block";
                btn.disabled = false;
            });
        });
    }
});
