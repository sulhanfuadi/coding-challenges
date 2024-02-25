// Coding Everyday: Function 2 - squaring an argument
// February 26, 2024
// https://www.codewars.com/kata/523b623152af8a30c6000027

// Solution #01
// export const square = (sqr:number) =>{
//   return Math.pow(sqr,2);
// }

// Solution #02
export const square = (n : any ) : any => n ** 2

// test: should return 10000
console.log(square(100))