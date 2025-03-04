document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;
  const menuIcon = menuToggle.querySelector("i");

  // Creează overlay-ul pentru fundal
  const menuOverlay = document.createElement("div");
  menuOverlay.classList.add("menu-overlay");
  body.appendChild(menuOverlay);

  function toggleMenu(event) {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    body.classList.toggle("menu-open");

    // Schimbă iconița între hamburger și x
    const icon = menuToggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }

    // Previne comportamentul implicit doar pentru click-uri pe hamburger sau overlay
    if (event) {
      event.preventDefault();
    }
  }

  // Event listeners
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }
  menuOverlay.addEventListener("click", toggleMenu);

  // Închide meniul când se face click pe un link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });

  // Închide meniul la resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Adaugă clasa active pentru pagina curentă
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
