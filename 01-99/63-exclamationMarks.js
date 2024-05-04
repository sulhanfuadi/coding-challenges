// Coding Everyday: Remove exclamation marks
// March 21, 2024
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// Solution #01
// function removeExclamationMarks(s) {
//     let result = '';
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] != '!') {
//             result += s[i];
//         }
//     }
//     return result;
// }

// Solution #02
const removeExclamationMarks = (s) => s.split('!').join('');

// test: should return "Hello World"
console.log(removeExclamationMarks("Hello World!"))