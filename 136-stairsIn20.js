// How many stairs will Suzuki climb in 20 years?
// June 08, 2024
// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e

// Solution #01
function stairsIn20(s){
  for (var i = 0, sum = 0; i<s.length ; i++) {
    for (var j = 0; j<s[i].length; j++) {
      sum += s[i][j];
    }
  }
  return sum*20;
}

// Solution #02 by copilot  
const stairsIn20 = s => s.reduce((a, b) => a + b.reduce((c, d) => c + d, 0), 0) * 20;