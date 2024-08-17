// Kata Example Twist
// August 13, 2024
// https://www.codewars.com/kata/525c1a07bb6dda6944000031

// Solution #01
// add the value "codewars" to the websites array 1,000 times
var websites = [];
for (var i = 0; i < 1000; i++) {
  websites.push("codewars");
}

// Solution #02 by hindia
var websites = new Array(1000).fill("codewars");

// test: should return true
console.log(websites.length == 1000);
