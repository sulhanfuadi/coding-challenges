// Coding Everyday: DNA to RNA Conversion
// January 30, 2024
// https://www.codewars.com/kata/5556282156230d0e5e000089

// Solution #01
// function DNAtoRNA(dna) {
//   let rna = '';
//   for(i = 0; i < dna.length; i++) {
//     if (dna[i] === 'T') {
//         rna += 'U';
//     }
//     else {
//         rna += dna[i];
//     }
//   }
//   return rna;
// }

// Solution #02
// function DNAtoRNA(dna) {
//   let rna = '';
//   for(i = 0; i < dna.length; i++) {
//     rna += dna[i] === 'T' ? 'U' : dna[i];
//   }
//   return rna;
// }

// Solution #03
// const DNAtoRNA = dna => dna.split('').map((el) => el === 'T'? 'U' : el).join('');

// Solution #04
// const DNAtoRNA = dna => dna.replaceAll('T', 'U');

// Solution #05
const DNAtoRNA = dna => dna.split('T').join('U');


// test: must be returned GCAU"
console.log(DNAtoRNA("GCAT"));