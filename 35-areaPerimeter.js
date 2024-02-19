// Coding Everyday: Area or Perimeter
// February 19, 2024
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// Solution #01
// const areaOrPerimeter = function(l , w) {
//   let result = 0;
//   if (l === w) {
//     result = l * w;
//   } else {
//     result = 2 * (l + w);
//   }
//   return result;
// }

// Solution #02
const areaOrPerimeter = (l , w) => (l === w)? l * w : 2 * (l + w);

// test: should return 9
console.log(areaOrPerimeter(3,  3));

// test: should return 32
console.log(areaOrPerimeter(6,  10));