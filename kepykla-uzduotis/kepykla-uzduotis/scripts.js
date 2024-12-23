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
const employeeCount = document.getElementById('employee-count');
const loavesPerEmployee = document.getElementById('loaves-per-employee');
const orderCount = document.getElementById('order-count');

// Mygtuko skaičiavimo įvykis
calculateButton.addEventListener('click', () => {
  // Gaunamos reikšmes iš įvesties laukų (Iš suvestų Tag'ų)
  const employeeCountValue = Number(employeeCount.value);
  const loavesPerEmployeeValue = Number(loavesPerEmployee.value);
  const orderCountValue = Number(orderCount.value);

  // Patikrinama ar visos reikšmės užpildytos ir teisingos - Neveikia ERROR
  if (!employeeCountValue || !loavesPerEmployeeValue || !orderCountValue) {
    results.innerHTML = '<p class="error">Prašome užpildyti visus laukus!</p>';
    // alert('Prašome užpildyti visus laukus!');
    return;
  }

  // Skaičiavimas kiek kepykla gali iskepti duonso per dieną
  const totalLoavesPerDay = employeeCountValue * loavesPerEmployeeValue; // Kepykla gali pagaminti
  const result = totalLoavesPerDay >= orderCountValue ? 'Taip' : 'Ne'; // Ar spės?

  // Sukuriami paragrafai ir atvaizduojami rezultatai
  results.innerHTML = `
        <p><strong>Kepykla per dieną gali pagaminti:</strong> ${totalLoavesPerDay} kepalų</p>
        <p><strong>Reikia pagaminti:</strong> ${orderCountValue} kepalų</p>
        <p><strong>Ar spės pagaminti?</strong> <span style="color: ${
          result === 'Taip' ? 'blue' : 'red'
        };">${result}</span></p>
    `;
});

// Atsatato į pradinę būseną įvykis
resetButton.addEventListener('click', () => {
  // Išvalomi inputų laukai
  employeeCount.value = '0';
  loavesPerEmployee.value = '0';
  orderCount.value = '0';
  results.innerHTML = 'Kol kas nieko nėra.';
});

// --------------------------------------------------------
