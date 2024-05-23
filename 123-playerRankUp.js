// Online RPG: player to qualifying stage?
// May 23, 2024
// https://www.codewars.com/kata/55849d76acd73f6cc4000087

// Solution #01
// function playerRankUp (points) {
//     return points >= 100 ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up." : false;
// }

// Solution #02 by KSA
function playerRankUp(p){
  return p >= 100 && "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
}

// test: should return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
console.log(playerRankUp(101));
