// Simple validation of a username with regex
// May 06, 2024
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/

// Solution #01
// function validateUsr(username) {
//   const res =  /^[abcdefghijklmnopqrstuvwxyz\d_]{4,16}$/.test(username)
//   return res;
// }

// Solution #02 by elushnikova, grhgrmgrhrm, user6856162, romkinbot, fxdron1, Fruitlesskey, user8806489, VladimirZverugo, nnadeysha, anabuon (+ 7)
function validateUsr(username) {
  /**
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */
  const validator = /^[a-z0-9_]{4,16}$/;
  
  return validator.test(username);
}

// test: should return true
console.log(validateUsr('asd43_34'));
