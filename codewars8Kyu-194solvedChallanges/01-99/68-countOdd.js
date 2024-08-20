// Coding Everyday: Count Odd Numbers below n
// March 27, 2024
// https://www.codewars.com/kata/59342039eb450e39970000a6

// Solution #01
// function oddCount(n){
//   let counter = 0;
//   for (let i = 1; i < n; i++) {
//     if (i % 2 === 1) counter += 1;
//   }
//   return counter;
// }

// Solution #02 
const oddCount = (n) => Math.floor(n / 2);

// test: should return 7
console.log(oddCount(15))