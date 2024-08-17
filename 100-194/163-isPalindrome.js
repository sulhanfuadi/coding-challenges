// Is it a palindrome?
// July 12, 2024
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

// Solution #01
// function isPalindrome(x) {
//   return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
// }

// Solution #02 by anisaAnya, iheb taboui, bruno99, YuriDozhdikov, user8564405, priscyllafg, larissaborsato, juliocesarpadua, Saraesabbagh, rsschool_41fa862d3e96cb32 (+ 5)
function isPalindrome(x) {
  x = x.toLowerCase();
  let a = 0;
  let b = x.length;
  while (a < b) {
    if (x[a] != x[b - 1]) return false;
    a++;
    b--;
  }
  return true;
}

// test: should return true
console.log(isPalindrome("Madam"));
