// Funkcijų pavadinimai:

// a. Kai norime gauti duomenis

// function getUserName() {
//   return 'username123..';
// }

// function checkWeather() {
//   return 'sunny';
// }

// function retriveOrderDetails() {
//   return 'order details...';
// }

// // b. Kai noriome atlikti veiksma pvz nustatyti duomenis arba juos pakeisti

// function setUserName(name) {
//   console.log('setting username to: ' + name);
// }

// Kai norime pakeisti

// function updateWeather(temperature) {
//   console.log('updating temperature to: ', temperature);
// }

// function changePassword(newPassword) {
//   console.log('changing password to:', newPassword);
// }

// // c. Tikrinimas arba validacija, Boolean reiksmes

// function isEmailValid(email) {
//   return email.includes('e');
// }

// function hasPermissions(role) {
//   return role === 'admin';
// }

// function generateRandomNumbers() {
//     let result = '';

//     for (let i = 0; i < 10; i++) {
//       let number = Math.floor(Math.random() * 100) + 1;
//       let gap = i < 9 ? ' ' : '';

//       result += number + gap;
//     }

//     console.log(result);
//   }

//   for (let i = 0; i < 5; i++) {
//     generateRandomNumbers();
//   }

// ----    Nusirasyti Gretos !!!!!!!!!!!    ------

// -------------------------------------------

// function generateRandomNumber() {
//   let randomNumber = Math.floor(Math.random() * 10) + 1;
//   return randomNumber;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(generateRandomNumber());
// }

// -----------------------------------------------
// 9. Sukurkite funkciją pasisveikinimui. Šiai funkcijai per argumentus perduokite vardą,
//o funkcijoje išveskite tekstą „Labas“ ir gautą vardą. Sukurkite kitą funkciją, kuri taip pat
// per argumentus gautų vardą, tačiau pasakytų „Viso gero“ ir pateiktų vardą. Nenaudokite kintamojo
// vardui saugoti funkcijose – vardą tiesiogiai perduokite kaip argumentą. Iškvieskite abi funkcijas,
// perduodant kintamąjį vardą.

// function retriveOrderDetails(asmuo) {
//   console.log('Labas,', asmuo);
// }

// function retriveOrderDetailss(asmuo) {
//   console.log('Viso gero,', asmuo);
// }

// let asmuo = 'Jonai';

// retriveOrderDetails(asmuo);
// retriveOrderDetailss(asmuo);

// 10. Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti, kuris iš jų yra didesnis,
// ir išvesti atsakymą. Jei skaičiai lygūs – išveskite atitinkamą pranešimą. Iškvieskite šią funkciją keletą kartų,
// kiekvieną kartą pateikdami skirtingus skaičius.

// function retriveOrderDetails(a, b) {
//   if (a > b) {
//     console.log(`${a} didesnis uz ${b}`);
//   } else if (a < b) {
//     console.log(`${b} didesnis uz ${a}`);
//   } else {
//     console.log('Abu skaiciai lygus');
//   }
// }

// retriveOrderDetails(-3, 2);

// ------------------------------------

// function turnOnWipers() {
//     // ijungia valytuvus
//   }

//   function turnOnAc() {
//     // Ijungtu kondicionieriu
//   }

//   function createWeatherAlert(temperature, isRaining) {
//     if (temperature < 0) {
//       return 'Ispejimas: lauke minusas, atsargiai vairuokite!'
//     } else if (isRaining) {
//       turnOnWipers();
//       return 'Ispejimas: lauke lyja, slidus kelias!';
//     } else if (temperature > 30) {
//       turnOnAc()
//       return 'Ispejimas: Lauke karsta! nepalikite augintiniu'
//     } else {
//       return '';
//     }
//   }

// --------PARDUOTUVES DARBO LAIKAS-------------------------------

//   function isShopOpen() {
//     const currentHour = new Date().getHours();

//     if (currentHour >= 9 && currentHour <= 20) {
//       return 'Parduotuve yra atidaryta!'
//     } else {
//       return 'Parduotuve yra uzdaryta.'
//     }
//   }

//   console.log(isShopOpen())

// --------BILIETO PARDAVIMAS PAGAL AMZIU-----------------------------------

