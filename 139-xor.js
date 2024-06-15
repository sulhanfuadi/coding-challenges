// Exclusive "or" (xor) Logical Operator
// June 15, 2024
// https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c

// Solution #01
// function xor(a, b) {
//     return a !== b;
// }

// Solution #02 by slicklash, Balkoth, hencethus, attomos, Freywar, cris, acraileanu, lcarter@marketpath.com, 0xjgv, dschnelldavis (+ 49)
const xor = (a, b) => !!(a ^ b)

// test: should return false
console.log(xor(true, true));
