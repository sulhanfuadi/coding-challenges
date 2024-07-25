// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// July 26, 2024
// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0

// Solution #01
function remove(string) {
  return string.replace(/!/g, "") + "!";
}

// Solution #02 by EnigmaKA, SaifSheikh, PrestonM, stefanowiczp, dominikakosiedowska, user8241453, caitlinmaree, Sudarsan , andre-abreu20, gjilan (+ 2)
const remove = (s) => s.split("!").join("") + "!";

// test: should return "Hi Hi!"
console.log(remove("Hi! Hi!"));
