// Objects (Objektai)
// Object key
// Objektas paprastai naudojamas kai norime sugrupuoti duomenis apie
// vieną esybę, pavyzdžiui, vieno studento duomenys, vienos knygos
// duomenys ir pan.
// Rakte (key) gali buti bet koks elemento tipas (skaiciai, stringai ir t.t.)

// ( Objektas gali buti - const, let )

// const objektas = {
//   key: 'value',
//   raktas: 'reiksme',
//   kuro_tipas: 'benzinas',
// };

// PVZ Knygos duomenys ------------------

// const knyga = {
//   pavadinimas: 'Nuotykiai',
//   autorius: 'Jonas Jonaitis',
//   isbn_kodas: '978-10',
//   puslapiai: '250',
//   temos: ['fantastika', 'nuotykiai'],
//   leidimas: {
//     metai: 2002,
//     leidykla: 'Baltos lankos',
//     vertejas: 'Petras Petraitis',
//     adresas: 'Vilnius, Vilniaus g. 10',
//   },
//   kaina: 19.99,
//   valiuta: 'EUR',
//   arTurime: true,
//   arNaudota: false,
// };

// // Objekto duomenis galima pasiekti naudojant taska ir objekto rakta
// console.log(knyga.pabadinimas);

// // nuotykiai
// console.log('Tai yra knyga apie nuotykius');

// // metai
// console.log(knyga.leidimas.metai);

// // issitraukti 2 stringa
// console.log(knyga.temos[1]);

// //
// if (knyga.pavadinimas === 'Nuotykiai') {
//   console.log('Tai yra knyga apie nuotykius');
// } else {
//   console.log('Tai knyga kito zanro');
// }

// console.log(knyga.leidimas.metai);
// console.log(knyga.temos[1]);

// console.log(knyga['puslapiai']);
// console.log(knyga['pavadinimas']);

// PVZ ---------------------------------------------------

// let darbuotojas = {
//   pareigos: 'Programuotojas',
//   lygis: 'Jaunesnysis',
//   atlyginimas: 1000,
//   isidarbino: 2020,
// };

// let dabartiniaiMetai = 2024;
// let jauDirba = dabartiniaiMetai - darbuotojas.isidarbino;

// if (jauDirba > 3) {
//   darbuotojas.atlyginimas += 200;
// }

// console.log(darbuotojas.atlyginimas);

//
// PVZ LEKTORIAUS -----------------------------------------

// let darbuotojas = {
//     pareigos: 'Programuotojas',
//     lygis: 'Jaunesnysis',
//     atlyginimas: 1000,
//     isidarbino: 2022,
//   }

//   let dabartiniaiMetai = 2024;
//   let jauDirba = dabartiniaiMetai - darbuotojas.isidarbino

//   switch (jauDirba) {
//     case 1:
//       darbuotojas.atlyginimas += 100
//     break;
//     case 2:
//       darbuotojas.atlyginimas += 200
//     break;
//     case 3:
//       darbuotojas.atlyginimas += 300
//     break;
//     case 4:
//       darbuotojas.atlyginimas += 400
//     break;
//   }

//   console.log(darbuotojas.atlyginimas);

// Ikelia i vidu ---------------------------

// let darbuotojas = {};

// darbuotojas.pareigos = 'programuotojas';

// console.log(darbuotojas);

// PVZ LEKTORIAUS -----------------------------------------

// const automobilis = {
//   marke: 'BMW',
//   pagaminimo_metai: 2020,
//   kuroTipas: 'Benzinas',
//   variklioTipas: 3.0,
// };

// const automobilis2 = {
//   marke: 'Audi',
//   pagaminimo_metai: 2000,
//   kuroTipas: 'Dyzelinas',
//   variklioTipas: 2.0,
// };

// console.log(automobilis);
// console.log(automobilis2);

// Uzdaviniai 1/5 -------------------------

// 1.

// const studentoDuomenys = {
//   vardas: 'Antanas',
//   pavarde: 'Antanaitis',
//   amzius: '25',
//   ugis: '170cm',
//   kursas: 2,
//   mokykla: 'Kauno kolegija',
//   destimiDalykai: {
//     matematika: 'aukstoji',
//     lietuviu_kalba: 'literatura',
//     braizyba: 'AutoCAD',
//   },
// };

