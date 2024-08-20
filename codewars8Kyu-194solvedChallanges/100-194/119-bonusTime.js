// Do I get a bonus?
// May 19, 2024
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// Solution #01
// function bonusTime(salary, bonus) {
//     if (bonus) {
//         salary *= 10;
//     }
//     return `£${salary}`;
// }

// Solution #02 by Shraymonks, charley, colbydauph, acraileanu, user8291761, robertkirsz, jacobjordan94, fakepanda, zyrolasting, Zemiel (+ 75)
const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

// test: should return '£100000'
console.log(bonusTime(10000, true));
