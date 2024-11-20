// While uzduotys

// 1) Isveskite visus skaicius nuo 1 iki 20.

// let i = 1;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }

// 2) Isveskite visus skaicius nuo 1 iki 50. Prie kiekvieno lyginio skaiciaus parasykite zodi "lyginis",
// o prie kiekvieno  nelyginio - "nelyginis".

// let i = 1;
// while (i <= 50) {
//   if (i % 2 === 0) {
//     console.log(i + ' lyginis');
//   } else {
//     console.log(i + ' nelyginis');
//   }
//   i++;
// }

// 3) Isveskite visus skaicius nuo 25 iki 50. Vietoj skaiciu, kurie dalinasi is 3 isveskite teksta "skaicius {skaicius} dalkinasi is 3".

// let i = 25;
// while (i <= 50) {
//   if (i % 3 === 0) {
//     console.log(`skaicius ${i} dalinasi is 3`);
// //   } else {
// //     console.log(i);
//   }
//   i++;
// }

// 4) Isvedinekite visus skaicius nuo 1 iki tol kol pasitaisys skaicius, kuris dalinasi is 3 ir is 5.

// let i = 1;
// while (i % 3 !== 0 || i % 5 !== 0) {
//   console.log(i);
//   i++;
// }
// console.log(`skaicius ${i} dalinasi is 3 ir is 5`);

// let m = 1;
// while (true) {
//   console.log(m);
//   if (m % 5 === 0 && m % 3 === 0) {
//     break;
//   }
//   m++;
// }

// 5) Is skaiciu nuo 1 iki 100, raskite visu lyginiu skaiciu suma.

// let i = 1;
// let suma = 0;

// while (i <= 100) {
//   if (i % 2 === 0) {
//     suma += i;
//   }
//   i++;
// }
// console.log(`Visų lyginių skaičių suma: ${suma}`);

// 6) Zemiau parodyta pavyzdi pakeiskite taip, kad toje pacioje eiluteje isvestu ne tik skaiciu, bet ir jo kvadrata.

// let skaicius = 1;

// while (skaicius < 5) {
//   console.log(skaicius + ' - ' + skaicius * skaicius);
//   skaicius++;
// }

// 7) Isveskite atsitiktini kieki atsitiktiniu skaiciu.

// let kiekis = Math.floor(Math.random() * 10) + 1;

// while (kiekis > 0) {
//   let skaicius = Math.floor(Math.random() * 100);
//   console.log(skaicius);
//   kiekis--;
// }

// 8) Isveskite atsitiktini kieki atsitiktiniu skaiciu. Raskite siu skaiciu suma.

// let kiekis = Math.floor(Math.random() * 10) + 1;
// let sum = 0;

// while (kiekis > 0) {
//   let skaicius = Math.floor(Math.random() * 100);
//   sum += skaicius;
//   kiekis--;
// }

// console.log('suma:', sum);
