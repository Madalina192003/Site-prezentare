document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const body = document.body;

  function toggleMenu() {
    hamburgerButton.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    body.classList.toggle("menu-open");

    // Toggle icon
    const icon = hamburgerButton.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  }

  // Event listeners
  hamburgerButton.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);

  // Close menu when clicking links
  const menuLinks = document.querySelectorAll(".mobile-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});
