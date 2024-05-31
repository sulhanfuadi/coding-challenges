// Playing with cubes II
// May 31, 2024
// https://www.codewars.com/kata/55c0ac142326fdf18d0000af

// Solution #01
class Cube {
  constructor(n) {
    this.side = Math.abs(n) || 0;
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

// Solution #02 by s21n, tuleferreira, shamilhussain, rafi11, maksim2001murom25, bakour, aahmed1009, extra_salty, Kulter, LelouchFR (+ 3)
// class Cube {
//   constructor(side) {
//     this.setSide(side)
//   }

//   getSide() {
//     return this.side
//   }
  
//   setSide(side = 0) {
//     this.side = Math.abs(side)
//   }
// }

// test:
let cube = new Cube(12);
console.log(cube.getSide()); // 12
