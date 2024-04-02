// Coding Everyday: Will there be enough space?
// April 02, 2024
// https://www.codewars.com/kata/5875b200d520904a04000003

// Solution #01
function enough(cap, on, wait) {
    return Math.max(0, wait + on - cap);
}

// Solution #02 by romansyhinskiy, jenhurd8, NKG345, Adeal46, harryday, elbuen, RuneM, LonnieBaez, Denis G, TimRemington (+ 139)
// function enough(cap, on, wait) {
//     if (on + wait < cap){
//         return 0;
//     } else {
//         return (on + wait) - cap;
//   }
// }

// test: should return 10
console.log(enough(100, 60, 50))