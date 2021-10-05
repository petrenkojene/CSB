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

    document.querySelector(".btn1").onclick = function () {
      let tbody = document.createElement("tbody");
      table.appendChild(tbody);

      for (let elem of movies.results) {
        let tablTr = document.createElement("tr");
        tbody.appendChild(tablTr);

        let idMovie = document.createElement("td");
        idMovie.innerHTML = elem.id;

        let titleMovies = document.createElement("td");
        titleMovies.innerHTML = elem.title;

        let reting = document.createElement("td");
        reting.innerHTML = elem.vote_average;

        let description = document.createElement("td");
        description.innerHTML = elem.overview;

        let out = document.querySelectorAll("tr");
        out.forEach((e) => e.appendChild(idMovie));
        out.forEach((e) => e.appendChild(titleMovies));
        out.forEach((e) => e.appendChild(reting));
        out.forEach((e) => e.appendChild(description));
      }
    };
  }
};
