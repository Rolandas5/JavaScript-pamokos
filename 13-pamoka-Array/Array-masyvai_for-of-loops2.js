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

// PVZ ----------------------- arba -----

// const kilometrai = [100, 150, 50, 40, 200, 300];
// const kilometraiVirs150 = [];

// for (let km of kilometrai) {
//   if (km > 150) {
//     kilometraiVirs150.push(km);
//   }
// }

// console.log(kilometraiVirs150)

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

// PVZ ----------------------- arba -----

//   let failai = ['ataskaita.txt', 'duomenys.json', 'nuotrauka.png', 'apskaita.csv'];

// for (let failas of failai) {
//   if (failas.endsWith('.txt') || failas.endsWith('.json')) {
//     console.log(failas);
//   }
// }

// PVZ -----------------------

// (22). Susikurkite masyva automobiliu markems saugoti ir uzpildykite ji duomenimis.
// Isveskite kiekviena automobili atskiroje eiluteje, nurodant kiek raidziu sudaro jo pavadinima.

// const automobiliuMarkes = ['Ford', 'Audi', 'BMW', 'Renualt', 'Peugeot', 'Ford'];

// for (let marke of automobiliuMarkes) {
//   console.log(`${marke.toUpperCase()} - ${marke.length} raidės`);
// }

//
// (23). Susikurkite masyva įvykdusiu klaidu kodams saugoti ir uzpildykite si masyva duomenimis.
// Tuomet isveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastu kas per klaidos ivyko.
// Pavyzdziui, jeigu yra kodas "ui87", tai kad isvestu "Grafines sasajos klaida navogacojoje",
// arba jeigu kodas "sys12", tuomet "Truksta operatyviosios atminties sistemoje" ir pan.

// const kodai = ['404', '401', '500', '501'];
// const koduZinutes = [
//   'Sasajos klaida',
//   'Serverio klaida',
//   'Nera duomenu',
//   'Dingo internetas',
// ];

// for (let indeksas in kodai) {
//   console.log(`${kodai[indeksas]} - ${koduZinutes[indeksas]}`);
// }

// PVZ -----------------------

// (24). Susikurkite masyva sandelio likuciams saugoti (kiekvienas atskiras narys masyve yra atskiros prekes likutis).
// Su kiekvienu likuciu paskaiciuokite per kiek dienu bus ispirktas, jei per diena vidutiniskai yra nuperkami 5 vnt.
// Isveskite atsakymus atskirose eilutese, nurodant kiek yra dabar ir kiek dienu uzteks jo.
// Pavyzdziui, jeigu likuciai 74, 54 ir 32, tai 74 vnt. prekes uzteks mazdaug 15 dienu, 54 vnt. prekes uzteks mazdaug 11 dienu ir t.t.

// let sandelioLikutis = [74, 54, 32, 90, 120];
// let perDienaPerkma = 5;

// for (let likutis of sandelioLikutis) {
//     let dienuUzteks = Math.ceil(likutis / perDienaPerkma);

//     console.log(`${likutis} vnt., prekes uzteks mazdaug ${dienuUzteks}`);
// }

// PVZ -----------------------  Arba telefone persirasyti Rutos Jakutes PVZ.:

//
// (25). Susikurkite masyva studento pazymiams saugoti. Uzpildykitye si masyva atsitiktinai sugeneruotais pazymiais.
// Raskite vidurki. Raskite kiek neigiamu pazymiu studentas gavo (mazesniu nei 5).
// Isveskite visus teigiamus pazymius, gauta vidurki ir neigiamu pazymiu vidurki.

// let studentoPazymiai = [];
// let minimalusTeigiamas = 5;
// let sumaNeigiamu = 0;
// let sumaTeigiamu = 0;
// let kiekisTeigiamu = 0;
// let kiekisNeigiamu = 0;
// let teigiamiPazymiai = [];
// let neigiamiPazymiai = [];

// for (let i = 0; i < 10; i++) {
//   let atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
//   studentoPazymiai.push(atsitiktinisSkaicius);
// }

// for (let i = 0; i < studentoPazymiai.length; i++) {
//   let pazymys = studentoPazymiai[i];

//   if (pazymys < minimalusTeigiamas) {
//     console.log(`Neigiamas pazymys ${pazymys}`);
//     sumaNeigiamu += pazymys;
//     kiekisNeigiamu++;
//     neigiamiPazymiai.push(pazymys[i]);
//   } else {
//     console.log(`Teigiamas pazymys ${pazymys}`);
//     sumaTeigiamu += pazymys;
//     kiekisTeigiamu++;
//     teigiamiPazymiai.push(pazymys[i]);
//   }
// }

// vidurkisNeigiamu = sumaNeigiamu / neigiamiPazymiai.length;
// vidurkisVisuPazymiu = (sumaTeigiamu + sumaNeigiamu) / studentoPazymiai.length;

