// Is the date today
// July 11, 2024
// https://www.codewars.com/kata/563c13853b07a8f17c000022

// Solution #01
function isToday(date) {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

// Solution #02 by colbydauph
const isToday = (date) => {
  let d = new Date();
  return ["getDate", "getMonth", "getFullYear"].every(
    (v) => date[v]() == d[v]()
  );
};
