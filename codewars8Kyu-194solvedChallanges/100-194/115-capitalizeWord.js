// Capitalization and Mutability
// May 15, 2024
// https://www.codewars.com/kata/595970246c9b8fa0a8000086

// Solution #01
function capitalizeWord(word) {
  let firstLetter = word[0].toUpperCase();
  let restOfWord = word.slice(1).toLowerCase();
  return firstLetter + restOfWord;
}

// Solution #02 by Sean_L, rsschool_8ab5b7b96cddcf94, ErkinjonovaGulxumor
const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());

// test: should return 'Glasswear'
console.log(capitalizeWord('glasswear'));
