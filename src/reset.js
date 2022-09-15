const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});


function logReset(event) {
    log.textContent = ``;
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('reset', logReset);