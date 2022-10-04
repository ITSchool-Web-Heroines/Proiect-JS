import _addToCartFunction from "./function/addToCartFunction";

// GROUND COFFEE
let productsFromGround = [
  {
    name: "ANTIGUA BLEND",
    tag: "C-AB",
    src: "CB",
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "BRAZIL BLEND",
    tag: "C-BB",
    src: "CB",
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "DECAF BLEND",
    tag: "C-DB",
    src: "CB",
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "ETHIOPIA BLEND",
    tag: "C-EB",
    src: "CB",
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "FRENCH BLEND",
    tag: "C-FB",
    src: "CB",
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "HOUSE BLEND",
    tag: "C-HB",
    src: "CB",
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "TREAT BLEND",
    tag: "C-TB",
    src: "CB",
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "UGANDA BLEND",
    tag: "C-UB",
    src: "CB",
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "VANILLA BLEND",
    tag: "C-VB",
    src: "CB",
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
];
const buttonsFromGround = document.querySelectorAll(".ground .cart-button");
_addToCartFunction(buttonsFromGround, productsFromGround);
//______________________________________________________
// COFFEE BEANS
let productsFromBeans = [
  {
    name: "ANTIGUA BLEND",
    tag: "B-AB",
    src: "BB",
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "BRAZIL BLEND",
    tag: "B-BB",
    src: "BB",
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "DECAF BLEND",
    tag: "B-DB",
    src: "BB",
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "ETHIOPIA BLEND",
    tag: "B-EB",
    src: "BB",
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "FRENCH BLEND",
    tag: "B-FB",
    src: "BB",
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "HOUSE BLEND",
    tag: "B-HB",
    src: "BB",
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "TREAT BLEND",
    tag: "B-TB",
    src: "BB",
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "UGANDA BLEND",
    tag: "B-UB",
    src: "BB",
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "VANILLA BLEND",
    tag: "B-VB",
    src: "BB",
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
];
const buttonsFromBeans = document.querySelectorAll(".beans .cart-button");
_addToCartFunction(buttonsFromBeans, productsFromBeans);
//______________________________________________________
// COFFEE PODS
let productsFromPods = [
  {
    name: "ANTIGUA BLEND",
    tag: "CP-AB",
    src: "CP",
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "BRAZIL BLEND",
    tag: "CP-BB",
    src: "CP",
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "DECAF BLEND",
    tag: "CP-DB",
    src: "CP",
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "ETHIOPIA BLEND",
    tag: "CP-EB",
    src: "CP",
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "FRENCH BLEND",
    tag: "CP-FB",
    src: "CP",
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "HOUSE BLEND",
    tag: "CP-HB",
    src: "CP",
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "TREAT BLEND",
    tag: "CP-TB",
    src: "CP",
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "UGANDA BLEND",
    tag: "CP-UB",
    src: "CP",
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "VANILLA BLEND",
    tag: "CP-VB",
    src: "CP",
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
];
const buttonsFromPods = document.querySelectorAll(".pods .cart-button");
_addToCartFunction(buttonsFromPods, productsFromPods);
//______________________________________________________
// COFFEE SYRUP
let productsFromSyrup = [
  {
    name: "ALMOND SYRUP",
    tag: "SA",
    src: "S",
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "CARAMEL SYRUP",
    tag: "SC",
    src: "S",
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "CHOCOLATE SYRUP",
    tag: "SCC",
    src: "S",
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "COCONUT SYRUP",
    tag: "SCO",
    src: "S",
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "HAZELNUT SYRUP",
    tag: "SH",
    src: "S",
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "IRISH SYRUP",
    tag: "SI",
    src: "S",
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "PUMPKIN SYRUP",
    tag: "SPS",
    src: "S",
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "TIRAMISU SYRUP",
    tag: "ST",
    src: "S",
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "VANILLA SYRUP",
    tag: "SV",
    src: "S",
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
];
const buttonsFromSyrup = document.querySelectorAll(".syrup .cart-button");
_addToCartFunction(buttonsFromSyrup, productsFromSyrup);
//______________________________________________________
// SCENTED CANDLES
let productsFromCandles = [
  {
    name: "AMBER & SMOKE",
    tag: "CC-AS",
    src: "CC",
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
  {
    name: "CINNAMON SPICE",
    tag: "CC-CNS",
    src: "CC",
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
  {
    name: "CAPPUCCINO & SOY",
    tag: "CC-CS",
    src: "CC",
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
  {
    name: "ESPRESSO",
    tag: "CC-EC",
    src: "CC",
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
  {
    name: "MORNING BREW",
    tag: "CC-MB",
    src: "CC",
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
  {
    name: "TURKISH",
    tag: "CC-TC",
    src: "CC",
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
];
const buttonsFromCandles = document.querySelectorAll(".candles .cart-button");
_addToCartFunction(buttonsFromCandles, productsFromCandles);
//______________________________________________________
// ACCESORIES
let productsFromAccs = [
  {
    name: "BLACK TUMBLER",
    specs: "Insulated Coffee Tumbler",
    tag: "BB",
    src: "ACC",
    price: 11,
    inCart: 0,
  },
  {
    name: "GREY TUMBLER",
    specs: "Insulated Coffee Tumbler",
    tag: "BG",
    src: "ACC",
    price: 11,
    inCart: 0,
  },
  {
    name: "WHITE TUMBLER",
    specs: "Insulated Coffee Tumbler",
    tag: "BW",
    src: "ACC",
    price: 11,
    inCart: 0,
  },
  {
    name: "COFFEE JAR",
    specs: "Stainless Steel Jar",
    tag: "CC",
    src: "ACC",
    price: 12,
    inCart: 0,
  },
  {
    name: "SUGAR JAR",
    specs: "Stainless Steel Jar",
    tag: "CS",
    src: "ACC",
    price: 12,
    inCart: 0,
  },
  {
    name: "TEA JAR",
    specs: "Stainless Steel Jar",
    tag: "CT",
    src: "ACC",
    price: 12,
    inCart: 0,
  },
  {
    name: "BLACK COASTERS",
    specs: "Sandstone Coasters",
    tag: "COS-BW",
    src: "ACC",
    price: 15,
    inCart: 0,
  },
  {
    name: "BROWN COASTERS",
    specs: "Sandstone Coasters",
    tag: "COS-DB",
    src: "ACC",
    price: 15,
    inCart: 0,
  },
  {
    name: "LIGHT COASTERS",
    specs: "Sandstone Coasters",
    tag: "COS-LW",
    src: "ACC",
    price: 15,
    inCart: 0,
  },
];
const buttonsFromAccs = document.querySelectorAll(".accs .cart-button");

_addToCartFunction(buttonsFromAccs, productsFromAccs);
