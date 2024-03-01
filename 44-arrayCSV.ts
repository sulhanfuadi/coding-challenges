// Coding Everyday: CSV representation of array
// March 01, 2024
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

// Solution #01
// export function toCsvText(array:number[][]):string {
//   const rows: string[] = array.map((row: number[]) => row.join(','));
//   return rows.join('\n');
// }

// Solution #02 by Unnamed, iftruereturn, zdreagin, GamesMaik, jdold07, Aikawa Kizuna, VicenteContreras96, sinttax, ghaneeznb, EatTheRich (+ 38)
export function toCsvText(array: number[][]): string {
  return array.join('\n');
}