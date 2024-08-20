// Remove duplicates from list
// August 17, 2024
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

// Solution #01
function distinct(a) {
  let result = [];
  let seen = new Set();
  for (let num of a) {
    if (!seen.has(num)) {
      result.push(num);
      seen.add(num);
    }
  }
  return result;
}

// Solution #02 by plumcube, matt c, pwynn, Enreign, andrii.lazebnyi, JohanWiltink, nam.nguyen.code, perumalcsbe, WebDevPDX, Ravi143jasmin (+ 4124)
function distinct(a) {
  return [...new Set(a)];
}

// test: should return  [1,2]
console.log(distinct([1, 1, 2]));
