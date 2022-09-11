// ADD TO CART +1
var counter = document.querySelector(".counter");
const addToCartButtons = document.querySelectorAll(".cart-button");
addToCartButtons.forEach(addToCartButton => {
  addToCartButton.addEventListener("click", () => {
    counter.classList.add("active");
  });
  addToCartButton.addEventListener("click", event => {
    // console.log(counter);
    var counterValue = counter.innerHTML;
    // console.log(counterValue);
    var plusValue = parseInt(counterValue) + 1;
    // console.log(plusValue);
    counter.innerHTML = plusValue;
  });
});
