// Norime padaryti h1 centruopja per vidury puslapio
// 1. Susirandame h1 elementa
// 2. Pakeiciame jo stiliu, kad jis butu centruotas
const heading = document.querySelector('h1');
heading.style.textAlign = 'center';

// 3. Susirandame mygtukus ir dezute, kuriai keisime spalva;
const colorBox = document.getElementById('color-box');
const redButton = document.getElementById('btn-red');
const greenButton = document.getElementById('btn-green');
const resetButton = document.getElementById('btn-reset');

redButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'red';
  colorBox.style.border = '20px solid green';
});

greenButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'green';
  colorBox.style.border = '20px dotted red';
});

resetButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = 'blue';
  colorBox.style.borderRadius = '50%';
  colorBox.style.width = '300px';
});
