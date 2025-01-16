const searchInput = document.getElementById('searchInput');
const moviesContainer = document.getElementById('moviesContainer');
let debounceTimer;

// async yra Promises (Pažadas)
const fetchMovies = async (query = '') => {
  const api = 'https://api.tvmaze.com/shows';
  const searchApi = `https://api.tvmaze.com/search/shows?q=${query}`;
  const url = query ? searchApi : api;

  try {
    //fecth yra Promises (Pažadas) naudojamas tik kartu su await
    const response = await fetch(url);
    const data = await response.json();
    displayMovies(query ? data : data.map((show) => ({ show })));
  } catch (error) {
    console.error(error);
  }
};

const displayMovies = (movies) => {
  moviesContainer.innerHTML = '';
  // Jeigu nėra filmų, išvedame pranešimą
  if (!movies.length) {
    moviesContainer.innerHTML = '<p>Nerasta filmu.</p>';
    return;
  }

  movies.forEach((item) => {
    const movie = item.show;
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
    <img src="${movie.image ? movie.image.medium : ''}" alt="filmo nuotrauka">
    <h3>${movie.name}</h3><p>Rating: ${movie.rating.average}</p>
    `;

    moviesContainer.appendChild(movieCard);
  });
};

// debounce logioka - tai logika, kai žmogus ką nors veda, kai nustoja vest, sustoja
// Pastoviai trigerinamas iki kol rašome į inputą
searchInput.addEventListener('input', (event) => {
  const inputValue = event.target.value;

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    if (inputValue) {
      fetchMovies(inputValue);
    } else {
      fetchMovies();
    }
  }, 500);
});

fetchMovies();
