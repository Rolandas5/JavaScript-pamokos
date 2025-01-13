const loader = document.getElementById('loader');
const movieElement = document.getElementById('movie');
const apiUrl = 'https://www.freetestapi.com/api/v1/movies';

function fetchMovie() {
  // Rodo loaderį, kai prasideda užklausa
  loader.style.display = 'block';
  movieElement.textContent = '';

  // fetch'as yra promises (pažadas)
  // API URL kreipiamais į kitas programas
  fetch(apiUrl)
    // Paverčia atsakymą į JSON formatą
    .then((response) => response.json())
    //.then() sėkmės atveju gražina data
    .then((data) => {
      // Išrenka atsitiktinį filmą iš gauto sąrašo
      const randomMovie = data[Math.floor(Math.random() * data.length)];
      // Rodo atsitiktinį filmo pavadinimą ir metus
      movieElement.textContent = `Filmas: ${randomMovie.title} (${randomMovie.year})`;
    })
    .catch((error) => {
      // Jei įvyko klaida, informuoja
      movieElement.textContent =
        'Atsiprašome, įvyko klaida. Bandykite dar kartą vėliau.';
    })
    .finally(() => {
      // Paslepiame loaderį, nesvarbu ar užklausa buvo sėkminga ar ne abiem atvejais
      loader.style.display = 'none';
    });
}
