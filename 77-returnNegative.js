// Coding Everyday: Return Negative
// April 05, 2024
// https://www.codewars.com/kata/55685cd7ad70877c23000102

// Solution #01
// function makeNegative(num) {
//     if (num > 0) {
//         return num * -1;
//     }
//     return num;
// }

// Solution #02
const makeNegative = (num) => num < 0 ? num : -num;

// test: should return -9
console.log(makeNegative(-9))