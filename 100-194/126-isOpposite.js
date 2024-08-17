// Are they opposite?
// May 26, 2024
// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7

// Solution #01
function isOpposite(s1,s2){
  if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
  
  for(let i = 0; i < s1.length; i++) {
    if(s1.charAt(i) === s2.charAt(i)) return false;
  }
  
  return true;
  
}

// Solution #02 by evk, zuka123456, hmtb, secelap788
// function isOpposite(s1,s2){
//   return s1!=''&&s1==s2.replace(/./g,ch=>ch['to'+(ch<='Z'?'Lower':'Upper')+'Case']())
// }

// test: should return true
console.log(isOpposite("aBcd","AbCD"));
