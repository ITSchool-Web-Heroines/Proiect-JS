
import 'bootstrap';
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))


// scroll arrow up
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    toTop.classList.add("active");
  } 
  else {
    toTop.classList.remove("active");
  }
})


//FORm submit

const formElem = document.querySelector('form');

formElem.addEventListener('submit', (e) => {
    // on form submission, prevent default
    e.preventDefault();
    
    const formData = new FormData(formElem);

    console.log(formData.get('name')); 
    console.log(formData.get('email')); 
    console.log(formData.get('gender')); 
    console.log(formData.get('comments')); 

    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
    for (var checkbox of markedCheckbox) {  
      console.log(checkbox.value);     
    }  
})

function logSubmit(event) {
    log.textContent = `Form Submitted!`;
    event.preventDefault();
  }
  
    const form = document.getElementById('form');
    const log = document.getElementById('log');
    form.addEventListener('submit', logSubmit);

// 


// PHOTO GALLERY
// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)

// const images = document.querySelectorAll('img')
// images.forEach(image => {
//   image.addEventListener('click', e => {
//     lightbox.classList.add('active')
//     const img = document.createElement('img')
//     img.src = image.src
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild)
//     }
//     lightbox.appendChild(img)
//   })
// })

// lightbox.addEventListener('click', e => {
//   if (e.target !== e.currentTarget) return
//   lightbox.classList.remove('active')
// })


//intersectobserver
// Create the observer
// document.querySelector('aboutUs').scroll(function () {
//     document.querySelector('us').each(function () {
//         var imagePos = document.querySelector(this).offset().top;
//         var imageHeight = document.querySelector(this).height();
//         var topOfWindow = document.querySelector(window).scrollTop;

//         if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
//             document.querySelector(this).classList.add("square");
//         } else {
//             document.querySelector(this).classList.remove("square");
//         }
//     });
// });
