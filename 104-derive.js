// Take the Derivative
// May 04, 2024
// https://www.codewars.com/kata/5963c18ecb97be020b0000a2

// Solution #01
// function derive(coefficient,exponent) {
//   return `${coefficient*exponent}x^${exponent-1}`;
// }

// Solution #02 by lydiajuliette, arhigod, andrija95, coinfreak, Hunternewlife, caromadey, chaimoma, Muloversic, melek97, user7265885, nevintrian (+ 20)
function derive(a, b) {
  return (a * b) + "x^" + (b - 1);
}

// test: should return "56x^7"
console.log(derive(7,8));
