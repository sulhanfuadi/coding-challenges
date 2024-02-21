// Coding Everyday: How many lightsabers do you own?
// February 21, 2024
// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8

// Solution #01
// export function howManyLightsabersDoYouOwn(name? : any): number {
//   if (name === 'Zach') return 18;
//   return 0;
// }

// Solution #02
export const howManyLightsabersDoYouOwn = (name? : any): number => (name === 'Zach')? 18 : 0;

// test: should return 18
console.log(howManyLightsabersDoYouOwn('Zach'));

// test: should return 0
console.log(howManyLightsabersDoYouOwn('Fuadi'));