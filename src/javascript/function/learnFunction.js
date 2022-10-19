export default function _learnFunction(titlesLearn, textsLearn) {
  function removeActive() {
    titlesLearn.forEach(titleLearn => {
      titleLearn.classList.remove("active");
    });
    textsLearn.forEach(textLearn => {
      textLearn.classList.remove("active");
    });
  }
  titlesLearn.forEach((titleLearn, index) => {
    titleLearn.addEventListener("click", () => {
      removeActive();
      titleLearn.classList.add("active");
      textsLearn[index].classList.add("active", "fade-in");
    });
  });
}
