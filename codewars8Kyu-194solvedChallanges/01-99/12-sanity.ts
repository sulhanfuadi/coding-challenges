// Coding Everyday: Return to Sanity
// February 01, 2024
// https://www.codewars.com/kata/514a7ac1a33775cbb500001e

// Solution #01
// export function mystery(): object {
//   const results = {sanity: 'Hello'};
//   return results;
// }

// Solution #02
export const mystery = (): object => ({sanity: "Hello"})

// test: should return { sanity: 'Hello' }
console.log(mystery());