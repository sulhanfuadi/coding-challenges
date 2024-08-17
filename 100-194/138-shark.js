// Holiday VI - Shark Pontoon
// June 11, 2024
// https://www.codewars.com/kata/57e921d8b36340f1fd000059

// Solution #01
// function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
//     if (dolphin) sharkSpeed /= 2
//     return pontoonDistance / youSpeed < sharkDistance / sharkSpeed? "Alive!": "Shark Bait!"
// }

// Solution #02 by zruF, mayavera, andrzejmobileweb, MP7373, ianwaites, Aleksei73, Remnisque, titelhalter, SpecialEd, Khepera7 (+ 488)
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

// test: should return "Alive!"
console.log(shark(12, 50, 4, 8, true));
