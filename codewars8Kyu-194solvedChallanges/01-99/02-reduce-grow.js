// Coding Everyday: Reduce but Grow
// January 27, 2024
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// Solution #01
// function grow(x){
//     let result = x[0];
//     for (let i = 1; i < x.length; i++){
//         result *= x[i];
//     }
//     return result;
// }

// Solution #02
// function grow(x){
//     return x.reduce((acc, curr) => acc * curr, 1);
// }

// Solution #03
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

// test: must be returned 16
console.log(grow([4, 1, 1, 1, 4]));