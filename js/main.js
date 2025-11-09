document.addEventListener("DOMContentLoaded", function () {
  // Insert WhatsApp button
  (function insertWhatsApp() {
    if (document.querySelector(".whatsapp-btn")) return;
    const btn = document.createElement("a");
    btn.className = "whatsapp-btn";
    btn.href = "#";
    btn.setAttribute("role", "button");
    btn.setAttribute("aria-label", "WhatsApp");
    btn.innerHTML =
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 0 5.373 0 12a11.9 11.9 0 0 0 2.18 6.6L0 24l5.55-1.45A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52z" fill="#fff"/><path d="M17.5 14.2c-.3-.15-1.75-.85-2.02-.95-.27-.1-.47-.15-.67.15s-.77.95-.95 1.15c-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.18 0-.34-.02-.48-.02-.15-.67-1.62-.9-2.22-.24-.6-.48-.52-.67-.53-.17-.02-.37-.02-.57-.02-.2 0-.52.07-.8.35-.27.28-1.05 1.03-1.05 2.5 0 1.45 1.08 2.85 1.23 3.05.15.2 2.12 3.25 5.14 4.55 3.02 1.3 3.02.87 3.57.82.55-.05 1.78-.72 2.03-1.41.25-.7.25-1.3.17-1.41-.07-.11-.27-.18-.57-.33z" fill="#25D366"/></svg>';

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const phone =
        document.body.dataset.whatsapp || window.whatsappNumber || "";
      const text = encodeURIComponent(document.title || "Salut");
      if (!phone) {
        // no number provided – just open whatsapp homepage
        window.open("https://web.whatsapp.com/", "_blank");
        return;
      }
      const url =
        "https://wa.me/" + phone.replace(/[^0-9]/g, "") + "?text=" + text;
      window.open(url, "_blank");
    });

    document.body.appendChild(btn);
  })();

  // Cookie banner
  (function handleCookies() {
    if (localStorage.getItem("cookieConsent")) return;

    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML = `
      <p>Folosim cookie-uri pentru a îmbunătăți experiența. Acceptați cookie-urile?</p>
      <div class="cookie-actions">
        <button class="cookie-btn cookie-accept">Accept</button>
        <button class="cookie-btn cookie-reject">Respinge</button>
      </div>
    `;

    document.body.appendChild(banner);

    banner
      .querySelector(".cookie-accept")
      .addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        banner.remove();
      });

    banner
      .querySelector(".cookie-reject")
      .addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "rejected");
        banner.remove();
      });
  })();

  // Product filtering
  (function productFilters() {
    const filterBar = document.querySelector(".product-filter-bar");
    if (!filterBar) return;

    const btns = filterBar.querySelectorAll(".category-filter-btn");
    const cards = document.querySelectorAll(".product-card");

    function applyFilter(category) {
      cards.forEach((card) => {
        const catAttr = card.dataset.category || card.dataset.categories || "";
        const cats = catAttr
          .toLowerCase()
          .split(",")
          .map((c) => c.trim());
        if (category === "all" || !category) {
          card.style.display = "";
        } else if (cats.includes(category.toLowerCase())) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    }

    btns.forEach((btn) => {
      btn.addEventListener("click", function () {
        btns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        const category = this.dataset.category || this.textContent.trim();
        applyFilter(category);
      });
    });

    // Initialize: if a button has .active apply it
    const active = filterBar.querySelector(".category-filter-btn.active");
    if (active)
      applyFilter(active.dataset.category || active.textContent.trim());
  })();

  // Read more toggle for product descriptions
  (function readMore() {
    document.querySelectorAll(".read-more").forEach((btn) => {
      btn.addEventListener("click", function () {
        const card = this.closest(".product-card");
        if (!card) return;
        const detail = card.querySelector(".product-detail");
        if (!detail) return;
        const expanded = detail.classList.toggle("expanded");
        this.textContent = expanded ? "Vezi mai puțin" : "Citește mai mult";
      });
    });
  })();

  // Video modal
  (function videoModal() {
    function createModal() {
      let modal = document.querySelector(".video-modal");
      if (modal) return modal;
      modal = document.createElement("div");
      modal.className = "video-modal";
      modal.innerHTML = `
        <div class="video-wrap">
          <button class="close-video" style="position:absolute;right:1rem;top:1rem;z-index:10;background:transparent;border:none;color:#fff;font-size:2.4rem;cursor:pointer">&times;</button>
          <div class="video-inner" style="position:relative;padding-top:56.25%;height:0;overflow:hidden;">
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
      });
      modal.querySelector(".close-video").addEventListener("click", closeModal);
      return modal;
    }

    function openModal(src) {
      const modal = createModal();
      const inner = modal.querySelector(".video-inner");
      inner.innerHTML = "";
      if (!src) return;
      const iframe = document.createElement("iframe");
      iframe.src = src;
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.style.position = "absolute";
      iframe.style.top = "0";
      iframe.style.left = "0";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      inner.appendChild(iframe);
      modal.classList.add("active");
    }

    function closeModal() {
      const modal = document.querySelector(".video-modal");
      if (!modal) return;
      const inner = modal.querySelector(".video-inner");
      inner.innerHTML = "";
      modal.classList.remove("active");
    }

    document.querySelectorAll(".video-badge").forEach((b) => {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        const src = this.dataset.video || this.getAttribute("data-video-src");
        if (!src) return;
        openModal(src);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        const modal = document.querySelector(".video-modal");
        if (modal && modal.classList.contains("active")) closeModal();
      }
    });
  })();

  // Testimonial slider logic
  const testimonialSlider = document.getElementById("testimonialSlider");
  const testimonialSlides = testimonialSlider
    ? testimonialSlider.querySelectorAll(".testimonial-slide")
    : [];
  const testimonialDots = document.querySelectorAll(".testimonial-dots .dot");
  let testimonialIndex = 0;

  function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
    showTestimonial(testimonialIndex);
  }

  function prevTestimonial() {
    testimonialIndex =
      (testimonialIndex - 1 + testimonialSlides.length) %
      testimonialSlides.length;
    showTestimonial(testimonialIndex);
  }

  if (document.getElementById("nextTestimonial")) {
    document
      .getElementById("nextTestimonial")
      .addEventListener("click", nextTestimonial);
  }
  if (document.getElementById("prevTestimonial")) {
    document
      .getElementById("prevTestimonial")
      .addEventListener("click", prevTestimonial);
  }
  testimonialDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      testimonialIndex = i;
      showTestimonial(testimonialIndex);
    });
  });
  showTestimonial(testimonialIndex);
});
