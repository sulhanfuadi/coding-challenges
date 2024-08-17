// Is there a vowel in there?
// August 11, 2024
// https://www.codewars.com/kata/57cff961eca260b71900008f

// Solution #01
function isVow(a) {
  const vowels = new Set([97, 101, 105, 111, 117]);
  return a.map((num) => (vowels.has(num) ? String.fromCharCode(num) : num));
}

// Solution #02 by odv
function isVow(a) {
  for (var i = 0; i < a.length; i += 1) {
    if (a[i] === 97) {
      a[i] = "a";
    } else if (a[i] === 101) {
      a[i] = "e";
    } else if (a[i] === 105) {
      a[i] = "i";
    } else if (a[i] === 111) {
      a[i] = "o";
    } else if (a[i] === 117) {
      a[i] = "u";
    }
  }
  return a;
}

// test: should return ["e",121,110,113,113,103,121,121,"e",107,103]
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));
