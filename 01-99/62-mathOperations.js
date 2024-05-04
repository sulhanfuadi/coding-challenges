// Coding Everyday: Basic Mathematical Operations
// March 20, 2024
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// Solution #01
function basicOp(operation, value1, value2){
  return eval(`${value1} ${operation} ${value2}`);
}

// Solution #02 by ainura, EvaH, Sieg, WinnyTroy, Callum.Scott, 1ncl1tusKam1, jives, landry, Atsuno, rukzanakub (+ 679)
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
