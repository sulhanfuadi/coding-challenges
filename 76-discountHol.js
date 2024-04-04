// Coding Everyday: Holiday VIII - Duty Free
// April 04, 2024
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5

// Solution #01
// function dutyFree(normPrice, discount, hol){
//   return Math.floor(hol / (normPrice * discount / 100));
// }

// Solution #02 by 0lexa
dutyFree = (p, d, h) => ~~(100 * h / p / d)

// test: should return 166
console.log((dutyFree(12, 50, 1000)))