// Coding Everyday: Parse nice int from char problem
// March 06, 2024
// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

// Solution #01
// export function get_age(age: string): number {
//   return parseInt(age[0]);
// }

// Solution #02
export const get_age = (age: string): number => parseInt(age[0]);

// Solution #03 by rednax141
// export var get_age = (age) => {return +age.charAt(0)}

// test: should return 2
console.log(get_age("2 years old"))