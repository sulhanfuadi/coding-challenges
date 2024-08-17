// Compare within margin
// June 02, 2024
// https://www.codewars.com/kata/56453a12fcee9a6c4700009c

// Solution #01
// function closeCompare(a, b, margin){
//   if (margin === undefined) margin = 0
//   if (Math.abs(a - b) <= margin) return 0
//   return Math.sign(a - b)
// }

// Solution #02 by Hacker Sakana, myjinxin-2015, libervitalik, dsrtf0x, EakzIT, maksim2001murom25, bakour, user3707360, emanuelcom-u, Fedor71 (+ 1)
function closeCompare(a, b, m = 0){
  return Math.abs(a - b) <= m? 0: Math.sign(a - b);
}

// test: should return -1
console.log(closeCompare(4, 5));
