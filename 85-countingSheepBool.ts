// Counting sheep...
// April 14, 2024
// https://www.codewars.com/kata/54edbc7200b811e956000556

// Solution #01
// export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
//     let count: number = 0;
//     for(let i = 0; i < arrayOfSheep.length; i++) {
//         if(arrayOfSheep[i] === true) {
//             count++;
//         }
//     }
//     return count;
// }

// Solution #02
export function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

// test: should return 17
var array1 = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true 
];   

console.log(countSheeps(array1))