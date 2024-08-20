// Find the smallest integer in the array
// May 14, 2024
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

// Solution #01
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }
    return smallest;
  }
}

// Solution #02 by matt c, DJTB, lukem00, anotherMike, oddeo, karbica, rorysedgwick, pre, HereComesJuju, niksoper, lsvgord (+ 4430)
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a,b)=>a-b)[0];
//   }
// }

// test: should return 8
console.log(sif.findSmallestInt([78,56,232,12,8]));
