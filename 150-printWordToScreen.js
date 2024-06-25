// Create your first JS function and print "Hello World!"
// June 25, 2024
// https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8

// Solution #01
// const helloWorld = () => {
//     const str = 'Hello World!';
//     console.log(str);
// }

// Solution #02 by user3220651
function helloWorld(){
    var regex = new RegExp(',', 'g');
    var str = null;
    var poop = ["H","e","l","l","o"," ","W","o","r","l","d","!"];
    poop = poop.toString();
    poop = poop.replace(regex, '');
    console.log(poop);
}

// test: should return 'Hello World!'
console.log(helloWorld());
