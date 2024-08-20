// A Strange Trip to the Market
// July 20, 2024
// https://www.codewars.com/kata/55ccdf1512938ce3ac000056

// Solution #01
function isLockNessMonster(s) {
  // The phrases that indicate the presence of the Loch Ness Monster
  const phrases = ["tree fiddy", "3.50", "three fifty"];

  // Check if any of the phrases are in the string
  return phrases.some((phrase) => s.includes(phrase));
}

// Solution #02 by jacobb, jayzne, Exzorcist, Wafaa122, user1430804
function isLockNessMonster(s) {
  return /3\.50|th?ree fi(?:ft|dd)y/g.test(s);
}

// test: should return 'xxxxxx'
console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  )
);
