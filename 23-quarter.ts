// Coding Everyday: Quarter of the year
// February 10, 2024
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// Solution #01
// export function quarterOf(month: number): number {
//   if (month <= 3) {
//     return 1;
//   } else if (month <= 6) {
//     return 2;
//   } else if (month <= 9) {
//     return 3;
//   } else {
//     return 4;
//   }
// }

// Solution #02
export const quarterOf = (month: number): number => month <= 3 ? 1 : (month <= 6) ? 2 : (month <= 9) ? 3 : 4;

// Solution #03
// export const quarterOf = (month: number): number => Math.ceil(month / 3);

// test: should return 3
console.log(quarterOf(8));