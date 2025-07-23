document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".Navbar");
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    const trigger = hero.offsetHeight / 2;

    if (window.scrollY > trigger) {
      navbar.style.backgroundColor = "#fffcd7";
      navbar.style.color = "#2c5234"; // 🌿 green text when background is light
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.color = "#ffffff"; // white text when background is transparent
    }
  });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});