// Coding Everyday: Sale Hotdogs
// February 27, 2024
// https://www.codewars.com/kata/57202aefe8d6c514300001fd

// Solution #01
// export function saleHotdogs(n: number): number {
//     if (n < 5) return n * 100;
//     if (n < 10) return n * 95;
//     return n * 90;
// }

// Solution #02
export const saleHotdogs = (n: number): number => (n < 5)? n * 100 : (n < 10)? n * 95 : n * 90;

// test: should return 100
console.log(saleHotdogs(1))