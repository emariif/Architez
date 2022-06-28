const menuToggle = document.querySelector(".menu-toggle #bars");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
