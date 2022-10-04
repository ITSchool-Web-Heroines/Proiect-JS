function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  let cartCost = localStorage.getItem("totalCost");

  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let productHeader = document.querySelector(".product-header");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
        <div class="product"> 
          <div class="title">
            <img src="./IMG/SHOP/${item.src}/${item.tag}.png">
            <p>${item.name}</p>
            <p class="specs">${item.specs}</p>
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
      </div>
      <div class="cart-result">
        <button class="content-button empty" "type="button">Empty Cart</button>
        <button class="content-button submit" type="button">Submit Order</button>
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
