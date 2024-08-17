// Find the position!
// May 27, 2024
// https://www.codewars.com/kata/5808e2006b65bff35500008f

// Solution #01
function position(letter){
    return "Position of alphabet: " + (letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
}

// Solution #02 by e.mihaylin, jsdevatcdwr, Garjan, user261601, C_Minor, rsschool_70f1ddaa50e8c562, user6914305, Taikwai, coaraandrei, bkpecho (+ 2)
// position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;

// test: should return "Position of alphabet: 26"
console.log(position("z"));
