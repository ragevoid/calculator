// VARIABLES
let currentNumber = '';
let previousNumber = '';
let operator = '';
let result = '';
const screen = document.getElementById('screenText');

// FUNCION QUE ACTUALIZA LA PANTALLA
function screenUpdate() {
  if (previousNumber !== "" && currentNumber =="") {
    screen.textContent = `${previousNumber}`;
  } else if (currentNumber !== '') {
    screen.textContent = `${currentNumber}`;
  }else{    screen.textContent ="";
  } 
}



// FUNCION QUE CALCULA LAS OPERACIONES MATEMATICAS BASICAS
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

// FUNCION QUE CONCATENA LOS NUMEROS
function handleNumberClick(number) {
  currentNumber += number;
  screenUpdate();
}

// FUNCION QUE ESCUCHA EL CLICK EN LOS NUMEROS
const numbers = document.getElementsByClassName('number');
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => handleNumberClick(numbers[i].textContent));
}

// FUNCION QUE ESCUCHA EL CLICK EN LOS OPERADORES
const operators = document.getElementsByClassName('operator');

for (const operator of operators) {
  operator.addEventListener('click', () => handleOperatorClick(operator.id));
}

// FUNCION QUE MANEJA LOS OPERADORES
function handleOperatorClick(op) {
  if (currentNumber !== '' && previousNumber !== '') {
    operate(currentNumber, previousNumber, operator);
    previousNumber = result;
    currentNumber = '';
  }else if(currentNumber !== "" && previousNumber ==""){
    previousNumber = currentNumber;
    currentNumber = '';
  }
  operator = op;

  screenUpdate();
}


// FUNCION QUE MANEJA EL CLICK DEL IGUAL
document.getElementById('equals').addEventListener('click', () => {
  if (currentNumber !== '' && previousNumber !== '') {
    operate(currentNumber, previousNumber, operator);
    previousNumber = result;
    currentNumber = '';
    operator = '';
    screenUpdate();
  }
});


// FUNCION QUE MANEJA EL CLICK DEL PUNTO
document.getElementById('dot').addEventListener('click', () => {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    screenUpdate();
  }
});

// FUNCION QUE MANEJA EL CLICK DE LIMPIAR TODO
document.getElementById('allClear').addEventListener('click', () => {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  result = '';
  screenUpdate();
});

// FUNCION QUE MANEJA EL CLICK DE LIMPIAR
document.getElementById('clear').addEventListener('click', () => {
  currentNumber = '';
  screenUpdate();
});

// FUNCION QUE MANEJA EL CAMBIO DE SIGNO
document.getElementById('change').addEventListener('click', () => {
  if (currentNumber !== '' && previousNumber =="") {
    previousNumber = currentNumber;
    currentNumber = '';
    previousNumber = (parseFloat(previousNumber) * -1).toString()  
  } else if(previousNumber !== "" && currentNumber == ""){
    previousNumber = (parseFloat(previousNumber) * -1).toString()  
  }
  console.log("previous",previousNumber)
  console.log("current",currentNumber)
  console.log("result",result)
  screenUpdate();
});
