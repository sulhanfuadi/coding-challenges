//  Check for factor
// August 04, 2024
// https://www.codewars.com/kata/55cbc3586671f6aa070000fb

// Solution #01
function checkForFactor(base, factor) {
  return base % factor === 0;
}

// Solution #02 by hindia
const checkForFactor = (base, factor) => !(base % factor);

// test: should return true
console.log(checkForFactor(63, 7));
