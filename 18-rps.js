// Coding Everyday: Rock Paper Scissors!
// February 06, 2024
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// Solution #01
// const rps = (p1, p2) => {
//   if (p1 === p2) return 'Draw!';
//   if (p1 === 'rock' && p2 === 'scissors') {
//     return 'Player 1 won!';
//   } else if (p1 === 'scissors' && p2 === 'paper') {
//     return 'Player 1 won!';
//   } else if (p1 === 'paper' && p2 === 'rock') {
//     return 'Player 1 won!';
//   } else {
//     return 'Player 2 won!';
//   }
// };

// Solution #02
// const rps = (p1, p2) => {
//   if (p1 === p2) return 'Draw!';
//   if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) {
//     return 'Player 1 won!';
//   } else {
//     return 'Player 2 won!';
//   }
// };

// Solution #02
// const rps = (p1, p2) => (p1 === p2) ? 'Draw!': ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock')) ? 'Player 1 won!' : 'Player 2 won!';

// Solution #03
const rps = (p1, p2) => {
  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  return p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? '1' : '2'} won!`;
};

// test: should return 'Draw!'
console.log(rps('rock', 'rock'));

// test: should return 'Player 1 won!'
console.log(rps('rock', 'scissors'));

// test: should return 'Player 2 won!'
console.log(rps('scissors', 'rock'));