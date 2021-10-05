let btn1 = document.querySelector(".item1");
btn1.addEventListener("click", bordered1);

let btn2 = document.querySelector(".item2");
btn2.addEventListener("click", bordered2);

let btn3 = document.querySelector(".item3");
btn3.addEventListener("click", bordered3);
function bordered1() {
  par("p");
}
function bordered2() {
  par("a");
}
function bordered3() {
  par("div");
}
function par(item) {
  let out = document.querySelectorAll(item);
  out.forEach((e) => (e.style.border = "1px solid black"));
}
