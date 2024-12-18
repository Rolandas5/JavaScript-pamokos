// DOM (Document Object Model) leidžia manipuliuoti HTML struktūra naudojant JavaScript.
// keli pagrindiniai būdai, kaip galima dirbti su DOM, kad būtų keičiami, pridedami ar šalinami HTML elementai:

// 1. Pasirinkti elementus
// Galite pasirinkti HTML elementus naudodami šiuos metodus:

// getElementById: Pasirinkti elementą pagal jo ID.
// getElementsByClassName: Pasirinkti elementus pagal klasę.
// getElementsByTagName: Pasirinkti elementus pagal žymę.
// querySelector / querySelectorAll: Pasirinkti elementus naudojant CSS selektorius.
// Pvz.:

// let elementById = document.getElementById("myId");
// let elementsByClass = document.getElementsByClassName("myClass");
// let elementsByTag = document.getElementsByTagName("div");
// let singleElement = document.querySelector(".myClass");
// let allElements = document.querySelectorAll(".myClass");

// 2. Keisti turinį ir atributus
// Galite pakeisti teksto turinį arba atributus.

// Keisti tekstą:

// let element = document.getElementById("myId");
// element.textContent = "Naujas tekstas"; // Pakeičia tekstą
// element.innerHTML = "<strong>Naujas turinys</strong>"; // Pakeičia HTML

// Keisti atributus:

// element.setAttribute("class", "newClass"); // Pakeičia klasę
// element.setAttribute("style", "color: red;"); // Prideda stilių
// let href = element.getAttribute("href"); // Gauti atributą

// 3. Pridėti ar pašalinti elementus
// Galima sukurti naujus elementus arba pašalinti esamus.

//
// Pridėti elementą:

// let newElement = document.createElement("div");
// newElement.textContent = "Naujas elementas";
// document.body.appendChild(newElement); // Prideda prie kūno

// // Įdėti prieš kitą elementą:

// let referenceNode = document.getElementById("myId");
// document.body.insertBefore(newElement, referenceNode);
// Pašalinti elementą:

// let elementToRemove = document.getElementById("myId");
// elementToRemove.remove();

// 4. Manipuliuoti klasėmis
// Klasės leidžia keisti elementų išvaizdą ar priskirti papildomų savybių.

// Pridėti / pašalinti / perjungti klases:

// let element = document.getElementById("myId");
// element.classList.add("newClass"); // Pridėti klasę
// element.classList.remove("oldClass"); // Pašalinti klasę
// element.classList.toggle("active"); // Perjungti klasę

//
// 5. Klausytis įvykių
// Galite pridėti įvykių (events) tvarkytuvus, kad elementai reaguotų į naudotojo veiksmus.

// Pvz.:

// let button = document.getElementById("myButton");

// button.addEventListener("click", function() {
//     alert("Paspaudėte mygtuką!");
// });

//
// 6. Keisti stilius
// Galima dinamiškai keisti elementų stilius.

// Pvz.:

// let element = document.getElementById("myId");
// element.style.color = "blue"; // Keičia teksto spalvą
// element.style.backgroundColor = "yellow"; // Keičia fono spalvą

// ----------------------------------------------------------------------------------------

const submitButton = document.getElementById('submit');
const output = document.getElementById('output');

submitButton.addEventListener('click', () => {
  const name = document.getElementById('name');
  const age = document.getElementById('age');
  const color = document.getElementById('color');

  output.innerHTML = `
  <p><strong>Vardas:</strong> ${name.value}</p>
  <p><strong>Amžius:</strong> ${age.value}</p>
  <p><strong>Mėgstama slapva:</strong> <span style="color: ${color.value};">${color.value}</span></p>`;

  name.value = '';
  age.value = '';
  color.value = '';

  output.style.color = color;

  // Susikuriu "Delete" mygtuką viduje kortelės
  const deleteButton = document.createElement('button');
  // Uždedu mygtukui pavadinimą
  deleteButton.textContent = 'Ištrinti';
  // pasakau output elementui, kad įsidedu "Delete" mygtuką kartu su likusia informacija
  output.append(deleteButton);

  deleteButton.addEventListener('click', () => {
    output.innerHTML = '';
  });
});

// ------------------------------------------------------------

// const submitButton = document.getElementById('submit');
// const output = document.getElementById('output');

// submitButton.addEventListener('click', () => {
//   // Iš trijų Inputų paėmiau tris reikšmes
//   const name = document.getElementById('name');
//   const age = document.getElementById('age');
//   const color = document.getElementById('color');

//   // Sukuriame naują lentelės div
//   const tableDiv = document.createElement('div');
//   tableDiv.className = 'table-entry';

//   // Sukūriau HTML lentelę užpildymas turiniu (innerHTML - įmones bijo, kad hakeriai įsilaužę, įmetę savo html kodą nepavogtų info)
//   tableDiv.innerHTML = `
//     <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0; border-radius: 5px;">
//       <p><strong>Vardas:</strong> ${name.value}</p>
//       <p><strong>Amžius:</strong> ${age.value}</p>
//       <p><strong>Mėgstama spalva:</strong>
//          <span style="color: ${color.value};">${color.value}</span></p>
//       <button class="delete-btn">Ištrinti</button>
//     </div>
//   `;

//   // output.style.color = color.value;

//   // Lentelės į "output" konteinerį pridėjimas
//   output.appendChild(tableDiv);

//   // Įvesties laukų išvalymas
//   name.value = '';
//   age.value = '';
//   color.value = '';

//   // Mygtuko "Ištrinti" veikimas
//   const deleteButton = tableDiv.querySelector('.delete-btn');
//   deleteButton.addEventListener('click', () => {
//     output.removeChild(tableDiv); // Pašalina konkrečią lentelę
//   });
// });
