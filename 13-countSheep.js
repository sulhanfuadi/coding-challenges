// Coding Everyday: If you can't sleep, just count sheep!!
// February 02, 2024
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// Solution #01
// var countSheep = function (num) {
//     result = '';
//     for (i = 1; i <= num; i++) {
//         result += `${i} sheep...`;
//     }
//     return result;
// }

// Solution #02
// var countSheep = function (num) {
//     return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');
// }

// Solution #03
const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

// test: should return '1 sheep...2 sheep...3 sheep...'
console.log(countSheep(3));