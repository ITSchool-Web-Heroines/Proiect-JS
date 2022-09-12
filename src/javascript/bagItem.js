// ADD TO CART +1
const counter = document.querySelector(".counter");
const addToCartButtons = document.querySelectorAll(".cart-button");
const bagLink = document.querySelector(".nav-menu li:nth-child(5) a");
addToCartButtons.forEach(addToCartButton => {
  addToCartButton.addEventListener("click", () => {
    bagLink.classList.add("active");
  });
  addToCartButton.addEventListener("click", () => {
    cartNumbers();
  });
});
function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    counter.textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    counter.textContent = 1;
  }
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    counter.textContent = productNumbers;
  }
}
onLoadCartNumbers();
