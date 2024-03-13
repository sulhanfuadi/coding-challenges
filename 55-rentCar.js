// Coding Everyday: Transportation on vacation
// March 13, 2024
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// Solution #01
// function rentalCarCost(d) {
//   if (d >= 7) {
//     return (d * 40) - 50;
//   } else if (d >= 3) {
//     return (d * 40) - 20;
//   } else {
//     return (d * 40);
//   }
// }

// Solution #02
const rentalCarCost = (d) => (d * 40) - ((d >= 7)? 50 : (d >= 3)? 20 : 0);

// test: should return 220
console.log(rentalCarCost(6))