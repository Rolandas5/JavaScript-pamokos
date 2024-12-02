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

// Ikelia i objekto vidu ---------------------------

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

// 1. Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis:
// vardas, pavardė, amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, ūgis, kelintame kurse mokosi,
// kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti atskirai.
// Išveskite šią informaciją per vieną console.log().
// Taip pat, pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.

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

// 2. Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis:
// pavadinimas, režisierius, biudžetas, kiek uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai,
// aktorių sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto informaciją.
// Paskaičiuokite ir išveskite šio filmo pelną (uždarbis - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis).
// Paskaičiuokite kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis
// arba panaudoti new Date(Date.now()).getFullYear() funkciją).

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

// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reikšmėmis:
// pavadinimas, autorius, žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai,
// ar knygą galima rasti knygynuose. Išveskite šių knygų informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių),
// bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos kainą padvigubintumėte,
// ar ji jau būtų brangesnė už kitą knygą?

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

// if (knyga1.puslapiai < knyga2.puslapiai) {
//   console.log(
//     `Plonesne knyga "${knyga1.pavadinimas}", ji turi ${knyga1.puslapiai} puslapių`
//   );
// } else if (knyga1.puslapiai > knyga2.puslapiai) {
//   console.log(
//     `Plonesne knyga "${knyga2.pavadinimas}", ji turi ${knyga2.puslapiai} puslapių`
//   );
// } else {
//   console.log('Abi knygos vienodos');
// }

// if (knyga1.skyriu_sarasas.length > knyga2.skyriu_sarasas.length) {
//   console.log(`Daugiau skyrių turi "${knyga1.pavadinimas}" `);
// } else if (knyga1.skyriu_sarasas.length < knyga2.skyriu_sarasas.length) {
//   console.log(`Daugiau skyrių turi "${knyga2.pavadinimas}" `);
// } else {
//   console.log('Abiejose knygose vienodas skyriu skaičius');
// }

// const pigesneKnyga = knyga1.kaina < knyga2.kaina ? knyga1 : knyga2;
// // console.log(pigesneKnyga);

// const brangesneKnyga = knyga1.kaina > knyga2.kaina ? knyga1 : knyga2;
// // console.log(brangesneKnyga);

// const dvigubaKaina = pigesneKnyga.kaina * 2;

// if (dvigubaKaina > brangesneKnyga.kaina) {
//   console.log(
//     `Padvigubinus kaina yra brangesne knyga "${brangesneKnyga.pavadinimas}"`
//   );
// } else {
//   console.log(
//     `Net padvigubinus kaina, visvien "${brangesneKnyga.pavadinimas}" yra brangesne`
//   );
// }

// LEKTORIAUS PAVYZDYS: ------------------------

// const book1 = {
//     title: 'Nuotykiai prie juros',
//     author: 'Thomas Thomason',
//     genre: 'adventure',
//     price: 15.99,
//     pages: 2500,
//     chapters: ['Izanga', 'Pradzia', 'Paslaptis', 'Pabaiga'],
//     year: 2010,
//     available: false,
//   }

//   const book2 = {
//     title: 'Nuotykiai prie dykumos',
//     author: 'Thomas Thomasonas',
//     genre: 'action',
//     price: 35.99,
//     pages: 1500,
//     chapters: ['Izanga', 'Pradzia', 'Paslaptis', 'Pabaiga', 'The end'],
//     year: 2020,
//     available: true,
//   }

//   if (book1.pages < book2.pages) {
//     console.log(`Plonesnė knyga "${book1.title}" ji turi ${book1.pages} puslapiu.`)
//   } else if (book1.pages > book2.pages) {
//     console.log(`Plonesnė knyga "${book2.title}" ji turi ${book2.pages} puslapiu.`)
//   } else {
//     console.log('Abi knygos turi vienoda puslapiu kieki')
//   }
//   if (book1.chapters.length > book2.chapters.length) {
//     console.log(`Daugiau skyriu turi "${book1.title}".`)
//   } else if (book1.chapters.length < book2.chapters.length) {
//     console.log(`Daugiau skyriu turi "${book2.title}".`)
//   } else {
//     console.log('Abi knygos turi vienoda skyriu kieki')
//   }

//   const pigesneKnyga = book1.price < book2.price ? book1 : book2;     ---- Ternary operatoriumi
//   const brangesneKnyga = book1.price > book2.price ? book1 : book2;

//   const dvigubaKaina = pigesneKnyga.price * 2;

//   if (dvigubaKaina > brangesneKnyga.price) {
//     console.log(`${brangesneKnyga.title}`)
//   } else {
//     console.log(`Net padvigubinus kaina, visvien "${brangesneKnyga.title}" yra brangesne`)
//   }

//// ---- ARBA su if -------------------------

//   let pigesneKnyga;
//   let brangesneKnyga;

