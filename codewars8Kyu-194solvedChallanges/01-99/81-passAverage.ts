// Coding Everyday: How good are you really?
// April 09, 2024
// https://www.codewars.com/kata/5601409514fc93442500010b

// Solution #01
// export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
//     let average: number = 0;
//     let sum: number = 0;
//     for(let i = 0; i < classPoints.length; i++) {
//         sum += classPoints[i];
//     }
//     average = sum / classPoints.length;

//     return (yourPoints > average);
// }

// Solution #02 by demikhovr
export const betterThanAverage = (classPoints: number[], yourPoints: number) => classPoints.reduce((acc, it) => acc + it, 0) / classPoints.length <= yourPoints;

// test: should return True
console.log(betterThanAverage([2, 3], 5))