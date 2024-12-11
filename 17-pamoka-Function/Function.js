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

// function isvestiAtsitiktiniSkaiciu() {
//     const skaicius = Math.floor(Math.random() * 100);
//     console.log(skaicius);
//   }

//   for (let i = 0; i < 10; i++) {
//     isvestiAtsitiktiniSkaiciu();
//   }

// ----    Nusirasyti Gretos !!!!!!!!!!!    ------

// function randomNumbers() {
//     let ranNum = [];
//     for (let i = 0; i < 10; i++) {
//       const skaiciukas = Math.floor(Math.random() * 100);
//       ranNum.push(skaiciukas);
//     }

//     console.log(ranNum.join(' '));
//   }

//   for (let j = 0; j < 5; j++) {
//     randomNumbers();
//   }

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

// (13.) Sukurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse,
// nurodant žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis.
// Iškvieskite sukurtą funkciją, perduodant turimą masyvą.

// function retriveOrderDetails(words) {
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     console.log(`zodyje ${word} yra simboliu ${word.length}`);
//   }
// }

// retriveOrderDetails(['Jonas', 'Petras', 'zole', 'kepalas', 'as']);

// ----------------------------------------

// (14.) Sukurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius,
// šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus
// ir užpildykite juos duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.

// function retriveOrderDetails(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(
//       `skaičiaus ${number} kvadratas ${
//         number ** 2
//       } ir ir jo padalintas kvadratas ${number ** 2 / 2}`
//     );
//   }
// }

// retriveOrderDetails([5, 6, 10, 15, 3, 1]);

// --- LECTORIAUS --------------------

// function spausdintiSkaicius(skaiciai) {
//     for (let i = 0; i < skaiciai.length; i++) {
//       let skaicius = skaiciai[i];
//       let skaiciausKvadratas = skaicius * skaicius;
//       let padalintasSkaicius = skaiciausKvadratas / 2;
//       console.log(`Skaicius: ${skaicius}, Kvadratas: ${skaiciausKvadratas}, Padalinta: ${padalintasSkaicius}`);
//     }
//   }

//   const masyvas = [2, 100];

//   spausdintiSkaicius(masyvas);

// ----------------------------------------

// Uzduotys 1/3
// 13. Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė, modelis, gamybos metai, darbinis tūris).
// Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai formatuoti. Iškvieskite šią funkciją du kartus, perduodant
// skirtingus duomenis jai.

// function showCarDetails(make, model, year, engine) {
//   console.log('-----------------------');
//   console.log(`Automobilis:`);
//   console.log(`Markė: ${make}`);
//   console.log(`Modelis: ${model}`);
//   console.log(`Gamybos metai: ${year}`);
//   console.log(`Darbinis tūris: ${engine} l`);
//   console.log('-----------------------');
// }

// showCarDetails('Toyota', 'Corolla', 2018, 1.8);

// showCarDetails('BMW', 'X5', 2021, 3.0);

// ---- LECTORIAUS ---------

// const bmw = {
//     id: 1,
//     make: "Toyota",
//     model: "Corolla",
//     year: 2022,
//     color: "Silver",
//     mileage: 20000,
//     price: 25000,
//     fuelType: "Gasoline",
//     transmission: "Automatic",
//     engine: "2.0L 4-cylinder",
//     horsepower: 169,
//     features: ["Bluetooth", "Backup Camera", "Keyless Entry"],
//     owners: 1,
//     image: "https://fakeimg.pl/500x500/cccccc"
//   };

//   const bmw2 = {
//     id: 1,
//     model: "Corolla",
//     year: 2022,
//     color: "Silver",
//     mileage: 20000,
//     price: 25000,
//     fuelType: "Gasoline",
//     transmission: "Automatic",
//     engine: "2.0L 4-cylinder",
//     horsepower: 169,
//     features: ["Bluetooth", "Backup Camera", "Keyless Entry"],
//     owners: 1,
//     image: "https://fakeimg.pl/500x500/cccccc"
//   };

//   function showCarDetail(car) {
//     console.log('Automobilio duomenys:');
//     console.log('Markė:', car.make);
//     console.log('Modelis:', car.model);
//     console.log('Gamybos metai:', car.year);
//     console.log('Variklio turis:', car.engine);
//     console.log('Papildoma iranga:', car.features)
//   };

//   showCarDetail(bmw);

// 14. Sukurkite funkciją sumai skaičiuoti. Ši funkcija per argumentus turėtų gauti du skaičius, bei išvesti patį veiksmą kartu su
// atsakymu (pvz. 7 + 5 = 12). Sukurkite tokias pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną funkciją,
// kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas, perduodant joms sugeneruotus skaičius.
// Šią bendrąją funkciją iškvieskite keletą kartų.

// function showSum(a, b) {
//   const suma = a + b;
//   console.log(`${a} + ${b} = ${suma}`);
// }

