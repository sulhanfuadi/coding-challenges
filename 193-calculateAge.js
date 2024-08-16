// How old will I be in 2099?
// August 16, 2024
// https://www.codewars.com/kata/5761a717780f8950ce001473

// Solution #01
function calculateAge(birthYear, year) {
  const age = year - birthYear;
  if (age > 0) {
    return `You are ${age} year${age > 1 ? "s" : ""} old.`;
  } else if (age < 0) {
    return `You will be born in ${-age} year${-age > 1 ? "s" : ""}.`;
  } else {
    return "You were born this very year!";
  }
}

// Solution #02 by benbenye, mutaihillary, WinnyTroy, Guruben, user5770376, jrmutula, mcel.nich1, chad91, Coffee Zombie, vektor337 (+ 14)
function calculateAge(m, n) {
  if (m == n) return "You were born this very year!";
  var year = Math.abs(m - n) == 1 ? "year" : "years";
  if (m < n) return "You are " + (n - m) + " " + year + " old.";
  if (m > n) return "You will be born in " + (-n + m) + " " + year + ".";
}

// test: should return "You are 40 years old."
console.log(calculateAge(2005, 2045));
