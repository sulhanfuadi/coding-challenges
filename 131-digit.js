// Regexp Basics - is it a digit?
// June 02, 2024
// https://www.codewars.com/kata/567bf4f7ee34510f69000032

// Solution #01
String.prototype.digit = function() {
  if (this.length !== 1) {
    return false;
  }
  return '0123456789'.includes(this);
};

// Solution #02 by brunolm, Balkoth, Shraymonks, ooflorent, ysurilov, pwynn, slicklash, timp, user3780052, gevg (+ 1162)
String.prototype.digit = function() {
  return /^\d$/.test(this);
};