// Messi goals function
// August 08, 2024
// https://www.codewars.com/kata/55f73be6e12baaa5900000d4

// Solution #01
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Solution #02 by colbydauph, Aliaksei Hrom , imansedky5
const goals = (...a) => a.reduce((s, v) => s + v, 0);

// test: should return 58
console.log(goals(43, 10, 5));
