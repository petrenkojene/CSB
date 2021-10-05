let paragraphe = {};
paragraphe.text = "PARAGRAPH";
paragraphe.chengeText = function () {
  let out = document.querySelectorAll("p");
  out.forEach((e) => (e.innerHTML = this.text + "<br>"));
  console.log(out);
};
paragraphe.chengeText();

(function () {
  let text = "PARAGRAPHE";
  let out = document.querySelectorAll(".item");
  out.forEach((e) => (e.innerHTML = text + "<br>"));
  console.log(out);
})();
