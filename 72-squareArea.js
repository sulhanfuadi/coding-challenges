// Coding Everyday: Area of a Square
// March 31, 2024
// https://www.codewars.com/kata/5748838ce2fab90b86001b1a

// Solution #01
function squareArea(A){
    const r = 2 * A / Math.PI;
    return Math.round(r * r * 100) / 100;
}

// Solution #02 by Wittybit
squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);

// test: should return 1.62, 1e-2
console.log(squareArea(2))