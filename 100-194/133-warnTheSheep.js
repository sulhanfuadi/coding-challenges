// A wolf in sheep's clothing
// June 05, 2024
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

// Solution #01
function warnTheSheep(queue) {
    const reversedQueue = queue.reverse();
    const wolfPosition = reversedQueue.indexOf('wolf');
    if (wolfPosition === 0) return 'Pls go away and stop eating my sheep';
    return `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`;
}

// Solution #02 by adrian.eyre, Rou97, chaymaISETCH, goldangera, cbw29512, Sarah soltani, marwen3216, L-Hejer, abshukla_, DolgKreker (+ 119)
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}
