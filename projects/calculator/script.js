let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');
let calculation = document.getElementById('calculation');
let history = [];

function onNumberClick(number) {
  // 1. Padarykite, kad įvedimas negalėtų prasidėti  su skaičiumi 0.
  if (input.value === '0' || input.value === answer.toString()) {
    input.value = number.toString();
  } else {
    const lastNumber = input.value.split(' ').slice(-1)[0];

    if (
      !lastNumber.includes('.') ||
      (lastNumber.includes('.') && number !== '.')
    ) {
      input.value += number.toString();
    }
  }
}

function onDecimalClick() {
  if (input.value === '0' || input.value === '') {
    input.value = '0,';
  } else {
    const lastNumber = input.value.split('').slice(-1)[0];

    if (!lastNumber.includes('.') && !lastNumber.includes(',')) {
      input.value += ',';
    }
  }
}

function onActionClick(clickedAction) {
  if (input.value === answer.toString()) {
    firstNumber = answer;
    action = clickedAction;
    input.value = answer + ' ' + clickedAction + ' ';
  } else {
    const lastInput = input.value[input.value.length - 2];

    if (
      lastInput === '+' ||
      lastInput === '-' ||
      lastInput === 'x' ||
      lastInput === '/'
    ) {
      input.value = input.value.slice(0, -3);
    }

    input.value += ' ' + clickedAction + ' ';
    action = clickedAction;
  }
}

function onEqualClick() {
  // 5 x 2
  let splitted = input.value.replace(/,/g, '.').split(' ');
  // ['5', 'x', '2']
  // '5'
  firstNumber = parseFloat(splitted[0]);
  // 'x'
  action = splitted[1];
  // '2'
  secondNumber = parseFloat(splitted[2]);
  // Iskvieciu skaiciavimo funkcija
  calculateAnswer();
  input.value = answer.toFixed(1);

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

function onBackspaceClick() {
  if (input.value.length > 0) {
    input.value = input.value.substring(0, input.value.length - 1);
  }
}

function addToHistory() {
  let historyItem = {
    firstNumber,
    action,
    secondNumber,
    answer,
  };

  history.push(historyItem);
  if (history.length > 5) {
    // Saugom tik paskutinius 5 elementus
    history = history.slice(-5);
  }
}

document.getElementById('show-history').onclick = function () {
  // Paimam paskutinius 5 elementus is masyvo ir juos atvaizduojam
  let lastFiveHistory = history.slice(-5);

  let formatted = lastFiveHistory.map(
    (x) => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`
  );
  let historyBlock = document.querySelector('.calculator .history-items');
  historyBlock.innerHTML = formatted.join('');
};

function hideHistory() {
  let historyBlock = document.querySelector('.calculator .history-items');
  historyBlock.innerHTML = '';
}

function clearHistory() {
  history = [];
  let historyBlock = document.querySelector('.calculator .history-items');
  historyBlock.innerHTML = '';
}
