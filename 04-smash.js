// Coding Everyday: Sentence Smash
// January 27, 2024
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// Solution #01
// function smash(words) {
//   let result = '';
//   for (let i = 0; i < words.length; i++) {
//     result += words[i];
//     if (i != words.length - 1) {
//         result += ' ';
//     }
//   }
//   return result;
// }

// Solution #02
// function smash(words) {
//   let result = words[0];
//   for (let i = 1; i < words.length; i++){
//     result += " " + words[i];
//   }
//   return result || "" ;
// }

// Solution #03
// function smash(words) {
//     return words.join(' ');
// }

// Solution #04
const smash = words => words.join(' ');

// test: must be returned 'hello world'
console.log(smash(["hello", "world"]));