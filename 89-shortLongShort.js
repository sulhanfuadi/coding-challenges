// Short Long Short
// April 18, 2024
// https://www.codewars.com/kata/50654ddff44f800200000007

// Solution #01
// function solution(a, b){
//     let short = '';
//     let long = '';
//     if (a.length < b.length) {
//         short = a;
//         long = b;
//     } else {
//         short = b;
//         long = a;
//     }
//     return short + long + short;
// }

// Solution #02
// function solution(a, b){
//     if (a.length < b.length) {
//         return a + b + a;
//     }
//     return b + a + b;
// }

// Solution #03
function solution(a, b){
    return a.length < b.length ? a + b + a : b + a + b;
}

// test: should return 'UFalseU'
console.log(solution('U', 'False'))
