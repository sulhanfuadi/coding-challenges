// Pythagorean Triple
// April 26, 2024
// https://www.codewars.com/kata/5951d30ce99cf2467e000013

// Solution #01
function isPythagoreanTriple(integers) {
  const [a, b, c] = integers.sort((a, b) => a - b);
  return a ** 2 + b ** 2 === c ** 2;
}

// Solution #02 by dfhwze, mohwarda22, LazyStarr, IkramovBilal
// function isPythagoreanTriple([a,b,c],p=(a,b,c)=>a*a+b*b==c*c) {
//   return p(a,b,c) || p(a,c,b) || p(c,b,a);
// }

// test: should return true
console.log(isPythagoreanTriple([3, 4, 5]))
