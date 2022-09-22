const inputValues = document.querySelectorAll(".text-input");
const contactForm = document.querySelector(".contact-form");
const checkInputs = document.querySelectorAll("input[type=checkbox]");

checkInputs.forEach(checkInput => {
  checkInput.addEventListener("click", () => {
    checkInput.classList.remove("empty-box");
  });
});

contactForm.addEventListener("submit", event => {
  inputValues.forEach(inputValue => {
    if (inputValue.value === "") {
      event.preventDefault();
      inputValue.classList.add("empty-box");
    } else {
      return true;
    }
  });
  checkInputs.forEach(checkInput => {
    if (checkInput.checked === false) {
      event.preventDefault();
      checkInput.classList.add("empty-box");
    } else {
      return true;
    }
  });
});
