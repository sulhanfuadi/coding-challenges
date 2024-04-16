// Set Alarm
// April 16, 2024
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

// Solution #1
// function setAlarm(employed, vacation) {
//   if (employed) {
//     if (vacation) {
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     if (vacation) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// Solution #02
const setAlarm = (employed, vacation) => employed && !vacation;

// test: should return false
console.log(setAlarm(true, true))

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false