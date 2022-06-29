const menuToggle = document.querySelector(".menu-toggle #bars");
const nav = document.querySelector("nav ul");
window.addEventListener("scroll", show);

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

function show() {
  let elements = document.querySelectorAll(".elemen");

  for (let i = 0; i < elements.length; i++) {
    let topScreen = window.innerHeight;
    let elementTopDistance = elements[i].getBoundingClientRect().top;
    let scrollSize = 150;

    if (elementTopDistance < topScreen - scrollSize) {
      elements[i].classList.add("show");
    } else {
      elements[i].classList.remove("show");
    }
  }
}
