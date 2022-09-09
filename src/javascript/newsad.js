// Newsletter
const btnNewsX = document.querySelector(".news-btn-x");
const newsBox = document.querySelector(".news-blur");
btnNewsX.addEventListener("click", () => {
  newsBox.classList.add("fade-box");
  setTimeout(() => {
    newsBox.style.display = "none";
  }, 150);
});
const btnNewsSubs = document.querySelector(".ad-news-submit");
btnNewsSubs.addEventListener("click", () => {
  newsBox.classList.add("fade-box");
  setTimeout(() => {
    newsBox.style.display = "none";
  }, 150);
});
