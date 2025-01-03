/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

// function convertToDollars(euros, exchange = 1.0389) {
//   return euros * exchange;
// }

// const euros = Math.floor(Math.random() * 1000) + 1;

// const dollars = convertToDollars(euros);

// console.log(`${euros} eurų atitinka ${dollars.toFixed(2)} dolerių.`);

//
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

// function convertToEuros(dollars, exchange = 1.0389) {
//   return dollars / exchange;
// }

// const dollars = Math.floor(Math.random() * 1000) + 1;

// const euros = convertToEuros(dollars);

// console.log(`${dollars} dolerių atitinka ${euros.toFixed(2)} eurų.`);

//
/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

// function calculateBmi(weight, height) {
//   const bmi = weight / height ** 2;
//   let mass;

//   if (bmi < 18.5) {
//     bodyCondition = 'Per mažas svoris';
//   } else if (bmi >= 18.5 && bmi < 25) {
//     bodyCondition = 'Normalu';
//   } else {
//     bodyCondition = 'Viršsvoris';
//   }

//   return { bmi: bmi.toFixed(2), bodyCondition };
// }

// const weight = 83;
// const height = 1.7;

// const result = calculateBmi(weight, height);

// console.log(`Jūsų kūno masės indeksas (KMI): ${result.bmi}`);
// console.log(`Kūno būklė: ${result.bodyCondition}`);

//
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

// function convertAgeInTime(ageInYears) {
//   const secondsInMinute = 60;
//   const secondsInHour = 3600;
//   const secondsInDay = 86400;
//   const secondsInYear = 31536000;

//   const seconds = ageInYears * secondsInYear;
//   const minutes = seconds / secondsInMinute;
//   const hours = seconds / secondsInHour;
//   const days = seconds / secondsInDay;

//   return { seconds, minutes, hours, days };
// }

// const ageInYears = 42;
// const result = convertAgeInTime(ageInYears);

// console.log(`Amžius: ${ageInYears} metai`);
// console.log(`Sekundės: ${result.seconds}`);
// console.log(`Minutės: ${result.minutes}`);
// console.log(`Valandos: ${result.hours}`);
// console.log(`Dienos: ${result.days}`);

//
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

// function convertfahrenheitToCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// function convertcelsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// const fahrenheit = 100;
// const celsius = 37.78;

// const resultCelsius = convertfahrenheitToCelsius(fahrenheit);
// const resultFahrenheit = convertcelsiusToFahrenheit(celsius);

// console.log(`${fahrenheit}°F = ${resultCelsius.toFixed(2)}°C`);
// console.log(`${celsius}°C = ${resultFahrenheit.toFixed(2)}°F`);

//
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

// let number = '';
// for (let i = 1; i <= 10; i++) {
//   if (i === 10) {
//     number += i;
//   } else {
//     number += i + '-';
//   }
// }
// console.log(number);

//
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

// for (let i = 1; i <= 5; i++) {
//   let stars = '';
//   for (let j = 1; j <= i; j++) {
//     stars += '*';
//   }
//   console.log(stars);
// }

//
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

// let thisYear = new Date(Date.now()).getFullYear();
// let today = new Date();
// let christmas = new Date(thisYear, 11, 25);

// let daysLeft = 0;

// for (
//   let date = new Date(today);
//   date < christmas;
//   date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
// ) {
//   daysLeft++;
// }

// console.log(`Iki Kalėdų liko ${daysLeft} dienų.`);

//
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

// let names = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

// let firstTest = '';
// for (let i = 0; i < names.length; i++) {
//   firstTest += names[i];
//   if (i < names.length - 1) {
//     firstTest += ',';
//   }
// }
// console.log(firstTest);

// let secondTest = '';
// for (let i = 0; i < names.length; i++) {
//   secondTest += names[i];
//   if (i < names.length - 1) {
//     secondTest += '+';
//   }
// }
// console.log(secondTest);

//
/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

// function passwordGenerator(len) {
//   const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // didžiosios raidės
//   const lowerCase = 'abcdefghijklmnopqrstuvwxyz'; // mažosios raidės
//   const number = '0123456789'; // skaičiai
//   const punctuation = '!@#$%^&*()_+~`|}{[]:;?><,./-='; // simboliai
//   const allChars = upperCase + lowerCase + number + punctuation; // visi simboliai

//   let password = '';

//   // slaptažodyje formuojami simboliai po vieną simbolį iš kiekvienos kategorijos
//   // parenkama didžioji raidė
//   password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
//   // parenkama mažoji raidė
//   password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
//   // parenkamas skaičius
//   password += number.charAt(Math.floor(Math.random() * number.length));
//   // parenkamas simbolis
//   password += punctuation.charAt(
//     Math.floor(Math.random() * punctuation.length)
//   );

//   // užpildo atsitiktiniais simboliais iš visų kategorijų
//   while (password.length < len) {
//     password += allChars.charAt(Math.floor(Math.random() * allChars.length));
//   }

//   // suformuoja slaptažodį su simboliais atsitiktine tvarka
//   password = password
//     .split('')
//     .sort(() => Math.random() - 0.5)
//     .join('');

//   // užtikrina, kad slaptažodis atitiktų nurodytą ilgį
//   return password.substr(0, len);
// }

// console.log(passwordGenerator(12));

//
//*
