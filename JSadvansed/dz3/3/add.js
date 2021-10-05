let arr = [];
function findClass(item) {
  let out = document.querySelectorAll(item);
  out.forEach((e) => arr.push(e));
}
findClass(".item1");
console.log(arr);
