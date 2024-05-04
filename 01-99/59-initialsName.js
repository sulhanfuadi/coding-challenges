// Coding Everyday: Abbreviate a Two Word Name
// March 17, 2024
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Solution #01
// function abbrevName(name){
//     const[first, last] = name.split(' ');
//     return first[0].toUpperCase() + '.' + last[0].toUpperCase();
// }

// Solution #02 by narayanswa30663, liguorui, grek-andrian, aqhawk, ephopper, dianaprimshits, akylbaev, polymorpheuz, stahlhammer88, snaxbags, NesterenkoAleksandr (+ 233)
function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

// test: should return "S.H"
console.log(abbrevName("Sam Harris"))