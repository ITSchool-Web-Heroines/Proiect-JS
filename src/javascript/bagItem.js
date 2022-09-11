// ADD TO CART +1
const shopBag = document.querySelector(".nav-item:nth-child(5)");
const addToCartButtons = document.querySelectorAll(".cart-button");
addToCartButtons.forEach(addToCartButton => {
  addToCartButton.addEventListener("click", () => {
    shopBag.classList.add("active");
  });
});
