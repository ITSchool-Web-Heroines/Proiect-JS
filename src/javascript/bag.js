const addToCartButtons = document.querySelectorAll(".cart-button");
addToCartButtons.forEach(addToCartButton => {
  const addedBackground = document.querySelector(".added-background");
  const addedBox = document.querySelector(".added-bag-box");
  const checkSign = document.querySelector(".check");
  addToCartButton.addEventListener("click", () => {
    addedBackground.classList.add("active");
    addedBox.classList.add("active");
    checkSign.classList.add("active");
    setTimeout(() => {
      addedBackground.classList.remove("active");
      addedBox.classList.remove("active");
    }, 2000);
  });
});
