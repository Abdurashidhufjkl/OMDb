const elResults = document.querySelector("#results");
const elForm = document.querySelector("#form");
const elInput = document.querySelector("#search");

function getData(url) {
  axios.get(url).then((res) => {
    showData(res.data);
  });
}

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = elInput.value.trim();
  if (!searchValue) return;

  getData(`http://www.omdbapi.com/?s=${searchValue}&apikey=d48b840d`);
});

elResults.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  const imdbID = card.dataset.id;
  showOneMovie(imdbID);
});

function showData(data) {
  if (data.Response !== "True") {
    elResults.innerHTML = "<h1>No results</h1>";
    return;
  }

  elResults.innerHTML = data.Search.map(
    (movie, index) => `
      <div class="card" data-index="${index}" data-id="${movie.imdbID}">
        <h1 class='card__title'>${movie.Title}</h1>
        <img class='card__img' src="${movie.Poster}" alt="${movie.Title}" />
        <div class='card__info'> <p class='card__type'>${movie.Type}
        </p> <p class='card__year'>${movie.Year}</p> </div>
      </div>
    `
  ).join("");
}

function showOneMovie(id) {
  axios.get(`http://www.omdbapi.com/?i=${id}&apikey=d48b840d`).then((res) => {
    console.log("Movie details:", res.data);
  });
}



