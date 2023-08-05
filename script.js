//Variables
const screen = document.getElementById('screen');
let num1 = '';
let num2 = '';
let operator = null;

//Funcion of adding
function sumar(num1, num2) {
    const resultado = num1 + num2;
    console.log(`${num1} + ${num2} = ${resultado}`);
    return resultado;
  }
  
  //Funcion of substracting
  function restar(num1, num2) {
    const resultado = num1 - num2;
    console.log(`${num1} - ${num2} = ${resultado}`);
    return resultado;
  }
  
   //Funcion of multiply
  function multiplicar(num1, num2) {
    const resultado = num1 * num2;
    console.log(`${num1} x ${num2} = ${resultado}`);
    return resultado;
  }

   //Funcion of divide
  function dividir(num1, num2) {
    if (num2 === 0) {
      console.log("Error");
      return undefined;
    }
  
    const resultado = num1 / num2;
    console.log(`${num1} ÷ ${num2} = ${resultado}`);
    return resultado;
  }