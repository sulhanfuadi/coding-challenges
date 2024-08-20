// Coding Everyday: Convert a string to an array
// February 05, 2024
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// Solution #01
// function stringToArray(string){
//     return string.split(" ");
// }

// Solution #02
const stringToArray = (string) => string.split(" ");

// test: should return ["Robin", "Singh"]
console.log(stringToArray("Robin Singh"));