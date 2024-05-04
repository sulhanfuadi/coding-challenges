// Coding Everyday: Third Angle of a Triangle
// February 11, 2024
// https://www.codewars.com/kata/5a023c426975981341000014

// Solution #01
// export const otherAngle = (a: number, b: number): number => {
//   return 180 - (a + b);
// }

// Solution #02
export const otherAngle = (a: number, b: number): number =>  180 - (a + b);

// test: should return 90
console.log(otherAngle(30, 60));