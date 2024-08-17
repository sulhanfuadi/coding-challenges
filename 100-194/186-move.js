// Terminal game move function
// August 09, 2024
// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2

// Solution #01
function move(position, roll) {
  return position + roll * 2;
}

// Solution #02 by omiceron
const move = (_, $, _$) => _ + [(_$ = -~[]), ++_$][-~[]] * $;

// test: should return 15
console.log(move(3, 6));
