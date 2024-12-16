// DOM - reprezentuoja HTML dokumentą kaip objektų medį.
//
// HTML selektoriai, kurie paima elementą su kuriais galima ką nors padaryt ...

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

// 4. Pirmo rasto elemento pasirinkimas pagal (Tago) pavadinimą
const firstElement = document.querySelector('.klasesPavadinimas');

// 5. Visu rastu elementu pasirinkimas pagal (Tago) pavadinimą
const allElements = document.querySelectorAll('.klasesPavadinimas');

// PVZ.:
// Vieno elemento radimas kito elemento viduje
const container = document.querySelector('.klasesPavadinimas');
container.querySelector('span');

// Modifikavimas

// 1. Elemento HTML turinio ketitimas (Į vidų įdės HTML'ą)
element.innerHTML = '<p>Sveiki!</p>';

// 2. Elemento teksto keitimas   - galima pakeisti tik patį tekstą (pakeis visą teksto vidų)
element.textContent = 'Sveiki';

// 3. Elemento klases pridėjimas   (Tokiu būdu galima tam tikrą klasę pridėti visiems elementams - javascript'e)
element.classList.add('naujaKlase');

// Pakeisti stilių
element.style.color = 'red';
element.style.padding = '100px';
element.style.margin = '50px';

// -------------------------------------

// Padaryk kiekvienam elementui is masyvo (ir kiekvienam elementui pritaiko tą ką mes sugalvojame)
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



// ----------------------- Script (script.js) ------------------

// // visi heading elementai
// const headingElements = document.querySelectorAll('h1');
// // buttonas nes reikes paspaudus kazka atlikt
// const button = document.getElementById('main-button');

// // padarau kad buttonas klausytu paspaudimo ir paleistu funkcija
// button.addEventListener('click', function() {
//   // Kadangi reikia pereiti per visus headingus, cia tai atlieku
//   headingElements.forEach(function (heading) {
//     // pagal salyga yra pasakyta kad jeigu tekstas yra heading 2 reikia uždėt kitokią klasę
//     if (heading.innerText === 'Heading 2') {
//       heading.classList.add('blue-box')
//     } else {
//       heading.classList.add('green-box');
//     }
//   })
// })

// -------------------- HTML (index.html) --------------------------
{/* <h1>Heading 1</h1>
<h1>Heading 2</h1>
<h1>Heading 3</h1>

<button id="main-button">Pridek klase!</button>
.green-box {
  color: red;
  border: 1px dashed green;
  text-align: center;
  width: 150px;
  height: 100px;
}

// --------------------- CSS (styles.css)--------------------------

.blue-box {
  color: blue;
  border: 3px dashed green;
  text-align: center;
  width: 150px;
  height: 100px;
} */}

// ------------------------ Kitas PAVYZDYS -----------------------------


// ------------------------ script  ------------------------------------------
// const input = document.getElementById('name-input');
// const button = document.getElementById('change-name-btn');
// const output = document.getElementById('output');


// // Ar yra inpute reikšmė ?  ---- pasitikslinti perklausius Video -------
// button.addEventListener('click', function() {
//   if (!input.value) {
//     alert('Iveskite varda!')
//     return;
//   }


//   // Sukuriame h1 tag'a
//   const heading = document.createElement('h1');
//   // Noriu kad h1 tag'o tekstas butu inputo reiksme
//   heading.textContent = input.value;
//   // Noriu kad mano div'as turetu viduje sita heading
//   output.append(heading);
// })

// ---------------------- html -------------------------------------

{/* <input type="text" id="name-input" placeholder="Įveskite savo vardą">
<button id="change-name-btn">Pakeisti varda</button>
<div id="output"></div> */}


// ------------------ Pavyzdys MYGRUKAS SUVESTO INFO IŠTRYNIMAS -------------------------------


// js: function deleteEntry() {
//   // istrina ta info?
//   document.getElementById('name').value = '';
//   document.getElementById('age').value = '';
//   document.getElementById('color-input').value = '';

//   // istrina ta info, kuri buvo surinkta
//   document.getElementById('output').innerHTML = '';
//   // istrina/paslepia surinkta info is rodymo t.y. output
//   document.getElementById('result').style.display = 'none';
// }

// html: <button onclick="deleteEntry()">Istrinti irasa</button>;
// }