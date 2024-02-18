// Coding Everyday: Invert values
// February 18, 2024
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

// Solution #01 by Pgking
// export function invert(array: number[]): number[] {
//   console.log(...array);
//   for (let i:number = 0; i < array.length; i++) {
//     array[i] = array[i] * -1;
//   }
//   console.log(...array);
//   return array;
// }

// Solution #02
// export function invert(array: number[]): number[] {
//    return array.map((num: number) => num * -1);
// }

// Solution #03 by metawort, Umn1k, NapzTrap
export const invert = (array: number[]) => array.map(n => -n);

// test: should return [-1,-2,-3,-4,-5]
console.log(invert([1,2,3,4,5]));