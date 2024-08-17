// Remove all exclamation marks from the end of sentence
// July 30, 2024
// https://www.codewars.com/kata/57faece99610ced690000165

// Solution #01
function remove(string) {
  return string.replace(/!+$/, "");
}

// Solution #02 by user9398389
function remove(s) {
  return s.charAt(s.length - 1) === "!" ? remove(s.slice(0, s.length - 1)) : s;
}

// test: should return 'Hi'
console.log(remove("Hi!!!"));
