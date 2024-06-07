// Correct the mistakes of the character recognition software
// June 07, 2024
// https://www.codewars.com/kata/577bd026df78c19bca0002c0

// Solution #01
// function correct(string) {
//   let corrected = '';
//   for (let i = 0; i < string.length; i++) {
// 	if (string[i] === '0') {
// 	  corrected += 'O';
// 	} else if (string[i] === '1') {
// 	  corrected += 'I';
// 	} else if (string[i] === '5') {
// 	  corrected += 'S';
// 	} else {
// 	  corrected += string[i];
// 	}
//   }
//   return corrected;
// }

// Solution #02 by user4019457, diego.vergara, serk87, EvgenyMelikhov, igorSto, MatRocha, devini, Antonio Ezequiel, Kdrafaelo, RetroGenesiss
const corrections = {
	'5': 'S',
	'0': 'O',
  	'1': 'I',
};

const correct = string => (
	string.replace(/[501]/g, character => corrections[character])
);

// test: should return 'LONDON'
console.log(correct("L0ND0N"));
