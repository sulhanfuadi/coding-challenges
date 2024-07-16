// Remove an exclamation mark from the end of string
// July 16, 2024
// https://www.codewars.com/kata/57fae964d80daa229d000126

// Solution #01
function remove(string) {
  return string.replace(/!$/, "");
}

// Solution #02 by Unnamed, Blauelf, Mashjulal, ajskelton, WebDevMR, KhronDon, Cyclokitty, o_LuCaS_o, Beaglefoot, wsvincent, erictimm (+ 75)
function remove(s) {
  return s.endsWith("!") ? s.slice(0, -1) : s;
}

// test: should return "Hi! Hi"
console.log(remove("Hi! Hi!"));
