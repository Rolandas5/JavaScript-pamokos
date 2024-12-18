// Išsivedu (gaunu DOM) visus elementus pagal jų Id

const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('age-input');
const colorInput = document.getElementById('color-input');
const button = document.getElementById('change-name-btn');
const output = document.getElementById('output');

// Mygtuko paspaudimas, patikrinam ar įvesta reikšmė
button.addEventListener('click', function () {
  // Tikriname, ar visi laukai užpildyti
  if (!nameInput.value || !colorInput.value || !ageInput.value) {
    alert('Įveskite vardą, amžių ir mėgstamą spalvą!');
    return;
  }

  // Sukuriame Div elementą
  const divContainer = document.createElement('div');
  // į Div
  divContainer.style.border = '1px solid black';
  divContainer.style.borderRadius = '10px';
  divContainer.style.margin = '10px 0';
  divContainer.style.padding = '10px';
  divContainer.style.width = '300px';

  // Sukuriame "Delete" mygtuką
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.style.backgroundColor = 'red';
  deleteButton.style.color = 'white';
  deleteButton.style.border = 'none';
  deleteButton.style.padding = '5px 10px';
  deleteButton.style.cursor = 'pointer';

  // Mygtuko paspaudimo įvykis – ištrins divContainer
  deleteButton.addEventListener('click', function () {
    divContainer.remove();
  });

  // Nustatome Div tag'o tekstą iš įvesties reikšmių
  divContainer.innerHTML = `<p><strong>Vardas:</strong> ${nameInput.value}</p> <p><strong>Spalva:</strong> ${colorInput.value}</p><p><strong>Amžius:</strong> ${ageInput.value}</p>`;

  // Pridedame "Delete" mygtuką į divContainer
  divContainer.append(deleteButton);

  // Pridedame sukurtą Div prie output
  output.append(divContainer);

  // Išvalome įvesties laukus
  nameInput.value = '';
  ageInput.value = '';
  colorInput.value = '';
});


