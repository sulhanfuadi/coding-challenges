// What is between?
// June 24, 2024
// https://www.codewars.com/kata/55ecd718f46fba02e5000029

// Solution #01
function between(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}

// Solution #02 by macnick, Hugsey, afear74, SithIlya, anasmasti, hlibsuprun    
// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

// test: should return [-2, -1, 0, 1, 2]
console.log(between(-2, 2));
