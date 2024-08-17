// Calculate the number of magazines
// June 29, 2024
// https://www.codewars.com/kata/5ab52526379d20736b00000e

// Solution #01
function magNumber([weapon, streets]) {
  const bulletsPerMagazine = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5,
  };
  const totalBulletsNeeded = streets * 3;
  const magazineCapacity = bulletsPerMagazine[weapon];
  const magazinesNeeded = Math.ceil(totalBulletsNeeded / magazineCapacity);
  return magazinesNeeded;
}

// test: should return 2
console.log(magNumber(["PT92", 6]));
