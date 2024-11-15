// Switch statement - palyginimo operatorius
// Leidzia palyginti kintamaji su daugybe skirtingu reiksmiu

// const day = 2;

// switch (day) {
//   case 1:
//     console.log('Pirmadienis');
//     break;
//   case 2:
//     console.log('Antradienis');
//     break;
//   case 3:
//     console.log('Treciadienis');
//     break;
//   case 4:
//     console.log('Ketvirtadienis');
//     break;
//   case 5:
//     console.log('Penktadienis');
//     break;
//   case 6:
//     console.log('Sestadienis');
//     break;
//   default:
//     console.log('Tokios dienos nera');
// }

// let skaicius1 = 5;
// let skaicius2 = 10;
// let veiksmas = '+';

// switch (veiksmas) {
//   case '+':
//     console.log(skaicius1 + skaicius2);
//     break;
//   case '-':
//     console.log(skaicius1 - skaicius2);
//     break;
//   case '*':
//     console.log(skaicius1 * skaicius2);
//     break;
//   default:
//     console.log('Nezinomas veiksmas');
// }

// 1. Susikurkite kinatamaji pasirinkimui saugoti, i ji irasykite norima reiksme. Tikrinkite:
// 1) ar pasirinkimas lygus 1? Jei taip, isveskite, kad vartotojas laimejo vandens.
// 2) ar pasirinikimas lygus 2? Jei taip, isveskite, kad vartotojas laimejo limonada.
// 3) ar pasirinkimas lygus 3? Jei taip, isveskite, kad vartotojas laimejo arbata.
// 4) ar pasirinkimas lygus 4? Jei taip, isveskite, kad vartotojas laimejo kava.
// Jei pasirinkimas neegzistuoja, isveskite klaidos pranesima.

// const pasirinkimas = 3;

// switch (pasirinkimas) {
//   case 1:
//     console.log('vartotojas laimejo vandens');
//     break;
//   case 2:
//     console.log('vartotojas laimejo limonada');
//     break;
//   case 3:
//     console.log('vartotojas laimejo arbata');
//     break;
//   case 4:
//     console.log('vartotojas laimejo kava');
//     break;
//   default:
//     console.log('Toks pasirinkimas neegzistupoja: Klaida');
// }

// 2. Susikurkite kintamuosius trims skaiciams saugoti ir priskirkite jiems reiksmes. Tikrinkite pirm1 skaiciu:
// 1) ar pirmas skaicius lygus 1? Jei taip isveskiti visu triju skaiciu suma.
// 2) ar pirmas skaicius lugus 2? Jei taip isveskiti antro ir trecio skaiciu sandauga.
// 3) ar pirmas skaicius lugus 3? Jei taip isvesti pirmo skaiciaus kvadresta.
// 4) Jei nei vienas variantas netinka, isveskite klaidos pranesima.

// let skaic1 = 5;
// let skaic2 = 8;
// let skaic3 = 10;

// switch (skaic1) {
//   case 1:
//     console.log(`Visų trijų skaičių suma: ${skaic1 + skaic2 + skaic3}`);
//     break;
//   case 2:
//     console.log(`Antro ir trečio skaičiaus sandauga: ${skaic2 * skaic3}`);
//     break;
//   case 3:
//     console.log(`Pirmo skaičiaus kvadratas: ${skaic1 ** 2}`);
//     break;
//   default:
//     console.log('Klaida: Pirmas skaičius neatitinka jokių sąlygų.');
// }

// 3. Susikurkite kintamaji klaidos kodui saugoti, jam priskirkite koki nors klaidos koda.
// Tikrinkite koks tai klaidos kodas (bent 3 skirtingus variantus), ties kiekvienu ju isveskite skirtinga teksta,
// nurodanti, kad bus atleikami skirtingi veiksmai.

// const klaidosKodas = 1;

// switch (klaidosKodas) {
//   case 1:
//     console.log('Klaida 1: Puslapis nerastas. Bandykite patikrinti nuoroda.');
//     break;
//   case 2:
//     console.log('Klaida 2: Serverio klaida. Bandykite perkrauti puslapi.');
//     break;
//   case 3:
//     console.log('Klaida 3: Uždrausta. Neturite teisės pasiekti šio puslapio.');
//     break;
//   default:
//     console.log(
//       'Nežinoma klaida. Bandykite susisiekite su aptarnaujancia komanda.'
//     );
// }
