document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const menuOverlay = document.createElement("div");
  menuOverlay.classList.add("menu-overlay");
  document.body.appendChild(menuOverlay);

  function toggleMenu() {
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "auto";

    // Toggle icon between hamburger and close
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  }

  menuToggle.addEventListener("click", toggleMenu);
  menuOverlay.addEventListener("click", toggleMenu);

  // Close menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu();
    });
  });
});
