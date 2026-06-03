document.addEventListener("DOMContentLoaded", () => {
  // Fade-in animation on scroll
  const fadeElements = document.querySelectorAll(".fade-in");

  if (fadeElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach((el) => observer.observe(el));
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Contact form - Formspree async submit
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const data = new FormData(this);
      const msg = document.getElementById("formSuccess");

      try {
        const res = await fetch(this.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        });

        if (res.ok) {
          this.reset();

          if (msg) {
            msg.style.cssText =
              "display:block !important; color:#4ade80; margin-top:1rem; text-align:center; font-weight:600;";
            msg.textContent = "Message sent successfully!";

            setTimeout(() => {
              msg.style.cssText = "display:none !important;";
            }, 4000);
          }
        } else {
          throw new Error("failed");
        }
      } catch {
        if (msg) {
          msg.style.cssText =
            "display:block !important; color:red; margin-top:1rem; text-align:center; font-weight:600;";
          msg.textContent = "Error sending message. Please try again.";
        }
      }
    });
  }

  // Service card click → fill contact form subject
  document.querySelectorAll(".service-card[data-service]").forEach((card) => {
    card.addEventListener("click", () => {
      const subjectInput = document.getElementById("contactSubject");
      const contactSection = document.getElementById("contact");

      if (subjectInput) {
        subjectInput.value = "Order: " + card.dataset.service;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Portfolio modal elements
  const portfolioCards = document.querySelectorAll(".portfolio-card");
  const modal = document.getElementById("project-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImage = document.getElementById("modal-image");
  const modalTags = document.getElementById("modal-tags");
  const modalLinks = document.getElementById("modal-links");

  const modalReady =
    modal &&
    modalOverlay &&
    modalClose &&
    modalTitle &&
    modalDescription &&
    modalImage &&
    modalTags &&
    modalLinks;

  // UPDATED: image paths changed to safe filenames (no spaces / no special chars)
  const projectData = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with payment integration",
      image: "images/saas-1.png",
      tags: ["UI/UX", "Web App", "E-Commerce"],
      demoLink: "",
      pdfLink: ""
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization for SaaS product",
      image: "images/tt.png",
      tags: ["Dashboard", "Data Viz", "SaaS"],
      demoLink: "",
      pdfLink: "files/Artificial-Intelligence-The-Future-of-Technology.pdf"
    },
    {
      title: "SaaS Landing Page",
      description: "Modern landing page for a SaaS product",
      image: "images/saas-concept.png",
      tags: ["Landing Page", "SaaS", "Conversion"],
      demoLink: "",
      pdfLink: ""
    },
    {
      title: "Startup Launch Page",
      description: "High-converting launch page for startups",
      image: "images/saas-2.png",
      tags: ["Startup", "Launch Page", "Marketing"],
      demoLink: "",
      pdfLink: ""
    },
    {
      title: "Real Estate Portal",
      description: "Property listing and search platform",
      image: "images/timeless.png",
      tags: ["Real Estate", "Portal", "Search"],
      demoLink: "",
      pdfLink: "files/Timeless-Value.pdf"
    },
    {
      title: "Marketing Tool",
      description: "Growth automation platform for startups",
      image: "images/marketing.png",
      tags: ["Marketing", "Automation", "Growth"],
      demoLink: "",
      pdfLink: ""
    },
    {
      title: "Brand Identity",
      description: "Logo and visual identity design system",
      image: "images/logo.png",
      tags: ["Branding", "Identity", "Logo Design"],
      demoLink: "",
      pdfLink: ""
    },
    {
      title: "Pet Care App",
      description: "Smart pet health tracking application",
      image: "images/copilot.png",
      tags: ["Mobile App", "Health", "Pets"],
      demoLink: "",
      pdfLink: ""
    }
  ];

  if (modalReady && portfolioCards.length) {
    const openModal = (project) => {
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modalImage.src = project.image;
      modalImage.alt = project.title;

      modalTags.innerHTML = "";
      project.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.className = "modal-tag";
        span.textContent = tag;
        modalTags.appendChild(span);
      });

      modalLinks.innerHTML = "";

      if (project.demoLink) {
        const demoBtn = document.createElement("a");
        demoBtn.href = project.demoLink;
        demoBtn.target = "_blank";
        demoBtn.rel = "noopener noreferrer";
        demoBtn.className = "modal-btn";
        demoBtn.textContent = "Live Demo";
        modalLinks.appendChild(demoBtn);
      }

      if (project.pdfLink) {
        const pdfBtn = document.createElement("a");
        pdfBtn.href = project.pdfLink;
        pdfBtn.target = "_blank";
        pdfBtn.rel = "noopener noreferrer";
        pdfBtn.className = "modal-btn modal-btn-secondary";
        pdfBtn.textContent = "View PDF";
        modalLinks.appendChild(pdfBtn);
      }

      modal.classList.add("active");
      modalOverlay.classList.add("active");
      document.body.classList.add("modal-open");
      modal.setAttribute("aria-hidden", "false");
    };

    const closeModal = () => {
      modal.classList.remove("active");
      modalOverlay.classList.remove("active");
      document.body.classList.remove("modal-open");
      modal.setAttribute("aria-hidden", "true");
    };

    portfolioCards.forEach((card, index) => {
      card.addEventListener("click", (e) => {
        // If user clicked a real link or button inside card, do not open modal
        if (e.target.closest("a, button")) return;

        const project = projectData[index];
        if (project) {
          openModal(project);
        }
      });
    });

    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }
});
