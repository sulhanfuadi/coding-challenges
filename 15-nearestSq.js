// Coding Everyday: Find Nearest square number
// February 04, 2024
// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

// Solution #01
// function nearestSq(n){
//     let higherNum = n + 1
//     while (Math.sqrt(higherNum) % 1 !== 0) {
//       higherNum++
//     }
//     let lowerNum = n - 1
//     while (Math.sqrt(lowerNum) % 1 !== 0) {
//       lowerNum--
//     }
//     if (n === 1) {
//     return n
//     } else if (higherNum - n < n - lowerNum) {
//       return higherNum
//     } else { 
//       return lowerNum 
//     }
// }

// Solution #02
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

// test: should return 121
console.log(nearestSq(111));