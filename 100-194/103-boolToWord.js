// Convert boolean values to strings 'Yes' or 'No'.
// May 02, 2024
// https://www.codewars.com/kata/53369039d7ab3ac506000467

// Solution #01
function boolToWord( bool ){
  return bool ? "Yes" : "No";
}

// Solution #02 by colbydauph, mixo123, karel1980, arichidoru, amitdahan, ZzDmitry, greenfrog82, LibraZilver, AJ, DarrenHo (+ 51)
function boolToWord( bool ){
  return ['No','Yes'][+bool];
}

// test: should return "No"
console.log(boolToWord(false));
