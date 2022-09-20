const select = document.querySelector("select");
const gameResult = document.querySelector(".game-result.search");
const gameOutcome = document.querySelector(".game-outcome");
const gameOutcomeBlend = document.querySelector(".blend-title");
select.addEventListener("change", () => {
  const choice = select.value;
  console.log(choice);
  if (choice === "antigua") {
    gameResult.src = document.querySelector(".game-result.antigua").src;
    gameOutcome.style.display = "grid";
    gameOutcomeBlend.textContent = "ANTIGUA BLEND";
  }
  if (choice === "brazil") {
    gameResult.src = document.querySelector(".game-result.brazil").src;
    gameOutcome.style.display = "grid";
    gameOutcomeBlend.textContent = "BRAZIL BLEND";
  }
  if (choice === "decaf") {
    gameResult.src = document.querySelector(".game-result.decaf").src;
    gameOutcome.style.display = "grid";
    gameOutcomeBlend.textContent = "DECAF BLEND";
  }
  if (choice === "ethiopia") {
    gameResult.src = document.querySelector(".game-result.ethiopia").src;
    gameOutcome.style.display = "grid";
    gameOutcomeBlend.textContent = "ETHIOPIA BLEND";
  }
  if (choice === "french") {
    gameResult.src = document.querySelector(".game-result.french").src;
    gameOutcome.style.display = "grid";
    gameOutcomeBlend.textContent = "FRENCH BLEND";
  }
  if (choice === "home") {
    gameResult.src = document.querySelector(".game-result.home").src;
    gameOutcome.style.display = "grid";
    gameOutcomeBlend.textContent = "HOME BLEND";
  }
  if (choice === "treat") {
    gameResult.src = document.querySelector(".game-result.treat").src;
    gameOutcome.style.display = "grid";
    gameOutcomeBlend.textContent = "TREAT BLEND";
  }
  if (choice === "uganda") {
    gameResult.src = document.querySelector(".game-result.uganda").src;
    gameOutcome.style.display = "grid";
    gameOutcomeBlend.textContent = "UGANDA BLEND";
  }
  if (choice === "vanilla") {
    gameResult.src = document.querySelector(".game-result.vanilla").src;
    gameOutcome.style.display = "grid";
    gameOutcomeBlend.textContent = "VANILLA BLEND";
  }
  if (choice === "search") {
    gameResult.src = document.querySelector(".game-search").src;
    gameOutcome.style.display = "none";
  }
});
