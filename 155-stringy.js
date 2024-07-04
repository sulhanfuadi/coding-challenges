// Stringy Strings
// June 30, 2024
// https://www.codewars.com/kata/563b74ddd19a3ad462000054

// Solution #01
// function stringy(size) {
//   let result = '';
//   for (let i = 0; i < size; i++) {
//     result += i % 2 === 0 ? '1' : '0';
//   }
//   return result;
// }

// Solution #02 by volodza, bakour, le0m22, Leylena
const stringy = (x) => "".padStart(x, "10");

// test: should return 101
console.log(stringy(3));
