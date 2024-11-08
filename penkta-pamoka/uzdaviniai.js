// Pratimai

let pirmas = 10;
let antras = 20;
let trecias = -16;

// 1. Ar pirmas ir antras skaičiai yra lygūs?

// if (pirmas === antras) {
//   console.log('pirmas ir antras skaiciai yra lygus');
// } else {
//   console.log('pirmas ir antras skaiciai nėra lygus');
// }

// 2. Ar antras ir trečias skaičiai yra lygūs?

// if (pirmas === antras) {
//   console.log('antras ir trecias skaiciai yra lygus');
// } else {
//   console.log('antras ir trecias skaiciai nėra lygus');
// }

// 3. Ar pirmas skaičius yra didesnis už antrąjį? // Su Terneriu

// let rezultatas =
//   pirmas > antras
//     ? 'pirmas skaicius yra didesnis uz antra'
//     : 'pirmas skaicius yra didesnis uz antra';
// console.log(rezultatas);

// 4. Ar antras yra didesnis už dvigubą trečiojo skaičiaus reikšmę (trečias skaičius padaugintas iš 2)?

// if (antras > trecias ** 2 * 2) {
//   console.log('antras yra didesnis už trečiojo skaičiaus kvadratą');
// } else {
//   console.log('antras nėra didesnis už trečiojo skaičiaus kvadratą');
// }

// arba
// const atsakymas =
//   antras > trecias ** 2
//     ? 'antras yra didesnis už trečiojo skaičiaus kvadratą'
//     : 'antras nėra didesnis už trečiojo skaičiaus kvadratą';
// console.log(atsakymas);

// 5. Ar pirmas skaičius yra lyginis (ar dalinasi iš 2)?

// if (pirmas % 2 === 0) {
//   console.log('pirmas skaicius yra lyginis');
// } else {
//   console.log('pirmas skaicius yra nelyginis');
// }

// console.log('Modulis:', pirmas % 2);
// // console.log( a % 2 === 0 )

// 6. Ar antras skaicius yra nelyginis (ar nesidalina is 2)?

// if (antras % 2 !== 0) {
//   console.log('antras skaicius yra nelyginis');
// } else {
//   console.log('antras skaicius yra lyginis');
// }

// 7. Ar trecias skaicius yra teigiamas (didesnis uz 0)?

// if (trecias > 0) {
//   console.log('trecias skaicius yra teigiamas');
// } else {
//   console.log('trecias skaicius yra neigiamas');
// }

// 8. Ar pirmas skaicius yra neigiamas (mazesnis uz 0)?

// if (pirmas < 0) {
//   console.log('pirmas skaicius yra neigiamas');
// } else {
//   console.log('pirmas skaicius yra teigiamas');
// }

// 9. Ar antras skaicius dalinasi is 4?

// if (antras % 4 === 0) {
//   console.log('antras skaicius dalinasi is 4');
// } else {
//   console.log('antras skaicius nesidalinasi is 4');
// }

// 10. Ar trecias skaicius dalinasi is 8?

// if (antras % 8 === 0) {
//   console.log('antras skaicius dalinasi is 8');
// } else {
//   console.log('antras skaicius nesidalinasi is 8');
// }

// 11. Susikurkite kintamaji vartotojo amziui sayugoti. Patikrinkite ar amzius yra didesnis arba lygus 18 - ai, jei taip - isveskite "jus galite balsuoti".

// let age = 20;

// if (age >= 18) {
//   console.log('Jūs galite balsuoti');
// } else {
//   console.log('Jūs negalite balsuoti');
// }

// 12. Susikurkite kelis kintamuosius saugoti pazymiams. Raskite siu pazymiu vidurkį. Patikrinkite ar vidurkis teigiamas (daugiau arba lygu5), jei taip - isveskite "vidurkis teigiamas".

// let pazymys1 = 8;
// let pazymys2 = 7;
// let pazymys3 = 5;

// if ((pazymys1 + pazymys2 + pazymys3) / 3 >= 5) {
//   console.log('vidurkis teigiamas');
// } else {
//   console.log('vidurkis neigiamas');
// }

// 13. Susikurkite skaiciaus kintamaji. Atlikite siuos veiksmus:
// 1) jei skaicius dalinasi is 5, tuomet isveskite sio skaiciaus daugybos lentele nuo 1 iki 5.

