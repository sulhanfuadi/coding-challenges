// Coding Everyday: Get the mean of an array
// February 15, 2024
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// Solution #01
// function getAverage(marks){
//     let total = 0;
//     for (i = 0; i < marks.length; i++) {
//         total += marks[i];
//     }
//     return Math.floor(total / marks.length);
// }

// Solution #02
// function getAverage(marks){
//     return Math.floor(marks.reduce((acc, crr) => acc + crr, 0) / marks.length);
// }

// Solution #03
const getAverage = (marks) => Math.floor(marks.reduce((acc, crr) => acc + crr, 0) / marks.length);

// test: should return 2
console.log(getAverage([2,2,2,2]));