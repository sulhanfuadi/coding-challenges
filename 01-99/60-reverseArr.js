// Coding Everyday: My head is at the wrong end!
// March 18, 2024
// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55

// Solution #01
function fixTheMeerkat(arr) {
  return arr.reverse(); 
}

// Solution #02 by slicklash, Balkoth, Shraymonks, gonzaloruizdevilla, jkardos, JohanWiltink, ChiefAffirmationOfficer, bruts002, sallamTanna, xantix (+ 5)
const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]

// test: should return ["sky", "rainbow", "ground"]
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]))