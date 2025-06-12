// Dark mode toggle
document.getElementById('dark-mode-toggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', this.checked);
});

// GSAP animations
gsap.from(".hero-title", { duration: 1, y: 50, opacity: 0 });
gsap.from(".hero-subtitle", { duration: 1, delay: 0.5, y: 30, opacity: 0 });
