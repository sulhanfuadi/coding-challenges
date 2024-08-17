// I love you, a little , a lot, passionately ... not at all
// April 29, 2024
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

// Solution #01
const responses = [
  "not at all",
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
]
const howMuchILoveYou = n => responses[n % 6]

// Solution #02 by myjinxin2015, user8476848, Chrono79, nam.nguyen.code, camerican, Shadow_Cat, SandQueen, user9959937, nbootu, zendor (+ 13)
// const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]

// test: should return "I love you"
console.log((howMuchILoveYou(7)));
