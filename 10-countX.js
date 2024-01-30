// Coding Everyday: Count by X
// January 31, 2024
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// Solution #01
// function countBy(x, n) {
//     let z = [];
//     for (i = 1; i <= n; i++) {
//         z.push(i * x);
//     }
//     return z;
// }

// Solution #02
// function countBy(x, n) {
//     return [...Array(n)].map((el, i) => (i + 1) * x);
// }

// Solution #03
const countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x);

// test: must be returned [2,4,6,8,10]
console.log(countBy(2,5));