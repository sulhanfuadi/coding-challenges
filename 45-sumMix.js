// Coding Everyday: Sum Mixed Array
// March 02, 2024
// https://www.codewars.com/kata/eaeb9578748ff92a000009

// Solution #01
// function sumMix(x){
//   let result = 0;
//   for (i = 0; i < x.length; i++) {
//     result += +x[i];
//   }
//   return result;
// }

// Solution #02 by sgmaster, g964, dmivlge, lex-of-pakawa, Makrem Somai, Hanen Touaiti, insafnouira, OlFi, user2035321, Anas10010000 (+ 190)
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

// Solution #03
const sumMix = (x) => x.reduce((acc, crr) => acc + +crr, 0);

// test: should return 22
console.log(sumMix([9, 3, '7', '3']))