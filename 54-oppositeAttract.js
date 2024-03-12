// Coding Everyday: Opposites Attract
// March 12, 2024
// https://www.codewars.com/kata/555086d53eac039a2a000083

// Solution #01
// function lovefunc(flower1, flower2){
//   odd1 = (flower1 % 2 == 0);
//   odd2 = (flower2 % 2 == 0);
  
//   if ((odd1 && !odd2) || (!odd1 && odd2)) {
//     return true;
//   }
  
//   return false;
// }

// Solution #02
const lovefunc = (flower1, flower2) => flower1 % 2 != flower2 % 2;

// test: should return true
console.log(lovefunc(1,4))