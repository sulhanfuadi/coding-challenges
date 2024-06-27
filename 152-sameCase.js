// Check same case
// June 27, 2024
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

// Solution #01
// function sameCase(a, b) {
//   if (!a.match(/[a-zA-Z]/) || !b.match(/[a-zA-Z]/)) {
//     return -1;
//   }
//   if ((a === a.toUpperCase() && b === b.toUpperCase()) || (a === a.toLowerCase() && b === b.toLowerCase())) {
//     return 1;
//   }
//   return 0;
// }

// Solution #02 by codeManS_yt, CrazyCarlo, metlx, Berselli, Ambush3, alwanw, apedley2006, kmal808, RichHawkins, brrke (+ 148)
sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1

// test: should return 1
console.log(sameCase('C', 'B'));
