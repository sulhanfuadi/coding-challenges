// Coding Everyday: Double Char
// March 26, 2024
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// Solution #01
// function doubleChar(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result += str[i];
//         result += str[i];
//     }
//     return result;
// }

// Solution #02 
const doubleChar = (str) => str.split('').map((el) => el + el).join('');

// test: should return "aabbccdd"
console.log((doubleChar("abcd")))