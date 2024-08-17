// 101 Dalmatians - squash the bugs, not the dogs!
// June 23, 2024
// https://www.codewars.com/kata/56f6919a6b88de18ff000b36

// Solution #01
// function howManyDalmatians(number) {
//     var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
//     // var respond = number <= 10 ? dogs[0] : (number <= 50) ? dogs[1] : (number === 101) ?  dogs[3] : dogs[2];
//     // return respond;
//     if (number <= 10) return dogs[0];
//     if (number <= 50) return dogs[1];
//     if (number === 101) return dogs[3];
//     return dogs[2];
// }


// Solution #02 by acraileanu, IPSpb, nhpatt, danboscaro, Mastik14, Denis G, BohdanZB, llucasduartee, AlekseiVasilenko, patto4k (+ 7)
const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
const howManyDalmatians = number  => number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));

// test: should return "101 DALMATIANS!!!"
console.log(howManyDalmatians(101));
