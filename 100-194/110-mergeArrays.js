// Merge two sorted arrays into one
// May 10, 2024
// https://www.codewars.com/kata/5899642f6e1b25935d000161

// Solution #01
// function mergeArrays(arr1, arr2) {
//   let combined = arr1.concat(arr2);
//   let filter = new Set(combined);
//   let set = Array.from(filter);
//   return set.sort((a, b) => a - b);
// }

// Solution #02 by user5036852, ooflorent, suic, andreapt82, myjinxin2015, twypsy, ChristopherLayton, rarbuthnot, dbrewitz, fardo16 (+ 958)
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

// test: should return [1,2,3,4,5,7,9,10,11,12]
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));
