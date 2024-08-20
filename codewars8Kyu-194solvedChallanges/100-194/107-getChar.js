// get character from ASCII Value
// May 07, 2024
// https://www.codewars.com/kata/55ad04714f0b468e8200001c

// Solution #01
function getChar(c){
  return String.fromCharCode(c);
}

// Solution #02 by iamzoltan
// function getChar(c){
//   var char = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  
//   return char[c-32];
// }

// test: should return 'A'
console.log(getChar(65));
