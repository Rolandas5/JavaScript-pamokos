// DOM - reprezentuoja HTML dokumentą kaip objektų medį.
//
// HTML selektoriai

// 1. Pagal elemento ID
// const element = document.getElementById('elemento-id'); // - iškviečiam funkciją sukurto dokumento (galiam iškviesti Console)

// ID skirtas išsitraukti elementą pagal jo ID

const element = document.getElementById('unikalusId');

// 2. Pagal elemento klase
const elementsByClassName =
  document.getElementsByClassName('klasesPavadinimas');

// 3. Pagal visus tam tikro tipo elementus
// pvz p, h1, div, span, a, section.. ir  t.t.
const elementsByTagName = document.getElementsByTagName('p');

// 4. Pirmo elemento pasirinkimas
const firstElement = document.querySelector('.klasesPavadinimas');

// 5. Visu elementu pasirinkimas
const allElements = document.querySelectorAll('.klasesPavadinimas');

// PVZ.:
// Vieno elemento radimas kito elemento viduje
const container = document.querySelector('.klasesPavadinimas');
container.querySelector('span');

// Modifikavimas

// 1. Elemento HTML turinio ketitimas
element.innerHTML = '<p>Sveiki!</p>';

// 2. Elemento teksto keitimas   - galima pakeisti tik patį tekstą
element.textContent = 'Sveiki';

// 3. Elemento klases pridėjimas
element.classList.add('naujaKlase');

// Pakeisti stilių
element.style.color = 'red';
element.style.padding = '100px';
element.style.margin = '50px';

// -------------------------------------

// Padaryk kiekvienam elementui is masyvo
// Sugalvojam pavadinima ir nurodom kaip argumenta
// Viduje funkcijos atliekame pakeitimus
allElements.forEach((element) => {
  element.style.color = 'red';
});

// -------------------------------------  LECTORIAUS ------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="./styles.css">
//     <script src="./script.js" defer></script>
// </head>
// <body>
//     <h1>DOM manipuliacijos pavyzdys</h1>
//     <div id="color-box"></div>
//     <button id="btn-red">Raudona</button>
//     <button id="btn-green">Zalias</button>
//     <button id="btn-reset">Reset</button>
// </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="./styles.css">
//     <script src="./script.js" defer></script>
//     <title>Document</title>
// </head>
// <body>
//     <h1>DOM praktika</h1>
//     <input type="text" id="name-input" placeholder="Įveskite savo vardą">
//     <button id="change-name-btn">Pakeisti varda</button>
//     <p id="greeting">Sveiki, vartotojas!</p>
//     <p id="error-message" class="error" style="display: none;"></p>
// </body>
// </html>
