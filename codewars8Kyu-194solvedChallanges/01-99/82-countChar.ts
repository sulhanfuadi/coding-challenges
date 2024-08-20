// Coding Everyday: All Star Code Challenge #18 - Count Char!
// April 10, 2024
// https://www.codewars.com/kata/5865918c6b569962950002a1

// Solution #01
// export function strCount(str: string, letter: string): number {
//     let count: number = 0;
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// Solution #02 by metawort
export const strCount = (str: string, letter: string) => [...str].filter(c => c === letter).length;

// test: should return 2
console.log(strCount('Hello', 'l'))