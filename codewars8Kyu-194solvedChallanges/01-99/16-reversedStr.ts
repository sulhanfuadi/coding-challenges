// Coding Everyday: Reversed Strings
// February 04, 2024
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Solution #01
// export function solution(str: string): string {
//   return [...str].reverse().join('');
// }

// Solution #02
export const solution = (str: string) => [...str].reverse().join('');

// test: should return 'dlrow'
console.log(solution('world'));