// console.log(studentoDuomenys);
// console.log(studentoDuomenys.mokykla);
// console.log(studentoDuomenys.destimiDalykai.matematika);
// console.log(studentoDuomenys.ugis);

// -------------------------------------

// const dabartiniaiMetai = new Date(Date.now()).getFullYear();

// console.log(dabartiniaiMetai);

//-----------------

// const dabartiniaiMetai = new Date(Date.now()).getFullYear();

// console.log(dabartiniaiMetai);

// Uzdaviniai 2/5 -------------------------

// 2.

// const filmoInformacija = {
//   pavadinimas: 'Greiti ir isiute',
//   rezisierius: 'Konstantinas Kestauskas',
//   biudzetas: '200',
//   uzdirboPoIsleidimo: '500',
//   zanras: 'dokumentika',
//   trukme: '2 val.',
//   isleidimo_metai: '2000',
//   aktoriuSarasas: [
//     'Jonas Jonaitis',
//     'Angele Juozaityte',
//     'Vytas Briginas',
//     'Vitale Petrukonyte',
//     'Vargas Vargeklis',
//   ],
// };

// let filmoPelnas = 0;
// const dabartiniaiMetai = new Date(Date.now()).getFullYear();

// let = filmoPelnas =
//   filmoInformacija.uzdirboPoIsleidimo - filmoInformacija.biudzetas;

// const aktoriuKiekis = filmoInformacija.aktoriuSarasas.length;

// const kiekFilmuiMetu = dabartiniaiMetai - filmoInformacija.isleidimo_metai;

// console.log(`Filmo pelnas: ${filmoPelnas}`);
// console.log(`Aktoriu sarasas: ${filmoInformacija.aktoriuSarasas}`);
// console.log(`Filme dalyvavo ${aktoriuKiekis} aktoriai`);
// console.log(`Filmui yra ${kiekFilmuiMetu} metai`);

// Uzdaviniai 3/5 -------------------------

// 3.

// const knyga1 = {
//   pavadinimas: 'Greiti ir isiute',
//   autorius: 'Salomeja Neris',
//   zanras: 'poezija',
//   kaina: 25,
//   puslapiai: 360,
//   skyriu_sarasas: [
//     'Turinys',
//     'Preambule',
//     'Ivadas',
//     'Pasiruosimas',
//     'Kova su laiku',
//     'Poilsis ir ispazintis',
//     'Sugrizimas',
//     'Pabaiga',
//   ],
//   isleidimo_metai: 2010,
//   arKnygynuose: true,
// };

// const knyga2 = {
//   pavadinimas: 'Pingvinas Fredis',
//   autorius: 'Kestutis Geda',
//   zanras: 'tautosaka',
//   kaina: 15,
//   puslapiai: 250,
//   skyriu_sarasas: [
//     'Turinys',
//     'Ivadas',
//     'Tuscios lankos',
//     'As greitesnis',
//     'Geriausias zingsnis',
//     'Pabaiga',
//   ],
//   isleidimo_metai: 1960,
//   arKnygynuose: true,
// };

// console.log('Pirmos knygos informacija:', knyga1);
// console.log('Antrosios knygos informacija:', knyga2);

// if (knyga1.puslapiai > knyga2.puslapiai) {
//   console.log('Antra knyga plonesne');
// } else if (knyga1.puslapiai < knyga2.puslapiai) {
//   console.log('Pirma knyga plonesne');
// } else {
//   console.log('Abi knygos vienodos');
// }

// if (knyga1.skyriu_sarasas.length > knyga2.skyriu_sarasas.length) {
//   console.log('Pirmoje knygoje daugiau skyriu');
// } else if (knyga1.skyriu_sarasas < knyga2.skyriu_sarasas) {
//   console.log('Pirmoje knygoje daugiau skyriu');
// } else {
//   console.log('Abiejose knygose vienodas skyriu skaicius');
// }

// if (knyga2.kaina * 2 > knyga1.kaina) {
//   console.log(
//     'Antros knygos kaina po padvigubinimo būtų didesnė nei pirmosios'
//   );
// } else {
//   console.log(
//     'Antros knygos kaina po padvigubinimo nebūtų didesnė nei pirmosios'
//   );
// }
