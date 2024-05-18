// Geometry Basics: Distance between points in 2D
// May 18, 2024
// https://www.codewars.com/kata/58dced7b702b805b200000be

// Solution #01 by Souzooka, IvanX_, twypsy, Bekir, filipeandre135, voodoo133, ASDFGerte, hloe, AcherRed, RetroCoder80s (+ 248)
function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

// Solution #02 by Github Copilot
// function distanceBetweenPoints(a, b) {
//   return Math.hypot(a.x - b.x, a.y - b.y);
// }

// test: should return 0
console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)));
