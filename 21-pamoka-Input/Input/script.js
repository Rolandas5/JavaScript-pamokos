// const submitButton = document.getElementById('submit');
// const output = document.getElementById('output');

// submitButton.addEventListener('click', () => {
//   const name = document.getElementById('name');
//   const age = document.getElementById('age');
//   const color = document.getElementById('color');

//   output.innerHTML = `
//   <p><strong>Vardas:</strong> ${name.value}</p>
//   <p><strong>Amžius:</strong> ${age.value}</p>
//   <p><strong>Mėgstama slapva:</strong> <span style="color: ${color.value};">${color.value}</span></p>`;

//   name.value = '';
//   age.value = '';
//   color.value = '';

//   output.style.color = color;

//   // Susikuriu "Delete" mygtuką viduje kortelės
//   const deleteButton = document.createElement('button');
//   // Uždedu mygtukui pavadinimą
//   deleteButton.textContent = 'Ištrinti';
//   // pasakau output elementui, kad įsidedu "Delete" mygtuką kartu su likusia informacija
//   output.append(deleteButton);

//   deleteButton.addEventListener('click', () => {
//     output.innerHTML = '';
//   });
// });

// ------------------------------------------------------------

const submitButton = document.getElementById('submit');
const output = document.getElementById('output');

submitButton.addEventListener('click', () => {
  const name = document.getElementById('name');
  const age = document.getElementById('age');
  const color = document.getElementById('color');

  // Sukuriame naują lentelės div
  const tableDiv = document.createElement('div');
  tableDiv.className = 'table-entry';

  // Lentelės užpildymas turiniu
  tableDiv.innerHTML = `
    <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0; border-radius: 5px;">
      <p><strong>Vardas:</strong> ${name.value}</p>
      <p><strong>Amžius:</strong> ${age.value}</p>
      <p><strong>Mėgstama spalva:</strong> 
         <span style="color: ${color.value};">${color.value}</span></p>
      <button class="delete-btn">Ištrinti</button>
    </div>
  `;

  // Lentelės į "output" konteinerį pridėjimas
  output.appendChild(tableDiv);

  // Įvesties laukų išvalymas
  name.value = '';
  age.value = '';
  color.value = '';

  // Mygtuko "Ištrinti" veikimas
  const deleteButton = tableDiv.querySelector('.delete-btn');
  deleteButton.addEventListener('click', () => {
    output.removeChild(tableDiv); // Pašalina konkrečią lentelę
  });
});
