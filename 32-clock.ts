// Coding Everyday: Beginner Series #2 Clock
// February 17, 2024
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

// Solution #01 by SamuelDeLuca
// export function past(h: number, m: number, s: number): number {
//   return ((h * 60 * 60) + (m * 60) + s) * 1000;
// }

// Solution #02
export const past = (h: number, m: number, s: number): number => ((h * 60 * 60) + (m * 60) + s) * 1000;

// test: should return 61000
console.log(past(0, 1, 1));