document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("orderForm");
  const joinForm = document.getElementById("joinForm");
  const formTabs = document.querySelectorAll(".form-tab");

  // Verifică dacă există un parametru în URL pentru a deschide formularul specific
  const urlParams = new URLSearchParams(window.location.search);
  const formType = urlParams.get("form");

  if (formType === "join") {
    showForm("join");
  }

  // Funcție pentru a afișa formularul corect
  function showForm(type) {
    if (type === "join") {
      orderForm.classList.remove("active");
      joinForm.classList.add("active");
      formTabs[1].classList.add("active");
      formTabs[0].classList.remove("active");
    } else {
      orderForm.classList.add("active");
      joinForm.classList.remove("active");
      formTabs[0].classList.add("active");
      formTabs[1].classList.remove("active");
    }
  }

  // Event listeners pentru taburi
  formTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const formType = tab.getAttribute("data-form");
      showForm(formType);
    });
  });
});
