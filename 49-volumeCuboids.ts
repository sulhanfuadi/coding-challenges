// Coding Everyday: Difference of Volumes of Cuboids
// March 07, 2024
// https://www.codewars.com/kata/58cb43f4256836ed95000f97

// Solution #01
// export function findDifference(a: [number, number, number], b: [number, number, number]): number{
//   const aVolume = a.reduce((volume: number, side: number) => volume * side);
//   const bVolume = b.reduce((volume: number, side: number) => volume * side);
//   return Math.abs(aVolume - bVolume);
// }

// Solution #02
export const findDifference = (a: [number, number, number], b: [number, number, number]): number => Math.abs((a.reduce((volume: number, side: number) => volume * side)) - (b.reduce((volume: number, side: number) => volume * side)));

// Solution #03 by dfhwze, spike_yan, GeoffAtHome, Dima-Dim, retnag, diegobarroso, grabielcruz, rock_lee, pumpmx, J-Rozas (+ 47)
// export function findDifference(a: [number, number, number], b: [number, number, number]): number{
//   return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
// }

// test: should return 14
console.log(findDifference([3, 2, 5], [1, 4, 4]))