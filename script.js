document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".menu");

  if (navToggle && menu) {
    navToggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
});
