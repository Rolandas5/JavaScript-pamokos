// value - reiksme
// => vadinasi erou function. Ji tas pats kaip funkcija, kuri rasosi: function ()

const input = document.getElementById('name-input');
const button = document.getElementById('change-name-btn'); // --- Mygtuko ištraukimas
const greeting = document.getElementById('greeting');
const errorMessage = document.getElementById('error-message');

button.addEventListener('click', function () {
  // --- Mygtuko paspaudimas
  // Gauname ivesta reiksme, kaip string
  const inputValue = input.value;
  //   console.log(inputValue);  ---  pasitikrinimui ar veikia logika
  //   alert(inputValue)         ---

  //   if (inputValue !== '') {     ---- Arba ----
  if (inputValue) {
    greeting.textContent = `Sveiki, ${inputValue}!`; // pakeicia teksta kai ivedi i laukeli
    errorMessage.style.display = 'none'; // panaikinti ERROR'ą  (Klaidą)
  } else {
    errorMessage.textContent = 'Įveskite savo vardą';
    errorMessage.style.display = 'block';
  }
});
