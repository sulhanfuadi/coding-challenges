// Reverse List Order
// June 01, 2024
// https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b

// Solution #01
// function reverseList(list) {
//     return list.reverse();
// }

// Solution #02 by Amarinder1, IceuFrozz, bayramovmurad, Luqman Hakim
function reverseList(list) {
  var array = [];
  for (var i = list.length-1; i >= 0; i --){
    array.push(list[i]);
  }
  return array;
}

// test: should return [4, 3, 2, 1]
console.log(reverseList([1,2,3,4]));
