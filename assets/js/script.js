const menuToggle = document.querySelector(".menu-toggle #bars");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