let a = 4;

// if (a % 5 === 0) {
//   console.log(
//     `Daugybos lentele: ${a * 1}, ${a * 2}, ${a * 3}, ${a * 3}, ${a * 4}, ${
//       a * 5
//     }`
//   );
// } else {
//   console.log('Skaicius nesidalina is 5');
// }

// 2) jei skaicius lyginis, tuomet isveskite si skaiciu, jo kvadrata ir ji padalinta is 2.

// if (a % 2 === 0) {
//   console.log('skaicius yra lyginis: ', a ** 2 / 2);
// } else {
//   console.log('skaicius yra nelyginis');
// }

// 3) jei skaicius nesidalina is 7, tuomet susikurkite antraji kintamaji, isveskite siu dvijeju skaiciu suma, skirtuma, sandauga, dalmani.

// if (a % 7 !== 0) {
//   b = 2;
//   console.log(
//     `Suma: ${a + b}, Skirtumas: ${a - b}, Sandauga: ${a * b}, Dalmuo: ${a / b}`
//   );
// } else {
//   console.log('Skaičius dalijasi iš 7.');
// }
// -----------------------------------
// 14. Susikurkite kintamaji egzamino pazymiui saugoti [0 - 10]. Naudojant ekse if patikrinkite šias sąlygas:
// 1) Jei pažymys lygu 10 išvesti "puikiu".

// if (a === 10) {
//   console.log('Puiku');
// } else {
//   console.log(' ');
// }

// 2) Jei pažymys yra lygus arba didesnis nei 9 isvesti "labai gerai":

// if (a >= 9) {
//   console.log('labai gerai');
// } else {
//   console.log(' ');
// }

// 3) Jei pažymys yra lygus arba didesnis nei 7 isvesti "gerai":

// if (a >= 7) {
//   console.log('gerai');
// } else {
//   console.log(' ');
// }

// 4) Jei pažymys yra lygus arba didesnis nei 5 isvesti "patenkinamai":

// if (a >= 5) {
//   console.log('patenkinamai');
// } else {
//   console.log(' ');
// }

// 5) Jei pažymys yra mazesnis nei 5 isvesti "egaminas neislaikytas":

// if (a < 5) {
//   console.log('egzaminas neislaikytas');
// } else {
//   console.log(' ');
// }

// 15. Susikurkite tris skaiciu kintamuosius. Patikrinkite sias salygas (naudojant else if dalis)
// 1) ar pirmas skaicius didesnis uz antra:

// if (pirmas > antras) {
//   console.log('pimras didesnis uz antra');
// } else {
//   console.log('pimras nedidesnis uz antra');
// }

// 2) ar antras didesnis uz trecia:

// if (antras > trecias) {
//   console.log('antras didesnis uz trecia');
// } else {
//   console.log('antras nedidesnis uz trecia');
// }

// 3) ar trecias didesnis uz pirma:

// if (trecias > pirmas) {
//   console.log('trecias didesnis uz pirma');
// } else {
//   console.log('trecias nedidesnis uz pirma');
// }

// 4) ar pirmi du skaiciai yra lygus:

// if (pirmas === antras) {
//   console.log('pirmi du skaiciai lygus');
// } else {
//   console.log('pirmi du skaiciai nelygus');
// }

// 5) ar paskutiniai du skaiciai yra lygus:

// if (antras === trecias) {
//   console.log('paskutiniai du skaiciai yra lygus');
// } else {
//   console.log('paskutiniai du skaiciai yra nelygus');
// }

// 6. ar pirmas skaicius yra lygus 0:

// if (pirmas === 0) {
//   console.log('pirmas skaicius yra lygus 0');
// } else {
//   console.log('pirmas skaicius yra nelygus 0');
// }

// 7. ar antras skaicius neigiamas:

// if (antras < 0) {
//   console.log('antras skaicius neigiamas');
// } else {
//   console.log('antras skaicius teigiamas');
// }

// 8. ar trecias skaicius teigiamas:

// if (trecias > 0) {
//   console.log('trecias skaicius teigiamas');
// } else {
//   console.log('trecias skaicius neigiamas');
// }
