// ES6 (ECMAScript 2015) - standartas.
// ECMAScript - standartizuoja JavaScript
// Apibendrinant, ECMAScript – tai standartas, kuris formuoja JavaScript kalbą ir užtikrina jos nuolatinį tobulėjimą.

// 1. Atsirado kintamieji copnst ir let, jie pakeitė senąjį var

if (true) {
  var messege = 'Sveiki';
  crossOriginIsolated.log(messege);
}

console.log(messege); // ReferenceError: messege is not defined;

const PI = 3.14159;

PI = 3.14; // TypeError: Assignment to constant variable.

// 2. Arrow funkcijos
// Arrow funkcijos yra trumpesnės ir patogsnės, nei senoeios funkcijos

// Senoji funkcija 
function add(a, b) {
    return a + b;
}

// Arrow funkcija, jei funkcija turi tik vieną eilutę, tai galima nerašyti {} ir return;
console.log(add(2, 3));  // 5;

const multiply = (a, b) => a * b;

const.log(multiply(2, 3)); // 5 

const greet = (name) => `Sveiki, ${name}`;

const button = document.getElementById('button');

// Tradicinis būdas
button.addEventListener('click', function () {
console.log('Paspaudei!');
});

// Arrow funkcijos būdu
button.addEventListener('click', () => {
console.log('Paspaudei!');
});


// 3. Destructing assignements
// Destructing assignemensts leidžia iskart issitraukti kintamuosius ir obekto arba masyvo

const user = {
    name: 'Tomas',
    age: 25,
};

// Senuoju būdu

const oldName = user.name;
const oldAge = user.age;

// Naujuoju būdu

const { name, age } = user;

console.log(name);
console.log(age);

// Masyvo atveju:

const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor, fourColor] = colors;

console.log(fourColor); // undefined

// 4. Spread operator;
// ... operatorius leidžia išskaidyti masyvo arba obejkto turinį ir leidžia pripildyti naujomis reikšmėmis

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

// 5. Default parametrai
// Default parametrai leidžia nurodyti kintamojo reikšmę, jei ji nebuvo suteikta;   NEBAIGTA !!!!
const pasisveikinimas = (name = 'Vartotojas');


const calculate = (a = 2, b = 3) => a * b;
console.log(calculate()); // 6;
console.log(calculate(3, 4)); //12