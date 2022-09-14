const showMore = document.querySelector(".show-hide");
const text = document.querySelector(".foo");
showMore.addEventListener("click", (ev) => {
  text.classList.toggle("see-more");
});

const showMore2 = document.querySelector(".show-hide2");
const text2 = document.querySelector(".foo2");
showMore2.addEventListener("click", (ev) => {
  text2.classList.toggle("see-more");
});
