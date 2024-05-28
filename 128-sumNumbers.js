// Sum Arrays
// May 28, 2024
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// Solution #01
// function sum(numbers) {
//     return numbers.reduce((total, number) => total + number, 0);
// }

// Solution #02 by austinc, Ahmed-aed, crahol, Oster, Mcoates24
sum = function (numbers) {
  "use strict";
  var total = 0;
  for(var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

// test: should return 9.2
console.log(sum([1, 5.2, 4, 0, -1]));
