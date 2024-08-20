// Coding Everyday: Price of Mangoes
// February 07, 2024
// https://www.codewars.com/kata/57a77726bb9944d000000b06

// Solution #01
// export function mango(quantity: number, price: number): number{
//   let total = 0;
//   for (let i = 1; i <= quantity; i++) {
//     if (i % 3 === 0) continue;
//     total += price;
//   }
//   return total;
// }

// Solution #02
// export function mango(quantity: number, price: number): number{
//   return (quantity - Math.floor(quantity / 3)) * price
// }

// Solution #03
export const mango = (quantity: number, price: number): number => (quantity - Math.floor(quantity / 3)) * price;

// test: should return 6
console.log(mango(3, 3));