// Coding Everyday: Grasshopper - Grade book
// February 13, 2024
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// Solution #01
// function getGrade (s1, s2, s3) {
//   let score  = (s1 + s2 + s3)/3;
//   if (score < 60) return 'F';
//   if (score < 70) return 'D';
//   if (score < 80) return 'C';
//   if (score < 90) return 'B';
//   return 'A';
// }

// // Solution #02
// function getGrade(...s) {
//   const score = s.reduce((acc, curr) => acc + curr) / s.length;
//   if (score < 60) return 'F';
//   if (score < 70) return 'D';
//   if (score < 80) return 'C';
//   if (score < 90) return 'B';
//   return 'A';
// }

// Solution #03
// function getGrade(...s) {
//   const score = s.reduce((acc, curr) => acc + curr) / s.length;
//   return (score < 60)? 'F': (score < 70)? 'D' : (score < 80)? 'C' : (score < 90)? 'B': 'A';
// }

// Solution #04
const getGrade = (...s) => ((s.reduce((acc, curr) => acc + curr) / s.length) < 60)? 'F': ((s.reduce((acc, curr) => acc + curr) / s.length) < 70)? 'D' : ((s.reduce((acc, curr) => acc + curr) / s.length) < 80)? 'C' : ((s.reduce((acc, curr) => acc + curr) / s.length) < 90)? 'B': 'A';

// test: should return 'A'
console.log(getGrade(95,90,93));