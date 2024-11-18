// Ciklai - for
// Sis ciklas yra naudojamas kai yra zinoma kiek kartu jis bus naudojamas
// for (kintamasis; salyga; operacija) { kodas }

// ● kintamasis - ciklo darbui reikalingas kintamasis,
// kuris bus sunaikintas ciklui baigus darbą,
// dažniausiai naudojamas norint suvaldyti kiek
// kartų ciklas turi būti vykdomas.

// ● sąlyga - ciklas bus vykdomas kol sąlyga bus
// teisinga (grąžins true), sąlyga apsirašo tokiu
// pačiu principu kaip apsirašydavo patikrinimo
// sąlygoje if.

// ● operacija - kas bus daroma kiekvienos ciklo iteracijos metu, dažniausiai - didinamas kintamasis.
// ● kodas - kodas, kuris bus vykdomas jei sąlyga teisinga.

// Pavyzdziai

// let a = 1;

// for (let i = 0; i < 5; i++) {
//   console.log(a);
// }

// -------------------------

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// -------------------------

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// -------------------------

// for (let i = 1; i <= 10; i += 2) {
//   console.log('Skaicius: ' + i);
// }

// Neliginiai skaiciai

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log('Nelyginis skaicius: ' + i);
//   } else {
//     console.log('Lyginis skaicius: ' + i);
//   }
// }

// -------------------------

// Switch

// for (let i = 1; i <= 5; i++) {
//   switch (i) {
//     case 1:
//       console.log('Vienas');
//       break;
//     case 2:
//       console.log('Du');
//       break;
//     case 3:
//       console.log('Trys');
//       break;
//     case 4:
//       console.log('Keturi');
//       break;
//     case 5:
//       console.log('Penki');
//       break;
//   }
// }

// --------------------------

// 1. Parasyti for, kuris isvestu kiekviena skaiciu pradedant nuo 0 ir baigiant 10.

// for (let i = 0; i <= 10; i++) {
//   switch (i) {
//     case 0:
//       console.log('0');
//       break;
//     case 1:
//       console.log('1');
//       break;
//     case 2:
//       console.log('2');
//       break;
//     case 3:
//       console.log('3');
//       break;
//     case 4:
//       console.log('4');
//       break;
//     case 5:
//       console.log('5');
//       break;
//     case 6:
//       console.log('6');
//       break;
//     case 7:
//       console.log('7');
//       break;
//     case 8:
//       console.log('8');
//       break;
//     case 9:
//       console.log('9');
//       break;
//     case 10:
//       console.log('10');
//       break;
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 2. Parasyti for, kuris isvestu kas antra skaiciu pradedant 0 ir baigiant 15.

// for (let i = 0; i <= 15; i += 2) {
//     console.log('Kas antras skaicius: ' + i);
//   }

// 3. Parasyti for, kuris isvestu kas trecia skaiciu, pradedant 1 ir baigiant 20.
// Kiekviena skaiciu apskliausti lauztiniais skliaustais. Pvz.: [1][4][7]...

// for (let i = 1; i <= 20; i += 3) {
//   console.log(`Kas trecias skaicius: [${i}]`);
// }

// 4. Parasyti for, kuris eitu pro kiekviena skaiciu nuo 1 iki 20. Jame apsirasyti if salyga,
// kuri patikrintu ar dabartinis skaicius dalinasi is 4, jei taip tai si skaiciu isvesti.

// for (let i = 1; i <= 20; i++) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
// }

// 5. Susikurkite kintamuosius reziu pradziai ir pabaigai nusakyti. Patikrinkite, kad tai butu validu
// (pradzia turi buti mazesne nei pabaiga). Jei reziai tinkami, tuomet vykdyti for,
// kuris atskirose eilutese isvestu kiekviena skaiciu is tu reziu, bei atskiriant tarpu - tu skaiciu kvadratus.

// for (let i = 1; i <= 20; i++) {
//   if (i % 4 === 0) {
//     console.log(i + ' ' + i * i);
//   }
// }

// Arba

// let pradzia = 2;
// let pabaiga = 8;

// if (pradzia < pabaiga) {
//   for (let i = pradzia; i <= pabaiga; i++) {
//     console.log(`${i} ${i * i}`);
//   }
// } else {
//   console.log('pradzia nera mazesne nei pabaiga');
// }

// 6. Susikurkite kintamuosius reziu pradziai ir pabaigai nusakyti. Patikrinkite, kad tai butu validu
// (pradzia turi buti mazesne nei pabaiga). Jei reziai tinkami, tuomet vykdyti for,
// kuris is duotu skaiciu isvestu visus nelyginius skaicius arba tuos, kurie dalinasi is 8.

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0 || i % 8 === 0) {
//     console.log(i);
//   }
// }

// Arba

// let pradzia = 2;
// let pabaiga = 8;

// if (pradzia < pabaiga) {
//   for (let i = pradzia; i <= pabaiga; i++) {
//     if (i % 2 !== 0 || i % 8 === 0) {
//       console.log(i);
//     }
//   }
// } else {
//   console.log('pradzia yra didesne arba lygi pabaigai');
// }

//  % SKAITOSI "MODULIS"

// 7. (papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaicius.

// let num1 = 5;
// let num2 = 3;
// let result = 0;

// for (let i = 0; i < Math.abs(num2); i++) {
//   result += num1;
// }

// console.log(result);

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// for (let i = 5; i <= 50; i += 5) {
//   console.log(i);
// }

// for (let i = 5; i <= 50; i += 5) {
//   if (i === 20 || i === 50) console.log(i);
// }

// elementariausias ciklas for

// Lektoriaus
//
//
// let num1 = 5;
// let num2 = 3;
// let result = 0;

// for (let i = 0; i < Math.abs(num2); i++) {
//   result += num1;
// }

// console.log(result);
