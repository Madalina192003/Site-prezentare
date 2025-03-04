document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  function toggleMenu() {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("menu-open");

    // Toggle icon
    const icon = menuToggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // Close menu when clicking links
  const menuLinks = document.querySelectorAll(".nav-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });
});
