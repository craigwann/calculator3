// Business logic:

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 * number2;
}

// UI logic
$(document).ready(function() {

  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  
  alert(add(number1, number2));
});