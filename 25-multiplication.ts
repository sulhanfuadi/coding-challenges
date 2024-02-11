// Coding Everyday: Simple multiplication
// February 11, 2024
// https://www.codewars.com/kata/583710ccaa6717322c000105

// Solution #01
// export function simpleMultiplication(num: number): number{
//   if (num % 2 === 0) {
//     return num * 8;
//   } 
//   return num * 9;
// }

// Solution #02
export const simpleMultiplication = (num: number) => (num % 2 === 0) ? num * 8 : num * 9;

// test: should return 64
console.log(simpleMultiplication(8));