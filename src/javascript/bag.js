const addToCartButtons = document.querySelectorAll(".cart-button");
addToCartButtons.forEach(addToCartButton => {
  const addedBackground = document.querySelector(".added-background");
  const addedBox = document.querySelector(".added-bag-box");
  addToCartButton.addEventListener("click", () => {});
  setTimeout(() => {
    addedBackground.classList.add("active");
    addedBox.classList.add("active");
  }, 200);
});
