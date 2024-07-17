// Hello, Name or World!
// July 16, 2024
// https://www.codewars.com/kata/57e3f79c9cb119374600046b

// Solution #01
function hello(name) {
  if (!name) return "Hello, World!";
  return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
}

// Solution #02 by kazk, docgunthrop, H0ussem, Paul.s.sh, user7196325, Sergei_Illarionov, Annie , urado12, NicoleRud, JuanGidoni (+ 19)
const hello = (s) =>
  `Hello, ${s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : "World"}!`;

// test: should return 'Hello, Alice!'
console.log(hello("alice"));
