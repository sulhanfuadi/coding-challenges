// Coding Everyday: Filter out the geese
// February 16, 2024
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

// Solution #01 by SamuelDeLuca
// export function gooseFilter (birds: string[]): string[] {
//   const geese: [string] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   var j = 0, result = [];
//   for (let i = 0; i < birds.length; i++) {
//   	if (birds[i] == "African" || birds[i] == "Toulouse" || birds[i] == "Roman Tufted" || birds[i] == "Pilgrim" || birds[i] == "Steinbacher") {
//       	delete birds[i];
//       } 
//     	if (birds[i] != undefined) {
//         	result[j] = birds[i];
//         	j++;
//       }
//   }
//   return result;
// }

// Solution #02
// export function gooseFilter (birds: string[]): string[] {
//   var geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter((bird: string) => !geese.includes(bird));
// };

// Solution #03
export const gooseFilter = (birds: string[]): string[] => birds.filter(x => ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].indexOf(x) === -1);

// test: should return ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));