// Coding Everyday: Cat years, Dog years
// February 24, 2024
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

// Solution #01
// export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
//     if (humanYears === 1) return [1, 15, 15];
//     if (humanYears === 2) return [2, 24, 24];
//     return [
//         humanYears,
//         (humanYears - 2) * 4 + 24,
//         (humanYears - 2) * 5 + 24,
//     ];
// }

// Solution #02 by DamienVesper
// export const humanYearsCatYearsDogYears = (num: number): [number, number, number] => ([
//   num,
//   num === 1 ? 15 : 15 + 9 + (4 * (num - 2)),
//   num === 1 ? 15 : 15 + 9 + (5 * (num - 2))
// ]);

// Solution #02 by ejini战神
export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  return humanYears == 1 ? [1, 15, 15] : [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
}

// test: should return [10,56,64]
console.log(humanYearsCatYearsDogYears(10))