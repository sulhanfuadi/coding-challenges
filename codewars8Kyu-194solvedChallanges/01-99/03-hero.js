// Coding Everyday: Is he gonna survive?
// January 27, 2024
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// Solution #01
// function hero(bullets, dragons) {
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution #02
// function hero(bullets, dragons) {
//   return (bullets / 2 >= dragons) ? true : false;
// }

// Solution #03
// function hero(bullets, dragons) {
//     return (bullets / 2 >= dragons);
// }

// Solution #04
const hero = (bullets, dragons) => (bullets / 2 >= dragons);

// test: must be returned true
console.log(hero(10, 5));