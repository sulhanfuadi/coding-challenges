// Did she say hallo?
// August 14, 2024
// https://www.codewars.com/kata/56a4addbfd4a55694100001f

// Solution #01
function validateHello(greetings) {
  const regex = /hello|ciao|salut|hallo|hola|ahoj|czesc/i;
  return regex.test(greetings);
}

// Solution #02 by uberubi, Anna Fedorova, Yuen-Zhang
const hellos = {
  hello: "english",
  ciao: "italian",
  salut: "french",
  hallo: "german",
  hola: "spanish",
  ahoj: "czech republic",
  czesc: "polish",
};

const validateHello = (greetings) => {
  for (key in hellos) {
    if (greetings.toLowerCase().includes(key)) {
      return true;
    }
  }
  return false;
};

// test: should return true
console.log(validateHello("ahoj"));
