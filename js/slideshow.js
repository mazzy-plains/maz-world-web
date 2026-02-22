document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".bg-slide");
  let current = 0;

  if (slides.length === 0) return;

  slides[current].classList.add("active");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 300000); // 5 minutes
});