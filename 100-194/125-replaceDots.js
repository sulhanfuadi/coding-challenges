// FIXME: Replace all dots
// May 25, 2024
// https://www.codewars.com/kata/596c6eb85b0f515834000049

// Solution #01
var replaceDots = function(str) {
    // before: return str.replace(/./, '-');
    // added the \ to escape special characters
    // added the g so that replace is run for all occurences in the string, so:
    return str.replace(/\./g, '-');
}

// Solution #02 by v.jain.202, kvit_ko, StoneCodeKilla, user689628
var replaceDots = s=>s.split('.').join('-')

// test: should return "one-two-three"
console.log(replaceDots("one.two.three"));
