export default function _shopFunction(productTitle, productImages) {
  productTitle.addEventListener("click", event => {
    productImages.forEach(productImage => {
      productImage.classList.remove("active", "fade-in");
    });
    event.target.classList.add("active");
    const show = document.querySelector(event.target.dataset.name);
    show.classList.add("active", "fade-in");
    console.log(event.target);
    event.preventDefault();
  });
}
