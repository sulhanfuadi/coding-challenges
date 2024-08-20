// Reversed sequence
// April 23, 2024
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// Solution #01
const reverseSeq = n => {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result
};

// Solution #02 by perkee, qwertyaaa, Epilleptics, Themba Mbulwana, giovannyrosales57, Viktorija Surginevica, Ryan-Fx
// const reverseSeq = length => Array.from({length}, () => length--)

// test: should return [5, 4, 3, 2, 1]
console.log(reverseSeq(5))
