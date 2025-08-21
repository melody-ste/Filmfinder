import './style.css';

// VARIABLES FORMULAIRE
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");

// Clé API (venant de .env)
const API_KEY = import.meta.env.VITE_API_KEY;

async function fetchMovies(keyword) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}`);
  const data = await response.json();
  return data.Search || [];
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const keyword = input.value.trim();
  if (keyword === "") return;

  resultsContainer.innerHTML = "<p>Loading...</p>";

  const movies = await fetchMovies(keyword);
  displayMovies(movies);
});


// AFFICHAGE
function displayMovies(movies) {
  resultsContainer.innerHTML = "";

  if (movies.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  movies.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie-card", "mb-3", "p-3", "border", "rounded");

    div.innerHTML = `
      <div class="d-flex align-items-start">
        <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" 
            alt="${movie.Title}" 
            style="max-width:150px; margin-right: 15px; border-radius:8px;" />
        <div>
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
          <button class="btn btn-primary readMore" data-id="${movie.imdbID}">Read More</button>
        </div>
      </div>
    `;

    resultsContainer.appendChild(div);
  });
}