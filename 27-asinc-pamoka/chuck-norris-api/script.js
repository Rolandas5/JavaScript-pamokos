const loader = document.getElementById('loader');
const jokeElement = document.getElementById('joke');

function fetchJoke() {
  loader.style.display = 'block';
  jokeElement.textContent = '';

  fetch('https://api.chucknorris.io/jokes/random')
// .json() yra metodas kuris paverčia response į .json objektą
    .then((response) => response.json());
//.then() sėkmės atveju gražina data
    .then((data) => {
        // Įdedu gautą juoką į jokeElement tekstą
jokeElement.textContent = data.value;
    })
// 
        
  
}
