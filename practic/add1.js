let movies;
let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://api.themoviedb.org/3/movie/now_playing?api_key=e530dbf87d3f35fe1c14ace5c962084a"
);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    movies = JSON.parse(xhr.response);
  }
};
document.querySelector(".btn1").onclick = function () {
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (const item of movies.results) {
    document.querySelector("tbody");
    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(item);
    var cell2 = row.insertCell(item);
    var cell3 = row.insertCell(item);
    var cell4 = row.insertCell(item);

    cell1.innerHTML = item.overview;
    cell2.innerHTML = item.vote_average;
    cell3.innerHTML = item.title;
    cell4.innerHTML = item.id;
  }
};
