// Beginner Series #1 School Paperwork
// May 24, 2024
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

// Solution #01
// function paperwork(n, m) {
//   return n < 0 || m < 0 ? 0 : n * m;
// }

// Solution #02 by ooflorent, ElOsoPolar, CrazyMerlyn, darrylblake, skuttleman, mbby712, kkrzakk, TheOpti, edgarIsla, jfranciscomn (+ 3529)
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

// test: should return 25
console.log(paperwork(5,5));
