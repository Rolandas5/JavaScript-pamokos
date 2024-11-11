// Loginiai operatoriai (logical operator) &&, ||, !

// && - ir
// false && false = false;
// false && true = false;
// true &&  false = false;
// true && true = true;

// const a = 1;
// const b = -1;

// Turi butinai atitikti abi salygas
// if (a > 0 && b > 0) {
//   console.log('a ir b yra teigiami skaiciai');
// } else {
//   console.log('a arba b nera teigiamas skaicius');
// }

// Pvz.:

// let skaicius = 101;

// if (skaicius > 0 && skaicius <= 100) {
//   console.log('skaicius patenka tarp reziu nuo 0 iki 100');
// } else if (skaicius > 0 && skaicius <= 1000) {
//   console.log('Skaicius patenka tarp 100 ir 1000');
// }

// || - arba
// false || false = false;
// false || true = true;
// true || false = true;
// true || true = true;

// const c = 1;
// const d = false;

// // Turi atitikti bent viena salyga
// if (c >= 1 || d === true) {
//   console.log('salyga yra teisinga');
// } else {
//   console.log('salyga yra neteisinga');
// }

// Pvz.:

// let skaicius2 = 100;

// if (skaicius2 === 100 || skaicius2 === 90) {
//   console.log('Salyga atitinka');
// } else {
//   console.log('Salyga neatitinka');
// }

// let skaicius2 = 100;

// if (
//   skaicius2 === 100 ||
//   skaicius2 === 90 ||
//   skaicius2 === 80 ||
//   skaicius2 === 70
// ) {
//   console.log('Salyga atitinka!');
// } else {
//   console.log('Salyga neatitinka');
// }

// ! - ne
// !true = false;
// !false = true;

// const isLoggedIn = true;

// if (!isLoggedIn) {
//   console.log('Tu esi neprisijunges!');
// } else {
//   console.log('Tu esi prisijunges!');
// }

// // Pvz.:
// let isLoggedIn = true;
// let isAdmin = true;
// let age = 21;

// if (isLoggedIn && (isAdmin || age === 21)) {
//   console.log('Patenki');
// } else {
//   console.log('nepatenki');
// }

// Pvz:

// const arTuriBilieta = false;
// const yraVipNarys = true;

// if (arTuriBilieta) {
//   console.log('Uzeikite i koncerta!');
// } else if (!arTuriBilieta && yraVipNarys) {
//   console.log('Tu neturi bilieto, bet esi VIP narys tai uzeik i koncerta!');
// } else if (!arTuriBilieta && !yraVipNarys) {
//   console.log('Tu neturi nei bilieto nei esi vip narys.');
// }

// 12. Susikurkite tris skaicius. Suraskite kuris is siu skaiciu yra didziausias.

let skaicius1 = 5;
let skaicius2 = 7;
let skaicius3 = 10;
// let didziausias;
let maziausias;

// if (skaicius1 >= skaicius2 && skaicius1 >= skaicius3) {
//   didziausias = skaicius1;
// } else if (skaicius2 >= skaicius1 && skaicius2 >= skaicius3) {
//   didziausias = skaicius2;
// } else {
//   didziausias = skaicius3;
// }

// console.log('Didžiausias skaičius yra: ' + didziausias);

// 13. Susikurkite tris skaicius. Suraskite kuris is siu skaiciu yra maziausias.

// if (skaicius1 <= skaicius2 && skaicius1 <= skaicius3) {
//   maziausias = skaicius1;
// } else if (skaicius2 <= skaicius1 && skaicius2 <= skaicius3) {
//   maziausias = skaicius2;
// } else {
//   maziausias = skaicius3;
// }

// console.log('Mažiausias skaičius yra: ' + maziausias);

// 14. Susikurkite triju egzaminu rezultatu kintamuosius. Suraskite pazumiu vidurki. Atlikite siuos patikrinimus:
// 1. ar gautas vidurkis yra [8-10]; 2. ar gautas vidurkis yra [5-8]; 3. ar gautas vidurkis yra < 5.

// let egzaminas1 = 7;
// let egzaminas2 = 9;
// let egzaminas3 = 6;

// let vidurkis = (egzaminas1 + egzaminas2 + egzaminas3) / 3;

// if (vidurkis >= 8 && vidurkis <= 10) {
//   console.log('Vidurkis yra [8-10] ribose:', vidurkis.toFixed(2));
// } else if (vidurkis >= 5 && vidurkis < 8) {
//   console.log('Vidurkis yra [5-8] ribose:', vidurkis.toFixed(2));
// } else if (vidurkis < 5) {
//   console.log('Vidurkis yra mažiau nei 5:', vidurkis.toFixed(2));
// }

// 15. Susikurkite du skaicius. Patikrinkite (naudojant 4 atskirus if'us):
// 1. ar pirmas skaicius yra didesnis uz antraji arba yra lygus 0;
// 2. ar antras skaicius yra didesnis uz pirmaji arba yra lygus 5;
// 3. ar pirmas skaicius yra didesnis uz antraji ir yra lygus 20;
// 4. ar antras skaicius yra didesnis uz pirmaji ir yra mazesnis uz 100;
