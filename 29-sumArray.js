// Coding Everyday: Sum without highest and lowest number
// February 14, 2024
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// Solution #01
// function sumArray(array) {
//     if (array == null || array.length <= 2) return 0;
//     const sorted = array.sort((a, b) => a - b);
//     let result = 0;
//     for (let i = 1; i < sorted.length - 1; i++) {
//         result += sorted[i];
//     }
//     return result;
// }

// Solution #02
// function sumArray(array) {
//     if (array == null || array.length <= 2) return 0;
//     return array.sort((a, b) => a - b).slice(1, -1).reduce((acc, crr) => acc + crr);
// }

// Solution #03
// const sumArray = (array) => (array == null || array.length <= 2)? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((acc, crr) => acc + crr);

// Solution #04
const sumArray = (array) => array? array.sort((a, b) => a - b).slice(1, -1).reduce((acc, crr) => acc + crr, 0) : 0;

// test: should return -28
console.log(sumArray([ -6, -20, -1, -10, -12 ]));