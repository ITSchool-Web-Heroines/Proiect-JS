// Newsletter
const btnNewsX = document.querySelector(".news-btn-x");
const btnNewsSubs = document.querySelector(".ad-news-submit");
const newsBox = document.querySelector(".news-blur");
const indexTitle = document.querySelector("p.subtitle.title");
const indexSubtitle = document.querySelector("p.subtitle.sub-title");

btnNewsX.addEventListener("click", () => {
  newsBox.classList.add("news-fade-out");
  showModal();
  setTimeout(() => {
    newsBox.style.display = "none";
    indexTitle.classList.add("title-ani");
    indexSubtitle.classList.add("title-ani");
  }, 150);
});
function showModal() {
  sessionStorage.setItem("modalShown", 1);
}
function hideModal() {
  let modalIsShown = sessionStorage.getItem("modalShown");
  if (modalIsShown > 0) {
    newsBox.style.display = "none";
  }
}
hideModal();
