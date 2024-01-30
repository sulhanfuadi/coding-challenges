// Coding Everyday: Is the string uppercase?
// January 29, 2024
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

// Solution #01
// String.prototype.isUpperCase = function() {
//   return this == this.toUpperCase();
// }

// Solution #02
String.prototype.isUpperCase=function() {return this==this.toUpperCase()};

// test: must be returned false
// console.log(function('hello I AM DONALD'));