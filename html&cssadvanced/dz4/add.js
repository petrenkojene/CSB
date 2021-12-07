let data = [];
let btn = document.querySelector(".btn");
btn.onclick = function () {
  const clear = document.querySelector("div");
  while (clear.firstChild) {
    clear.removeChild(clear.lastChild);
  }
  data.length = 0;

  for (i = 0; i < 8; i++) {
    let min = 0;
    let maw = 100;

    let currentNumber = Math.floor(min + Math.random() * (maw + 1 - min));

    data.push(currentNumber);
  }
  document.querySelector("span").innerHTML = data;

  window.addEventListener("load", createDiagram(data, 600, 400, "green"));

  function createDiagram(data, width, height, color) {
    let div = document.querySelector(".container");

    var diagram = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    diagram.style.width = width + "px";
    diagram.style.height = height + "px";

    let max = Number.NEGATIVE_INFINITY;
    for (i = 0; i < data.length; i++) {
      if (max < data[i]) max = data[i];
    }
    let scale = height / max;
    let pillarWidth = width / data.length;
    for (i = 0; i < data.length; i++) {
      var pillar = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );

      let pillarHeight = data[i] * scale;
      pillar.setAttribute("height", pillarHeight + "px");
      pillar.setAttribute("width", pillarWidth - 4 + "px");

      pillar.setAttribute("y", height - pillarHeight);
      pillar.setAttribute("x", pillarWidth * i);
      pillar.style.fill = color;

      diagram.append(pillar);
      diagram.remove(pillar);
    }

    div.append(diagram);
  }
};
