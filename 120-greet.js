// Jenny's secret message
// May 20, 2024
// https://www.codewars.com/kata/55225023e1be1ec8bc000390

// Solution #01
// function greet(name){
//   if(name === "Johnny")
//     return "Hello, my love!";
//   return "Hello, " + name + "!";
// }

// Solution #02 by colbydauph, ostaladaFab, oussouFal, Rayen963
let greet = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;

// test:
console.log(greet("Jim"));

console.log(greet("Johnny"));