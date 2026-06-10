document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const observerOptions = {
        root: null,
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // --- Service Card Selection ---
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'selected' class from all cards
            serviceCards.forEach(c => c.classList.remove('selected'));
            // Add 'selected' class to the clicked card
            card.classList.add('selected');

            // Update form subject and message based on selected service
            const serviceTitle = card.querySelector('h3').textContent;
            const serviceDescription = card.querySelector('p').textContent;
            const subjectInput = document.getElementById('subject');
            const messageTextarea = document.getElementById('message');

            if (subjectInput) {
                subjectInput.value = `Service Inquiry: ${serviceTitle}`;
            }
            if (messageTextarea) {
                messageTextarea.value = `Hello,\n\nI am interested in your ${serviceTitle} service.\n\n${serviceDescription}\n\nPlease contact me at your earliest convenience.\n\nThanks!`;
            }
        });
    });

    // --- Form Handling ---
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    // --- Define CSS Variables for Neon Colors ---
    // These should match the variables defined in your CSS
    const primaryNeonColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    const greenNeonColor = getComputedStyle(document.documentElement).getPropertyValue('--green-neon-color').trim(); // Assuming you'll define this in CSS
    const purpleNeonColor = getComputedStyle(document.documentElement).getPropertyValue('--purple-neon-color').trim(); // Assuming you'll define this in CSS

    if (contactForm && submitButton && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default form submission

            // Add loading state to the button
            submitButton.classList.add('btn-loading');
            // Clear previous status messages and reset classes
            formStatus.textContent = '';
            formStatus.className = 'form-status'; // Reset classes

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch('https://formspree.io/f/maqkalgp', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // --- SUCCESS ---
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.classList.add('success'); // Add success class for styling
                    contactForm.reset(); // Clear the form

                    // Apply neon color to the button on success (e.g., green)
                    submitButton.style.backgroundColor = greenNeonColor || '#00ff00'; // Fallback color

                    // Wait for the success message to be visible before resetting the button
                    setTimeout(() => {
                        submitButton.classList.remove('btn-loading');
                        submitButton.style.backgroundColor = ''; // Reset to default or hover color
                        // If you have a separate payment button, you might want to style it differently
                        // const paymentButton = document.querySelector('.btn-payment');
                        // if (paymentButton) paymentButton.style.backgroundColor = '';
                    }, 3000); // Delay in milliseconds

                } else {
                    // --- ERROR ---
                    const errorData = await response.json();
                    console.error('Form submission error:', errorData);
                    formStatus.textContent = `Error: ${errorData.error || 'Something went wrong. Please try again.'}`;
                    formStatus.classList.add('error'); // Add error class for styling

                    // Apply neon color to the button on error (e.g., purple)
                    submitButton.style.backgroundColor = purpleNeonColor || '#8a2be2'; // Fallback color

                    // Remove loading class on error
                    submitButton.classList.remove('btn-loading');
                }
            } catch (error) {
                // --- NETWORK ERROR ---
                console.error('Network or fetch error:', error);
                formStatus.textContent = 'Network error. Please check your connection and try again.';
                formStatus.classList.add('error'); // Add error class for styling

                // Apply neon color to the button on error (e.g., purple)
                submitButton.style.backgroundColor = purpleNeonColor || '#8a2be2'; // Fallback color

                // Remove loading class on error
                submitButton.classList.remove('btn-loading');
            }
        });
    }

    // --- Magnetic Button Enhancement ---
    const magneticButtons = document.querySelectorAll('.magnetic');
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const moveX = (x - centerX) * 0.2; // Adjust the multiplier for magnetic effect strength
            const moveY = (y - centerY) * 0.2;

            button.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0px, 0px)'; // Reset position
        });
    });
});
