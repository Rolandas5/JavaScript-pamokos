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
// su vioenu = konverttoja tipus

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
