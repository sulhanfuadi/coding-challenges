// Square(n) Sum
// May 11, 2024
// https://www.codewars.com/kata/515e271a311df0350d00000f

// Solution #01
// function squareSum(numbers){
//   var result = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     result += (numbers[i] * numbers[i]);
//   }
//   return result;
// }

// Solution #02
function squareSum(numbers){
  return numbers.reduce((acc, curr) => acc + curr * curr, 0);
}

// test: should return 50
console.log(squareSum([0, 3, 4, 5]));
