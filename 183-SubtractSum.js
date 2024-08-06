// Never visit a . . . !?
// August 06, 2024
// https://www.codewars.com/kata/56c5847f27be2c3db20009c3

// Solution #01
const fruits = [
  "kiwi",
  "pear",
  "kiwi",
  "banana",
  "melon",
  "banana",
  "melon",
  "pineapple",
  "apple",
  "pineapple",
  "cucumber",
  "pineapple",
  "cucumber",
  "orange",
  "grape",
  "orange",
  "grape",
  "apple",
  "grape",
  "cherry",
  "pear",
  "cherry",
  "pear",
  "kiwi",
  "banana",
  "kiwi",
  "apple",
  "melon",
  "banana",
  "melon",
  "pineapple",
  "melon",
  "pineapple",
  "cucumber",
  "orange",
  "apple",
  "orange",
  "grape",
  "orange",
  "grape",
  "cherry",
  "pear",
  "cherry",
  "pear",
  "apple",
  "pear",
  "kiwi",
  "banana",
  "kiwi",
  "banana",
  "melon",
  "pineapple",
  "melon",
  "apple",
  "cucumber",
  "pineapple",
  "cucumber",
  "orange",
  "cucumber",
  "orange",
  "grape",
  "cherry",
  "apple",
  "cherry",
  "pear",
  "cherry",
  "pear",
  "kiwi",
  "pear",
  "kiwi",
  "banana",
  "apple",
  "banana",
  "melon",
  "pineapple",
  "melon",
  "pineapple",
  "cucumber",
  "pineapple",
  "cucumber",
  "apple",
  "grape",
  "orange",
  "grape",
  "cherry",
  "grape",
  "cherry",
  "pear",
  "cherry",
  "apple",
  "kiwi",
  "banana",
  "kiwi",
  "banana",
  "melon",
  "banana",
  "melon",
  "pineapple",
  "apple",
  "pineapple",
];

function SubtractSum(n) {
  while (true) {
    const sumOfDigits = n
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
    n -= sumOfDigits;
    if (n <= 100) {
      return fruits[n - 1];
    }
  }
}

// Solution #02 by kana-sama, hencethus, simarust, JeffP6, JohanWiltink, nahilep, ashumaher, itaber, Cerbrus, Epilleptics, 0x04 (+ 45)
const SubtractSum = () => "apple";

// test: should return "apple"
console.log(SubtractSum(10));
