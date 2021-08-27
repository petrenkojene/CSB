let button = document.querySelector("button");
let inputIn = document.querySelector(".input_in");
let out_1 = document.querySelector(".out_1");
let arr = [1, 2, 2.5, 2, 2, 2, 2, 2];
let d = inputIn.value;

button.onclick = function () {
  console.log(inputIn.value);
  out_1.innerHTML = arr.shift(inputIn.value);
  console.log(arr);
};
