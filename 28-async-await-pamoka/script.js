// Async await
// Tai yra sintaksės "cukrus", kuris leidžia rašyti asinchroninį kodą, tačiau jį kontroliuoti kaip sinchroninį kodą.

// PVZ.:

// Aync žodelis paverčia manio fiunkciją į Promise (Ši funkcija yra pažadas)
// async function getTodos() {
//   // Noriu, kad mano konstanta butu lygi fetch funkcijai, kuri grąžina duomenis ir API
//   // Await naudojam tik su async funkcija, laukiame kol Promise (fetch) grąžins duomenis
//   // Rekruteriui atsakymas į klausimą - Kodėl būtent čia Await? - Await naudojamas kol reikia laukti ()
// const response = await fetch('./api/todo.json');

// // 200 - status reiškia, kad request pavyko
// if (response.status !== 200) {
//   // Jeigu request nepavyko, noriu, kad mano Promise gražintų error
//   throw new Error('Cannot fetch the data from the API');
// } else {
//   // Jeigu request nepavyko, noriu grąžinti duomenis tolimesniam panaudojimui (response.json() - Taip pat promisas)
//   return await response.json();
// }

// // getTodo funkcija gražina Promise, todėl galime naudoti .then() ir .catch()
// getTodos()
//   .then((duomenys) => {
//     console.log(duomenys);
//   })
//   .catch((error) => {
//     console.log('Klaida:', error);
//   });

// Pratimai:
// 1. Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija
// turėtų vykdyti callback funkciją po 2s.

// 1. Sukuriam funkciją, kuri priima callback hunkciją kaip parametrą
// function delayedHello(callback) {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// // Sukuriam callback funkcija
// function sayHello() {
//   console.log('Hello');
// }

// // Iškviečiame delayedHello funkciją ir perduodam sayHello funkciją kaip parametrą
// delayedHello(sayHello);

// 2. Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su duomenimis.

// const response = await fetch('./api/oto.json');

// const fetchoto = async () => {
//   const response = await fetch('./api/oto.json');

//   if (!response.ok) {
//     throw new Error('Klaida, nepavyko gauti duomenu is API');
//   } else {
//     // Gražina duoemnis
//     return await response.json();
//   }
// };

// fetchoto()
//   .then((duomenys) => {
//     console.log(duomenys);
//   })
//   .catch((error) => {
//     console.log('Klaida:', error);
//   });

// 3. Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback
// funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį
// callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra
// lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę.
// Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
// pirmojiFunkcija(masyvas, callbackFunkcija)

// [1, 2, 3, 4]
// function arLyginiaiSkaiciai(masyvas, callback) {
//   for (const item of masyvas) {
//     callback(item);
//   }
// }

// function callback(num) {
//   const isEven = num % 2 === 0;

//   console.log(`${num} yra ${isEven ? 'lyginis' : 'nelyginis'}`);
// }

// const skaiciusMasyvas = [1, 2, 3, 4, 5, 6, 7, 8];
// arLyginiaiSkaiciai(skaiciusMasyvas, callback);

// 4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo
// reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir
// nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi
// grąžinti atsiųsto "string" ilgį.
// - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)
// - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo
// nariui iškviest funkciją koksIlgis(string)

//Funkcija priima masyvą ir callback funkciją
// function patikrinkZodzioIlgi(masyvas, callbackFunkcija) {
//   masyvas.forEach((zodis) => {
//     const ilgis = callbackFunkcija(zodis);
//     console.log(`Žodis: "${zodis}" turi ${ilgis} simbolius.`);
//   });
// }

// // Callback funkcija grąžina string ilgį
// function koksIlgis(string) {
//   return string.length;
// }

// const zodziai = ['obuolys', 'bananas', 'kompiuteris', 'javascript'];

// patikrinkZodzioIlgi(zodziai, koksIlgis);

// 5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir
// callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten
// esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė,
// modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback
// funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik
// atrinktos objekto properties, tarkim tik markė ir modelis)

// function apdorotiMasyvaSuCallback(masyvas, callback) {
//   const rezultatas = [];
//   for (let i = 0; i < masyvas.length; i++) {
//     const apdorotasObjektas = callback(masyvas[i]);
//     rezultatas.push(apdorotasObjektas);
//   }
//   return rezultatas;
// }

// const automobiliai = [
//   {
//     rida: 150000,
//     marke: 'Toyota',
//     modelis: 'Corolla',
//     gamybosMetai: 2015,
//     kaina: 10000,
//   },
//   {
//     rida: 200000,
//     marke: 'Volvo',
//     modelis: 'XC90',
//     gamybosMetai: 2012,
//     kaina: 7000,
//   },
// ];

// // Callback funkcija
// function gautiMarkeIrModeli(auto) {
//   return { marke: auto.marke, modelis: auto.modelis };
// }

// // Funkcijos iškvietimas
// const apdorotiAutomobiliai = apdorotiMasyvaSuCallback(
//   automobiliai,
//   gautiMarkeIrModeli
// );
// console.log('Apdoroti automobiliai:', apdorotiAutomobiliai);

// 6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true
// arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite
// naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu
// paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą,
// kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją
// naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.

//
// const userStatus = true;

// function checkUserLoginStatus(isUserLogedIn) {
//   return new Promise((resolve, reject) => {
//     if (isUserLogedIn) {
//       resolve('Vartotojas prisijungęs! Sveiki sugrįžę!');
//     } else {
//       reject(
//         'Vartotojas neprisijungęs. Prašome prisijungti, kad galėtumėte tęsti.'
//       );
//     }
//   });
// }

// Funkcijos iškvietimas su then ir catch
// checkUserLoginStatus(userStatus)
//   .then((zinute) => {
//     console.log('Pavyko:', zinute);
//   })
//   .catch((klaida) => {
//     console.error('Klaida:', klaida);
//   });

//
// Jei stringas ('1') viduje vietoj boolen, tai bus:'true'.
// Jei tusčias objektas ({}) vietoj boolen bus 'true'.
// Jei tusčias stringas (' ') vietoj boolen bus 'true'.

// checkUserLoginStatus(false)
//   .then((zinute) => {
//     console.log('Pavyko:', zinute);
//   })
//   .catch((klaida) => {
//     console.error('Klaida:', klaida);
//   });

// 7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje
// padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu
// atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18,
// jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu
// atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau
// nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

// kai panaudojame async ji bus Promise

// async function checkDriversAge(age) {
//   if (age >= 18) {
//     // resolve
//     return 'Vairuotojas yra pilnametis.';
//   } else {
//     // reject
//     throw new Error('Vairuotojas yra nepilnametis');
//   }
// }

// checkDriversAge(18)
//   .then((massage) => {
//     console.log('Vairuotojas gali vairuoti:', massage);
//   })
//   .catch((error) => {
//     console.log('Vairuotojas negali vairuoti:', error);
//   });
