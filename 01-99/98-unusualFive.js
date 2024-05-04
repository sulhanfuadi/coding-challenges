// 5 without numbers !!
// April 27, 2024
// https://www.codewars.com/kata/59441520102eaa25260000bf

// Solution #01
// function unusualFive() {
//   return 'fucku'.length
// }

// Solution #02 by 0lexa, AlexKrop, mn12345
const unusualFive = () => Math.hypot(Math.ceil(Math.PI), Math.floor(Math.PI));

// test: should return 5
console.log((unusualFive()))
