// Coding Everyday: Count the Monkeys!
// March 19, 2024
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// Solution #01
// function monkeyCount(n) {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// Solution #02 by JDiddy8250, oussouFal, souhir78
var monkeyCount=n=>[...Array(n)].map((v,i)=>i+1)

// test: should return [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(monkeyCount(9))