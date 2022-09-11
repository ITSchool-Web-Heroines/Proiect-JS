// ADVERTISING
const btnX = document.querySelector(".btn-close");
const banner = document.querySelector(".banner-box");
const navMenu = document.querySelector(".nav-menu");
btnX.addEventListener("click", () => {
  banner.classList.add("fade-up");
  setTimeout(() => {
    navMenu.style.top = "0rem";
    banner.style.display = "none";
  }, 100);
});
// SCROLL
window.addEventListener("scroll", () => {
  const scrollPage = window.scrollY;
  if (scrollPage > 5) {
    navMenu.style.top = "0rem";
    banner.style.display = "none";
  } else {
    banner.style.display = "flex";
    navMenu.style.top = "var(--navmenu-top)";
  }
});
