// Welcome to the City
// June 18, 2024
// https://www.codewars.com/kata/5302d846be2a9189af0001e4

// Solution #01
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

// Solution #02 by cisiq
// function sayHello( name, city, state ) {
//   let joinName = '';
//   let first = true;
//   for (let i = 0; i < name.length; i++) {
//     if (first) {
//       first = false;
//     } else {
//       joinName += " ";
//     }
//     joinName += name[i];    
//   }
//   let welcomeMessage = `Hello, ${joinName}! Welcome to ${city}, ${state}!`;
//   return welcomeMessage;
// }

// test: should return 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'));
