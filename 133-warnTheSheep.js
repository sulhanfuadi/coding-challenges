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

// Solution #02 by vatson

