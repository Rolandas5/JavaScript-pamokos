// Funkcijos
// Funkcijos skirtos atlikti veiksmus

// Si funkcija grazina suma, padavus du skaicius
// return zodis gražina reikšme
// Funkcija pati savavališkai nevykdo jokio kodo, todėl norint, kad ji atliktų kokį nors darbą - reikės ją iškviesti.
// Jeigu funkcijai reikia kokių nors duomenų, jai tai galima perduoti kaip parametrus / argumentus.
// a ir b yra parametrai / argumantai (bus naudojami tik funkcijos viduje)
// Bet koks duomenu tikas gali buti argumentas!!!

// function suskaiciuokSuma(a, b) {
//   return a + b;
// }

// const suma = suskaiciuokSuma(1, 2); // - paduoda argumentus - //

// console.log(suma);

// PVZ.: ----- //

// function pasisveikinimas(vardas) {
//   if (typeof vardas !== 'string') {
//     console.log('Ivestas ne vardas');
//   } else {
//     console.log('Labas', vardas);
//   }
// }

// pasisveikinimas('Jonai');

// Pvz.: -------//

// let laikas = '18:00';

// function pasisveikink() {
//   console.log('Labas rytas')
// }

// function atsisveikink() {
//   console.log('Viso gero!')
// }

// if (laikas === '18:00') {
//   atsisveikink()
// } else {
//   pasisveikink();
// }

//

// Pvz.: Funkcijos mato kintamuosius, kurie yra isoreje
// let skaicius = 10;

// function isveskPadaugintaSkaiciu() {
//   console.log(skaicius * 2);
// }

// isveskPadaugintaSkaiciu();

// -----------------
//

// function pasirinkimasVardas(vardas, priezastis) {
//     console.log(`Mano vardas yra ${vardas} ir pasirinkau programavimą, nes ${priezastis}.`);
// }

// pasirinkimasVardas('Jonas', 'noriu save keisti');
// pasirinkimasVardas('Jonas', 'noriu save keisti');
// pasirinkimasVardas('Jonas', 'noriu save keisti');
//

// ------------------ LEKTORIAUS
// function isveskManoVarda(vardas, sakinys) {
//     console.log(vardas, sakinys);
//   }

//   isveskManoVarda('Edgaras', 'nes patinka kompai')
//   isveskManoVarda('Tomas', 'nes patinka $$$')
//   isveskManoVarda('Tobis', 'Nes patinka logika')
// ------------------ LUKO

// function iskvieskEilerasti() {
//     console.log('Du gaideliai,Du gaideliai');
//   }

//   for (let i = 0; i < 5; i++) {
//     iskvieskEilerasti()
//   }

// -------------------------------

// function isvedimas(eilerastis) {
//     console.log(`Mano eilerašatis: ${eilerastis}`);
// }

//   isvedimas('Tai gražiai lingavo girios, uogų ir gegučių pilnos');
//   isvedimas('Tai gražiai lingavo girios, uogų ir gegučių pilnos');
//   isvedimas('Tai gražiai lingavo girios, uogų ir gegučių pilnos');
//   isvedimas('Tai gražiai lingavo girios, uogų ir gegučių pilnos');
//   isvedimas('Tai gražiai lingavo girios, uogų ir gegučių pilnos');

// ---------------------------

// function iskvieskPirmaSakini() {
//   console.log('Pirmas sakinys');
// }

// function iskvieskAntraSakini() {
//   console.log('Antras sakinys');
// }

// function iskvieskTreciaSakini() {
//   console.log('Trecias sakinys');
// }

// iskvieskPirmaSakini();
// iskvieskAntraSakini();
// iskvieskTreciaSakini();

//------- LEKTORIAUS -----------------------------------

// function iskvieskPirmaSakiny() {
//     console.log('Pirmas sakinys')
//   }

//   function iskvieskAntraSakiny() {
//     console.log('Antras sakinys')
//   }

//   function iskvieskTreciaSakiny(x) {
//     console.log('Trecias sakinys', x)
//   }

//   iskvieskPirmaSakiny()
//   iskvieskAntraSakiny()
//   iskvieskTreciaSakiny('Rolka')

// -------------------------------------------

// function pirmaEilute() {
//   console.log('Labas');
// }

// function antraEilute() {
//   console.log('Vakaras');
// }

// function sujungtosEilutes() {
//   pirmaEilute();
//   antraEilute();
// }

// sujungtosEilutes();

// ---------------------

// function pirmaEilute() {
//   return 'Labas';
// }

// function antraEilute() {
//   return 'Vakaras';
// }

// function sujungtosEilutes() {
//   console.log(pirmaEilute() + ' ' + antraEilute());
// }

// sujungtosEilutes();

// -----LEKTORIAUS  --------------------------

// function pirmaEilute() {
//   return 'Labas';
// }

// function antraEilute() {
//   return 'Vakaras';
// }

// function sujungtosEilutes() {
//   console.log(pirmaEilute() + ' ' + antraEilute());
// }

// sujungtosEilutes();

// ----------------
// Sudejus du atsitiktinius skaicius ir juos isvedant

// function sugeneruokIrIsveskSuma() {
//     const skaicius1 = Math.floor(Math.random() * 10) +1;
//     const skaicius2 = Math.floor(Math.random() * 10) +1;

//     let suma = skaicius1 + skaicius2;

//     console.log(`${skaicius1} + ${skaicius2} = ${suma}`)
// }

// sugeneruokIrIsveskSuma()

// ------------------------------------

// Sukurkite ir isveskite funkcija, kurioje kintamuosiuose butu saugoma informacija apie policininka
// (vardas, pavarde, amzius, alga, etatas, specializacija). Isveskite sia informacija suformatuotai
// (pavz iterpkite, i sakini, ar isveskite sarasu ar pan.).

function suformuokSakini(
  vardas,
  pavarde,
  amzius,
  alga,
  etatas,
  specializacija
) {
  console.log(
    `Grįžta ${etatas} ${specializacija} ${vardas} ${pavarde} amžiaus ${amzius}, ryte iš baro namo dar gatavas, prapylęs visą savo ${alga}, mėnesio algą.`
  );
}

suformuokSakini(
  'Poviliukas',
  'Pilypukas',
  '25 metų',
  '700 Eur.',
  'vyresnysis',
  'patrulis'
);
