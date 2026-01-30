const elMovie = document.querySelector("#movie");

const params = new URLSearchParams(window.location.search);
const movieID = params.get("id");

if (movieID) {
  showOneMovie(movieID);
}

function showOneMovie(id) {
  axios.get(`https://www.omdbapi.com/?i=${id}&apikey=d48b840d`).then((res) => {
    const movie = res.data;

    elMovie.innerHTML = `
      <div class="movie-detail">
        <div class="movie-detail-left">
            <h1 class='movie-detail__title'>${movie.Title}</h1>
            <img class='movie-detail__img' src="${movie.Poster}" alt="${movie.Title}" />
        </div>

        <div class="movie-detail-right">
            <h3><span>ImdbRating: </span>${movie.imdbRating}</h3>
            <h3><span>ImdbVotes: </span>${movie.imdbVotes}</h3>
            <h3><span>Metascore:</span> ${movie.Metascore}</h3>
            <h3><span>Type: </span>${movie.Type}</h3>
            <h3><span>Released: </span>${movie.Released}</h3>
            <h3><span>Country: </span>${movie.Country}</h3>
            <h3><span>Language: </span>${movie.Language}</h3>
            <h3><span>Genre: </span>${movie.Genre}</h3>
            <h3><span>BoxOffice: </span>${movie.BoxOffice}</h3>
            <h3><span>Director: </span>${movie.Director}</h3>
            <h3><span>Writer: </span>${movie.Writer}</h3>
            <h3><span>Actors: </span>${movie.Actors}</h3>
            <h3><span>Awards: </span>${movie.Awards}</h3>
            <h3><span>Plot: </span>${movie.Plot}</h3>
            <h3><span>Runtime: </span>${movie.Runtime}</h3>
            <h3><span>DVD: </span>${movie.DVD}</h3>
            <h3><span>Website: </span>${movie.Website}</h3>
            <h3><span>Production: </span>${movie.Production}</h3>
        </div>
      </div>
    `;
  });
}
