export default function _addToCartFunction(buttonsFromPage, productsFromPage) {
  let products = productsFromPage;
  const counter = document.querySelector(".counter");

  //__________________________________Keep Total in Cart Page___________________________________________
  function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    if (cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + product.price);
    } else {
      localStorage.setItem("totalCost", product.price);
    }
  }
  //__________________________________Keep Number on Cart Icon___________________________________________
  function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      counter.textContent = productNumbers + 1;
    } else {
      localStorage.setItem("cartNumbers", 1);
      counter.textContent = 1;
    }
    setItems(product);
  }

  function keepCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
      counter.textContent = productNumbers;
    }
  }

  //_________________________________Create Products___________________________________________
  function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
      if (cartItems[product.tag] == undefined) {
        cartItems = {
          ...cartItems,
          [product.tag]: product,
        };
      }
      cartItems[product.tag].inCart += 1;
    } else {
      product.inCart = 1;
      cartItems = {
        [product.tag]: product,
      };
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  }
  //_________________________________Sync Buttons with Products___________________________________________

  for (let i = 0; i < buttonsFromPage.length; i++) {
    buttonsFromPage[i].addEventListener("click", () => {
      cartNumbers(products[i]);
      totalCost(products[i]);
    });
  }
  keepCartNumbers();
}
