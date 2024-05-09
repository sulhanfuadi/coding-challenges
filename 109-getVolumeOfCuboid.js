// Volume of a Cuboid
// May 09, 2024
// https://www.codewars.com/kata/56f695399400f5d9ef000af5

// Solution #01
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// Solution #02 by jasdp, Vishant Bhankhar, chikacrazy, Walid216, chaimoma
// var Kata;

// Kata = (function() {
//   function Kata() {}

//   Kata.getVolumeOfCuboid = function(length, width, height) {
//     var l = parseFloat(length);
//     var w = parseFloat(width);
//     var h = parseFloat(height);

//     if(isNaN(l) || isNaN(w) || isNaN(h)) return 0;
//     if(l<=0 || w<=0 ||h <= 0)  return 0;
    
//     return l*w*h;
//   };

//   return Kata;

// })();

// test: should return 4
console.log(Kata.getVolumeOfCuboid(1,2,2));
