// Fundamentals: Return
// June 28, 2024
// https://www.codewars.com/kata/55a5befdf16499bffb00007b

// Solution #01
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

// Solution #02 by IevgenT
const [
  { pow: exponent },
  { add, subtract: subt, multiply, divide, modulo: mod },
] = [Math, require("ramda")];
