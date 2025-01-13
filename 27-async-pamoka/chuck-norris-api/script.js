const loader = document.getElementById('loader');
const jokeElement = document.getElementById('joke');

function fetchJoke() {
  loader.style.display = 'block';
  jokeElement.textContent = '';

  fetch('https://api.chucknorris.io/jokes/random')
    // .json() yra metodas, kuris paverčia response į .json objektą
    .then((response) => response.json())
    //.then() sėkmės atveju gražina data
    .then((data) => {
      // Įdedu gautą juoką į jokeElement tekstą
      jokeElement.textContent = data.value;
    })
    // .catch() klaidos atveju gražina error
    .catch((error) => {
      jokeElement.textContent =
        'Atsiprašome, įvyko klaida. Bandykite dar kartą vėliau.';
    })
    // .finally() visais atvejais paslepiu loaderį nesvarbu ar sėkminga ar ne
    .finally(() => {
      loader.style.display = 'none';
    });
}
