// Coding Everyday: Keep up the hoop
// March 11, 2024
// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145

// Solution #01
// function hoopCount (n) {
//   if (n < 10) {
//     return "Keep at it until you get it";
//   }   
//    return "Great, now move on to tricks";
// }

// Solution #02
const hoopCount = (n) => (n < 10)? "Keep at it until you get it" : "Great, now move on to tricks";

// test: should return "Great, now move on to tricks"
console.log(hoopCount(11))