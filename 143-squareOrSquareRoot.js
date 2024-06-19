// To square(root) or not to square(root)
// June 18, 2024
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627

// Solution #01
// function squareOrSquareRoot(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         let sqrt = Math.sqrt(array[i]);
//         if (Number.isInteger(sqrt)) {
//             result.push(sqrt);
//         } else {
//             result.push(array[i] * array[i]);
//         }
//     }
//     return result;
// }

// Solution #02 by kazk, Callum.Scott, Leon123, sdoiglasdfkdfkldfaljk, hopesommer, maksim2001murom25, user9758568, lucasxmb800, Gabriel_Lamar, KarolinaTechDev (+ 50)
function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });  
}

// test: should return [ 2, 9, 3, 49, 4, 1 ]
console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));
