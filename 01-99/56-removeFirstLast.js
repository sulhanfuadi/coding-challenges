// Coding Everyday: Remove First and Last Character
// March 14, 2024
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

// Solution #01
function removeChar(str) {
  return str.slice(1, -1);
}

// Solution #02
const removeChar = str => str.slice(1,-1)

// Solution #03 by wphoong, Dipjr87, Lisapeta, NFaz, ayakub, NatalyZ, mohamedhedislatni, SOUROUR ISSAOUI, anton747, tanya93K (+ 11)
function removeChar(str){
 //You got this!
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');
};