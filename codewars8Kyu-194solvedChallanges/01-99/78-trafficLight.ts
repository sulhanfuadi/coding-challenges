// Coding Everyday: Thinkful - Logic Drills: Traffic light
// April 06, 2024
// https://www.codewars.com/kata/58649884a1659ed6cb000072

// Solution #01
// export function updateLight(current: string): string {
//     if (current === "green") {
//         return "yellow";
//     } else if (current === "yellow") {
//         return "red";
//     } else {    
//         return "green";
//     }
// }

// Solution #02
export const updateLight = ($: string) => $ === 'green' ? 'yellow' : $ === 'yellow' ? 'red' : $ === 'red' ? 'green' : 'error';

// test: should return "yellow"
console.log(updateLight("green"))