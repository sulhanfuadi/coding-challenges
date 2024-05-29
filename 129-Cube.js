// Playing with cubes II
// May 29, 2024
// https://www.codewars.com/kata/55c0ac142326fdf18d0000af

// Solution #01
// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  
    getSide() {
      return this.side; 
    }
    setSide(n) {
      this.side = Math.abs(n);
    }
  }

// Solution #02 by vatson


// test: should return 'xxxxx'
console.log(howMuchWater(10,10,21));
