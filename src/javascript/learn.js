import _learnFunction from "./function/learnFunction";
// TASTE;
const titlesTaste = document.querySelectorAll(
  ".about-heading-box .about-heading"
);
const textsTaste = document.querySelectorAll(
  ".about-heading-textbox .about-text"
);

_learnFunction(titlesTaste, textsTaste);

// ROAST
const imgsRoast = document.querySelectorAll(".types-img-box .roast-img");
const textsRoast = document.querySelectorAll(".types-text-box .type-box");

_learnFunction(imgsRoast, textsRoast);
