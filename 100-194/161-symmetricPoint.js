// Points of Reflection
// July 10, 2024
// https://www.codewars.com/kata/57bfea4cb19505912900012c

// Solution #01
function symmetricPoint(p, q) {
  const [x1, y1] = p;
  const [x2, y2] = q;
  return [2 * x2 - x1, 2 * y2 - y1];
}

// Solution #02 by Hacker Sakana, Wafaa122, anv21, 0x04, PavelPavells, SergioGReyes, NatalieOakes, AnnaPoli, Bipboy, Goku555 (+ 33)
const symmetricPoint = ([a, b], [c, d]) => [c * 2 - a, d * 2 - b];

// test: should return [-1014, -443]
console.log(symmetricPoint([1000, 15], [-7, -214]));
