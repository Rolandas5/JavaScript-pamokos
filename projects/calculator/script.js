let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');
let calculation = document.getElementById('calculation');

let history = [];

function onNumberClick(number) {
  // 1. padarykite, kad ivedimas negaletu prasideti su skaiciumi 0.
  if (number === 0 && !input.value) {
    alert('Paspaudei 0!');
    return;
  }

  // Reikia patikrinti ar paskutinis elementas buvo +, -, x, /
  if (['+', '-', 'x', '/'].includes(lastElement)) {
  }
  input.value += `${clickedAction}`;
}

function onDecimalClick() {
  const lastNumber = input.value.split(' ').slice(-1)[0];

  if (!lastNumber.includes('.') && !lastNumber.includes(',')) {
    input.value += ',';
  }
}

function onActionClick(clickedAction) {
  const inputArray = input.value.trim().spit(' ');
  const lastElement = inputArray[inputArray.length - 1];

  // input.value += ' ' + clickedAction + ' ';
  // action = clickedAction;
}

function onEqualClick() {
  // 5 x 2
  let splitted = input.value.replace(/,/g, '.').split(' ');
  // ['5', 'x', '2']
  // '5'
  firstNumber = parseInt(splitted[0]);
  // 'x'
  action = splitted[1];
  // '2'
  secondNumber = parseInt(splitted[2]);
  // Iskvieciu skaiciavimo funkcija
  calculateAnswer();
  input.value = answer.toString().replace();

  calculation.innerHTML = `${firstNumber} ${action} ${secondNumber}`;

  addToHistory();
}

function calculateAnswer() {
  // action = '+' '-' '/' 'x'
  switch (action) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case 'x':
      answer = firstNumber * secondNumber;
      break;
    case '/':
      answer = firstNumber / secondNumber;
      break;
  }
}

function onClearCalculator() {
  firstNumber = 0;
  secondNumber = 0;
  action = '+';
  answer = 0;
  input.value = '';
  calculation.innerHTML = '';
}

function addToHistory() {
  let historyItem = {
    firstNumber,
    action,
    secondNumber,
    answer,
  };
  history.push(historyItem);
}

document.getElementById('show-history').onclick = function () {
  // console.log('veikia');
  let formatted = history.map(
    (x) => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`
  );
  let historyBlock = document.querySelector('.calculator .history-items');
  historyBlock.innerHTML = formatted.join('');
};
