// Coding Everyday: Apple Turnover
// March 16, 2024
// https://www.codewars.com/kata/580a094553bd9ec5d800007d

// Solution #01
// function apple(x){
//     x = +x;
//     if (x*x > 1000) {
//         return "It's hotter than the sun!!";
//     }
//     return "Help yourself to a honeycomb Yorkie for the glovebox.";
// }

// Solution #02
const apple = (x) => (+x*+x > 1000)? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";

// test: should return 'Help yourself to a honeycomb Yorkie for the glovebox.'
console.log(apple('4'))