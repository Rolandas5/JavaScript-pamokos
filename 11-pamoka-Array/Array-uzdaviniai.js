// Masyvai

// Pvz.:

//
//

// const masyvas = [90, 30, 20, 30, 50, 60];

// for (let i = 0; i < masyvas.length; i++) {
//   console.log(masyvas[i]);
// }

// -----------------------------------------

// Pvz.:

//
//

// let miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai'];

// for (let i = 0; i < miestai.length; i++) {
//   console.log('Miestas', miestai[i]);
// }

// ----------------------------------------- Arba kitaip

// let miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai'];

// for (let i = 0; i < miestai.length; i++) {
//   console.log(i + 1 + '-asis miestas ' + miestai[i]);
// }

// -----------------------------------------

// Pvz.:

//
//

// let skaiciai = [9, 8, 6, 3, 5, 2];

// let lyginiaiSkaiciai = 0;
// let nelyginiaiSkaiciai = 0;

// for (let i = 0; i < skaiciai.length; i++) {
//   if (skaiciai[i] % 2 === 0) {
//     lyginiaiSkaiciai += skaiciai[i];
//   } else {
//     nelyginiaiSkaiciai += skaiciai[i];
//   }
// }

// console.log('Visi skaiciai', skaiciai);
// console.log('Lyginiai skaiciai', lyginiaiSkaiciai);
// console.log('Nelyginiai skaiciai', nelyginiaiSkaiciai);

// -----------------------------------------

// Pvz.:

//
//
// (6). Susikurkite masyva studiju programu pavadiniamams saugoti. Uzpildykite si masyva duomenimis.
// Isveskite kiekviena studiju programa atskiroje eiluteje.

// let = studijuProgramos = [
//   'Vadyba',
//   'Ekonomika',
//   'Marketingas',
//   'Teise',
//   'Finansu pagrindai',
// ];

// for (let i = 0; i < studijuProgramos.length; i++) {
//   console.log('Studiju programa:', studijuProgramos[i]);
// }

// ----------------------------------------------------------  Arba kitaip

// const studijuProgramos = ['IT', 'Verslas', 'Teisė'];

// for (let i = 0; i < studijuProgramos.length; i++) {
//   console.log(studijuProgramos[i]);
// }

// -----------------------------------------------------------   Galima naudoti let = arba const =

// (7). Susikurkite masyva saliu pavadinimams saugoti ir ji uzpildykite duoemnimis.
// Isveskite saliu pavadinimus atskirose eilutese, su prierasu "salis" ir tada nurodant sali is masyvo.

// const salys = ['Vokietija', 'Austrija', 'Cekija', 'Vengrijai', 'Danija'];

// for (let i = 0; i < salys.length; i++) {
//   console.log(`Salys: ${salys[i]}`);
// }

// -----------------------------------------------------------

//
// (8). Susikurkite masyva igyvendintu projektu pavadinimams saugoti. Uzpildykite si masyva duomenimis.
// Isveskite kiekviena projekta atskirose eilutese, pries kiekviena projekta parasant kelintas tai prejektas yra (pradedant 1 -u).

// let projektai = [
//   'Ekvatorija',
//   'Dviprasmybe',
//   'Burtai',
//   'Slaptas koas',
//   'Tik pirmiems',
// ];

// for (let i = 0; i < projektai.length; i++) {
//   console.log(`${i + 1} -as projektas: ${projektai[i]}`);
// }

// -----------------------------------------------------------

//
// (9). Susikurkite skaiciu masyva ir uzpildykite duomenimis. Is masyvo isveskite tik tuos skaicius, kurie yra didesni nei 5.

// const skaiciai = [2, 6, 8, 1, 4, 10, 3, 7];

// for (let i = 0; i < skaiciai.length; i++) {
//   if (skaiciai[i] > 5) {
//     console.log(skaiciai[i]);
//   }
// }

// Aba

// const skaiciai = [2, 6, 8, 1, 4, 10, 3, 7];
// const skaiciaiDidesniUz5 = [];
// const skaiciaiLength = skaiciai.length;

