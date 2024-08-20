// Coding Everyday: Cockroach
// April 11, 2024
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

// Solution #01
// export function cockroachSpeed(s: number): number{
//     return Math.floor(s * 27.777778);
// }

// Solution #02 by metawort
export function cockroachSpeed(s: number): number{
    return Math.floor(s * 1000 * 100 / 60 / 60);
}

// test: should return 30
console.log(cockroachSpeed(1.08))