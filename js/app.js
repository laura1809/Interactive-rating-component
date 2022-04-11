const card_one = document.querySelector(".card-1");
const card_two = document.querySelector(".card-2");
const btn_submit = document.querySelector(".btn");
const btn_select = document.querySelectorAll(".btn-select");
const score = document.querySelector(".score");

var number_select = 1;

btn_select.forEach((btn) => {
  btn.addEventListener("click", activeButton);
});
function activeButton(event) {
  btn_select.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (event.target.classList.contains("btn-select")) {
    event.target.classList.add("active");
  }
  number_select = event.target.textContent;
}

btn_submit.addEventListener("click", showCardTwo);
function showCardTwo() {
  card_one.classList.add("hidden");
  score.textContent = number_select;
  console.log(score.textContent);
  card_two.classList.remove("hidden");
}