// for (let i = 0; i < skaiciaiLength; i++) {
//   const skaicius = skaiciai[i];
//   if (skaicius > 5) {
//     skaiciaiDidesniUz5.push(skaicius);
//   }
// }

// console.log(skaiciaiDidesniUz5);

// -----------------------------------------------------------

// (10). Susikurkite skaiciu masyva ir uzpildykite ji atsitiktiniais skaiciais. Raskite visu skaiciu, kurie dalinasi 4 suma.

// const skaiciai = [];
// const limitas = 10;
// let suma = 0;

// for (let i = 0; i < limitas; i++) {
//   const atsitiktinisSkaicius = Math.floor(Math.random() * 100) + 1;
//   skaiciai.push(atsitiktinisSkaicius);

//   if (atsitiktinisSkaicius % 4 === 0) {
//     suma += atsitiktinisSkaicius;
//   }
// }

// console.log(`Sukurti atsitiktiniai skaičiai: ${skaiciai}`);
// console.log(`Skaičių, kurie dalijasi iš 4 suma: ${suma}`);

// -----------------------------------------------------------  Arba

// const skaiciuMasyvas2 = [];
// const limitas = 10;
// let sumaIs4 = 0;

// for (let i = 0; i < limitas; i++) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   skaiciuMasyvas2.push(randomNumber);
// }

// for (let i = 0; i < skaiciuMasyvas2.length; i++) {
//   const skaicius = skaiciuMasyvas2[i];

//   if (skaicius % 4 === 0) {
//     console.log(skaicius);
//     sumaIs4 += skaicius;
//   }
// }

// console.log('Suma', sumaIs4);

// -----------------------------------------------------------
//
// (11). Susikurkite pazymiu masyva ir uzpildykite ji atsitiktiniais pazymiais. Raskite siu pazymiu vidurki.
// Isveskite sugeneruotus duomenis ir gauta vidurki.

//

// let pazymiai = [];
// let pazymiuSuma = 0;

// for (let i = 0; i < 10; i++) {
//   let atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
//   pazymiai.push(atsitiktinisSkaicius);
//   pazymiuSuma += atsitiktinisSkaicius;
// }

// let vidurkis = pazymiuSuma / pazymiai.length;

// console.log(`Sukurti atsitiktiniai pažymiai: ${pazymiai}`);
// console.log(`Pažymių vidurkis: ${vidurkis.toFixed(2)}`);

// ----------------------------------------------------------- Arba

// const pazymiai = [];
// let sumaPazymiu = 0;

// for (let i = 0; i < 5; i++) {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;

//     pazymiai.push(randomNumber);
// }

// for (let i = 0; i < pazymiai.length; i++) {
//     sumaPazymiu += pazymiai[i];
// }

// let vidurkis = sumaPazymiu / pazymiai.length;

// console.log('Pazymiai', pazymiai);
// console.log('Suma', sumaPazymiu);
// console.log('Vidurkis', vidurkis);

//
// -----------------------------------------------------------

// (12). Susikurkite pazymiu masyva ir uzpildykite ji atsitiktiniais pazymiais. Raskite siu pazymiu vidurki.
// Isveskite visus skaicius, kurie yra didesni nei vidurkis.

// let pazymiai = [];
// let pazymiuSuma = 0;

// for (let i = 0; i < 10; i++) {
//   let atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
//   pazymiai.push(atsitiktinisSkaicius);
// }

// for (let i = 0; i < pazymiai.length; i++) {
//   pazymiuSuma += pazymiai[i];
// }

// let vidurkis = pazymiuSuma / pazymiai.length;

// for (let i = 0; i < pazymiai.length; i++) {
//   if (pazymiai[i] > vidurkis) {
//     console.log(`Pažymiai didesni už vidurkį: ${pazymiai[i]}`);
//   }
// }

// console.log(`Sukurti atsitiktiniai pažymiai: ${pazymiai}`);
// console.log(`Pažymių vidurkis: ${vidurkis.toFixed(2)}`);

