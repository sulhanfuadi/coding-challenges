// Pirates!! Are the Cannons ready!??
// July 17, 2024
// https://www.codewars.com/kata/5748a883eb737cab000022a6

// Solution #01
// const cannonsReady = (gunners) => {
//   return Object.values(gunners).every((val) => val === "aye")
//     ? "Fire!"
//     : "Shiver me timbers!";
// };

// Solution #02 by cdr345, Naud, Kindzoku, Olga Chupp, Tomás Ryan, C00194323, Olena23, Wafaa122, DJ_OLeary, a876691666 (+ 10)
const cannonsReady = (gunners) => {
  for (var i in gunners) {
    if (gunners[i] == "nay") {
      return "Shiver me timbers!";
    }
  }
  return "Fire!";
};
