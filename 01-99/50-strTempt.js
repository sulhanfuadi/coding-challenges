// Coding Everyday: String Templates - Bug Fixing #5
// March 08, 2024
// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f

// Solution #01
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

// Solution #02
const buildString = (...template) => `I like ${template.join(', ')}!`;