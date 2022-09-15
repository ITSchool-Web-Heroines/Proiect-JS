const showMore = document.querySelector(".show-hide");
const text = document.querySelector(".foo");
showMore.addEventListener("click", (ev) => {
  text.classList.toggle("see-more");
});
