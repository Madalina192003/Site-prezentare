document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;
  const menuIcon = menuToggle.querySelector("i");

  function toggleMenu() {
    navMenu.classList.toggle("active");
    body.classList.toggle("menu-open");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
  }

  menuToggle.addEventListener("click", toggleMenu);

  // Închide meniul când se face click pe un link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  // Închide meniul la resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});
