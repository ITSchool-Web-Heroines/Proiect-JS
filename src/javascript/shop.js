import _shopFunction from "./function/shopFunction";
// GROUND;
const ground = document.querySelector(".ground-click");
const groundsAll = document.querySelectorAll(
  ".ground-click a, .ground-title-photo"
);
_shopFunction(ground, groundsAll);

//BEANS
const beans = document.querySelector(".beans-click");
const beansALL = document.querySelectorAll(
  ".beans-click a, .beans-title-photo"
);
_shopFunction(beans, beansALL);

//  PODS
const pods = document.querySelector(".pods-click");
const podsAll = document.querySelectorAll(".pods-click a, .pods-title-photo");
_shopFunction(pods, podsAll);

// SYRUP
const syrups = document.querySelector(".syrup-click");
const syrupsAll = document.querySelectorAll(
  ".syrup-click a, .syrup-title-photo"
);
_shopFunction(syrups, syrupsAll);

//CANDLES
const candles = document.querySelector(".candles-click");
const candlesALL = document.querySelectorAll(
  ".candles-click a, .candles-title-photo"
);
_shopFunction(candles, candlesALL);

//ACCESSORIES
const accs = document.querySelector(".accs-click");
const accsAll = document.querySelectorAll(".accs-click a, .accs-title-photo");
_shopFunction(accs, accsAll);