// function checkTicketPrice(age) {
//   switch (age) {
//     case 1:
//       return 'kaina 1 euras';
//       break;
//     case 2:
//       return 'kaina 2 eurai';
//       break;
//     default:
//       return 'Pilna kaina: 10 euru';
//   }
// }

// console.log(checkTicketPrice(3));

// -------------DVI FUNKCIJOS, 1 - TIKRINA VALIDUMA, o 2 - AR GALI ISTRINTI POSTA  -------------------------------

// function hasPermissions(role) {
//     return role === 'admin';
//   }

//   function deletePost(role, postName) {
//     if (hasPermissions(role)) {
//       console.log(`Postas su pavadinimu: "${postName}" buvo istrintas.`)
//     } else {
//       console.log(`Klaida. vartotojas su role "${role.toUpperCase()}" neturi teises istrinti irasu.`)
//     }
//   }

//   deletePost('admin', 'Kaip investuoti pinigus?')

// ----------------------------------------

// 13. Sukurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse,
// nurodant žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis.
// Iškvieskite sukurtą funkciją, perduodant turimą masyvą.

// function retriveOrderDetails(words) {
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     console.log(`zodyje ${word} yra simboliu ${word.length}`);
//   }
// }

// retriveOrderDetails(['Jonas', 'Petras', 'zole', 'kepalas']);

// ----------------------------------------

// 14. Sukurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius,
// šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus
// ir užpildykite juos duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.

// function retriveOrderDetails(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(`number ${number} and its square ${number ** 2 / 2}`);
//   }
// }

// retriveOrderDetails([5, 6, 10, 15, 3, 1]);

// ----------------------------------------

// Uzduotys 1/3
// 13. Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė, modelis, gamybos metai, darbinis tūris).
// Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai formatuoti. Iškvieskite šią funkciją du kartus, perduodant
// skirtingus duomenis jai.

// function retriveOrderDetails(make, model, year, engineCapacity) {
//   console.log('-----------------------');
//   console.log(`Automobilis:`);
//   console.log(`Markė: ${make}`);
//   console.log(`Modelis: ${model}`);
//   console.log(`Gamybos metai: ${year}`);
//   console.log(`Darbinis tūris: ${engineCapacity} l`);
//   console.log('-----------------------');
// }

// retriveOrderDetails('Toyota', 'Corolla', 2018, 1.8);

// retriveOrderDetails('BMW', 'X5', 2021, 3.0);

// 14. Sukurkite funkciją sumai skaičiuoti. Ši funkcija per argumentus turėtų gauti du skaičius, bei išvesti patį veiksmą kartu su
// atsakymu (pvz. 7 + 5 = 12). Sukurkite tokias pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną funkciją,
// kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas, perduodant joms sugeneruotus skaičius.
// Šią bendrąją funkciją iškvieskite keletą kartų.

// // Funkcija sumai skaičiuoti
// function calculateSum(a, b) {
//   console.log(`${a} + ${b} = ${a + b}`);
// }

// // Funkcija skirtumui skaičiuoti
// function calculateDifference(a, b) {
//   console.log(`${a} - ${b} = ${a - b}`);
// }

// // Funkcija sandaugai skaičiuoti
// function calculateProduct(a, b) {
//   console.log(`${a} * ${b} = ${a * b}`);
// }

// // Funkcija dalmeniui skaičiuoti
// function calculateQuotient(a, b) {
//   if (b !== 0) {
//       console.log(`${a} / ${b} = ${a / b}`);
//   } else {
//       console.log("Dalyba iš nulio negalima.");
//   }
// }

// // Funkcija, kuri sugeneruoja atsitiktinius skaičius ir iškviečia kitas funkcijas
// function generateAndCalculate() {
//   const num1 = Math.floor(Math.random() * 100); // Atsitiktinis skaičius nuo 0 iki 99
//   const num2 = Math.floor(Math.random() * 100); // Atsitiktinis skaičius nuo 0 iki 99

//   console.log(`Sugeneruoti skaičiai: ${num1}, ${num2}`);

//   calculateSum(num1, num2);
//   calculateDifference(num1, num2);
//   calculateProduct(num1, num2);
//   calculateQuotient(num1, num2);
// }

// // Iškviečiame bendrąją funkciją kelis kartus
// generateAndCalculate();
// generateAndCalculate();
// generateAndCalculate();
