document.addEventListener("DOMContentLoaded", function () {
  // Variabile globale
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  let menuOpen = false;

  // ==================== Funcții de utilitate ====================
  function createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    document.body.appendChild(overlay);

    overlay.addEventListener("click", function () {
      toggleMenu();
    });

    return overlay;
  }

  function toggleMenu() {
    const overlay = document.querySelector(".menu-overlay");
  }
});
