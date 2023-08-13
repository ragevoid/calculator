// VARIABLES
let currentNumber = '';
let previousNumber = '';
let operator = '';
let result = '';
const screen = document.getElementById('screenText');

// FUNCTION TO UPDATE THE SCREEN
  function screenUpdate() {
  if (previousNumber !== "" && currentNumber === "") {
    screen.textContent = formatNumber(previousNumber);
  } else if (currentNumber !== '') {
    screen.textContent = formatNumber(currentNumber);
  } else {
    screen.textContent = "";
  }
}

// FUNCTION TO FORMAT NUMBERS AFTER UPDATE SCREEN
function formatNumber(number) {
  const num = parseFloat(number);
  if (Number.isNaN(num)) {
    return "";
  }

  if (Number.isInteger(num)) {
    return num.toLocaleString('en-US', { maximumFractionDigits: 0, maximumSignificantDigits: 9 });
  } else {
    return num.toLocaleString('en-US', { maximumFractionDigits: 3 });
  }
}

// FUNCTION TO PERFORM BASIC MATHEMATICAL OPERATIONS
function operate(currentNumber, previousNumber, operator) {
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  switch (operator) {
    case 'add':
      result = (num1 + num2).toString();
      break;
    case 'subtract':
      result = (num1 - num2).toString();
      break;
    case 'multiply':
      result = (num1 * num2).toString();
      break;
    case 'divide':
      if (num2 === 0) {
        result = 'Error: Impossible';
      } else {
        result = (num1 / num2).toString();
      }
      break;
  }
}

// FUNCTION TO HANDLE NUMBER BUTTON CLICK
function handleNumberClick(number) {
  if(previousNumber === 'Error: Impossible'){
    allClear()
  }
  currentNumber += number;
  screenUpdate();
}

// LISTEN FOR CLICK ON NUMBER BUTTONS
const numbers = document.getElementsByClassName('number');
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => handleNumberClick(numbers[i].textContent));
}

// LISTEN FOR CLICK ON OPERATOR BUTTONS
const operators = document.getElementsByClassName('operator');
for (const operator of operators) {
  operator.addEventListener('click', () => handleOperatorClick(operator.id));
}

// FUNCTION TO HANDLE OPERATOR BUTTON CLICK
function handleOperatorClick(op) {
  if(previousNumber === 'Error: Impossible'){
    allClear()
  }

  if (currentNumber !== '' && previousNumber !== '') {
    operate(currentNumber, previousNumber, operator);
    previousNumber = result;
    currentNumber = '';
  } else if (currentNumber !== "" && previousNumber === "") {
    previousNumber = currentNumber;
    currentNumber = '';
  }
  operator = op;
  screenUpdate();
}


// LISTEN FOR EQUALS BUTTON CLICK
document.getElementById('equals').addEventListener('click', handleEqualCLick);

//FUNCTION THAT HANDLES THE EQUAL BUTTON CLICK
function handleEqualCLick(){
  if (currentNumber !== '' && previousNumber !== '') {
    operate(currentNumber, previousNumber, operator);
    previousNumber = result;
    currentNumber = '';
    operator = '';
    screenUpdate();
  }
};

// LISTEN FOR DOT BUTTON CLICK
document.getElementById('dot').addEventListener('click', () => {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    screenUpdate();
  }
});

// FUNCTION THAT CLEARS THE DATA
function allClear() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  result = '';
  screenUpdate();
}

// LISTEN FOR ALL CLEAR BUTTON CLICK
document.getElementById('allClear').addEventListener('click', allClear);

// LISTEN FOR CLEAR BUTTON CLICK
document.getElementById('clear').addEventListener('click', () => {
  if (currentNumber !== "") {
    currentNumber = '';
  } else {
    previousNumber = '';
    operator = '';
  }
  screenUpdate();
});

// LISTEN FOR CHANGE SIGN BUTTON CLICK
document.getElementById('change').addEventListener('click', () => {
    if(previousNumber === 'Error: Impossible'){
    allClear()
  }
  if (currentNumber !== '' && previousNumber === "") {
    previousNumber = currentNumber;
    currentNumber = '';
    previousNumber = (parseFloat(previousNumber) * -1).toString();
  } else if (previousNumber !== "" && currentNumber === "") {
    previousNumber = (parseFloat(previousNumber) * -1).toString();
  }
  screenUpdate();
});

//EVENT LISTENER OF THE PORCENTAGE BUTTON
document.getElementById('prct').addEventListener('click',porcentage)

//FUNTION THAT MAKES THE PORCENTAGE
function porcentage(){
  if(previousNumber === 'Error: Impossible'){
    allClear()
  }
  handleEqualCLick()
    previousNumber = (previousNumber/100).toString();
    screenUpdate()
}

