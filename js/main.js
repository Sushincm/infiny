document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize GSAP & ScrollTrigger
  const hasGsap = typeof gsap !== "undefined";
  const hasScrollTrigger = typeof ScrollTrigger !== "undefined";

  if (hasGsap && hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }


  // 2. Navbar & Mobile Menu Logic (Always Visible Header)
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // Subtle border / shadow enhancement on scroll without hiding
  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("shadow-2xl", "bg-white/95");
        navbar.classList.remove("bg-white/90");
      } else {
        navbar.classList.remove("shadow-2xl");
        navbar.classList.add("bg-white/90");
      }
    }
  });

  if (mobileMenuBtn && mobileMenu) {
    const toggleMenu = (open) => {
      const shouldOpen =
        typeof open === "boolean"
          ? open
          : !mobileMenu.classList.contains("is-open");

      if (shouldOpen) {
        mobileMenu.classList.add("is-open");
        mobileMenuBtn.classList.add("is-active");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
        mobileMenu.setAttribute("aria-hidden", "false");
        mobileMenuBtn.innerHTML = '<i class="ph-bold ph-x text-2xl"></i>';
      } else {
        mobileMenu.classList.remove("is-open");
        mobileMenuBtn.classList.remove("is-active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        mobileMenuBtn.innerHTML = '<i class="ph-bold ph-list text-2xl"></i>';
      }
    };

    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu on link click
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggleMenu(false);
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("is-open") && !navbar.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
        toggleMenu(false);
      }
    });
  }

  // 3. GSAP Animations

  if (hasGsap) {
    // Helper to split text into character masks preserving responsive word wrap
    const splitIntoChars = (element) => {
      if (!element || element.dataset.splitDone) return [];
      element.dataset.splitDone = "true";

      const lines = element.innerHTML.split(/<br\s*[\/]?>/gi);
      element.innerHTML = lines
        .map((line) => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = line;
          const text = (tempDiv.textContent || tempDiv.innerText || "").trim();
          const words = text.split(/\s+/).filter(Boolean);

          const wrappedWords = words
            .map((word) => {
              const chars = Array.from(word)
                .map(
                  (char) =>
                    `<span class="split-char-mask"><span class="split-char">${char}</span></span>`
                )
                .join("");
              return `<span class="split-word-wrapper mr-[0.28em]">${chars}</span>`;
            })
            .join("");
          return `<span class="block">${wrappedWords}</span>`;
        })
        .join("");

      return element.querySelectorAll(".split-char");
    };

    // Hero Section Loading & Split Text Reveal Animation
    const heroTitle = document.querySelector(".hero-split-title");
    const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });

    if (heroTitle) {
      const heroChars = splitIntoChars(heroTitle);

      heroTl
        .from(heroChars, {
          yPercent: 120,
          opacity: 0,
          rotateZ: 4,
          duration: 0.75,
          stagger: 0.02,
          ease: "power4.out",
          delay: 0.15,
        })
        .from(
          ".hero-content > *:not(.hero-split-title)",
          {
            y: 30,
            opacity: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.45"
        );
    } else {
      heroTl.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.1,
      });
    }

    // All Section Titles Scroll-Triggered Split Reveal Animation
    document.querySelectorAll(".split-reveal-title").forEach((title) => {
      const chars = splitIntoChars(title);
      if (!chars || !chars.length) return;

      if (hasScrollTrigger) {
        gsap.from(chars, {
          scrollTrigger: {
            trigger: title,
            start: "top 88%",
            once: true,
          },
          yPercent: 120,
          opacity: 0,
          rotateZ: 3.5,
          duration: 0.65,
          stagger: 0.015,
          ease: "power4.out",
        });
      } else {
        gsap.from(chars, {
          yPercent: 120,
          opacity: 0,
          rotateZ: 3.5,
          duration: 0.65,
          stagger: 0.015,
          ease: "power4.out",
        });
      }
    });

    // Scroll animation is enhanced when the ScrollTrigger CDN is available.
    if (hasScrollTrigger && document.querySelector(".hero")) {
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
        yPercent: -30,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Generic Section Animation (Headings & containers)
      gsap.utils.toArray(".animate-section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "transform,opacity",
        });
      });

      const staggerCards = (selector, trigger) => {
        if (!document.querySelector(selector)) return;
        gsap.from(selector, {
          scrollTrigger: { trigger, start: "top 85%", once: true },
          y: 35,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
        });
      };

      if (window.innerWidth >= 1024) {
        staggerCards(".vehicle-card", "#vehicles");
      }
      staggerCards(".destination-card", "#destinations");
      staggerCards(".package-card", ".package-card");
    }
  }

  // 3.1 Hero Banner Automatic Fade Carousel
  const heroBannerEl = document.querySelector(".heroBannerSwiper");
  if (heroBannerEl && typeof Swiper !== "undefined") {
    new Swiper(".heroBannerSwiper", {
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      speed: 1200,
      allowTouchMove: false,
    });
  }

  // 4. Vehicles Carousel Initialization (Mobile/Tablet Responsive Only)
  let vehiclesSwiper = null;

  function handleVehiclesCarousel() {
    const swiperEl = document.querySelector(".vehicles-swiper");
    if (!swiperEl || typeof Swiper === "undefined") return;

    const isResponsive = window.innerWidth < 1024;

    if (isResponsive) {
      if (!vehiclesSwiper) {
        vehiclesSwiper = new Swiper(".vehicles-swiper", {
          slidesPerView: 1.15,
          spaceBetween: 16,
          grabCursor: true,
          observer: true,
          observeParents: true,
          watchOverflow: true,
          watchSlidesProgress: true,
          resistanceRatio: 0.85,
          touchRatio: 1.1,
          pagination: {
            el: ".vehicles-pagination",
            clickable: true,
          },
          breakpoints: {
            480: {
              slidesPerView: 1.35,
              spaceBetween: 18,
            },
            640: {
              slidesPerView: 1.85,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.25,
              spaceBetween: 24,
            },
          },
        });
      } else {
        vehiclesSwiper.update();
      }
    } else {
      if (vehiclesSwiper) {
        vehiclesSwiper.destroy(true, true);
        vehiclesSwiper = null;
      }
    }
  }

  handleVehiclesCarousel();
  window.addEventListener("resize", handleVehiclesCarousel);
  window.addEventListener("load", () => {
    if (vehiclesSwiper) vehiclesSwiper.update();
  });


  // 5. Review Slider Logic (Vanilla JS via Transform)
  const track = document.querySelector(".reviews-track");
  if (track) {
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector(".slider-btn-next");
    const prevBtn = document.querySelector(".slider-btn-prev");

    let currentTranslate = 0;

    const getSlideWidth = () => {
      if (slides.length > 0) {
        return slides[0].getBoundingClientRect().width + 32; // width + gap
      }
      return 300;
    };

    function updateSlider() {
      track.style.transform = `translateX(${currentTranslate}px)`;
      track.style.transition =
        "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const slideWidth = getSlideWidth();
        const visibleSlides = window.innerWidth >= 768 ? 2 : 1;
        const maxScroll = slideWidth * (slides.length - visibleSlides);
        if (Math.abs(currentTranslate) < maxScroll - 5) {
          currentTranslate -= slideWidth;
          updateSlider();
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const slideWidth = getSlideWidth();
        if (currentTranslate < 0) {
          currentTranslate += slideWidth;
          if (currentTranslate > 0) currentTranslate = 0;
          updateSlider();
        }
      });
    }

    window.addEventListener("resize", () => {
      currentTranslate = 0;
      updateSlider();
    });
  }

  // 6. FAQ Accordion Logic
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-btn");
    const content = item.querySelector(".faq-content");

    if (btn && content) {
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Close all others
        faqItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
          const otherButton = otherItem.querySelector(".faq-btn");
          const otherContent = otherItem.querySelector(".faq-content");
          if (otherButton) otherButton.setAttribute("aria-expanded", "false");
          if (otherContent) {
            otherContent.style.maxHeight = null;
            otherContent.style.opacity = "0";
          }
        });

        if (!isActive) {
          // Open clicked
          item.classList.add("active");
          btn.setAttribute("aria-expanded", "true");
          content.style.maxHeight = content.scrollHeight + 30 + "px";
          content.style.opacity = "1";
        }
      });
    }
  });

  // 7. Back to Top Button Logic
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-3");
        backToTopBtn.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
      } else {
        backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-3");
        backToTopBtn.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // 8. Enforce Permanent Executive Dark Theme
  try {
    localStorage.setItem("veyil_theme", "dark");
    document.documentElement.classList.add("dark");
  } catch (e) {}

  // Refresh ScrollTrigger calculations after all resources load
  if (hasScrollTrigger) {
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }
});
