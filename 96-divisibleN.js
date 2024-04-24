// Is n divisible by x and y?
// April 25, 2024
// https://www.codewars.com/kata/5545f109004975ea66000086

// Solution #01
// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0;
// }

// Solution #02 by DeanBrown, Bugari, rumo, byanjati, Kaj, izubi, bbsody, OlegRadchenko, lettell, zigi84 (+ 68)
function isDivisible(n, x, y) {
  return (n % x) + (n % y) == 0;
}

// test: should return true
console.log(isDivisible(12,3,4))
