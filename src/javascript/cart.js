//________________________SHOW CART_________________________________
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  let cartCost = localStorage.getItem("totalCost");

  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let productHeader = document.querySelector(".product-header");
  const orderForm = document.getElementById("order-form");

  if (cartItems && productContainer) {
    orderForm.style.opacity = "1";
    productContainer.innerHTML = "";
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
        <div class="product"> 
          <div class="title">
            <img src="${item.tag}">
            <div> 
              <p>${item.name}</p>
              <p class="specs">${item.specs}</p>
            </div>
          </div>
          <p class="price">$${item.price}.00</p>
          <p class="quantity">${item.inCart}</p>
          <p class="total">$${item.inCart * item.price}.00</p>
        </div>
          `;
    });
    productContainer.innerHTML += `
      <div class="total-cart">
        <p class="title">Cart Total</p>
        <p class="total">$${cartCost}.00</p>
        <a href="#top" class="content-button empty">Empty Cart</a>
      </div>
      `;
  } else {
    productHeader.style.display = "none";
    productContainer.innerHTML = `
      <section class="empty-cart">
        <p class="cart-subtitle">Your bag is currently empty.</p>
        <a href="shop.html" class="content-button">continue shopping &rarr;</a>
      </section>
     `;
  }
}
displayCart();
//________________________SUMBIT ORDER_________________________________
const inputValues = document.querySelectorAll(".text-input");
const orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", event => {
  inputValues.forEach(inputValue => {
    if (inputValue.value === "") {
      event.preventDefault();
      inputValue.classList.add("empty-box");
    } else {
      return true;
    }
  });
  localStorage.removeItem("productsInCart");
  localStorage.removeItem("totalCost");
  localStorage.removeItem("cartNumbers");
});
//________________________EMPTY CART_________________________________
import cup from "../ICON/cup.png";
const emptyButton = document.querySelector("a.content-button.empty");
emptyButton.addEventListener("click", () => {
  let productContainer = document.querySelector(".products");
  let productHeader = document.querySelector(".product-header");
  const counter = document.querySelector(".counter");
  orderForm.style.opacity = "0";
  localStorage.removeItem("productsInCart");
  localStorage.removeItem("totalCost");
  localStorage.removeItem("cartNumbers");

  counter.textContent = "";
  productHeader.style.display = "none";
  productContainer.innerHTML = `
    <section class="empty-box fill">
      <p class="empty-title">C'mon, give us a shot!</p>
      <p class="empty-subtitle">We promise you won't regret it.</p> 
      <a href="shop.html" class="content-button">continue shopping &rarr;</a>
      <img class="empty-cup" src="${cup}" alt="Coffee Cup" />
      <div class="fill-cup"></div>
    </section>
     `;
});
