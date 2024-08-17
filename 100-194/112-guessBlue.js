// Thinkful - Number Drills: Blue and red marbles
// May 12, 2024
// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b

// Solution #01
// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
//   const blueLeft = blueStart - bluePulled;
//   const redLeft = redStart - redPulled;
//   const totalLeft = blueLeft + redLeft;
//   return blueLeft / totalLeft;
// }

// Solution #02
const guessBlue = (bs, rs, bp, rp) => (bs-bp) / ((bs - bp) + (rs - rp));

// test: should return 0.4
console.log(guessBlue(12, 18, 4, 6));
