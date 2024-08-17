// Pillars
// June 06, 2024
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d

// Solution #01
function pillars(num_pill, dist, width) {
  return num_pill <= 1 ? 0 : (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
}

// Solution #02 by heroiczero, TotalForce, krystofpio, balaji ganesan, KathiaRieser, justinddaniel, AzureXX, choccino, Zumukich, IndumathyBakirathan (+ 117)
// function pillars(num_pill, dist, width) {
//   return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
// }

// test: should return 2000
console.log(pillars(2, 20, 25));
