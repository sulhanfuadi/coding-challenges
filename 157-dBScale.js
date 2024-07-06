// Decibel Scale
// July 06, 2024
// https://www.codewars.com/kata/5612a42e746aa62de100001a

// Solution #01
function dBScale(intensity) {
  return 10 * Math.log10(intensity / Math.pow(10, -12));
}

// test: should return 10
console.log(dBScale(Math.pow(10, -11)));
