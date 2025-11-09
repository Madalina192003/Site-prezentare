document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  let menuOverlay = document.querySelector(".menu-overlay");

  if (!menuToggle || !navMenu) return;

  // Creare overlay dacă nu există
  if (!menuOverlay) {
    menuOverlay = document.createElement("div");
    menuOverlay.className = "menu-overlay";
    document.body.appendChild(menuOverlay);
  }

  function toggleMenu() {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");

    // Toggle body scroll
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "";

    // Toggle icon
    const icon = menuToggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
  }

  // Toggle menu on hamburger click
  menuToggle.addEventListener("click", toggleMenu);

  // Close menu on overlay click
  menuOverlay.addEventListener("click", toggleMenu);

  // Close menu on link click and allow navigation
  const menuLinks = document.querySelectorAll(".nav-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });
});
