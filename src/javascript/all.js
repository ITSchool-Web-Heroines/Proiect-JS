// MENU ALL
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// MENU HIDE ON SCROLL
window.addEventListener("scroll", () => {
  const scrollPage = window.scrollY;
  if (scrollPage > 4) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});
// SCROLL ARROW UP
window.addEventListener("scroll", () => {
  const scrollPage = window.scrollY;
  const arrowUp = document.querySelector(".back-top");
  if (scrollPage > 4) {
    arrowUp.classList.remove("empty");
    arrowUp.classList.add("fade-in");
  } else {
    arrowUp.classList.add("empty");
    arrowUp.classList.remove("fade-in");
  }
});

// SUBSCRIBE EVENT

// function clearInput(formInput) {
//   console.log(formInput.value);
//   formInput.value = "";
// }
const formInputs = document.querySelectorAll("input");
const messageInput = document.querySelector("textarea");
const submitForms = document.querySelectorAll("form");
const submitBox = document.querySelector(".submit-background");
submitForms.forEach(submitForm => {
  submitForm.addEventListener("submit", event => {
    event.preventDefault();
    submitBox.classList.add("fill");
    setTimeout(() => {
      submitBox.classList.remove("fill");
    }, 3500);
    formInputs.forEach(formInput => {
      console.log(formInput.value);
      formInput.value = "";
    });
    messageInput.value = "";
  });
});
