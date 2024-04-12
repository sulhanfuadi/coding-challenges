// Coding Everyday: What's the real floor?
// April 13, 2024
// https://www.codewars.com/kata/574b3b1599d8f897470018f6

// Solution #01
// export function getRealFloor(n: number): number {
//     if (n <= 0) return n;
//     if (n < 13) return n - 1;
//     return n - 2;
// }

// Solution #02
export function getRealFloor(n: number): number{
    return n <= 0 ? n : n <= 13 ? n-1 : n-2}

// test: should return 13
console.log(getRealFloor(15))