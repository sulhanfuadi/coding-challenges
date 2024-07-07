// Find the first non-consecutive number
// July 07, 2024
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

// Solution #01
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

// Solution #02 by ryanjmack, user8172771, nategarcia_100, hatem marzougui, D-Bugger, michellelavergne, user8475500, KiRodgersDenn, temo.temo1995, wulanekawati, whit3swan (+ 3)
function firstNonConsecutive(arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);
  return Number.isInteger(result) ? result : null;
}

// test: should return 6
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
