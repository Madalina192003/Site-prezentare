document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  // Creează overlay-ul pentru meniu
  const menuOverlay = document.createElement("div");
  menuOverlay.classList.add("menu-overlay");
  body.appendChild(menuOverlay);

  // Funcție pentru toggle meniu
  function toggleMenu() {
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    body.classList.toggle("menu-open");

    // Schimbă iconița între hamburger și x
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  }

  // Event listeners
  menuToggle.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);

  // Închide meniul când se face click pe un link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu();
    });
  });

  // Închide meniul la resize dacă e deschis
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});
