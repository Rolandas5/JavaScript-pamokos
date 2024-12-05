// Funkcijų pavadinimai:

// a. Kai norime gauti duomenis

function getUserName() {
  return 'username123..';
}

function checkWeather() {
  return 'sunny';
}

function retriveOrderDetails() {
  return 'order details...';
}

// b. Kai noriome atlikti veiksma pvz nustatyti duomenis arba juos pakeisti

function setUserName(name) {
  console.log('setting username to: ' + name);
}

// Kai norime pakeisti

function updateWeather(temperature) {
  console.log('updating temperature to: ', temperature);
}

function changePassword(newPassword) {
  console.log('changing password to:', newPassword);
}

// c. Tikrinimas arba validacija, Boolean reiksmes

function isEmailValid(email) {
  return email.includes('e');
}

function hasPermissions(role) {
  return role === 'admin';
}

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

// -------------DVI FUNKCIJOS, 1 - TIKRINA VALIDUIMA, o 2 - AR GALI ISTRINTI POSTA  -------------------------------

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
//     console.log(`number ${number} and its square ${number ** 2}`);
//   }
// }

// retriveOrderDetails([5, 6, 10, 15, 3, 1]);

// ----------------------------------------
