// Coding Everyday: String repeat
// February 19, 2024
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// Solution #01 by Pgking
// export function repeatStr(n: number, s: string): string {
//   let newString: string = '';
//   for (let i = 1; i <= n; i++) {
//     newString += s;
//   }
//   return newString;
// }

// Solution #02
export const repeatStr = (n: number, s: string): string => s.repeat(n);


// test: should return "***"
console.log(repeatStr(3, "*"));