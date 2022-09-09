// ADVERTISING
const btnX = document.querySelector(".btn-close");
btnX.addEventListener("click", () => {
  const ad = document.querySelector(".banner-box");
  const navMenu = document.querySelector(".nav-menu");
  ad.classList.add("fade-up");
  setTimeout(() => {
    navMenu.style.top = "0rem";
    ad.style.display = "none";
  }, 100);
});
