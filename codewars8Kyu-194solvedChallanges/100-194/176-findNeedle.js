// A Needle in the Haystack
// July 29, 2024
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

// Solution #01
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

// Solution #02 by ysurilov
function findNeedle(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "needle") return "found the needle at position " + i;
  }
}

// test: should return 'found the needle at position 30'
var haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  "needle",
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];
console.log(findNeedle(haystack_3));
