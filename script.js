document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".testimonial-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  prevBtn.addEventListener("click", () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
  });

  nextBtn.addEventListener("click", () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopSlideShow();
      currentIndex = index;
      showSlide(currentIndex);
      startSlideShow();
    });
  });

  startSlideShow();

  const orderForm = document.getElementById("orderForm");
  const joinForm = document.getElementById("joinForm");
  const orderSuccessMessage = document.getElementById("orderSuccessMessage");
  const joinSuccessMessage = document.getElementById("joinSuccessMessage");
  const formTabs = document.querySelectorAll(".form-tab");
  const forms = document.querySelectorAll(".form");
  const successNotification = document.createElement("div");

  successNotification.className = "success-notification";
  document.body.appendChild(successNotification);

  function showSuccessNotification(message) {
    successNotification.textContent = message;
    successNotification.style.display = "block";
    setTimeout(() => {
      successNotification.style.display = "none";
    }, 3000);
  }

  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(orderForm);
    const data = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        orderSuccessMessage.style.display = "block";
        showSuccessNotification(
          "Formularul de comandă a fost trimis cu succes!"
        );
      })
      .catch(() => {
        alert("Error submitting form");
      });
  });

  joinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(joinForm);
    const data = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/api/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        joinSuccessMessage.style.display = "block";
        showSuccessNotification(
          "Formularul de înscriere a fost trimis cu succes!"
        );
      })
      .catch(() => {
        alert("Error submitting form");
      });
  });

  formTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      formTabs.forEach((t) => t.classList.remove("active"));
      forms.forEach((f) => f.classList.remove("active"));
      tab.classList.add("active");
      forms[index].classList.add("active");
    });
  });

  // Contact Pop-up
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

  // Scroll Animations
  const scrollElements = document.querySelectorAll(".scroll-animation");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  handleScrollAnimation();
});
