// Masyvai
// Masyvus galima įsivaizduoti kaip:
// ○ Masyvas yra specialaus tipo kintamasis, kuris gali saugoti daugiau nei vieną reikšmę.
// ○ Masyvas apjungia kelis skirtingus kintamuosius į vieną vietą.
// ○ Masyvas padeda sugrupuoti susijusius duomenis.
// o Viename Masyve surasyti tik ta pati duomenu tipa, viduje masyvo narius atskirti kableliu.
// o Masyve reiksmes visada prasideda pagal indeksa nuo 0.

//
// Pvz Nr. 1

// const vokiskiAutomobiliai = ['Audi', 'Bmw', 'Mercedes'];

// console.log(vokiskiAutomobiliai);

//
// Pvz Nr. 2

// const matematika = 10;
// const lietuviu = 9;
// const anglu = 8;

// const pazymiai = [matematika, lietuviu, anglu];

// console.log(pazymiai);

// console.log(pazymiai[1]); - issikvieciama antras indeksas.

//
// Pvz Nr. 3

// let suma = 0
// let masyvas = [3, 1, 2];

// suma = masyvas[0] + masyvas[1] + masyvas[2];

// console.log(suma);

// Pvz Nr. 4
// let skaiciai = [1, 2, 3, 4, 5];

// console.log(skaiciai.length);

//
// Pvz Nr. 5

// let automobiliai = ['Audi', 'Bmw', 'Opel'];
// if (automobiliai.length) {
//   console.log('Masyvas netuscias');
// }

// if (automobiliai.length > 1) {
//   console.log('Masyve yra ', automobiliai.length);
// }

// Push metodas

// let pienoProduktai = ['pienas', 'kefyras', 'grietine'];
// pienoProduktai.push('jogutas');
// console.log(pienoProduktai);

// ------------------------------------------------

// Pvz. - Nauju nariu idejimas i Masyva - Push metodas

//
// let naujasProduktas = 'kefyras';
// let pienoProduktai = ['pienas'];
// let kitiProduktai = [];

// if (naujasProduktas === 'kefyras') {
//   pienoProduktai.push(naujasProduktas);
// } else {
//   kitiProduktai.push(naujasProduktas);
// }

// console.log(pienoProduktai);
// console.log(kitiProduktai);

// ------------------------------------------------

// Pvz. - Masyvo skaiciai

// let skaiciai = ['pirmas', 'antras', 'trecias', 'ketvirtas'];

// // Pirma nary
// console.log(skaiciai[0]);
// // Paskutinis
// console.log(skaiciai[skaiciai.length - 1]);

// ------------------------------------------------

// Pvz. - Poziciojos keitimas Masyve

//
// let vardai = ['Tomas', 'Agne', 'Greta'];

// console.log(vardai);

// vardai[0] = 'Greta';
// vardai[2] = 'Tomas';

// console.log(vardai)

// ------------------------------------------------
