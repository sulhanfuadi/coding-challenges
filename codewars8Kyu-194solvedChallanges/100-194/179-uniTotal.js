// ASCII Total
// August 01, 2024
// https://www.codewars.com/kata/572b6b2772a38bc1e700007a

// Solution #01
function uniTotal(string) {
  return string.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
}

// Solution #02 by user5697517, mahl3r , MouMohsen, Mastik14, merveerdol, kickh, imansedky5, kieran_memphis, maksim2001murom25, masstac (+ 8)
function uniTotal(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count += str.charCodeAt(i);
  }
  return count;
}

// test: should return 1873
console.log(doTest("Mary Had A Little Lamb"));
