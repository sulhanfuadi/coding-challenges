// Return Two Highest Values in List
// August 12, 2024
// https://www.codewars.com/kata/57ab3c09bb994429df000a4a

// Solution #01
function twoHighest(arr) {
  const uniqueValues = [...new Set(arr)]; // Remove duplicates by converting to a set
  uniqueValues.sort((a, b) => b - a);
  return uniqueValues.slice(0, 2);
}

// Solution #02 by Kirkrk
function twoHighest(arr) {
  if (!arr.length) return [];
  const max1 = Math.max(...arr);
  let max2;
  const filteredArr = arr.filter((el) => el !== max1);
  if (filteredArr.length) {
    max2 = Math.max(...filteredArr);
  }
  return max2 ? [max1, max2] : [max1];
}

// test: should return [20, 17]
console.log(twoHighest([15, 20, 20, 17]));
