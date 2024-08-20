// Sum of Multiples
// July 25, 2024
// https://www.codewars.com/kata/57241e0f440cd279b5000829

// Solution #01
function sumMul(n, m) {
  if (n >= m) return "INVALID";
  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}

// Solution #02 by 0lexa
const sumMul = (n, m) =>
  m > n
    ? [...Array((m / n) ^ 0)]
        .map((_, idx) => ++idx * n)
        .reduce((pre, val) => pre + val * (val < m))
    : `INVALID`;

// test: should return 20
console.log(sumMul(2, 9));
