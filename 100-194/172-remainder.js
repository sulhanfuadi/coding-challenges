// Find the Remainder
// July 23, 2024
// https://www.codewars.com/kata/524f5125ad9c12894e00003f

// Solution #01
// function remainder(n, m) {
//   // Determine the larger and smaller values
//   const larger = Math.max(n, m);
//   const smaller = Math.min(n, m);
//   // Return the remainder of dividing the larger by the smaller
//   return larger % smaller;
// }

// Solution #02 by ysurilov
function remainder(a, b) {
  return a > b ? a % b : b % a;
}

// test: should return 2
console.log(remainder(17, 5));