// -----------------------------------------------------------
//
// (13). Susikurkite skaiciu masyva ir uzpildykiye ji duomenimis. Isveskite visus skaicius atskirose eilutese.
// Prie kiekvieno lyginio skaiciaus dar isvedant jo kvardata.
//

// let skaiciai = [8, 7, 6, 9, 10, 7, 5];

// for (let i = 0; i < skaiciai.length; i++) {
//   let skaicius = skaiciai[i];
//   if (skaicius % 2 === 0) {
//     console.log(`${skaicius} jo kvadratas: ${skaicius ** 2}`);
//   } else {
//     console.log(`Skaičius: ${skaicius}`);
//   }
// }

// -----------------------------------------------------------
//

// (14). Susikurkite studento pazymiu masyva ir uzpildykiye ji duomenimis atsitiktiniais arba kokius irasysite.
// Isveskite pazymi atskiroje eiluteje. Prie kiekvieno pazymio nurodykite ar tai teigiamas ar neigiamas pazymys.
// Taip pat jeigu neigiamas pazymys, tuomet dar nurodykite kiek balu truko iki teigiamo pazymio.
// Teigiamas pazymys yra 5.

// let studentoPazymiai = [];
// let minimalusTeigiamas = 5;

// for (let i = 0; i < 10; i++) {
//   let atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
//   studentoPazymiai.push(atsitiktinisSkaicius);
// }

// for (let i = 0; i < studentoPazymiai.length; i++) {
//   let pazymys = studentoPazymiai[i];

//   console.log(`Pazymys: ${pazymys}`);

//   if (pazymys >= minimalusTeigiamas) {
//     console.log(`Teigiamas pazymys ${pazymys}`);
//   } else {
//     let truksta = minimalusTeigiamas - pazymys;
//     console.log(`Neigiamas pazymys ${pazymys}`);
//     console.log(`Truksta ${truksta} balu iki teigiamo pazymio.`);
//   }
// }

// -----------------------------------------------------------
//
// (15). Susikurkite zodziu masyva ir uzpildykite dumenimis. Isveskite visus zodzius ekrane,
// nurodant is kiek raidziu kiekvienas sis zodis yra sudarytas. Papildykite scripta taip, kad rastumete visu raidziu kieki
// (pvz yra zodziai "medis" ir "alus", 5 ir 4 raides atitinkamai, o jas sudejus gaunasi 9 raides.)

// let zodziai = ['kede', 'kepure', 'pelke', 'grybas', 'kempine'];
// let bendrasRaidziuKiekis = 0;

// for (let i = 0; i < zodziai.length; i++) {
//   let raidziuKiekis = zodziai[i].length;
//   bendrasRaidziuKiekis += raidziuKiekis;
//   console.log(`Zodis: "${zodziai[i]}" yra sudarytas is ${raidziuKiekis} simboliu.`);
// }

// console.log(`Visuose zodziuose esanciu raidziu suma: ${bendrasRaidziuKiekis}`);

// -----------------------------------------------------------
//
// (16). Susikurkite skaiciu masyva ir uzpildykite duomenimis. Raskite visu skaiciu, kurie dalinasi is 3 suma ir vidurki.
// Isveskite pradinius duomenis ir gautus atsakymus.
//

// const skaiciai = [8, 9, 6, 18, 10, 27, 5, 3];
// let skaiciuSuma = 0;
// let skaiciuKiekis = 0;

// for (let i = 0; i < skaiciai.length; i++) {
//   const skaicius = skaiciai[i];

//   if (skaicius % 3 === 0) {
//     skaiciuSuma += skaicius;
//     skaiciuKiekis++;
//   }
// }

// let vidurkis = skaiciuSuma / skaiciuKiekis;

// console.log(`Pradiniai duomenys: ${skaiciai}`);
// console.log(`Skaiciu suma, kurie dalinasi is 3: ${skaiciuSuma}`);
// console.log(`Vidurkis: ${vidurkis.toFixed(1)}`);
// //
//
