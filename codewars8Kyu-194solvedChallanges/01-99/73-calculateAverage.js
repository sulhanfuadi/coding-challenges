// Coding Everyday: Calculate average
// April 01, 2024
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// Solution #01
function findAverage(array) {
    if (array.length === 0) return 0;
    return array.reduce((a, b) => a + b) / array.length;
}

// Solution #02 by khlivnyuk, 88Sokoloff, Ursovden, Darya Lukyanenko, Svechnikov Yaroslav
// const findAverage = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;

// test: should return 2.5
console.log(findAverage([1,2,3,4]))