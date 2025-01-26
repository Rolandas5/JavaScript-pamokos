// WEATHER APP

// Pagrindiniai elementai
const form = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const forecastContainer = document.getElementById('forecast');
const card = document.querySelector('.card');

// Funkcija, skirta gauti ir atvaizduoti orų prognozę
async function fetchWeather(city) {
  const apiUrl = `https://api.meteo.lt/v1/places/${city.toLowerCase()}/forecasts/long-term`;

  try {
    // Gauti duomenis naudojant axios
    const response = await axios.get(apiUrl);
    const data = response.data;

    // Paimame artimiausią prognozę
    const forecast = data.forecastTimestamps[0];
    const emoji = getWeatherEmoji(forecast.conditionCode);

    // Užpildome kortelę su duomenimis
    card.innerHTML = `
      <p class="cityDisplay">${data.place.name}</p>
      <p class="tempDisplay">${forecast.airTemperature}°C</p>
      <p class="weatherEmoji">${emoji}</p>
      <p class="descDisplay">${forecast.conditionCode.replace(/-/g, ' ')}</p>
      <p class="humidityDisplay">Vėjas: ${forecast.windSpeed} m/s</p>
    `;
    card.style.display = 'flex'; // Parodome kortelę
    forecastContainer.innerHTML = ''; // Išvalome bet kokias ankstesnes klaidas
  } catch (error) {
    // Jei miestas nerastas arba įvyko klaida
    forecastContainer.innerHTML = `
      <p class="errorDisplay">Klaida: Miestas nerastas arba įvyko klaida!</p>
    `;
    card.style.display = 'none'; // Paslepiame kortelę
  }
}

// Formos pateikimo įvykis
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Neleidžiame puslapiui persikrauti
  const city = cityInput.value.trim(); // Pašaliname nereikalingus tarpus
  if (city) {
    fetchWeather(city); // Iškviečiame funkciją su įvestu miestu
  }
});

// Funkcija oro sąlygų emocijoms priskirti
function getWeatherEmoji(conditionCode) {
  const emojis = {
    clear: '☀️',
    'isolated-clouds': '🌤️',
    'scattered-clouds': '⛅',
    overcast: '☁️',
    'light-rain': '🌦️',
    'moderate-rain': '🌧️',
    'heavy-rain': '⛈️',
    sleet: '🌨️',
    'light-snow': '🌨️',
    'moderate-snow': '❄️',
    fog: '🌫️',
    thunder: '⚡',
  };
  return emojis[conditionCode] || '🌍';
}
