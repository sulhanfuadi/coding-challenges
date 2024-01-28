// Coding Everyday: Convert number to reversed array of digits
// January 28, 2024
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// Solution #01
// function digitize(n) {
//     const nString = n.toString();
//     const nArray = nString.split('').reverse();
//     return nArray.map(nString => parseInt(nString))
// }

// Solution #02
// const digitize = n => n.toString().split('').reverse().map(nString => parseInt(nString));

// Solution #03
// function digitize(n) {
//   return String(n).split('').map(Number).reverse();
// }

// Solution #04
const digitize = n => String(n).split('').map(Number).reverse();

// test: must be returned [1, 3, 2, 5, 3]
console.log(digitize(35231));