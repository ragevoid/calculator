const screen = document.getElementById('screen');
let currentNumber = '';
let previousNumber = '';
let operator = null;

function updateScreen() {
  screen.textContent = currentNumber;
}

function clear() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  updateScreen();
}

function handleNumberClick(number) {
      currentNumber += number;
      updateScreen();
    }

function handleOperatorClick(op) {
  if (currentNumber !== '') {
    if (previousNumber !== '') {
      calculate();
    } else {
      previousNumber = currentNumber;
    }
    operator = op;
  }
}

function calculate() {
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  switch (operator) {
    case '+':
      currentNumber = (num1 + num2).toString();
      break;
    case '-':
      currentNumber = (num1 - num2).toString();
      break;
    case 'x':
      currentNumber = (num1 * num2).toString();
      break;
    case '÷':
      if (num2 === 0) {
        currentNumber = 'Error';
      } else {
        currentNumber = (num1 / num2).toString();
      }
      break;
  }
  previousNumber = '';
  operator = null;
  updateScreen();
}

function handleEqual() {
  if (operator && currentNumber !== '') {
    calculate();
  }
}

document.getElementById('clear').addEventListener('click', clear);

const numbers = document.getElementsByClassName('numbers')[0].getElementsByTagName('button');
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => handleNumberClick(numbers[i].textContent));
}

document.getElementById('dot').addEventListener('click', () => {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    updateScreen();
  }
});

document.getElementById('add').addEventListener('click', () => handleOperatorClick('+'));
document.getElementById('subtract').addEventListener('click', () => handleOperatorClick('-'));
document.getElementById('multiply').addEventListener('click', () => handleOperatorClick('x'));
document.getElementById('divide').addEventListener('click', () => handleOperatorClick('÷'));

document.getElementById('equals').addEventListener('click', handleEqual);