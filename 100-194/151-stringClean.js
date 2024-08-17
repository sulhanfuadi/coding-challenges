// String cleaning
// June 26, 2024
// https://www.codewars.com/kata/57e1e61ba396b3727c000251

// Solution #01
function stringClean(s){
  let result = '';
  for (i = 0; i < s.length; i++) {
    if (isNaN(s[i]) || s[i] === ' ') {
      result += s[i];
    }
  }
  return result;
}

// Solution #02 by Knochenmark, Woltemade, AgathaLynn, ThomasConto, fdiogo, Michael Hansen, jkm92116, ScratchFandango, K-AlfredIwasaki, LydiaLyd (+ 1746)
function stringClean(s){
  return s.replace(/\d/g, "");
}

// test: should return "(Eat me!!)"
console.log(stringClean("(E3at m2e2!!)"));
