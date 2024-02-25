// Coding Everyday: Grasshopper - Summation
// February 25, 2024
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// Solution #01
// export const summation = (num:number) => { 
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     total += i;
//   }
//   return total;
// }

// Solution #02 by monadius
export const summation = (num:number) => num * (num + 1) / 2;


// test: should return 36
console.log(summation(8))