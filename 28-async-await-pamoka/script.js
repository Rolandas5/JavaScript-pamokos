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

const response = await fetch('./api/oto.json');

const fetchoto = async () => {
  const response = await fetch('./api/oto.json');

  if (!response.ok) {
    throw new Error('Klaida, nepavyko gauti duomenu is API');
  } else {
    // Gražina duoemnis
    return await response.json();
  }
};

fetchoto()
  .then((duomenys) => {
    console.log(duomenys);
  })
  .catch((error) => {
    console.log('Klaida:', error);
  });

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
