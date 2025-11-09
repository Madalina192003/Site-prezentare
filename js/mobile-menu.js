document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var navMenu = document.querySelector(".nav-menu");
  var menuOverlay = document.querySelector(".menu-overlay");

  if (!menuToggle || !navMenu) return;

  if (!menuOverlay) {
    menuOverlay = document.createElement("div");
    menuOverlay.className = "menu-overlay";
    document.body.appendChild(menuOverlay);
  }

  function openMenu() {
    navMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      if (navMenu.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }

  var menuLinks = document.querySelectorAll(".nav-menu a");
  if (menuLinks && menuLinks.length) {
    menuLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }
});
