
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

const email= document.querySelector('input[type="email"]');

email.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});

email.addEventListener('blur', (event) => {
  event.target.style.background = '';

  event.preventDefault() 
});