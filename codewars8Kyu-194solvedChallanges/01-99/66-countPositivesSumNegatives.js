// Coding Everyday: Count of positives / sum of negatives
// March 24, 2024
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// Solution #01 (sc: https://github.com/christopher-nemeth/codewars/blob/master/count-of-positives-sum-of-negatives.md)
function countPositivesSumNegatives(input) {
  let positiveNums = 0;
  let negativeNums = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
  }
  return [positiveNums , negativeNums];
}

// test: should return [10, -65]
let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
countPositivesSumNegatives(testData);