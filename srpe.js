//Variables
const screen = document.getElementById('screenText');
let currentNumber = '';
let previousNumber = '';
let operator = null;


//Function that clear the screen
function clear() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  updateScreen();
}

//Event listener of the clear button
document.getElementById('clear').addEventListener('click', clear);

//Function that updates the screen
function updateScreen() {
    if (previousNumber && operator) {
      screen.textContent = `${previousNumber} ${operator} ${currentNumber}`;
    } else if (operator) {
      screen.textContent = `${currentNumber} ${operator}`;
    } else {
      screen.textContent = currentNumber;
    }
  }



//Function that attribute the numbers
function handleNumberClick(number) {
    if (number !== 'C') {
      currentNumber += number;
      updateScreen();
    }
  }

//Variable that gets the clicked number
  const numbers = document.getElementsByClassName('numbers')[0].getElementsByTagName('button');
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => handleNumberClick(numbers[i].textContent));
}

//Function that attribute the operator 
function handleOperatorClick(op) {
  // let previousResult = null;
  // let previousOperator = null;


  if (operator && currentNumber !== '') {
    calculate();
    previousResult = currentNumber;
    previousOperator = operator;
  }else {
      previousNumber = currentNumber;
    }
    operator = op;
    currentNumber = '';
  }
  updateScreen();

//Event Listeners of the operators
document.getElementById('add').addEventListener('click', () => handleOperatorClick('+'));
document.getElementById('subtract').addEventListener('click', () => handleOperatorClick('-'));
document.getElementById('multiply').addEventListener('click', () => handleOperatorClick('*'));
document.getElementById('divide').addEventListener('click', () => handleOperatorClick('÷'));
document.getElementById('equal').addEventListener('click', () => handleOperatorClick(' '));

// //Funtion that handles the equal operator
// function handleEqual() {
//     if (operator && currentNumber !== '') {
//       calculate(); 
//     }
//   }


//Funtion that calculates the operations
function calculate() {
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  switch (operator) {
    case '+':
      currentNumber = (num1 + num2).toString();
      operator = "+"
      break;
    case '-':
      currentNumber = (num1 - num2).toString();
      operator = "-"
      break;
    case 'x':
      currentNumber = (num1 * num2).toString();
      operator = "*"
      break;
    case '÷':
      if (num2 === 0) {
        currentNumber = 'Error: Impossible';
      } else {
        currentNumber = (num1 / num2).toString();
      }
      operator = "/"
      break;
  }
  updateScreen();
}

//Event listener and adding of the dot in the numbers
document.getElementById('dot').addEventListener('click', () => {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    updateScreen();
  }
});

