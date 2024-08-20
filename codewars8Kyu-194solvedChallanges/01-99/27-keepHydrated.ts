// Coding Everyday: Keep Hydrated!
// February 12, 2024
// https://www.codewars.com/kata/582cb0224e56e068d800003c

// Solution #01
// export function litres(time: number): number {
//   const toDrink = time * 0.5
//   const roundedDown = Math.floor(toDrink)
//   return roundedDown
// }

// Solution #02
// export function litres(time: number): number {
//   return Math.floor(time / 2);
// }

// Solution #03
export const litres = (time: number) => Math.floor(time / 2);

// test: should return 1
console.log(litres(2));