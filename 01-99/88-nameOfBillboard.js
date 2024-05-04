// Name on Billboard
// April 17, 2024
// https://www.codewars.com/kata/570e8ec4127ad143660001fd

// Solution #1
// function billboard(name, price = 30){
// var totalCost = 0;
// for(i = 0; i < name.length; i++){
//     totalCost += price;
// } 
// return totalCost;
// }

// Solution #02
function billboard(name, price = 30){
    return name.split("").reduce((total, __) => total + price, 0);
} 

// test: should return 600
console.log(billboard("Jeong-Ho Aristotelis"))
