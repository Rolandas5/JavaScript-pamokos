const loader = document.getElementById('loader');
const movieElement = document.getElementById('movie');

function fetchMovie() {
  // Rodo loaderį, kai prasideda užklausa
  loader.style.display = 'block';
  movieElement.textContent = '';

  fetch('https://www.freetestapi.com/api/v1/movies')
    // Paverčia atsakymą į JSON formatą
    .then((response) => response.json())
    .then((data) => {
      const randomMovie = data[Math.floor(Math.random() * data.length)];
      movieElement.textContent = `Filmas: ${randomMovie.title} (${randomMovie.year})`;
    })
    .catch((error) => {
      // Jei įvyko klaida, informuoja
      movieElement.textContent =
        'Atsiprašome, įvyko klaida. Bandykite dar kartą vėliau.';
    })
    .finally(() => {
      // Paslepiame loaderį, nesvarbu ar užklausa buvo sėkminga ar ne
      loader.style.display = 'none';
    });
}
