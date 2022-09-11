const addToCartButtons = document.querySelectorAll(".cart-button");
addToCartButtons.forEach(addToCartButton => {
  const addedBackground = document.querySelector(".added-background");
  const addedBox = document.querySelector(".added-bag-box");
  const checkSign = document.querySelector(".check");
  addToCartButton.addEventListener("click", () => {
    addedBackground.classList.add("active", "fade-in");
    addedBox.classList.add("active", "fade-in");
    checkSign.classList.add("active", "fade-in");
    setTimeout(() => {
      addedBackground.classList.add("fade-out");
      addedBox.classList.add("fade-out");
      setTimeout(() => {
        addedBackground.classList.remove("active", "fade-out");
        addedBox.classList.remove("active", "fade-out");
      }, 100);
    }, 1600);
  });
});
