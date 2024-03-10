// Coding Everyday: Switch it Up!
// March 10, 2024
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

// Solution #01
function switchItUp(number){
if (number == 0) {
    return "Zero";
  } else if (number == 1) {
    return "One";
  } else if (number == 2) {
    return "Two";
  } else if (number == 3) {
    return "Three";
  } else if (number == 4) {
    return "Four";
  } else if (number == 5) {
    return "Five";
  } else if (number == 6) {
    return "Six";
  } else if (number == 7) {
    return "Seven";
  } else if (number == 8) {
    return "Eight";
  } else if (number == 9) {
    return "Nine";
  }
}

// Solution #02 by myjinxin2015, tdlm, ChibiKookie, Tefferson, JackLingwood, willgallon, chainsaw-maniac, amarg26, prof1880, H0ussem (+ 127)
switchItUp = n => ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

// test: should return "One"
console.log(switchItUp(1))