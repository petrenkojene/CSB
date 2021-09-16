let paragraphe = {};
paragraphe.text = "PARAGRAPH";
paragraphe.chengeText = function () {
  let out = document.getElementsByTagName("p");
  for (item of out) {
    item.innerHTML = this.text;
  }
};
paragraphe.chengeText();

(function () {
  let text = "PARAGRAPHE";
  let out = document.getElementsByTagName("span");
  for (item of out) {
    item.innerHTML = text + "<br>";
  }
})();
