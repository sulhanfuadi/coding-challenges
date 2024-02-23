// Coding Everyday: Powers of 2
// February 23, 2024
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// Solution #01
// function powersOfTwo(n){
//   let result = [];
//   for (i = 0; i <= n; i++) {
//     result.push(2 ** i);
//   }
//   return result;
// }

// Solution #02
// const greet = (name, owner) => (name === owner)? 'Hello boss' : 'Hello guest';
const powersOfTwo = (n) => [...Array(n + 1)].map((el, n) => 2 ** n );

// test: should return [1, 2, 4, 8, 16]
console.log(powersOfTwo(4))