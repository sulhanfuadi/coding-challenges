// Returning Strings
// May 01, 2024
// https://www.codewars.com/kata/55a70521798b14d4750000a4

// Solution #01
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

// Solution #02 by JACKSF
// function greet(name){
//   let a= name.split("");
//       let j=[];
//          a[0]="Hello,"
//          a[1]=name
//          a[2]="how are you doing today?"
//          j.push(a[0],a[1],a[2])
//          return j.join(" ")
// }

// test: should return "Hello, Ryan how are you doing today?"
console.log(greet("Ryan"));
