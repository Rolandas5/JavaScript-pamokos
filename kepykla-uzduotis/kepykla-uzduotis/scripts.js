/* INSTRUKCIJOS:
Papildykite projektą:
    - Apskaičiuokite kiek kepalų duonos gali pagaminti kepykla per diena.
    - Atvaizduokite kiek kepalų duonos reikia iškepti.
    - Nurodykite "Taip" arba "Ne" ar kepykla spės iškepti visą reikiamą duonos kiekį.
    - Viskas turi būti atvaizduota HTML dokumente.
*/

//--------------------------------

// Ištraukiami elementai
const calculateButton = document.getElementById('calculate');
const resetButton = document.getElementById('reset');
const results = document.getElementById('results');

// Ištraukiami elementai
const employeeCountInput = document.getElementById('employee-count');
const loavesPerEmployeeInput = document.getElementById('loaves-per-employee');
const orderCountInput = document.getElementById('order-count');

// Mygtuko skaičiavimo įvykis
calculateButton.addEventListener('click', () => {
  // Gaunamos reikšmes iš įvesties laukų (Iš suvestų Tag'ų)
  const employeeCount = Number(employeeCountInput.value);
  const loavesPerEmployee = Number(loavesPerEmployeeInput.value);
  const orderCount = Number(orderCountInput.value);

  // Patikrinama ar visos reikšmės užpildytos ir teisingos
  if (
    !employeeCount ||
    !loavesPerEmployee ||
    !orderCount ||
    employeeCount <= 0 ||
    loavesPerEmployee <= 0 ||
    orderCount <= 0
  ) {
    alert('Prašome užpildyti visus laukus su teisingomis reikšmėmis!');
    return;
  }

  // Skaičiavimas (1 darbuotojas gali iškepti 2 kepalus per dieną)
  const bread = employeeCount * 2; // Kepykla gali pagaminti
  const result = bread >= orderCount ? 'Taip' : 'Ne'; // Ar spės?

  // Atvaizduojami rezultatai
  results.innerHTML = `
        <p><strong>Kepykla per dieną gali pagaminti:</strong> ${bread} kepalų</p>
        <p><strong>Reikia pagaminti:</strong> ${orderCount} kepalų</p>
        <p><strong>Ar spės pagaminti?</strong> <span style="color: ${
          result === 'Taip' ? 'blue' : 'red'
        };">${result}</span></p>
    `;

  // Išvalomi inputų laukai
  employeeCountInput.value = '';
  loavesPerEmployeeInput.value = '';
  orderCountInput.value = '';
});

// Atsatato į pradinę būseną įvykis
resetButton.addEventListener('click', () => {
  results.innerHTML = 'Kol kas nieko nėra.';
});

// --------------------------------------------------------
