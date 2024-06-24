// Define a card suit
// June 24, 2024
// https://www.codewars.com/kata/5a360620f28b82a711000047

// Solution #01
// function defineSuit(card) {
//     for (i = 0; i < card.length; i++) {
//         if (card[i] === '♣') {
//             return 'clubs';
//         } else if (card[i] === '♦') {
//             return 'diamonds';
//         } else if (card[i] === '♥') {
//             return 'hearts';
//         } else if (card[i] === '♠') {
//             return 'spades';
//         }
//     }
// }

// Solution #02 by C_Minor, Wafaa122, sallamTanna, sangsphinx, salutdodo, Alexx0118, TaigaAisaka, johnydreads, Tallesco2011, emc.pedri (+ 4)
function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}

// test: should return 'clubs'
console.log(defineSuit('3♣'));
