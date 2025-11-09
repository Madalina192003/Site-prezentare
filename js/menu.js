document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  let menuOverlay = document.querySelector(".menu-overlay");

  // Creează overlay dacă nu există
  if (!menuOverlay) {
    menuOverlay = document.createElement("div");
    menuOverlay.className = "menu-overlay";
    document.body.appendChild(menuOverlay);
  }

  function toggleMenu() {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "";

    const icon = menuToggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // Închide meniul la click pe overlay
  menuOverlay.addEventListener("click", toggleMenu);

  // Permite navigarea la click pe link
  const menuLinks = document.querySelectorAll(".nav-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
      // Permite browserului să navigheze normal către pagina respectivă
    });
  });
});
