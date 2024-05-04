// Get Nth Even Number
// May 05, 2024
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed

// Solution #01
function nthEven(n){
  return 2 * (n - 1);
}

// Solution #02 by Wittybit, njohnson7, Sepero, macie3k, 0lexa, yuskivpm, Aleksey1103, asdfasdf850, DaveyJH, eighdreeuhn (+ 1)
// const nthEven = n => --n * 2


// test: should return 4 (the 3rd even number is 4 (0, 2, 4))
console.log(nthEven(3));
