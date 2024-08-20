// Coding Everyday: Are You Playing Banjo?
// March 15, 2024
// https://www.codewars.com/kata/53af2b8861023f1d88000832

// Solution #01
// function areYouPlayingBanjo(name) {
//   if (name[0] == 'R' || name[0] == 'r') {
//     return `${name} plays banjo`
//   }
//   return `${name} does not play banjo`
// }

// Solution #02
const areYouPlayingBanjo = (name) => (name[0] == 'R' || name[0] == 'r')? `${name} plays banjo` : `${name} does not play banjo`;

// Solution #03 by colbydauph, YamaRoo, juhoha, Allen Walker, yvsppt, synergiusz, Michau96, belko-letyago, Miista, mikoSTAR (+ 210)
// function areYouPlayingBanjo(name) {
//   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

// test: should return "Adam does not play banjo"
console.log(areYouPlayingBanjo("Adam"))