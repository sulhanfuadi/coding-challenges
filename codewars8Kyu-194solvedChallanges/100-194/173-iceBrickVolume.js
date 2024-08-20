// For Twins: 2. Math operations
// July 24, 2024
// https://www.codewars.com/kata/59c287b16bddd291c700009a

// Solution #01
function iceBrickVolume(radius, bottleLength, rimLength) {
  const height = bottleLength - rimLength;
  const hypSqrd = (radius * 2) ** 2;
  const side = Math.sqrt(hypSqrd) / 2;
  const volume = side * side * height * 2;
  return volume;
}

// Solution #02 by ysurilov
const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);

// test: should return 1150
console.log(iceBrickVolume(5, 30, 7));
