const butoane = document.querySelector('.button');
console.log(butoane);

const text = document.querySelector('.text-box');
console.log(text);

butoane.addEventListener("click", (eveniment) => {
    const divuri = document.querySelectorAll('.button button')
    divuri.forEach((valoare) => {
        valoare.classList.remove("btn");
    })
    const texting = document.querySelectorAll('.text-box article')
    texting.forEach((valoare) => {
        valoare.classList.remove("btn");
    })
    eveniment.target.classList.add("btn");
    console.log(eveniment.target.dataset);
    const constant = eveniment.target.dataset.site;
    console.log(constant);
    const a = document.querySelector(constant);
    console.log(a);
    a.classList.add("btn");

})

const buton = document.querySelector("#dino");
console.log(buton);
const meniu = document.querySelector(".menu");
console.log(meniu);

buton.addEventListener("click", () => {
    meniu.style.display = 'none';
})

const a = document.querySelector('#bacon');
console.log(a);

a.addEventListener("click", () => {
    meniu.style.display = 'block';
})