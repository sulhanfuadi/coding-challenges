// Coding Everyday: You only need one - Beginner
// March 25, 2024
// https://www.codewars.com/kata/57cc975ed542d3148f00015b

// Solution #01
// function check(a, x) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == x) {
//       return true;
//     }
//     return false;
//   }
// }

// Solution #02 
const check = (a,x) => a.includes(x);

// test: should return true
console.log(check([66, 101], 66))