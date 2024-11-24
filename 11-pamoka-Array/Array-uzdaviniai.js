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

// (10). Susikurkite skaiciu masyva ir uzpildykite ji atsitiktiniais skaiciais. Raskite visu skaiciu, kurie dalinasi 4 suma.

// const skaiciai = [];
// let suma = 0;

// for (let i = 0; i < 10; i++) {
//   const atsitiktinisSkaicius = Math.floor(Math.random() * 100) + 1;
//   skaiciai.push(atsitiktinisSkaicius);

//   if (atsitiktinisSkaicius % 4 === 0) {
//     suma += atsitiktinisSkaicius;
//   }
// }

// console.log(`Sukurti atsitiktiniai skaičiai: ${skaiciai}`);
// console.log(`Skaičių, kurie dalijasi iš 4 suma: ${suma}`);

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

//

// (12). Susikurkite pazymiu masyva ir uzpildykite ji atsitiktiniais pazymiais. Raskite siu pazymiu vidurki.
// Isveskite visus skaicius, kurie yra didesni nei vidurkis.

// let pazymiai = [];
// let pazymiuSuma = 0;

// for (let i = 0; i < 10; i++) {
//   let atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
//   pazymiai.push(atsitiktinisSkaicius);
//   pazymiuSuma += atsitiktinisSkaicius;
// }

// let vidurkis = pazymiuSuma / pazymiai.length;
// let didesniUzVidurki = [];

// for (let i = 0; i < pazymiai.length; i++) {
//   if (pazymiai[i] > vidurkis) {
//     didesniUzVidurki.push(pazymiai[i]);
//   }
// }

// console.log(`Sukurti atsitiktiniai pažymiai: ${pazymiai}`);
// console.log(`Pažymių vidurkis: ${vidurkis.toFixed(2)}`);
// console.log(`Pažymiai didesni už vidurkį: ${didesniUzVidurki}`);

//
//
// (13). Susikurkite skaiciu masyva ir uzpildykiye ji duomenimis. Isveskite visus skaicius atskirose eilutese.
// Prie kiekvieno lyginio skaiciaus dar isvedant jo kvardata.
//

// let skaiciai = [8, 7, 6, 9, 10, 7, 5];

// for (let i = 0; i < skaiciai.length; i++) {
//   let skaicius = skaiciai[i];
//   console.log(`Skaičius: ${skaicius}`);

//   if (skaicius % 2 === 0) {
//     console.log(`Jo kvadratas: ${skaicius ** 2}`);
//   }
// }

//
//

// (14). Susikurkite studento pazymiu masyva ir uzpildykiye ji duomenimis atsitiktiniais arba kokius irasysite.
// Isveskite pazymi atskiroje eiluteje. Prie kiekvieno pazymio nurodykite ar tai teigiamas ar neigiamas pazymys.
// Taip pat jeigu neigiamas pazymys, tuomet dar nurodykite kiek balu truko iki teigiamo pazymio.
// Teigiamas pazymys yra 5.

// let studentoPazymiai = [];

// for (let i = 0; i < 10; i++) {
//   let atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
//   studentoPazymiai.push(atsitiktinisSkaicius);
// }

// for (let i = 0; i < studentoPazymiai.length; i++) {
//   let pazymys = studentoPazymiai[i];

//   console.log(`Pazymys: ${pazymys}`);

//   if (pazymys >= 5) {
//     console.log(`Teigiamas pazymys.`);
//   } else {
//     console.log(`Neigiamas pazymys.`);
//     console.log(`Truksta ${5 - pazymys} balu iki teigiamo pazymio.`);
//   }
// }

//
//
// (15). Susikurkite zodziu masyva ir uzpildykite dumenimis. Isveskite visus zodzius ekrane,
// nurodant is kiek raidziu kiekvienas sis zodis yra sudarytas. Papildykite scripta taip, kad rastumete visu raidziu kieki
// (pvz yra zodziai "medis" ir "alus", 5 ir 4 raides atitinkamai, o jas sudejus gaunasi 9 raides.)

// let zodziai = ['kede', 'kepure', 'pelke', 'grybas', 'kempine'];
// let raidziuKiekis = 0;

// for (let i = 0; i < zodziai.length; i++) {
//   let zodis = zodziai[i];
//   raidziuKiekis += zodis.length;
//   console.log(`Zodis: "${zodis}" yra sudarytas is ${zodis.length} simboliu.`);
// }

// console.log(`Visuose zodziuose esanciu raidziu suma: ${raidziuKiekis}`);

//
//
// (16). Susikurkite skaiciu masyva ir uzpildykite duomenimis. Raskite visu skaiciu, kurie dalinasi is 3 suma ir vidurki.
// Isveskite pradinius duomenis ir gautus atsakymus.
//

// let skaiciai = [8, 9, 6, 18, 10, 27, 5, 3];
// let skaiciuSuma = 0;
// let skaiciuKiekis = 0;

// for (let i = 0; i < skaiciai.length; i++) {
//   let skaicius = skaiciai[i];
//   if (skaicius % 3 === 0) {
//     skaiciuSuma += skaicius;
//     skaiciuKiekis++;
//   }
// }

// let vidurkis;

// if (skaiciuKiekis > 0) {
//   vidurkis = skaiciuSuma / skaiciuKiekis;
// } else {
//   vidurkis = 0;
// }

// console.log(`Pradiniai duomenys: ${skaiciai}`);
// console.log(`Skaiciu suma, kurie dalinasi is 3: ${skaiciuSuma}`);
// console.log(`Vidurkis: ${vidurkis.toFixed(1)}`);
//
//
