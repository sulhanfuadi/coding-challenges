// Multiplication table for number
// August 15, 2024
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

// Solution #01
function multiTable(number) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${i} * ${number} = ${i * number}`);
  }
  return table.join("\n");
}

// Solution #02 by AkyunaAkish, krendilek766, jasonhur, Pacha911, newYear2021, SOUROUR ISSAOUI, Ghorbell, bouain riadh, baisalbek (+ 9)
// Very clever terniary imo
const multiTable = (number) => {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }
  return table;
};

// test: should return '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10'
console.log(multiTable(1));
