// Expressions Matter
// June 09, 2024
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

// Solution #01
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}

// Solution #02 by cravsky, Endy-Guff
// function expressionMatter(a, b, c) {
  
//   if(a==1 && b==1 && c==1){
//     return 3;
//   }
  
//   if(a!=1 && b!=1 && c!=1){
//     return a*b*c;
//   }
//   if(a==1 && b!=1 && c!=1){
//     return (a+b)*c
//   }
//    if(a!=1 && b!=1 && c==1){
//     return a*(b+c);
//   }
 
//   if(a!=1 && b==1 && c==1){
//     return a*2;
//   }
 
//   if(a==1 && b==1 && c!=1){
//     return c*2;
//   }
 
//   if(a==1 && b!=1 && c==1){
//     if(a==c){
//       return a+b+c;
//     }
//     if(a>c){
//       return a*(b+c);
//     }
//     if(a<c){
//       return (a+b)*c;
//     }
//   }
  
//   if(a!=1 && b==1 && c!=1){
//     if(a==c){
//       return (a+b)*c;
//     }
//     if(a>c){
//       return a*(b+c);
//     }
//     if(a<c){
//       return (a+b)*c;
//     }
    
//   }
  
// }

// test: should return 6
console.log(expressionMatter(2, 1, 2));
