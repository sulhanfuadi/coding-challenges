// Coding Everyday: Find Multiples of a Number
// February 29, 2024
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

// Solution #01
// export function findMultiples(integer: number, limit: number): number[] {
//   const numbers: number[] = [];
//   for (let i = integer; i <= limit; i += integer) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// Solution #02 by Brettm12345
export const findMultiples = (int: number, limit: number): number[] =>
  [...Array(limit).keys()]
    .map(value => value + 1)
    .filter(value => value % int === 0)

// test: should return [5, 10, 15, 20, 25]
console.log(findMultiples(5, 25))