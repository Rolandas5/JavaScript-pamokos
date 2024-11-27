// for...of loops
// - Grazina reiksmes is masyvo (ne indeksus)
// - Sukurtas veikti su masyvais, objektais ir stringais

// PVZ --------------------------------

// const string = 'string';

// for (let raide of string) {
//   console.log(raide);
// }

// ------------------------------------

// Is stringu istraukia kiekvieno nario reiksme!

// PVZ --------------------------------

// const array = [1, 2, 3, 4, 5];
// for (let number of array) {
//   console.log(number);
// }

// for...in loops
// - Grazina indeksus is masyvo (ne reiksmes)

// const masyvas = ['a', 'b', 'c'];

// for (let index in masyvas) {
//   console.log(index);
// }

// let spalvos = ['zalia', 'geltona', 'raudoan'];

// for (let spalva in spalvos) {
//   console.log(spalva);
// }

// ------------------------------------

// Is MASYVU istraukia kiekviena masyvo nari!

// PVZ --------------------------------

//

// const pazymiai = [10, 2, 6, 5, 6, 1];

// for (let pazymys of pazymiai) {
//   if (pazymys >= 5) {
//     console.log('Pazymys teigiamas', pazymys);
//   } else {
//     console.log('Pazymys neigiamas', pazymys);
//   }
// }

// PVZ --------------------------------

//

// Grazina reiksme
// let komanda = [
//   'programuotojas',
//   'dizaineris',
//   'vadybininkas',
//   'jauniklis',
//   'vidutinis',
//   'Senjoras',
// ];
// for (const narys of komanda) {
//   console.log(narys);
// }

// Grazina indeksa

// let komanda = [
//   'programuotojas',
//   'dizaineris',
//   'vadybininkas',
//   'jauniklis',
//   'vidutinis',
//   'Senjoras',
// ];
// for (const narys in komanda) {
//   console.log(narys);
// }

// PVZ --------------------------------

//

// let pirmas_studentas = [7, 8, 5, 6];
// let antras_studentas = [2, 5, 8, 9];

// for (const pazymys of pirmas_studentas) {
//   console.log('Pirmo studento', pazymys);
// }

// for (const pazymys of antras_studentas) {
//   console.log('Antro studento', pazymys);
// }

// PVZ ---------------------------------

// let skaiciai = [1, 2, 3, 4, 5, 6];
// let suma = 0;

// for (let skaicius in skaiciai) {
//   suma += skaicius;
// }

// console.log(0 + '0' + 0);
// console.log(`Skaičių suma: ${suma}`);

// Indeksai visada grazinami kaip "String reiksmes" //

// PVZ ---------------------------------

// let skaiciai = [-1, -2, -3, 1, 2, 3];

// let teigiami_skaiciai = [];
// let neigiami_skaiciai = [];

// for (const skaicius of skaiciai) {
//   if (skaicius > 0) {
//     teigiami_skaiciai.push(skaicius);
//   } else {
//     neigiami_skaiciai.push(skaicius);
//   }
// }

// console.log('Teigiamas skaicius', teigiami_skaiciai);
// console.log('Neigiami skaiciai', neigiami_skaiciai);

// Uzdaviniai ------------------------------- //

// (17). Susikurkite bet kokiou zodziu masyva ir uzpildykite ji duomenimis. Isveskite visus zodzius su indeksais i atskiras eilutes.
// PVZ: 0 - medis, 1 - tvora, ....

// let zodziai = ['zeme', 'voras', 'kepure', 'laikrodis', 'traktorius', 'kujis'];
// for (const narys in zodziai) {
//   console.log(`${Number(narys) +1} - ${zodziai[narys]}`);
// }

// PVZ -------------------------------------

// let zodziai = ['medis', 'tvora', 'namas', 'kede', 'stalas'];

// for (let indeksas in zodziai) {
//   console.log(`${Number(indeksas) + 1} - ${zodziai[indeksas]}`)
// }

