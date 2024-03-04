// Coding Everyday: The Feast of Many Beasts
// March 04, 2024
// https://www.codewars.com/kata/5aa736a455f906981800360d

// Solution #01
// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
// }

// Solution #02 
const feast = (beast, dish) => beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);

// Solution #03 by desperad07
// const feast = (...args) => /^(.).*(.),\1.*\2$/.test(args);

// test: should return true
console.log(feast("great blue heron", "garlic naan"))