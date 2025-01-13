// Async JS (Asinchroninis JS)

// Asinchroninis kodas - nevykdomas pagal eile, o pagal ivykius kuriuos mes nustatome.
// 1. Veiksmas
// console.log('Grizau namo');
// // 2. Veiksmas
// console.log('Uzsisakiau Pica');
// // 3. Veiksmas
// // setTimeout - funkcija, kuri paleidzia nurodyta koda po nurodyto laiko. setTimeout - asinchronine funkcija.
// // Netinka naudoti kai nezinome kada kodas turetu buti paleistas.
// setTimeout(() => {
//   console.log('Pica Atvyko!');
//   console.log('Pradejau valgyti Pica');
// }, 2000);
// // 4. Veiksmas
// console.log('Nusimoviau batus');
// console.log('Nusimaudziau');

// API - Application Programing Interface
// API - Programavimo sąsaja, kuri leidžia mums naudotis kitų programų funkcijomis arba duomenimis.
// PVZ - https://jsonplaceholder.typicode.com/todos/1

// PROMISES
// Promises - tai objektas, kuris leidzia tvarkyti asinchroninius veiksmus.
// Jis veikia pagal principą: laukia, kol veiksmas bus užbaigtas ir tada grąžina rezultatą arba klaidą.
// Promise būna trys būsenos:
// 1. Pending - laukia kol veiksmas bus užbaigtas.
// 2. Fulfilled - veiksmas baigtas sėkmingai.
// 3. Rejected - veiksmas baigtas su klaida.

// PVZ.:

// Funkcija, kuri imituos kavos užsakymą.
const orderCoffee = (coffeeType) => {
  return new Promise((resolve, reject) => {
    console.log('Užsakymas yra priimtas...');

    setTimeout(() => {
      if (coffeeType === 'Latte') {
        // Resolve - funkcija, kuri grąžina sėkmingą rezultatą.
        resolve('Latte yra paruošta!');
      } else {
        // Reject - funkcija, kuri grąžina klaidą.
        reject('Atsiprašome, bet šiuo metu šios kavos neturime');
      }
    }, 5000);
  });
};

// Galime naudoti .then() ir .catch() metodus, nes orderCoffee funkcija grąžina Promise objektą.
orderCoffee('Latte')
  .then((message) => {
    // message - tai yra resolve funkcijos grąžinamas rezultatas.
    console.log('Barista sako:', message);
  })
  .catch((error) => {
    // error - tai yra reject funkcijos grąžinama klaida.
    console.log('Barista sako:', error);
  });
