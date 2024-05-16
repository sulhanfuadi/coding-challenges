// Remove String Spaces
// May 16, 2024
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// Solution #01
// function noSpace(x){
//     let word = '';
//     for (i = 0; i < x.length; i++) {
//         if (x[i] != ' ') {
//             word += x[i];
//         }
//     }
//     return word;
// }

// Solution #02 by PG1, leviathan, user5504489, aryan-firouzian, VadimPopov, RafalBazarnik, sgmaster, vudulin, forsvarir, TheReck (+ 21812)
function noSpace(x){return x.split(' ').join('')}

// test: should return '88Bifk8hB8BB8BBBB888chl8BhBfd'
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));
