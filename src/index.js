const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

//read more

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".more-text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("visible");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";

   
  }
  e.preventDefault()
});



