// Coding Everyday: Sum of differences in array
// March 30, 2024
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// Solution #01
function sumOfDifferences(arr) {
    if (arr.length <= 1) {
        return 0;
    }

    arr.sort((a, b) => b - a);

    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1];
    }

    return sum;
}

// Solution #02 
const sumOfDifferences = arr => arr.length <= 1 ? 0 : arr.sort((a, b) => b - a).reduce((a, b, i, arr) => a + (arr[i+1] ? arr[i] - arr[i+1] : 0), 0);

// Solution #03 by iNont, feres fatnassi, michael_angelo, brudolce, JimHolman1199, mklebek, ikonna, MENGHEANG OU, talbi belgacem, ruchi_v (+ 375)
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// test: should return 9
console.log(sumOfDifferences([1, 2, 10]))