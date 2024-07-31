// Vowel remover
// July 31, 2024
// https://www.codewars.com/kata/xxxxxxxxxxxxxxxxxxxx

// Solution #01
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

// Solution #02 by ferlio, Hugo_Gabriel
function shortcut(str) {
  return str
    .split("")
    .filter(function (e) {
      return ["a", "e", "i", "o", "u"].indexOf(e) == -1;
    })
    .join("");
}

// test: should return "cdwrs"
console.log(shortcut("codewars"));
