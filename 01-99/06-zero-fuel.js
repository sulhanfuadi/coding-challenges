// Coding Everyday: Will you make it?
// January 29, 2024
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// Solution #01
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft;
// };

// Solution #02
const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;

// test: must be returned true
console.log(zeroFuel(50, 25, 2));