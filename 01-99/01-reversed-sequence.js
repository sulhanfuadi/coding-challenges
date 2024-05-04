// Coding Everyday: Reversed sequence
// January 27, 2024
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// Solution #01
// const reverseSeq = n => {
//     const result = [];
//     for (let i = n; i >= 1; i--){
//         result.push(i);
//     }
//     return result;
// };

// Solution #02
// const reverseSeq = n => {
//     return Array(n) // we have an empty array here
//     .fill() // fill array with undefined
//     .map((el, i) => i + 1) // map it with the index, cause we want start with index 1, so + 1
//     .reverse() // reverse the array
// };

// Solution #03
// using spread operator ===> Array(n).fill(); === [...Array(n)]
// const reverseSeq = n => [...Array(n)].map((el, i) => i + 1).reverse();

// Solution #04
// without reverse, we start with the n index
const reverseSeq = n => [...Array(n)].map((elmt, i) => n - i);

// test: must be returned [ 5, 4, 3, 2, 1 ]
console.log(reverseSeq(5));