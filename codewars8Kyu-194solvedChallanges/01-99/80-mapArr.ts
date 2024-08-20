// Coding Everyday: Beginner - Lost Without a Map
// April 08, 2024
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e

// Solution #01
// export function maps(x: number[]): number[]{
//     return x.map((n) => n * 2); 
// }

// Solution #02
export const maps = (x: number[]): number[] => x.map(e => e * 2)

// test: should return [2, 4, 6]
console.log((maps([1, 2, 3])))