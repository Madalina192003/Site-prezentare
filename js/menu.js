document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  function toggleMenu() {
    // Toggle menu
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

  // Toggle menu on button click
  menuToggle.addEventListener("click", toggleMenu);

  // Close menu when clicking links
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });
});
