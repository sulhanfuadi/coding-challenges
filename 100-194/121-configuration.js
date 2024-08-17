// Configure package json for a node application
// May 21, 2024
// https://www.codewars.com/kata/5692a582cc22387ccf000017

// Solution #01
const configuration = {
  "name": "your-pack-name",
  "description": "",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  }
};

// Solution #02 by siebenschlaefer, GabrielSAG
// const configuration = {"name": "-", version: "0.0.0"};

// test: should return 'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
