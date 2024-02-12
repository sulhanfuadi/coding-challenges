// Coding Everyday: Reversed Words
// February 12, 2024
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

// Solution #01
// export function reverseWords(str: string): string {
//   let arrayOfSTR: string[] = str.split(' ')

//     let newReverseArrayOfStr = []
//     for (let i = arrayOfSTR.length - 1; i >= 0; i--) {
//         newReverseArrayOfStr.push(arrayOfSTR[i])
//     }
//     let result: string = newReverseArrayOfStr.join(' ')
//     console.log(result)
//     return result
// }

// Solution #02
// export function reverseWords(str: string): string {
//   return str.split(' ').reverse().join(' ');
// }

// Solution #03
export const reverseWords = (str: string) => str.split(' ').reverse().join(' ');

// test: should return "world! hello"
console.log(reverseWords("hello world!"));