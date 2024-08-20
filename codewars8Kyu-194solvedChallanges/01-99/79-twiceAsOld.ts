// Coding Everyday: Twice as old
// April 07, 2024
// https://www.codewars.com/kata/5b853229cfde412a470000d0

// Solution #01
// export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

// Solution #02
export const twiceAsOld = (dadYearsOld: number, sonYearsOld: number): number => Math.abs(dadYearsOld - 2 * sonYearsOld);

// test: should return 22
console.log(twiceAsOld(36,7))