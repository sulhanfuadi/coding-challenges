// Coding Everyday: Gravity Flip
// March 22, 2024
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

// Solution #01
// const flip = (d, a) => {
//   if (d == 'R') {
//     return a.sort((n1, n2) => n1 - n2);
//   }
//   return a.sort((n1, n2) => (n1 - n2) * -1);
// }

// Solution #02 by e.mihaylin, YuraKoch, LPeter, ComicScrip, xinglongr, Lovelife lovetechnology, luanchenxin, 1693152044, qinwei, yueer (+ 69)
const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

// test: should return [1, 2, 2, 3]
console.log(flip('R', [3, 2, 1, 2]))