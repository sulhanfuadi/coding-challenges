// Name Shuffler
// April 22, 2024
// https://www.codewars.com/kata/559ac78160f0be07c200005a

// Solution #01
function nameShuffler(str){
  let split = str.split(" ")
  return split[1] + " " + split[0]
}

// Solution #02 by charley, vferries, burnninator, warborn, 0xjgv, Anvar Turobov, Chrono79, BAMason, Dirtier, mitron6 (+ 854)
// const nameShuffler = str => str.split(' ').reverse().join(' ');

// test: should return 'McClane john'
console.log(cnameShuffler('john McClane'))
