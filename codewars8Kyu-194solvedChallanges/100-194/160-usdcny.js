// USD => CNY
// July 09, 2024
// https://www.codewars.com/kata/5977618080ef220766000022

// Solution #01
function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}
// Solution #02 by ysurilov
function usdcny(usd) {
  let con = usd * 6.75;
  return `${con.toFixed(2)} Chinese Yuan`;
}

// test: should return '3138.75 Chinese Yuan'
console.log(usdcny(465));
