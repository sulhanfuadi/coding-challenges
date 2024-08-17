// BASIC: Making Six Toast.
// August 03, 2024
// https://www.codewars.com/kata/5834fec22fb0ba7d080000e8

// Solution #01
function sixToast(num) {
  return Math.abs(num - 6);
}

// Solution #02 by cdey, cwilson04, AbigailB, user3953692, sibiya666, Fujibroccoli, kaushiro, jareddm, EBMCODEWARS, Odai-kakhi (+ 93)
function sixToast(num) {
  if (num < 6) {
    return 6 - num;
  } else return num - 6;
}

// test: should return 11
console.log(sixToast(17));
