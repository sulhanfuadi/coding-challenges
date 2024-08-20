// Coding Everyday: Total amount of points
// February 09, 2024
// https://www.codewars.com/kata/5bb904724c47249b10000131

// Solution #01
// function points(games) {
//   let result = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) {
//         result += 3;
//     } else if (games[i][0] === games[i][2]) {
//         result += 1
//     }
//   }
//   return result;
// }

// Solution #02
const points = (games) => games.reduce((acc, [x, _, y]) => (x > y ? 3 : (x < y) ? 0 : 1) + acc, 0);

// test: should return 30
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));

// test: should return 10
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));