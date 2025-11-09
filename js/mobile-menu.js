document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  function toggleMenu() {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");
    if (icon) {
      if (menuToggle.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    }

    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "";
  }

  menuToggle.addEventListener("click", toggleMenu);

  // Make sure menu links are clickable
  const menuLinks = document.querySelectorAll(".nav-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          toggleMenu();
        }, 100);
      }
    });
  });
});
