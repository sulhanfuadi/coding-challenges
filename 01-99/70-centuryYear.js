// Coding Everyday: Century From Year
// March 29, 2024
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// Solution #01
// function century(year) {
//     if (year % 100 === 0) {
//         return year / 100;
//     } else {
//         return Math.floor(year / 100) + 1;
//     }
// }

// Solution #02 
const century = (year) => Math.ceil(year / 100);

// test: should return 17
console.log(century(1601))