// Short Long Short
// April 20, 2024
// https://www.codewars.com/kata/5715eaedb436cf5606000381

// Solution #01
// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// Solution #02
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

// test: should return 9
console.log(positiveSum([-1,2,3,4,-5]))
