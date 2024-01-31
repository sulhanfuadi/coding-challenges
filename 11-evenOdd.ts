// Coding Everyday: Count by X
// January 31, 2024
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// Solution #01
// export function evenOrOdd(n:number):string {
//   if (n % 2 === 0) return 'Even';
//   return 'Odd';
// }

// Solution #02
// export function evenOrOdd(n:number):string {
//     return (n % 2 === 0) ? 'Even' : 'Odd';
// }

// Solution #03
export const evenOrOdd = (n: number): string => (n % 2 === 0 ? "Even" : "Odd");

// test: should return 'Even'
console.log(evenOrOdd(2));