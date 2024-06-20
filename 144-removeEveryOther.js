// Removing Elements
// June 20, 2024
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// Solution #01
// function removeEveryOther(arr){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i+=2) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// Solution #02 by mjstromberg, nealsmeathers, martinss, dimochakarov, gdavid, mhzehl, garouxl, Lorena4, Hanen Touaiti, panhabot (+ 84)
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

// test: should return ['Hello', 'Hello Again']
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