// console.log(`Visu pazymiu vidurkis: ${vidurkisVisuPazymiu.toFixed(0)}`);
// console.log(`Neigiamu pazymiu kiekis: ${kiekisNeigiamu}`);
// console.log(`Neigiamų pažymių vidurkis: ${vidurkisNeigiamu.toFixed(0)}`);

// PVZ -----------------------  Arba Lektoriaus PVZ.:  geras pavyzdys:
//

// let pazymiai = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10) + 1);

// let suma = 0;
// let neigiamuKiekis = 0;

// for (let pazymys of pazymiai) {
//   suma += pazymys
//   if (pazymys < 5) {
//     neigiamuKiekis++
//   }
// }

// let vidurkis = suma / pazymiai.length;

// console.log('Vidurkis:', vidurkis.toFixed(0));
// console.log('Neigiamiu pazymiu kiekis:', neigiamuKiekis)

//
// PVZ -----------------------

// (26). Susikurkite du pazymiu masyvus, kur vienas masyvas reiks vieno studento pazymius, kitas masyvas kito studento pazymius.
// Raskite kiekvieno studento studento pazymiu vidurki. Isveskite abieju studentu pazymius, vidurkius ir nurodykite kuris
// studentas turi didesni vidurki.

// const pirmoStudentoPazymiai = [7, 10, 6, 9, 5, 9];
// const antroStudentoPazymiai = [5, 5, 5, 6, 5, 6];
// let pirmoSuma = 0;
// let antroSuma = 0;

// for (const pirmoPazymys of pirmoStudentoPazymiai) {
//   console.log(`Pirmo studento pazymiai: ${pirmoPazymys}`);
//   pirmoSuma += pirmoPazymys;
// }

// let vidurkisPirmoStudento = pirmoSuma / pirmoStudentoPazymiai.length;
// console.log(
//   `Pirmo studento pazymiu vidurkis: ${vidurkisPirmoStudento.toFixed(0)}`
// );

// for (const antroPazymys of antroStudentoPazymiai) {
//   console.log(`Antro studento pazymiai: ${antroPazymys}`);
//   antroSuma += antroPazymys;
// }

// let vidurkisAntroStudento = antroSuma / antroStudentoPazymiai.length;
// console.log(
//   `Antro studento pazymiu vidurkis: ${vidurkisAntroStudento.toFixed(0)}`
// );

// if (vidurkisPirmoStudento > vidurkisAntroStudento) {
//   console.log('Pirmasis vidurkis yra didesnis už antraji.');
// } else if (vidurkisPirmoStudento < vidurkisAntroStudento) {
//   console.log('Antrasis vidurkis yra didesnis už pirmaji.');
// } else {
//   console.log('Abu vidurkiai yra lygūs.');
// }

// PVZ ------------------------------------------ Arba LEKTORIAUS:

// let studentoPazymiai1 = [8, 7, 8, 9, 10];
// let studentoPazymiai2 = [5, 7, 8, 9, 4];

// Pirmo studento vidurkis
// let suma1 = 0;
// for (let pazymys of studentoPazymiai1) {
//     suma1 += pazymys;
// }

// let vidurkis1 = suma1 / studentoPazymiai1.length;

// console.log('Pirmo studento vidurkis', vidurkis1);

// Antro studento vidurkis
// let suma2 = 0;
// for (let pazymys of studentoPazymiai2) {
//   suma2 += pazymys;
// }

// let vidurkis2 = suma2 / studentoPazymiai2.length;

// console.log('Antro studento vidurkis', vidurkis2);

// if (vidurkis1 > vidurkis2) {
//   console.log('Pirmo studento vidurkis didesnis')
// } else if (vidurkis2 > vidurkis1) {
//   console.log('Antro studento vidurkis didesnis')
// } else {
//   console.log('Abieju studentu vidurkiai vienodi');
// }

// (27). Susikurkite masyva norimiems zodziams saugoti. Uzpildykite si masyva duomenimis.
// I kita masyva atrinkite tuos zodzius, kurie yra trumpi (sudaro maziau nei 5 raides). Isveskite pradinius duomenis ir atrinktus.

// const zodziai = ['antis', 'Meja', 'Asla', 'Ola', 'Maryte', 'bite', 'kepalas'];
// const trumpiZodziai = [];

// for (let zodis of zodziai) {
//   if (zodis.length < 5) {
//     trumpiZodziai.push(zodis);
//   }
// }

// console.log(`Zodziai, kuriuos sudaro maziau nei 5 raides: ${trumpiZodziai}`);

// // PVZ ------------------------------------------ Arba LEKTORIAUS:

// const zodziai = ['meds', 'namas', 'tortas', 'masi'];
// const trumpiZodziai = ['abc'];

// for (let zodis of zodziai) {
//   if (zodis.length < 5) {
//     trumpiZodziai.push(zodis);
//   }
// }

// console.log(trumpiZodziai);
