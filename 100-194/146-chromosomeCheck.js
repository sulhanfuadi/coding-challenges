// Determine offspring sex based on genes XX and XY chromosomes
// June 22, 2024
// https://www.codewars.com/kata/56530b444e831334c0000020

// Solution #01
// function chromosomeCheck(sperm) {
//     return sperm === 'XY' ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";
// }

// Solution #02 by crazyYuyang, AndriusKv, abe026, nub123, jochiGold, nam.nguyen.code, zyrolasting, NunoOliveira, sylwiaromaniuk, minipuppy (+ 179)
function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}

// test: should return "Congratulations! You're going to have a son."
console.log(chromosomeCheck('XY'));
