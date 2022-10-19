import _addToCartFunction from "./function/addToCartFunction";

// GROUND COFFEE
import GAB from "../IMG/SHOP/CB/C-AB.png";
import GBB from "../IMG/SHOP/CB/C-BB.png";
import GDB from "../IMG/SHOP/CB/C-DB.png";
import GEB from "../IMG/SHOP/CB/C-EB.png";
import GFB from "../IMG/SHOP/CB/C-FB.png";
import GHB from "../IMG/SHOP/CB/C-HB.png";
import GTB from "../IMG/SHOP/CB/C-TB.png";
import GUB from "../IMG/SHOP/CB/C-UB.png";
import GVB from "../IMG/SHOP/CB/C-VB.png";
let productsFromGround = [
  {
    name: "ANTIGUA BLEND",
    tag: GAB,
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "BRAZIL BLEND",
    tag: GBB,
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "DECAF BLEND",
    tag: GDB,
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "ETHIOPIA BLEND",
    tag: GEB,
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "FRENCH BLEND",
    tag: GFB,
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "HOUSE BLEND",
    tag: GHB,
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "TREAT BLEND",
    tag: GTB,
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "UGANDA BLEND",
    tag: GUB,
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
  {
    name: "VANILLA BLEND",
    tag: GVB,
    specs: "Ground Coffee",
    price: 17,
    inCart: 0,
  },
];
const buttonsFromGround = document.querySelectorAll(".ground .cart-button");
_addToCartFunction(buttonsFromGround, productsFromGround);
//______________________________________________________
// COFFEE BEANS
import BAB from "../IMG/SHOP/BB/B-AB.png";
import BBB from "../IMG/SHOP/BB/B-BB.png";
import BDB from "../IMG/SHOP/BB/B-DB.png";
import BEB from "../IMG/SHOP/BB/B-EB.png";
import BFB from "../IMG/SHOP/BB/B-FB.png";
import BHB from "../IMG/SHOP/BB/B-HB.png";
import BTB from "../IMG/SHOP/BB/B-TB.png";
import BUB from "../IMG/SHOP/BB/B-UB.png";
import BVB from "../IMG/SHOP/BB/B-VB.png";
let productsFromBeans = [
  {
    name: "ANTIGUA BLEND",
    tag: BAB,
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "BRAZIL BLEND",
    tag: BBB,
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "DECAF BLEND",
    tag: BDB,
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "ETHIOPIA BLEND",
    tag: BEB,
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "FRENCH BLEND",
    tag: BFB,
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "HOUSE BLEND",
    tag: BHB,
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "TREAT BLEND",
    tag: BTB,
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "UGANDA BLEND",
    tag: BUB,
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
  {
    name: "VANILLA BLEND",
    tag: BVB,
    specs: "Coffee Beans",
    price: 15,
    inCart: 0,
  },
];
const buttonsFromBeans = document.querySelectorAll(".beans .cart-button");
_addToCartFunction(buttonsFromBeans, productsFromBeans);
//______________________________________________________
// COFFEE PODS
import CPAB from "../IMG/SHOP/CP/CP-AB.png";
import CPBB from "../IMG/SHOP/CP/CP-BB.png";
import CPDB from "../IMG/SHOP/CP/CP-DB.png";
import CPEB from "../IMG/SHOP/CP/CP-EB.png";
import CPFB from "../IMG/SHOP/CP/CP-FB.png";
import CPHB from "../IMG/SHOP/CP/CP-HB.png";
import CPTB from "../IMG/SHOP/CP/CP-TB.png";
import CPUB from "../IMG/SHOP/CP/CP-UB.png";
import CPVB from "../IMG/SHOP/CP/CP-VB.png";
let productsFromPods = [
  {
    name: "ANTIGUA BLEND",
    tag: CPAB,
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "BRAZIL BLEND",
    tag: CPBB,
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "DECAF BLEND",
    tag: CPDB,
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "ETHIOPIA BLEND",
    tag: CPEB,
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "FRENCH BLEND",
    tag: CPFB,
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "HOUSE BLEND",
    tag: CPHB,
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "TREAT BLEND",
    tag: CPTB,
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "UGANDA BLEND",
    tag: CPUB,
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
  {
    name: "VANILLA BLEND",
    tag: CPVB,
    specs: "24 Coffee Pods",
    price: 21,
    inCart: 0,
  },
];
const buttonsFromPods = document.querySelectorAll(".pods .cart-button");
_addToCartFunction(buttonsFromPods, productsFromPods);
//______________________________________________________
// COFFEE SYRUP
import SA from "../IMG/SHOP/S/SA.png";
import SC from "../IMG/SHOP/S/SC.png";
import SCC from "../IMG/SHOP/S/SCC.png";
import SCO from "../IMG/SHOP/S/SCO.png";
import SH from "../IMG/SHOP/S/SH.png";
import SI from "../IMG/SHOP/S/SI.png";
import SPS from "../IMG/SHOP/S/SPS.png";
import ST from "../IMG/SHOP/S/ST.png";
import SV from "../IMG/SHOP/S/SV.png";
let productsFromSyrup = [
  {
    name: "ALMOND SYRUP",
    tag: SA,
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "CARAMEL SYRUP",
    tag: SC,
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "CHOCOLATE SYRUP",
    tag: SCC,
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "COCONUT SYRUP",
    tag: SCO,
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "HAZELNUT SYRUP",
    tag: SH,
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "IRISH SYRUP",
    tag: SI,
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "PUMPKIN SYRUP",
    tag: SPS,
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "TIRAMISU SYRUP",
    tag: ST,
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
  {
    name: "VANILLA SYRUP",
    tag: SV,
    specs: "350ml",
    price: 12,
    inCart: 0,
  },
];
const buttonsFromSyrup = document.querySelectorAll(".syrup .cart-button");
_addToCartFunction(buttonsFromSyrup, productsFromSyrup);
//______________________________________________________
// SCENTED CANDLES
import CCAS from "../IMG/SHOP/CC/CC-AS.png";
import CCCNS from "../IMG/SHOP/CC/CC-CNS.png";
import CCCS from "../IMG/SHOP/CC/CC-CS.png";
import CCEC from "../IMG/SHOP/CC/CC-EC.png";
import CCMB from "../IMG/SHOP/CC/CC-MB.png";
import CCTC from "../IMG/SHOP/CC/CC-TC.png";
let productsFromCandles = [
  {
    name: "AMBER & SMOKE",
    tag: CCAS,
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
  {
    name: "CINNAMON SPICE",
    tag: CCCNS,
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
  {
    name: "CAPPUCCINO & SOY",
    tag: CCCS,
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
  {
    name: "ESPRESSO",
    tag: CCEC,
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
  {
    name: "MORNING BREW",
    tag: CCMB,
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
  {
    name: "TURKISH",
    tag: CCTC,
    specs: "400g Candle",
    price: 12,
    inCart: 0,
  },
];
const buttonsFromCandles = document.querySelectorAll(".candles .cart-button");
_addToCartFunction(buttonsFromCandles, productsFromCandles);
//______________________________________________________
// ACCESORIES
import BB from "../IMG/SHOP/ACC/BB.png";
import BG from "../IMG/SHOP/ACC/BG.png";
import BW from "../IMG/SHOP/ACC/BW.png";
import CC from "../IMG/SHOP/ACC/CC.png";
import CS from "../IMG/SHOP/ACC/CS.png";
import CT from "../IMG/SHOP/ACC/CT.png";
import COSBW from "../IMG/SHOP/ACC/COS-BW.png";
import COSDB from "../IMG/SHOP/ACC/COS-DB.png";
import COSLB from "../IMG/SHOP/ACC/COS-LB.png";
let productsFromAccs = [
  {
    name: "BLACK TUMBLER",
    specs: "Insulated Coffee Tumbler",
    tag: BB,
    price: 11,
    inCart: 0,
  },
  {
    name: "GREY TUMBLER",
    specs: "Insulated Coffee Tumbler",
    tag: BG,
    price: 11,
    inCart: 0,
  },
  {
    name: "WHITE TUMBLER",
    specs: "Insulated Coffee Tumbler",
    tag: BW,
    price: 11,
    inCart: 0,
  },
  {
    name: "COFFEE JAR",
    specs: "Stainless Steel Jar",
    tag: CC,
    price: 12,
    inCart: 0,
  },
  {
    name: "SUGAR JAR",
    specs: "Stainless Steel Jar",
    tag: CS,
    price: 12,
    inCart: 0,
  },
  {
    name: "TEA JAR",
    specs: "Stainless Steel Jar",
    tag: CT,
    price: 12,
    inCart: 0,
  },
  {
    name: "BLACK COASTERS",
    specs: "Sandstone Coasters",
    tag: COSBW,
    price: 15,
    inCart: 0,
  },
  {
    name: "BROWN COASTERS",
    specs: "Sandstone Coasters",
    tag: COSDB,
    price: 15,
    inCart: 0,
  },
  {
    name: "LIGHT COASTERS",
    specs: "Sandstone Coasters",
    tag: COSLB,
    price: 15,
    inCart: 0,
  },
];
const buttonsFromAccs = document.querySelectorAll(".accs .cart-button");

_addToCartFunction(buttonsFromAccs, productsFromAccs);