// function showDifference(a, b) {
//   const skirtumas = a - b;
//   console.log(`${a} - ${b} = ${skirtumas}`);
// }

// function showMultiplied(a, b) {
//   const sandauga = a * b;
//   console.log(`${a} * ${b} = ${sandauga}`);
// }

// function showQuotient(a, b) {
//   const dalmuo = a / b;
//   console.log(`${a} / ${b} = ${dalmuo.toFixed(2)}`);
// }

// function generateRandomNumbers() {
//   const a = Math.floor(Math.random() * 100) + 1;
//   const b = Math.floor(Math.random() * 100) + 1;

//   console.log(`Sugeneruoti random skaiciai: a = ${a} b = ${b}`);

//   showSum(a, b);
//   showDifference(a, b);
//   showMultiplied(a, b);
//   showQuotient(a, b);
// }

// generateRandomNumbers();
// generateRandomNumbers();
// generateRandomNumbers();

// ---- LECTORIAUS -----------------

// function sudek(a, b) {
//     let suma = a + b;
//     console.log(`${a} + ${b} = ${suma}`);
//   }

//   function atimk(a, b) {
//     let skirtumas = a - b;
//     console.log(`${a} - ${b} = ${skirtumas}`);
//   }

//   function daugink(a, b) {
//     let sandauga = a * b;
//     console.log(`${a} * ${b} = ${sandauga}`);
//   }

//   function dalink(a, b) {
//     let dalmuo = a / b;
//     console.log(`${a} / ${b} = ${dalmuo.toFixed(2)}`);
//   }

//   function sugeneruokRandomSkaiciu() {
//     return Math.floor(Math.random() * 100 + 1);
//   }

//   function atvaizduokSkaicius() {
//     let a = sugeneruokRandomSkaiciu();
//     let b = sugeneruokRandomSkaiciu();

//     sudek(a, b);
//     atimk(a, b);
//     daugink(a, b);
//     dalink(a, b);
//   }

//   atvaizduokSkaicius();

// Uzduotys 2/3
// (15.) Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą bei studento vardą su pavarde.
// Funkcija turėtų išvesti studento vardą ir pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį bei jį išvesti.
// Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus arba objektus studentų pažymiams saugoti ir
// užpildykite juos duomenimis. Iškvieskite šią funkciją perduodant visus reikiamus duomenis.

// function showStudentDetails() {
//     let suma = 0;
//     for (let i = 0; i < studentas.grades.length; i++) {
//       suma += studentas.grades[i];
//   }

//   const vidurkis = suma / studentas.grades.length;

//     console.log('-----------------------');
//     console.log(`Studneto duomenys:`);
//     console.log(`Vardas: ${studentas.vardas}`);
//     console.log(`Pvardė: ${studentas.pavarde}`);
//     console.log(`Pažymiai: ${studentas.grades}`);
//     console.log(`Vidurkis: ${vidurkis}`);
//     console.log('-----------------------');
//   }

// studentas = {
//   vardas: 'Jonas',
//   pavarde: 'Jonaitis',
//   grades: [8, 7, 5, 6, 5, 5],
// };

// showStudentDetails(studentas);

// ---------------- LECTORIAUS ---------------------

// function isveskStudentoInformacija(vardas, pavarde, pazymiai) {
//     console.log(`Studentas: ${vardas} ${pavarde}`);
//     console.log(`Studento pazymiai: ${pazymiai}`);

//     let suma = 0;
//     for (let i = 0; i < pazymiai.length; i++) {
//       suma += pazymiai[i];
//     }

//     let vidurkis = suma / pazymiai.length;

//     console.log(`Vidurkis: ${vidurkis}`);
//   }

//   isveskStudentoInformacija('Tomas', 'Tomaitis', [5, 6, 7, 9]);

// ---------------- LECTORIAUS ---------------------

// Uzduotys (3/3)
// (16.) Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų rasti didžiausią skaičių iš masyvo
// bei išvesti gautą atsakymą. Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų  pasirinktą
// kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus. Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus,
// kiekvieną kartą perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti, masyvuose esančią informaciją išveskite norimu būdu
// (per console.log arba per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos funkciją,
// kiekvieną kartą perduodant skirtingą masyvą į ją.

// function findBiggestNumber(numbers) {
//   let biggestNumber = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > biggestNumber) {
//       biggestNumber = numbers[i];
//     }
//   }
//   console.log('Didziausias skaicius masyve yra:', biggestNumber);
// }

// function generateRandomNumbers(numbers, amount) {
//   for (let i = 0; i < amount; i++) {
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     numbers.push(randomNumber);
//   }
// }

// let masyvas = [];
// let masyvas1 = [];
// let masyvas2 = [];

// generateRandomNumbers(masyvas, 10);
// generateRandomNumbers(masyvas1, 15);
// generateRandomNumbers(masyvas2, 3000);

// console.log(masyvas);
// console.log(masyvas1);
// console.log(masyvas2);

// ---------------- LECTORIAUS ---------------------
