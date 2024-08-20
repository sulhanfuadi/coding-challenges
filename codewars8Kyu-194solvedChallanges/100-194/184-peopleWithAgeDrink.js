// Drink about
// August 07, 2024
// https://www.codewars.com/kata/56170e844da7c6f647000063

// Solution #01
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old < 18) {
    return "drink coke";
  } else if (old < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}

// Solution #02 by user3780052, mdumic, Azuaron, rorysedgwick, Ifocee, user9959937, RageOverkill, RSynenko, Oscar GG, rihabkouira (+ 23)
const peopleWithAgeDrink = (old) =>
  "drink " +
  (old < 14 ? "toddy" : old < 18 ? "coke" : old < 21 ? "beer" : "whisky");

// test: should return 'drink whisky'
console.log(peopleWithAgeDrink(22));
