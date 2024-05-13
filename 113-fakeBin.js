// Fake Binary
// May 13, 2024
// https://www.codewars.com/kata/57eae65a4321032ce000002d

// Solution #01
function fakeBin(x){
    let bin = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            bin += '0';
        } else {
            bin += '1';
        }
    };
    return bin;
}

// Solution #02 by a.lec, CodingCanuck, Vincente875, kdegiuli, aleksey-10, andrewmastercode, Zedmalones21, user4784829, CalvinJulianza, oussama-dz (+ 277)
// function fakeBin(x) {
//   return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }

// test: should return '01011110001100111'
console.log(fakeBin('45385593107843568'));