//   if (book1.price < book2.price) {
//     pigesneKnyga = book1;
//     brangesneKnyga = book2;
//   } else {
//     pigesneKnyga = book2;
//     brangesneKnyga = book1;
//   }

// if (knyga2.kaina * 2 > knyga1.kaina) {
//   console.log(
//     'Antros knygos kaina po padvigubinimo būtų didesnė nei pirmosios'
//   );
// } else {
//   console.log(
//     'Antros knygos kaina po padvigubinimo nebūtų didesnė nei pirmosios'
//   );
// }

// Užduotys (4/6)

// 4.

// Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte sudėkite šias savybes su reikšmėmis:
// pavadinimas, kaina, savikaina, kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys).
// Išveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje (pirma prekė kainuoja - ...,
// antra prekė kainuoja - ..., ir t.t.).
// Raskite ir išveskite, kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą rastos prekės informaciją).
// Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį.
// Raskite ir išveskite atskirose eilutėse kiekvienos prekės pelningumą ((kaina - savikaina) * kiekis sandėlyje).

// const prekeSuknele = {
//   rusis: 'Prekė suknelė',
//   pavadinimas: 'MINIMI proginė',
//   kaina: 110,
//   savikaina: 80,
//   kodas: '2236458',
//   kiekis_sandelyje: 75,
//   pakuotes_matmenys: { ilgis: 50, plotis: 60, aukstis: 8 },
// };

// const prekePaltas = {
//   rusis: 'Prekė paltas',
//   pavadinimas: 'Matcha',
//   kaina: 150,
//   savikaina: 90,
//   kodas: '11197856',
//   kiekis_sandelyje: 10,
//   pakuotes_matmenys: { ilgis: 60, plotis: 40, aukstis: 15 },
// };

// const prekeKostiumas = {
//   rusis: 'Prekė kostiumas',
//   pavadinimas: 'Disco/Retro',
//   kaina: 170,
//   savikaina: 100,
//   kodas: '00020058',
//   kiekis_sandelyje: 170,
//   pakuotes_matmenys: { ilgis: 55, plotis: 25, aukstis: 10 },
// };

// console.log('Prekė suknelė:', prekeSuknele);
// console.log('Prekė paltas:', prekePaltas);
// console.log('Prekė kostiumas:', prekeKostiumas);

// console.log(
//   `Suknelės kaina - ${prekeSuknele.kaina} eurai, Palto kaina - ${prekePaltas.kaina} eurai, Kostiumo kaina - ${prekeKostiumas.kaina} eurai`
// );

// const didziausiaKaina = Math.max(
//   prekeSuknele.kaina,
//   prekePaltas.kaina,
//   prekeKostiumas.kaina
// );

// const brangiausiaPreke = [prekeSuknele, prekePaltas, prekeKostiumas].find(
//   (preke) => preke.kaina === didziausiaKaina
// );

// console.log(
//   `Brangiausia prekė yra ${brangiausiaPreke.rusis} (${brangiausiaPreke.pavadinimas}), kurios kaina yra ${brangiausiaPreke.kaina} eurai.`
// );
// console.log('Prekės informacija: ', brangiausiaPreke);

// let turisPrekeSuknele =
//   prekeSuknele.pakuotes_matmenys.aukstis *
//   prekeSuknele.pakuotes_matmenys.ilgis *
//   prekeSuknele.pakuotes_matmenys.plotis;
// let turisPrekePaltas =
//   prekePaltas.pakuotes_matmenys.aukstis *
//   prekePaltas.pakuotes_matmenys.ilgis *
//   prekePaltas.pakuotes_matmenys.plotis;
// let turisPrekeKostiumas =
//   prekeKostiumas.pakuotes_matmenys.aukstis *
//   prekeKostiumas.pakuotes_matmenys.ilgis *
//   prekeKostiumas.pakuotes_matmenys.plotis;

// console.log(`Prekė: suknelės pakuotės dėžės tūris: ${turisPrekeSuknele} cm3`);
// console.log(`Prekė: palto pakuotės dėžės tūris: ${turisPrekePaltas} cm3`);
// console.log(`Prekė: kostiumo pakuotės dėžės tūris: ${turisPrekeKostiumas} cm3`);

// let pelningumasPrekeSuknele =
//   (prekeSuknele.kaina - prekeSuknele.savikaina) * prekeSuknele.kiekis_sandelyje;
// let pelningumasPrekePaltas =
//   (prekePaltas.kaina - prekePaltas.savikaina) * prekePaltas.kiekis_sandelyje;
// let = pelningumasPrekeKostiumas =
//   (prekeKostiumas.kaina - prekeKostiumas.savikaina) *
//   prekeKostiumas.kiekis_sandelyje;

// console.log(`Prekės suknelė pelningumas: ${pelningumasPrekeSuknele} Eur`);
// console.log(`Prekės paltas pelningumas: ${pelningumasPrekePaltas} Eur`);
// console.log(`Prekės kostiumas pelningumas: ${pelningumasPrekeKostiumas} Eur`);

