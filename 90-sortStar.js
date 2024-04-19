// Short Long Short
// April 19, 2024
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

// Solution #01
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}

// Solution #02 by amigokaran, medfiras, inaciodh, AnnaFedenko, Axelbyte
function twoSort(s) {
  var last = s.sort()[0];
  var a = last[0];
  for(var i = 1; i < last.length; i++) {
    a += "***" + last[i];
  }
  return a;
}

// test: should return 'b***i***t***c***o***i***n'
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
