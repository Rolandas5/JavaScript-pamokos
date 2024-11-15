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
// 2. Parasyti for, kuris isvestu kas antra skaiciu pradedant 0 ir baigiant 15.
// 3. Parasyti for, kuris isvestu kas trecia skaiciu, pradedant 1 ir baigiant 20.
// Kiekviena skaiciu apskliausti lauztiniais skliaustais. Pvz.: [1][4][7]...
// 4. Parasyti for, kuris eitu pro kiekviena skaiciu nuo 1 iki 20. Jame apsirasyti if salyga,
// kuri patikrintu ar dabartinis skaicius dalinasi is 4, jei taip tai si skaiciu isvesti.

// 5. Susikurkite kintamuosius reziu pradziai ir pabaigai nusakyti. Patikrinkite, kad tai butu validu
// (pradzia turi buti mazesne nei pabaiga). Jei reziai tinkami, tuomet vykdyti for,
// kuris atskirose eilutese isvestu kiekviena skaiciu is tu reziu, bei atskiriant tarpu - tu skaiciu kvadratus.

// 6. Susikurkite kintamuosius reziu pradziai ir pabaigai nusakyti. Patikrinkite, kad tai butu validu
// (pradzia turi buti mazesne nei pabaiga). Jei reziai tinkami, tuomet vykdyti for,
// kuris is duotu skaiciu isvestu visus nelyginius skaicius arba tuos, kurie dalinasi is 8.

// 7. (papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaicius.