// (18). Susikurkite masyva pirkiniu sarasui saugoti ir uzpildykite ji duomenimis. Isveskite kiek pirkiniu yra sarase.
// Taip pat, isveskite kiekviena irasa atskiroje eiluteje, pries kiekviena parasant briksniuka ar koki kita skirtuka.

// let pirkiniuSarasas = [
//   'duona',
//   'batonas',
//   'pienas',
//   'grietine',
//   'saldainiai',
//   'sultys',
// ];

// console.log(`Is viso pirkiniu yra: ${pirkiniuSarasas.length}`);

// for (const pirkinys of pirkiniuSarasas) {
//   console.log(`- ${pirkinys}`);
// }

// PVZ -----------------------

// const pirkiniai = ['Pienas', 'Kefyras', 'Duona', 'Alus'];

// console.log('Isviso pirkiniu yra', pirkiniai.length);

// for (const pirkinys of pirkiniai) {
//   console.log(`- ${pirkinys}`)
// }

// PVZ -----------------------

// (19). Susikurkite masyva studento pazymiams saugoti. Uzpildykite si masyva duomenimis. Raskite pazymiu vidurki.
// Isveskite visus siuos pazymius ir gauta vidurki.

// const studentoPazymiai = [7, 8, 5, 6, 4, 10];
// let suma = 0;

// for (const pazymys of studentoPazymiai) {
//   suma += pazymys;
// }

// let vidurkis = suma / studentoPazymiai.length;
// console.log(`Studento pazymiu vidurkis: ${vidurkis.toFixed(0)}`);

// PVZ -----------------------

// const pazymiai = [10, 7, 8, 5, 123];
// let suma = 0;
// let vidurkis = 0;

// for (let pazymys of pazymiai) {
//   suma += pazymys;
// }

// vidurkis = suma / pazymiai.length;

// console.log(vidurkis.toFixed(0))

// PVZ -----------------------

//

// const pazymiai = [10, 7, 8, 5];
// let suma = 0;

// for (let pazymys of pazymiai) {
//   suma += pazymys;
// }

// vidurkis = suma / pazymiai.length;

// console.log('Pazymiai:');

// for (let index in pazymiai) {
//   console.log(`${Number(index) + 1}: ${pazymiai[index]}`);
// }

// console.log('Vidurkis:', vidurkis);

//

// (20). Susikurkite masyva keliones nuvaziuotiems kilometrams saugoti ir uzpildykite ji duoemnimis
// (pvz: 120, 145, 90 ir pan, kur kiekvienas skaicius reiskia kiek km kuria diena buvo nuvaziuota).
// Isveskite visus nuvaziuotus per diena kilometrus, kurie yra didesni nei 150.

// let kilometrai = [120, 155, 90, 110, 70, 250];

// for (let nuvaziuotaPerDiena of kilometrai) {
//   if (nuvaziuotaPerDiena >= 150) {
//     console.log(`Per diena nuvaziuota daugiau nei 150: ${nuvaziuotaPerDiena}`);
//   }
// }

// PVZ -----------------------

// (21). Susikurkite masyva failu pavadinimams saugoti, uzpildykite ji duomenimis. Jums reikes nuskaityti siuos failus,
// todel pirma noresite patikrinti su kuriais glaite dirbti. Isveskite i ekrana tik tuos failus, kuriu glaune yra .txt
// arba .json tipo.

// let failuPavadinimai = [
//     'dok.txt',
//     'img.png',
//     'data.json',
//     'notes.docx',
//     'jads.pdf',
//     'acml.json',
//     'summary.txt',
//     'asxkm.pptx',
//   ];

//   console.log('Reikalingi failai:');
//   for (const file of failuPavadinimai) {
//     if (file.endsWith('.txt') || file.endsWith('.json')) {
//       console.log('- ' + file);
//     }
//   }
