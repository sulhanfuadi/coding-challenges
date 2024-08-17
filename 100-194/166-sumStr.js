// Sum The Strings
// July 15, 2024
// https://www.codewars.com/kata/5966e33c4e686b508700002d

// Solution #01
function sumStr(a, b) {
  return (Number(a) + Number(b)).toString();
}

// Solution #02 by smile67, myjinxin2015, donaldsebleung, twypsy, labriffa, Omiant, Fugazzii, arhigod, YuraKolodiy13, Alicekeen (+ 810)
function sumStr(a, b) {
  return +a + +b + "";
}

// test: should return '39'
console.log(sumStr("34", "5"));
