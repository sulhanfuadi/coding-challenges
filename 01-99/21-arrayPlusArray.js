// Coding Everyday: Array plus array
// February 08, 2024
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// Solution #01
// function arrayPlusArray(arr1, arr2) {
//   let total = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     total += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     total += arr2[i];
//   }
//   return total;
// }

// Solution #02
// function arrayPlusArray(arr1, arr2) {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       total += arguments[i][j];
//     }
//   }
//   return total;
// }

// Solution #03
arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr);

// test: should return 21
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));