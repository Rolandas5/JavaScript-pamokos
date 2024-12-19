// Sukūriau spalvų masyvą
const spalvos = ['#FF5733', '#34FF57', '#3357FF', '#F4FF32', '#FD33A5'];
// Išsikviečiaus Id iš HTML pagal jo Id - container
const colorBox = document.getElementById('container');

// Sukuria spalvų dėžutes ir kiekvenai iš masyvo priskiria spalvą
spalvos.forEach((spalva) => {
  // Sukūriau naują "div"
  const box = document.createElement('div');
  // Sugalvojau ir priskyriau dėžutės box elementui klasę - "box-color"
  box.classList.add('box-color');
  // Div elemento box foną (stiliaus - background'ą) priskyriau kintamajam - "spalva"
  box.style.backgroundColor = spalva;
  // Prie dėžutės "box" pridedamas įvyklis, kad paspaudus ant elemento iššoktų Aletrt'as su pranešimu: "Spalvos kodas: xxxxxxxx"
  box.addEventListener('click', () => {
    alert(`Spalvos kodas: ${spalva}`);
  });
  // Įdedu dėžutę į konteinerį
  colorBox.append(box);
});

// // Sukūriau spalvų masyvą
// const spalvos = ['#FF5733', '#34FF57', '#3357FF', '#F4FF32', '#FD33A5'];
// // Išsikviečiaus Id iš HTML pagal jo Id - container
// const colorBox = document.getElementById('container');
// const addColorBtn = document.getElementById('add-color-btn');

// // Sukuria funkcij1, kuri sukurs spalvos dėžutę

// function createColorBox(spalva) {
//   // Sukūriau naują "div"
//   const box = document.createElement('div');
//   // Sugalvojau ir priskyriau dėžutės box elementui klasę - "box-color"
//   box.classList.add('box-color');
//   // Div elemento box foną (stiliaus - background'ą) priskyriau kintamajam - "spalva"
//   box.style.backgroundColor = spalva;
// }
// spalvos.forEach((spalva) => {
//   // Prie dėžutės "box" pridedamas įvyklis, kad paspaudus ant elemento iššoktų Aletrt'as su pranešimu: "Spalvos kodas: xxxxxxxx"
//   box.addEventListener('click', () => {
//     alert(`Spalvos kodas: ${spalva}`);
//   });
//   // Įdedu dėžutę į konteinerį
//   colorBox.append(box);
// });
