// Coding Everyday: Convert a Boolean to a String
// February 07, 2024
// https://www.codewars.com/kata/551b4501ac0447318f0009cd

// Solution #01
// export const booleanToString = (b:boolean):string => {
//   if (b)  return "true";
//   else return 'false';
// };

// Solution #02
export const booleanToString = (b:boolean) => b ? 'true' : 'false';

// test: should return 'true'
console.log(booleanToString(true));