// 1) Raskite visu skaiciu nuo 1 iki 100 suma.

// let suma = 0;

// for (let i = 1; i <= 100; i++) {
//   suma += i;
// }

// console.log('Visų skaičių nuo 1 iki 100 suma:', suma);
//
//
// let start = 1;
// let end = 100;

// let sum = 0;

// for (let i = 1; i <= 100; i++)

//     console.log(sum)

//
//
// 2) Raskite visu lyginiu nuo 20 iki 50 suma.

// let sumaLyginiai = 0;

// for (let i = 20; i <= 50; i++) {
//   if (i % 2 === 0) {
//     sumaLyginiai += i;
//   }
// }
// console.log('visu lyginiu nuo 20 iki 50 suma:', sumaLyginiai);

//
//
//
// 3) Raskite visu nelyginiu skaiciu nuo 30 iki 60 suma.

// let sumaNelyginiai = 0;

// for (let i = 30; i <= 60; i++) {
//   if (i % 2 !== 0) {
//     sumaNelyginiai += i;
//   }
// }
// console.log('nelyginiu skaiciu nuo 30 iki 60 suma:', sumaNelyginiai);

//
//
//
// 4) Rasti visu skaiciu, zemesniu uz 1000 ir kurie dalinasi is 3 arba 5 suma.

// let suma = 0;

// for (let i = 0; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     suma += i;
//   }
// }

// console.log(
//   'visu skaiciu, zemesniu uz 1000 ir kurie dalinasi is 3 arba 5 suma:',
//   suma
// );

// 5) "Fizz-Buzz testas" yra interviu klausimas, skirtas padeti isfiltruoti 99,5% programavimo darbo kandidatu,
// kurie, atrodo, negali programuoti iseiteis is slapio popieriaus maiselio. Programavimo uzduoties tekstas yra toks:

// "Parasykite programa, kuri atspausdintu skaicius nuo 1 iki 100. Bet triju kartotiniams vietoj skaiciaus spausdinkite: "Fizz",
// o penkiu kartotiniams - "Buzz". Skaiciams, kurie yra ir triju, ir penkiu kartotiniai, spausdinkite "FizzBuzz"."
// PANASUS BUNA DUODAMI PER ZINIU PATIKRINIMA ISIDARBINANT

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// 6) (Sunkesne) parasyti for cikla, kuris isvestu norima kieki fibonaciaus skaiciu i ekrana.
// Fibonaciaus sekoje kiekvienas skaicius yra lygus pries ji ejusiu dvieju skaiciu sumai: 1, 1, 2, 3, 5, 8, 13, 21 ...
// 1. Sukurkite tris sveikuju skaiciu kintamuosius, kurie jums pades tai pasiekti.
// // 1. Pirmi du kientmaieji saugos paskutinius su skaicius.
// // 2. Treciasis bus siu pirmu dvieju skaiciu suma.
// 2. Pirmus du skaicius isveskite ne cikle, o pries ji ir cikla pradekite vykdyti nuo 2, o ne nuo 0.
// 3. Kiekvieno ciklo metu turite perskaiciuot treciaji skaiciu (pirmu dvieju skaiciu sudetis), tuomet
// pirmasis skaicius yra lygus antram, o antrasis lygus treciam, isvesti i ekrana trecia skaiciu.

// let pirmasSkaicius = 1;
// let antrasSkaicius = 1;
// let suma = 0;

// for (let i = 2; i <= 10; i++) {
//   suma = pirmasSkaicius + antrasSkaicius;
//   pirmasSkaicius = antrasSkaicius;
//   antrasSkaicius = suma;
//   console.log(suma);
// }

// Jei consol.log(sums) - nera cikle nes tik isveda (1) viena pagrindini isvedima,
// jei isvedimas ciklo viduje rodys stulpelyje esancius skaicius
