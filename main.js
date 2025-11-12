// Main JS: GSAP animations and intro video handling
document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll(".hero-letter");
  const introOverlay = document.getElementById("introOverlay");
  const introVideo = document.getElementById("introVideo");
  const skipBtn = document.getElementById("skipBtn");

  // Utility to start the hero animation (stretch letter spacing)
  function animateHero() {
    if (!letters || letters.length === 0) return;
    // Get parent words to animate letter-spacing
    const words = document.querySelectorAll(".hero-word");

    if (!words || words.length === 0) return;

    // Reset styles - set letter-spacing to very small (almost 0)
    gsap.set(words, { letterSpacing: "0rem", opacity: 0 });
    gsap.set(letters, { opacity: 0 });

    // Ensure they stay hidden until animation starts
    words.forEach((word) => (word.style.visibility = "visible"));

    // Animate letter-spacing stretch then settle
    gsap.to(letters, {
      opacity: 1,
      duration: 0.4,
      stagger: 0.05,
    });

    gsap.to(words, {
      letterSpacing: "1.2rem", // Stretch
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      onComplete: () => {
        gsap.to(words, {
          letterSpacing: "0.6rem", // Settle to normal
          duration: 0.6,
          ease: "elastic.out(1,0.6)",
          stagger: 0.1,
        });
      },
    });
  }

  // Hide intro overlay and cleanup
  function hideIntro() {
    if (!introOverlay || introOverlay.classList.contains("hidden")) return;
    gsap.to(introOverlay, {
      autoAlpha: 0,
      duration: 0.6,
      onComplete: () => {
        introOverlay.classList.add("hidden");
        // kick off hero animation once overlay hidden
        animateHero();
      },
    });
    // pause video if playing
    try {
      introVideo.pause();
    } catch (e) {}
  }

  // If the video errors (likely missing), skip overlay
  if (introVideo) {
    introVideo.addEventListener("error", function () {
      hideIntro();
    });

    // When video finishes, hide overlay
    introVideo.addEventListener("ended", function () {
      hideIntro();
    });
  }

  // Skip button handler
  if (skipBtn) {
    skipBtn.addEventListener("click", function (e) {
      e.preventDefault();
      hideIntro();
    });
  }

  // Safety: if the video doesn't start within 3s, hide overlay and animate
  setTimeout(() => {
    if (introOverlay && !introOverlay.classList.contains("hidden")) {
      // if video readyState < 2, consider it not loaded and hide
      try {
        if (introVideo.readyState < 2) {
          hideIntro();
        }
      } catch (e) {
        hideIntro();
      }
    }
  }, 3000);

  // Small reveal on scroll for sections
  const revealEls = document.querySelectorAll("section");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => {
    gsap.set(el, { autoAlpha: 0, y: 20 });
    io.observe(el);
  });

  // If no intro overlay (maybe hidden server-side), animate immediately
  if (!introOverlay || introOverlay.classList.contains("hidden")) {
    animateHero();
  }

  // ========== FILTRES ET PROJETS ==========
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const showMoreBtn = document.getElementById("showMoreBtn");
  let currentFilter = "all";
  let allProjectsVisible = false;

  // Système de filtres
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      currentFilter = filter;

      // Update active button
      filterButtons.forEach((b) => {
        b.classList.remove("bg-accent", "text-primary");
        b.classList.add("bg-accent/10", "text-accent");
      });
      btn.classList.remove("bg-accent/10", "text-accent");
      btn.classList.add("bg-accent", "text-primary");

      // Filter projects
      filterProjects(filter);
    });
  });

  function filterProjects(filter) {
    const visibleProjects = allProjectsVisible
      ? Array.from(projectCards)
      : Array.from(projectCards).filter(
          (card) => !card.classList.contains("hidden-project")
        );

    visibleProjects.forEach((card) => {
      const category = card.getAttribute("data-category");
      const shouldShow = filter === "all" || category === filter;

      if (shouldShow) {
        if (card.style.display === "none") {
          card.style.display = "flex";
        }
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(card, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            card.style.display = "none";
          },
        });
      }
    });
  }

  // Bouton "Voir plus"
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      const hiddenProjects = document.querySelectorAll(".hidden-project");

      if (!allProjectsVisible) {
        // Afficher tous les projets
        hiddenProjects.forEach((project, index) => {
          const category = project.getAttribute("data-category");
          const shouldShow =
            currentFilter === "all" || category === currentFilter;

          if (shouldShow) {
            project.style.display = "flex";
            gsap.from(project, {
              opacity: 0,
              y: 30,
              duration: 0.5,
              delay: index * 0.1,
              ease: "power2.out",
            });
          }
        });

        allProjectsVisible = true;
        showMoreBtn.textContent = "Voir moins";
      } else {
        // Masquer les projets supplémentaires
        hiddenProjects.forEach((project) => {
          gsap.to(project, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              project.style.display = "none";
            },
          });
        });

        allProjectsVisible = false;
        showMoreBtn.textContent = "Voir plus";
      }
    });
  }

  // ========== CAROUSELS INDIVIDUELS PAR PROJET ==========
  const projectCarousels = document.querySelectorAll(".project-carousel-track");

  projectCarousels.forEach((track) => {
    const projectId = track.getAttribute("data-project-id");
    const slides = track.querySelectorAll(".project-carousel-slide");
    const prevBtn = document.querySelector(
      `.project-carousel-prev[data-project-id="${projectId}"]`
    );
    const nextBtn = document.querySelector(
      `.project-carousel-next[data-project-id="${projectId}"]`
    );
    const indicatorsContainer = document.querySelector(
      `.project-carousel-indicators[data-project-id="${projectId}"]`
    );

    if (slides.length <= 1) {
      // Masquer les boutons si une seule image
      if (prevBtn) prevBtn.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
      if (indicatorsContainer) indicatorsContainer.style.display = "none";
      return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Créer les indicateurs
    function createIndicators() {
      if (!indicatorsContainer) return;
      indicatorsContainer.innerHTML = "";
      for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement("button");
        indicator.className = `w-2 h-2 rounded-full transition-all ${
          i === 0 ? "bg-accent w-6" : "bg-accent/30"
        }`;
        indicator.setAttribute("aria-label", `Image ${i + 1}`);
        indicator.addEventListener("click", () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
      }
    }

    // Mettre à jour les indicateurs
    function updateIndicators() {
      const indicators = indicatorsContainer.querySelectorAll("button");
      indicators.forEach((ind, i) => {
        if (i === currentIndex) {
          ind.classList.add("bg-accent", "w-6");
          ind.classList.remove("bg-accent/30", "w-2");
        } else {
          ind.classList.add("bg-accent/30", "w-2");
          ind.classList.remove("bg-accent", "w-6");
        }
      });
    }

    // Animer le carousel
    function animateCarousel() {
      const trackWidth = track.parentElement.offsetWidth;
      const x = -currentIndex * trackWidth;

      gsap.to(track, {
        x: x,
        duration: 0.6,
        ease: "power2.out",
      });

      updateIndicators();
      updateButtons();
    }

    // Mettre à jour les boutons
    function updateButtons() {
      if (prevBtn) {
        prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
        prevBtn.style.cursor = currentIndex === 0 ? "not-allowed" : "pointer";
      }
      if (nextBtn) {
        nextBtn.style.opacity = currentIndex >= totalSlides - 1 ? "0.5" : "1";
        nextBtn.style.cursor =
          currentIndex >= totalSlides - 1 ? "not-allowed" : "pointer";
      }
    }

    // Aller à une slide spécifique
    function goToSlide(index) {
      if (index < 0 || index >= totalSlides) return;
      currentIndex = index;
      animateCarousel();
    }

    // Slide suivante
    function nextSlide() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        animateCarousel();
      }
    }

    // Slide précédente
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        animateCarousel();
      }
    }

    // Event listeners
    if (nextBtn) {
      nextBtn.addEventListener("click", nextSlide);
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", prevSlide);
    }

    // Support tactile/swipe
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    });

    // Initialiser
    createIndicators();
    gsap.set(track, { x: 0 });
    updateButtons();
  });
});
