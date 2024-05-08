// Is this my tail?
// May 08, 2024
// https://www.codewars.com/kata/56f695399400f5d9ef000af5

// Solution #01
function correctTail(body, tail){
  sub = body.substr(-1);
  if (sub === tail){
    return true;
  } else {
    return false;
  }
}

// Solution #02 by Unihedron, EdwardTX2, codewithpau, UnkasDev
const correctTail = (x,y)=>x.endsWith(y)

// test: should return true
console.log(correctTail("Fox", "x"));
