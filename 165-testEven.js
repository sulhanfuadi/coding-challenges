// Is it even?
// July 14, 2024
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5

// Solution #01
// function testEven(n) {
//   return n % 2 === 0;
// }

// Solution #02 by dmitriisurmin
function testEven(n) {
  /// ( ¬‿¬) ///
  return !(+n.toString(2).charAt(n.toString(2).length - 1) & 1);
}

// test: should return true
console.log(testEven(-4));
