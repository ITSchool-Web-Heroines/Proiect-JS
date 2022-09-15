const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link, .nav-link-special").forEach((event) =>
  event.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const hover = document.querySelector("#new");
hover.addEventListener(
  "mouseover",
  (ev) => {
    ev.target.style.fontSize = "2rem";

    setTimeout(() => {
      ev.target.style.fontSize = "";
    }, 700);
  },
  false
);

const photo = document.querySelector(".slider");
photo.addEventListener("mouseover", (ev) => {
  const items = document.querySelectorAll(".imgg");
  items.forEach((value) => {
    ev.target.style.backgroundColor = "rgba(0,0,0,0.8)";
  });
});
