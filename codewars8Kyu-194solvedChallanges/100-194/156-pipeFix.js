// Lario and Muigi Pipe Problem
// July 05, 2024
// https://www.codewars.com/kata/56b29582461215098d00000f

// Solution #01
// function pipeFix(numbers){
//   const min = Math.min(...numbers);
//   const max = Math.max(...numbers);
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }

// Solution #02 by ysurilov
let pipeFix = (nums) =>
  Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);

// test: should return [6,7,8,9]
console.log(pipeFix([6, 9]));
