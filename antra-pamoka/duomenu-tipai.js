// Number
// Reprezentuoja sveikuosius ir slankiuosius skaicius.
let x = 42;
let y = 3.14;

// String
// Naudojamas tekstui reprezentuoti. apibreziamas naudojant viengubas arba dvigubas kabute arba backtikus.
let vardas = 'Jonas';
let pavarde = 'Jonaitis';
let vardasPavarde = `${vardas} ${pavarde}`;

// Boolean
// Loginis duomenu tipas, kuris gali buti tik true arba false.
let isPasswordValid = true;
let isEmailValid = false;

// Undefined
// Kintamasis, kuriam nebuvo priskirta jokia reiksme.
let akiuSpalva;

// Null
// Reiksme, kuri reiskia, kad kintamasis yra tuscias (dar nezinoma reiksme).
let automobilioMarke = null;

// Object
// Objektas, kuris gali saugoti daug informacijos.
const zmogus = {
  vardas: '',
  pavarde: '',
  amziu: '',
  arVedes: false,
};

// Array (masyvas)
// Masyvas, kuris saugo daug informacijos.
const masyvas = [vardas, pavarde, akiuSpalva];

// Patikrina duomenu tipa
console.log(typeof vardas);
