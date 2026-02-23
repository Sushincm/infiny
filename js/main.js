document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // 2. Navbar & Mobile Menu Logic
  const navbarWrapper = document.getElementById("navbarWrapper");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbarWrapper.classList.remove(
        "-translate-y-[150%]",
        "opacity-0",
        "pointer-events-none",
      );
      navbarWrapper.classList.add(
        "translate-y-0",
        "opacity-100",
        "pointer-events-auto",
      );
    } else {
      navbarWrapper.classList.add(
        "-translate-y-[150%]",
        "opacity-0",
        "pointer-events-none",
      );
      navbarWrapper.classList.remove(
        "translate-y-0",
        "opacity-100",
        "pointer-events-auto",
      );
    }
  });

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  });

  // Close menu on link click
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    });
  });

  // 3. GSAP Animations

  // Hero Section Loading Animation
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTl.from(".hero-content > *", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    delay: 0.2,
  });

  // Hero Section Parallax
  gsap.to(".hero-bg", {
    yPercent: -15,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".hero-content", {
    yPercent: -40,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // About Section Text Reveal
  const revealElement = document.querySelector(".text-reveal-element");
  if (revealElement) {
    const text = revealElement.innerText;
    revealElement.innerHTML = "";
    const words = text.split(" ");
    words.forEach((word) => {
      const span = document.createElement("span");
      span.innerText = word + " ";
      span.style.color = "#444";
      span.style.transition = "color 0.1s ease";
      revealElement.appendChild(span);
    });

    const spans = revealElement.querySelectorAll("span");

    gsap.to(spans, {
      scrollTrigger: {
        trigger: ".text-reveal-element",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
      color: "#ffffff",
      stagger: 0.1,
    });
  }

  // Animate the points box
  gsap.from(".points-box", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 60%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });

  // Generic Section Animation (Vehicles, Dest, Packages, Reviews, FAQ)
  gsap.utils.toArray(".animate-section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Sub-elements stagger for grids
  gsap.from(".vehicle-card", {
    scrollTrigger: {
      trigger: "#vehicles",
      start: "top 70%",
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".destination-card", {
    scrollTrigger: {
      trigger: "#destinations",
      start: "top 70%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });

  gsap.from(".package-card", {
    scrollTrigger: {
      trigger: ".package-card",
      start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
  });

  // 4. Metrics Counter Logic
  const metricsSection = document.querySelector(".metrics-container");
  const counters = document.querySelectorAll(".counter");
  const counterFloat = document.querySelector(".counter-float");

  let metricsActivated = false;

  ScrollTrigger.create({
    trigger: ".metrics-container",
    start: "top 85%",
    onEnter: () => {
      if (!metricsActivated) {
        metricsActivated = true;

        // Int Counters
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-target"));
          let current = 0;
          const increment = target / 50;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.innerText = Math.ceil(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = target;
            }
          };
          updateCounter();
        });

        // Float Counter (Rating)
        if (counterFloat) {
          const targetFloat = parseFloat(
            counterFloat.getAttribute("data-target"),
          );
          let currentFloat = 0.0;
          const incrementFloat = targetFloat / 50;

          const updateFloatCounter = () => {
            currentFloat += incrementFloat;
            if (currentFloat < targetFloat) {
              counterFloat.innerText = currentFloat.toFixed(1);
              requestAnimationFrame(updateFloatCounter);
            } else {
              counterFloat.innerText = targetFloat.toFixed(1);
            }
          };
          updateFloatCounter();
        }

        // Fade in metrics container children
        gsap.from(".metric-item", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    },
  });

  // 5. Review Slider Logic (Vanilla JS via Transform)
  const track = document.querySelector(".reviews-track");
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector(".slider-btn-next");
  const prevBtn = document.querySelector(".slider-btn-prev");

  let currentTranslate = 0;
  let slideWidth = slides[0].getBoundingClientRect().width + 32; // width + gap

  // Recalculate width on resize
  window.addEventListener("resize", () => {
    slideWidth = slides[0].getBoundingClientRect().width + 32;
    currentTranslate = 0; // reset on resize for simplicity
    updateSlider();
  });

  const maxTranslate = -(
    slideWidth *
    (slides.length - (window.innerWidth >= 768 ? 2 : 1))
  );
  // Show 2 items on md, 1 item on sm

  function updateSlider() {
    track.style.transform = `translateX(${currentTranslate}px)`;
    track.style.transition =
      "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  }

  nextBtn.addEventListener("click", () => {
    const bounds =
      slideWidth * (slides.length - (window.innerWidth >= 768 ? 2 : 1));
    if (Math.abs(currentTranslate) < bounds - 10) {
      // -10 for floating point tolerance
      currentTranslate -= slideWidth;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentTranslate < 0) {
      currentTranslate += slideWidth;
      updateSlider();
    }
  });

  // 6. FAQ Accordion Logic
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-btn");
    const content = item.querySelector(".faq-content");

    btn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all others
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-content").style.maxHeight = null;
        otherItem.querySelector(".faq-content").style.opacity = 0;
      });

      if (!isActive) {
        // Open clicked
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + 30 + "px"; // + padding
        content.style.opacity = 1;
      }
    });
  });
});
