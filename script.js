// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Particles.js Configuration
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#64ffda", // You might want to adjust this color to match your theme more closely
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#8892b0", // Adjust this color for particle lines
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.8,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  // Navigation (Burger menu and active links)
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const navbar = document.querySelector(".navbar");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    document.body.classList.toggle("nav-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        document.body.classList.remove("nav-open");
      }
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80; // Adjust for your fixed navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      // const sectionHeight = section.clientHeight; // Not used here, but good to know

      // Adjust offset (e.g., 150px) based on your needs for when a section becomes 'active'
      if (window.pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // Scroll animations
  function checkScroll() {
    const elements = document.querySelectorAll(".animate");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3; // Element appears when 1/3 of screen height is met

      if (elementPosition < screenPosition) {
        element.classList.add("appear"); // 'appear' class likely defines opacity/transform for visibility
      }
    });
  }

  // Add initial animation classes to elements on load
  const addAnimationClasses = () => {
    document.querySelector(".home-text h1").classList.add("animate");
    // Removed the H2 animation class as it's not present in the HTML provided
    document.querySelector(".home-text p").classList.add("animate", "delay-2");
    document.querySelector(".cta-buttons").classList.add("animate", "delay-3");
    document.querySelector(".home-image").classList.add("animate", "delay-2");

    document.querySelectorAll(".section-title").forEach((title) => {
      title.classList.add("animate");
    });

    document.querySelectorAll(".about-content p").forEach((p, index) => {
      p.classList.add("animate", `delay-${index + 1}`);
    });

    document.querySelectorAll(".skill-category").forEach((category, index) => {
      category.classList.add("animate", `delay-${index}`);
    });

    document.querySelectorAll(".education-item").forEach((item, index) => {
      item.classList.add("animate", `delay-${index}`);
    });

    document.querySelector(".contact-info").classList.add("animate");
    document.querySelector(".contact-form").classList.add("animate", "delay-1");
  };

  addAnimationClasses();
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on load in case elements are already in view

  // Contact Form (EmailJS)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

     emailjs.send("service_2xn9hnq", "template_pxva57g", params).then(
        function () {
          alert("Thanks for your message! I will get back to you soon.");
          contactForm.reset();
        },
        function (error) {
          alert("Failed to send message. Please try again.");
          console.log("Error:", error);
        }
      );
    });
  }

  // Hover Effects
  const addHoverEffects = () => {
    document.querySelectorAll(".skill-item").forEach((item) => {
      item.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)";
        this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
        // Optional: Trigger skill bar animation if you want it to fill on hover
        // const skillLevel = this.querySelector(".skill-level");
        // if (skillLevel) {
        //   skillLevel.style.transition = "width 0.6s ease-in-out";
        // }
      });

      item.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      });
    });

    document.querySelectorAll(".social-link").forEach((link) => {
      link.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px) rotate(360deg)";
      });

      link.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) rotate(0deg)";
      });
    });
  };

  addHoverEffects();

  // Handle mobile menu resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
      document.body.classList.remove("nav-open");
    }
  });

  // Typed.js Typing Animation for Home Section
  const typingTextElement = document.querySelector(".typing-text");
  if (typingTextElement) {
    var typed = new Typed(typingTextElement, {
      strings: [
        " Arduino Programer .",
        " Full Stack Developer.",
        " Cyber security Researcher.",
        
      ], // CUSTOMIZED HERE!
      typeSpeed: 70, // Speed of typing (milliseconds per character)
      backSpeed: 40, // Speed of backspacing (milliseconds per character)
      loop: true, // Loop the animation indefinitely
      showCursor: true, // Show the blinking cursor
      cursorChar: '|', // Character for the cursor
      smartBackspace: true, // Only backspace what has changed
      startDelay: 1000, // Delay before typing starts (in ms)
      backDelay: 1500, // Delay before backspacing starts (in ms)
    });
  }
});