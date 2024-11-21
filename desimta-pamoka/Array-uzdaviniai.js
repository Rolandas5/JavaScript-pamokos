// Array - uzdaviniai

// (1) Susikurkite norima masyva su duomenimis. Is sio masyvo isveskite pirma ir paskutini nari,
// du pasirinktus narius is masyvo vidukio ir kieki kiek siame masyve yra nariu.

// let bebrai = ['1', '15', '3', '5'];
// let vidurkis = 0;

// console.log('Pirmas narys', bebrai[0]);
// console.log('Paskutinis narys', bebrai[bebrai.length - 1]);

// console.log('Antras narys', bebrai[1]);
// console.log('Masyvas turi', bebrai.length);

// ------------------------------------------------

// (2) Susikurkite norima masyva su duomenimis. Issiveskite viso sio masyvo informacija.
// Pakeiskite triju pasirinktu nariu reiksmes i kitas. Isveskite pakeisto masyvo informacija.

// const masyvas = [1, 2, 3];

// console.log(masyvas);

// masyvas[0] = 2;
// masyvas[1] = 0;
// masyvas[2] = 1;

// console.log(masyvas);

// ------------------------------------------------

// (3) Susikurkite norima tuscia masyva. Uzpildykite si masyva duoemnimis naudojant push komanda.
// Issiveskite uzpildyto masyvo informacioja.

// const vaisiai = [];
// vaisiai.push('kriause', 'obuolys', 'slyva', 'abrikosas', 'agrastas');
// console.log(vaisiai);

// ------------------------------------------------

// (4) Susikurkite tuscia masyva. Uzpildykite si masyva atsitiktinai sugeneruotais skaiciais.
// Isveskite sio masyvo informacija.

// const gerimai = [];

// for (let i = 0; i < 10; i++) {
//   produktai = Math.floor(Math.random() * 100) + 1;
//   gerimai.push(produktai);
// }

// console.log('Random', Math.random());

// ------------------------------------------------   Arba kitaip

// const gerimai = [];

// for (let i = 0; i < 10; i++) {
//   gerimai.push(Math.floor(Math.random() * 100) + 1);

//   console.log('Masyvas:', gerimai);
//   console.log('Masyvo ilgis:', gerimai.length);

//   console.log(
//     `Antras narys: ${gerimai[1]} Paskutinis narys: ${
//       gerimai[gerimai.length - 1]
//     }`
//   );
//   console.log('Masyvas turi', gerimai.length);
// }

// ------------------------------------------------

// (5) Sukurkite du masyvus dvieju studentu pazymiams saugoti. Iveskite po 3-5 pazymius kiekvienam studentui
// (iskart kuriant masyvus arba per push funkcija). Suskaiciuokite ir isveskite ju vidurkius.
// Issiaiskinkite kuruio studento vidurkis didesnis ir isveskite atsakyma.

// let studentas1 = [];
// let studentas2 = [];

// studentas1.push(8, 9, 7, 6, 10);
// studentas2.push(10, 6, 7);

// let suma1 = 0;
// for (let i = 0; i < studentas1.length; i++) {
//   suma1 += studentas1[i];
// }
// let vidurkis1 = suma1 / studentas1.length;

// let suma2 = 0;
// for (let i = 0; i < studentas2.length; i++) {
//   suma2 += studentas2[i];
// }
// let vidurkis2 = suma2 / studentas2.length;

// console.log(`Studento 1 vidurkis: ${Math.floor(vidurkis1)}`);
// console.log(`Studento 2 vidurkis: ${Math.floor(vidurkis2)}`);

// if (vidurkis1 > vidurkis2) {
//   console.log('Studento 1 vidurkis yra didesnis.');
// } else if (vidurkis2 > vidurkis1) {
//   console.log('Studento 2 vidurkis yra didesnis.');
// } else {
//   console.log('Abiejų studentų vidurkiai yra vienodi.');
// }

// ------------------------------------------------  Arba kitaip

// let studentas1 = [8, 9, 10, 5];
// let studentas2 = [7, 8, 9, 10];

// let suma1 = studentas1[0] + studentas1[1] + studentas1[2] + studentas1[3];
// let vidurkis1 = suma1 / studentas1.length;

// let suma2 = studentas2[0] + studentas2[1] + studentas2[2] + studentas2[3];
// let vidurkis2 = suma2 / studentas2.length;

// console.log('Pirmo studento vidrukis:', vidurkis1);
// console.log('Antro studento vidrukis:', vidurkis2);

// if (vidurkis1 > vidurkis2) {
//   console.log('Pirmas mokinys turi didesni vidurki');
// } else if (vidurkis2 > vidurkis1) {
//   console.log('Antras mokinys turi didesni vidurki');
// } else {
//   console.log('Abu vidurkiai lygus');
// }
