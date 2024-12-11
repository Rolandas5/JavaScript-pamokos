// Užduotys (1/2)

// (23.) Susikurkite funkciją, kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų rasti duotųjų skaičių sumą
// ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis.
// Iškvieskite turimą funkciją du kartus, abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite.
// Taip pat, raskite, kuri suma gavosi didesnė, ir išveskite atsakymą.

// Funkcijos, kurios grąžina, tai tos kur po return, tada iškonsologina už funkcijos.
// Atliekama tada kai funkcijos skaiciu reikia tolaiu prilyginti, panaudoti.

//
// function calculate(skaiciai) {

//   let suma = 0;
//   for (let i = 0; i < skaiciai.length; i++) {
//     suma += skaiciai[i];
//   }
//   return suma;
// }

// const arrayOfNumbers1 = [8, 7, 5, 6, 5, 5];
// const arrayOfNumbers2 = [5, 2, 4, 3, 8, 1];

// const suma1 = calculate(arrayOfNumbers1);
// const suma2 = calculate(arrayOfNumbers2);

// console.log(`Pirmo masyvo suma: ${suma1}`);
// console.log(`Antro masyvo suma: ${suma2}`);

// if (suma1 > suma2) {
//   console.log('Pirmo masyvo suma yra didesnė.');
// } else if (suma2 > suma1) {
//   console.log('Antro masyvo suma yra didesnė.');
// } else {
//   console.log('Abi sumos yra lygios.');
// }

// ------------ LECTORIAUS ------------------

// function sumaMasyve(skaiciai) {
//     let suma = 0;

//     for (let i = 0; i < skaiciai.length; i++) {
//       suma += skaiciai[i]
//     }

//     return suma;
//   }

//   const masyvas = [10, 30, 50, 70];
//   const masyvas2 = [45, 13, 512, 12];

//   const suma = sumaMasyve(masyvas);
//   const suma2 = sumaMasyve(masyvas2);

//   console.log('Suma pirmame masyve:', suma);
//   console.log('Suma antrame masyve:', suma2);

//   if (suma > suma2) {
//     console.log('Pirmo masyvo suma yra didesne');
//   } else if (suma2 > suma) {
//     console.log('Antro masyvo suma yra didesne');
//   } else {
//     console.log('Suma yra lygi');
//   }

// --------- LECTORIAUS PAAISKINIMAS ---------------

// // Funkcija kuri suskaiciuos
// function sumaMasyve(skaiciai) {
//     // suma kuri taps kitu skaiciumi kai baigs skaiciuoti
//     let suma = 0;
//     // Skaiciuoju suma tiek kartu kiek yra masyve nariu
//     for (let i = 0; i < skaiciai.length; i++) {
//       suma += skaiciai[i];
//     }

//     // Kai viska apskaiciuoja ir turi rezultata grazina galutini skaiciu
//     return suma;
//   }

//   const masyvas = [10, 30, 50, 70];
//   const masyvas2 = [45, 13, 512, 12];

//   const suma = sumaMasyve(masyvas);
//   const suma2 = sumaMasyve(masyvas2);

//   console.log('Suma pirmame masyve:', suma);
//   console.log('Suma antrame masyve:', suma2);

//   if (suma > suma2) {
//     console.log('Pirmo masyvo suma yra didesne');
//   } else if (suma2 > suma) {
//     console.log('Antro masyvo suma yra didesne');
//   } else {
//     console.log('Suma yra lygi');
//   }

//
//
// (24.) Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir grąžinti ilgiausią žodį masyve.
// Už funkcijos ribų susikurkite žodžių masyvą. Iškvieskite funkciją, perduodant jai žodžių masyvą. Gautą atsakymą išveskite,
// taip pat nurodykite šio žodžio ilgį.

// function findLongestWord(zodziai) {
//   let longestWord = zodziai[0];
//   for (let i = 0; i < zodziai.length; i++) {
//     if (zodziai[i].length > longestWord.length) {
//       longestWord = zodziai[i];
//     }
//   }
//   return longestWord;
// }

// const zodziuMasyvas = [
//   'automobilis',
//   'katė',
//   'kompiuteris',
//   'telekomunikacija',
//   'dviratis',
// ];

// const longestWord = findLongestWord(zodziuMasyvas);

// console.log(
//   `Ilgiausias žodis: "${longestWord}", jo ilgis: ${longestWord.length} simboliai.`
// );

// ------------- LECTORIAUS --------------------------

// // Funkcija kuri priims zodziu masyva pvz ['obuolys', 'kriause', 'bananas'];
// function findLongestWord(zodziai) {
//   // Man reikia kazkokio pirminio zodzio kuris egzistuoja masyve, ir as galesiu ji prilyginti kitiems zodziams;
//   let longestWord = zodziai[0];

//   // Suksiu cikla tol kol patenkins mano if salyga
//   for (let i = 1; i < zodziai.length; i++) {
//     if (zodziai[i].length > longestWord.length) {
//       longestWord = zodziai[i];
//     }
//   }

//   // Grazins zodi;
//   return longestWord;
// }

// const zodziuMasyvas = [
//   'obuolys',
//   'kriausebananananas',
//   'bananas',
//   'bananananas',
// ];
// const ilgiausiasZodis = findLongestWord(zodziuMasyvas);

// console.log(ilgiausiasZodis);

//
//
// Užduotys (2/2)
// (25.) Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą. Ji turėtų patikrinti, ar visi pažymiai teigiami:
// jei visi teigiami, turėtų grąžinti true kaip atsakymą, o jei yra bent vienas neigiamas – false. Susikurkite du pažymių masyvus.
// Iškvieskite šią funkciją du kartus, abu kartus perduodant skirtingus masyvus.
// Gautus atsakymus paverskite į tekstą (jeigu gavote true, išveskite tekstą „visi studento pažymiai teigiami“,
//jei false – „studentas turi bent vieną neigiamą pažymį“). Šiam iškonvertavimui iš true/false į tekstą galite pamėginti
// pasikurti atskirą funkciją, jai perduoti kitos funkcijos atsakymą.

//

// function arVisiTeigiami(pazymiai) {
//   // for (let i = 0; i < pazymiai.length; i++) {
//   // if (pazymiai[i] < maziausiasTeigiamasPazymys) {

//   // ----------------  ARBA ----------------------------

//   for (let pazymys of pazymiai) {
//     if (pazymys < maziausiasTeigiamasPazymys) {
//       return false;
//     }
//   }
//   return true;
// }

// // ----------------  ARBA LECTORIAUS BŪDU ----------------------------

// // function isvestiAtsakyma(atsakymas) {
// //   if (atsakymas) {
// //     return 'visi studento pažymiai teigiami';
// //   } else {
// //     return 'studentas turi bent vieną neigiamą pažymį';
// //   }
// // }

// // --------------------- TERNERIO OPERATORIAUS BŪDU (Ternerio operatorius (ternary operator)) ------------------------

// function isvestiAtsakyma(atsakymas) {
//   return atsakymas
//     ? 'visi studento pažymiai teigiami'
//     : 'studentas turi bent vieną neigiamą pažymį';
// }

// const maziausiasTeigiamasPazymys = 5;

// let pazymiai1 = [5, 9, 10, 7];
// let pazymiai2 = [8, 2, 9, 5];

// let atsakymas1 = arVisiTeigiami(pazymiai1);
// console.log(isvestiAtsakyma(atsakymas1));

// let atsakymas2 = arVisiTeigiami(pazymiai2);
// console.log(isvestiAtsakyma(atsakymas2));
