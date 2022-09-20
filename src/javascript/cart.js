const results = document.querySelectorAll(".result-box>div");
const select = document.querySelector("select");

function pickBlendOption(blend, index) {
  const choice = select.value;
  if (choice === blend) {
    results[index].classList.add("active");
  }
}
select.addEventListener("change", () => {
  results.forEach(result => {
    result.classList.remove("active");
  });
  pickBlendOption("search", 0);
  pickBlendOption("antigua", 1);
  pickBlendOption("brazil", 2);
  pickBlendOption("decaf", 3);
  pickBlendOption("ethiopia", 4);
  pickBlendOption("french", 5);
  pickBlendOption("house", 6);
  pickBlendOption("treat", 7);
  pickBlendOption("uganda", 8);
  pickBlendOption("vanilla", 9);
});
