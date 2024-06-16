// Bin to Decimal
// June 17, 2024
// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334

// Solution #01
// function binToDec(bin) {
// 	return parseInt(bin, 2);
// }

// Solution #02 by hencethus
const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);

// test: should return 73
console.log(binToDec('1001001'));
