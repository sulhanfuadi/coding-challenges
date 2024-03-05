// Coding Everyday: altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// March 05, 2024
// https://www.codewars.com/kata/56efc695740d30f963000557

// Solution #01
// export function toAlternatingCase(s: string): string {
//   let result: string = '';
//   for (let char of s) {
//     if (char.toUpperCase() === char) {
//         result += char.toLowerCase();
//     } else {
//         result += char.toUpperCase();
//     }
//   }
//   return result;
// }

// Solution #02 by VictorDeBlas, psmilliorn, Lidiya13, tkoleo84119, Tano279, Marffirst, aloxagavaii, Sehar..
// export function toAlternatingCase(s: string): string {
//   return s.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }

// Solution #03 by ejini战神
export function toAlternatingCase(s: string): string {
  return s.replace(/./g, x => /[a-z]/.test(x) ? x.toUpperCase() : x.toLowerCase());
}

// test: should return "HELLO WORLD"
console.log(toAlternatingCase("hello world"))