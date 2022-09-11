// MENU ALL
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(event =>
  event.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
);
// SCROLL ARROW UP
window.addEventListener("scroll", () => {
  const scrollPage = window.scrollY;
  const arrowUp = document.querySelector(".back-top");
  if (scrollPage > 4) {
    arrowUp.classList.remove("empty");
    arrowUp.classList.add("fade-in");
  } else {
    arrowUp.classList.add("empty");
    arrowUp.classList.remove("fade-in");
  }
});
