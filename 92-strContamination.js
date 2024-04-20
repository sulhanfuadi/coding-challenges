// String Contamination
// April 21, 2024
// https://www.codewars.com/kata/596fba44963025c878000039

// Solution #01
function contamination(text, char){
  let result = '';
  
  for(let i = 0; i < text.length; i++) {
    result += char;
  }
  
  return result;
}

// Solution #02
function contamination(text, char){
  return char.repeat(text.length)
}

// test: should return "&&&&&&&&"
console.log(contamination("_3ebzgh4","&"))
