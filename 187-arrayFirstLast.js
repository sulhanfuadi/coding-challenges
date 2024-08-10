// Remove First and Last Character Part Two
// August 10, 2024
// https://www.codewars.com/kata/570597e258b58f6edc00230d

// Solution #01
function array(string) {
  if (!string) return null;

  const arr = string.split(",");
  if (arr.length <= 2) return null;

  return arr.slice(1, -1).join(" ");
}

// Solution #02 by pwynn, hencethus, owade, vsara, Viktor1990, dougbacelar, 0xecho, snicusor, rootgateway, sdya (+ 1096)
function array(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null;
}

// test: should return 'B2 C3 D4'
console.log(array("A1,B2,C3,D4,E5"));
