document.addEventListener("DOMContentLoaded", function () {
  // Selectăm elementele necesare
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  if (!menuToggle || !navMenu) {
    console.error("Menu elements not found!");
    return;
  }

  // Adăugăm overlay-ul pentru fundal
  const menuOverlay = document.createElement("div");
  menuOverlay.classList.add("menu-overlay");
  body.appendChild(menuOverlay);

  function toggleMenu() {
    // Toggle pentru meniu
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    body.classList.toggle("menu-open");

    // Schimbă iconița între hamburger și x
    const icon = menuToggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
  }

  // Event listeners
  menuToggle.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);

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

  // Actualizează clasa active pentru link-ul curent
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
