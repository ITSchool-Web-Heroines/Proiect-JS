// Newsletter
const btnNewsX = document.querySelector(".news-btn-x");
const btnNewsSubs = document.querySelector(".ad-news-submit");
const newsBox = document.querySelector(".news-blur");
const indexTitle = document.querySelector("p.subtitle.title");
const indexSubtitle = document.querySelector("p.subtitle.sub-title");

function showModal() {
  localStorage.setItem("modalShown", 1);
}
function hideModal() {
  let modalIsShown = localStorage.getItem("modalShown");
  if (modalIsShown > 0) {
    newsBox.style.display = "none";
  }
}
function closeNewsletter(button) {
  button.addEventListener("click", () => {
    newsBox.classList.add("news-fade-out");
    showModal();
    setTimeout(() => {
      newsBox.style.display = "none";
    }, 150);
  });
}

closeNewsletter(btnNewsX);
hideModal();