// LEKTORIAUS -------------------------------

// let brangiausiaPreke = preke1.kaina;

// if (preke2.kaina > brangiausiaPreke) {
//     brangiausiaPreke = preke2.kaina;
// }

// if (preke3.kaina > brangiausiaPreke) {
//     brngiausiaPreke = preke3.kaina;
// }

// Užduotys (5/6)

// 5.

// Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su reikšmėmis sukelkite,
// po to kai sukursite tuščią objektą (10-as pavyzdys).
// Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai, spalva, darbinis tūris, ar daužta, ar parduodama.
// Išveskite visą automobilio informaciją.
// Paskaičiuokite ir išveskite, kiek automobiliui yra metų (rankomis įrašykite dabartinius metus arba panaudokite
// new Date(Date.now()).getFullYear() funkciją).
// Paskaičiuokite ir išveskite, kiek vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300 kilometrų,
// o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).

//

// const automobilis = {};

// automobilis.marke = 'Toyota';
// automobilis.modelis = 'Corolla';
// automobilis.rida = 120000;
// automobilis.gamybosMetai = 2015;
// automobilis.spalva = 'Pilka';
// automobilis.darbinisTuris = 1.8;
// automobilis.arDauzta = false;
// automobilis.arParduodama = true;

// console.log('Automobilio informacija:', automobilis);

// const dabartiniaiMetai = new Date().getFullYear();
// const automobilioAmzius = dabartiniaiMetai - automobilis.gamybosMetai;
// console.log(`Automobiliui yra ${automobilioAmzius} metai.`);

// const vidutineRidaPerMetus = automobilis.rida / automobilioAmzius;
// console.log(
//   `Automobilis vidutiniškai per metus nuvažiuoja ${vidutineRidaPerMetus.toFixed(
//     2
//   )} km.`
// );

// LEKTORIAUS PAVYZDYS ----------------------------------

// const automobilis = {};

// automobilis.marke = 'Toyota';
// automobilis.modelis = 'Prius';
// automobilis.rida = 145795;
// automobilis.spalva = 'Raudona';
// automobilis.darbinisTuris = 1.9;
// automobilis.gamybosMetai = 2015;
// automobilis.arDauztas = false;
// automobilis.arParduodamas = true;

// const dabartiniaiMetai = new Date(Date.now()).getFullYear();
// const autoAmzius = dabartiniaiMetai - automobilis.gamybosMetai;
// console.log(`Autmobilio amžius: ${autoAmzius} metai`);

// const vidutineRidaPerMetus = automobilis.rida / autoAmzius;

// console.log(vidutineRidaPerMetus.toFixed(2))

//------------------------------------------------
// Pamokos medziaga ------------------------------
// Galima objektus grupuoti:

// const bmw = {
//     modelis: '530',
//     kuroTypas: 'Dyzelinas',
//     variklioTuris: 3.0,
//     spalva: 'melyna',
//     arNaudotas: true,
//     pravardes: ['Peleda', 'Ryklys', 'Penktukas'],
//     sukurejas: {
//       vardas: 'Bambalis',
//       pavarde: 'Bambalinis'
//     },
//     rida: null,
//   };

//   const audi = {
//     modelis: 'a4',
//     kuroTypas: 'Dyzelinas',
//     variklioTuris: 1.9,
//     spalva: 'geltona',
//     arNaudotas: true,
//     pravardes: null,
//     sukurejas: {
//       vardas: 'Audrius',
//       pavarde: 'Audinius'
//     },
//     rida: 150000,
//   };

//   const vokiskiAutomobiliai = [bmw, audi];   - Masyvas su Objektais

//   console.log(vokiskiAutomobiliai)

// ------------------------------------------

// -- Isveda pazymius ---------------------------
// const zmogus = {
//     asdasdad: 'Vardenis',
//     pavarde: 'Pavardenis',
//     amzius: 18,
//     pazymiai: [5, 6, 8, 9]
//   }

//   for (const pazymys of zmogus.pazymiai) {
//     console.log(pazymys);
//   }

// ----------------------------------------------

// -- Skaiciuoja ir isveda SUMA ---------------------------

// ----------------------------------------------

// const zmogus = {
//   asdasdad: 'Vardenis',
//   pavarde: 'Pavardenis',
//   amzius: 18,
//   pazymiai: [5, 6, 8, 9],
// };

// let suma = 0;

// for (const pazymys of zmogus.pazymiai) {
//   suma += pazymys;
// }

// console.log(suma);

// -- Paima kiekvieno reiskinio reikmsme ir isveda ---------------------------

// let studentas = {
//   vardas: 'Tomas',
//   pavarde: 'Tomasas',
// };

// // Gauti kiekviena reiksme
// for (const index in studentas) {
//   console.log(studentas[index]);
// }


// ----------------------------------------------