document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contactBtn");
  const contactPopup = document.getElementById("contactPopup");
  const closeBtn = document.querySelector(".close-btn");

  contactBtn.addEventListener("click", () => {
    contactPopup.style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable scrolling
  });

  closeBtn.addEventListener("click", () => {
    contactPopup.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  });

  window.addEventListener("click", (event) => {
    if (event.target === contactPopup) {
      contactPopup.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  });
});
