// Sukūriau spalvų masyvą
const spalvos = ['#FF5733', '#34FF57', '#3357FF', '#F4FF32', '#FD33A5'];
// Išsikviečiaus Id iš HTML pagal jo Id - container
const palette = document.getElementById('palette');
const addColorBtn = document.getElementById('add-color-btn');

// Sukuriu funkciją, kuris sukurs spalvos dėžutę
function createColorBox(spalva) {
  // Sukūriau naują "div"
  const box = document.createElement('div');
  // Sugalvojau ir priskyriau dėžutės box elementui klasę - "box-color"
  box.classList.add('box-color');
  // Div elemento box foną (stiliaus - background'ą) priskyriau kintamajam - "spalva"
  box.style.backgroundColor = spalva;
  // Prie dėžutės "box" pridedamas įvykis, kad paspaudus ant elemento iššoktų Aletrt'as su pranešimu: "Spalvos kodas: xxxxxxxx"
  box.addEventListener('click', () => {
    alert(spalva);
  });

  // Įdedu dėžutę į konteinerį
  palette.append(box);
}

// Iškviečiama iš karto, nes nesu nurodęs šitos logikos atskitpoje funkcijoje
spalvos.forEach((spalva) => {
  createColorBox(spalva);
});

// fuinkcija, kuris sugeneruos Random spalvą
function generateRandomColor() {
  // Sukurk man tik is šitų raidžių spalvą
  const letters = '0123456789ABCDEF';
  let spalva = '#';
  // Leidžiu ciklą 6 kartus, kad sugeneruotą HEX kodą, kuris sudaromas iš 6 skaitmenų arba raidžių
  for (let i = 0; i < 6; i++) {
    spalva += letters[Math.floor(Math.random() * 16)];
  }

  return spalva;
}

// Paleidžiama tik tada kai bus paspaudžiamas mygtukas

addColorBtn.addEventListener('click', () => {
  const randomColor = generateRandomColor();
  createColorBox(randomColor);
});
