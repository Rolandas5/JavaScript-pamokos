// Palyginimo operatoriai (comperison operators)

// == Palyginimas su konvertavimu
// == Konvertuoja tipus, ne reikšmes

// console.log(2 == 2); // true
// console.log('2' == 2); // true
// console.log(0 == false); // true

// === Palyginimas be konvertavimo (strict comparison)
// Turime lyginti ne tik reikšmes, bet ir jų tipus
// Prilyginimui naudoti visada tik 3 lygybes: ===
// === Patikrina reikšmes ir tipus

// console.log(2 === 2); // true
// console.log(2 === 1); // false
// console.log(2 === '2'); // false
// console.log('Rolandas' === 'Rolandas'); // true

// != Nelygu
// su vienu = konverttoja tipus

// console.log(2 != 2); // false
// console.log(2 != '2'); // false

// // !== Nelygu be konvertavimo

// console.log(2 !== 2); // false
// console.log(2 !== '2'); // true

// // > Daugiau

// console.log(2 > 1); // true
// console.log(2 > 3); // false

// // >= Daugiau arba lygu

// console.log(2 >= 2); // true

// // < Mažiau

// console.log(2 < 3); // true
// console.log(2 < 2); // false

// // <= Mažiau arba lygu

// console.log(2 <= 2); // true
// console.log(2 <= 1); // false

// Ternary operatot  - inline'o (naudojamas, kai reikia patikrinti tik 1 sąlygą, bet ne daugiau)
// sąlyga ? true : false

// let age = 18;
// let status = age >= 18 ? 'adult' : 'child';

// console.log(ageStatus); // adult

// arba

// tai analogiskas patikrinimas, bet su if, kai reikia patikrinti daugiau sąlygų

// let age = 18;
// let ageStatus = null;

// if (age >= 18) {
//     console.log('adult')
// } else {
//     ageStatus = 'cgild'
// }

// console.log(ageStatus);
