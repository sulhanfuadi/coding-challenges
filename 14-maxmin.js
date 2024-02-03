// Coding Everyday: Find Maximum and Minimum Values of a List
// February 03, 2024
// https://www.codewars.com/kata/577a98a6ae28071780000989

// Solution #01
// var min = function(list){
//     let minValue = list[0];
//     for (i = 1; i < list.length; i++) {
//         if (minValue > list[i]) {
//             minValue = list[i];
//         }
//     }
//     return minValue;
// }

// var max = function(list){
//     let maxValue = list[0];
//     for (i = 1; i < list.length; i++) {
//         if (maxValue < list[i]) {
//             maxValue = list[i];
//         }
//     }
//     return maxValue;
// }

// Solution #02
// const min = list => list.sort((a, b) => a - b)[0];
// const max = list => list.sort((a, b) => b - a)[0];

// Solution #03
const min = list => Math.min(...list);
const max = list => Math.max(...list);

// test: should return -110
console.log(min([-52, 56, 30, 29, -54, 0, -110]));

// test: should return 566
console.log(max([4,6,2,1,9,63,-134,566]));