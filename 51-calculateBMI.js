// Coding Everyday: Calculate BMI
// March 09, 2024
// https://www.codewars.com/kata/57a429e253ba3381850000fb

// Solution #01
// function bmi(weight, height) {
//   bmi = weight / (height**2);
//   if (bmi <= 18.5) {
//     return "Underweight";
//   } else if (bmi <= 25.0) {
//     return "Normal";
//   } else if (bmi <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// Solution #02
const bmi = (weight, height) => ((weight / (height**2)) <= 18.5)? "Underweight" : ((weight / (height**2)) <= 25.0)? "Normal" : ((weight / (height**2)) <= 30.0)? "Overweight" : "Obese";

// test: should return "Normal"
console.log(bmi(80, 1.80))