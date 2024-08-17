// How much water do I need?
// May 22, 2024
// https://www.codewars.com/kata/575fa9afee048b293e000287

// Solution #01
// function howMuchWater(water, load, clothes){
//   if (clothes < load) return 'Not enough clothes';
//   if (clothes > load * 2) return 'Too much clothes';
//   return Math.round(water * 1.1 ** (clothes - load) * 100) / 100;
// }

// Solution #02 by IevgenT
                                                              let 
                                                          howMuchWater
                                                      = ( Ⰴ , Ⰰ , Ⰲ )=>
                                                       Ⰲ <= Ⰰ + Ⰰ ? Ⰲ >=
                                                  Ⰰ? + ( Ⰴ * 1.1 ** (Ⰲ-Ⰰ)).
                                                            toFixed
                                                              `2`:
                                            `Not enough clothes` : `Too much clothes`

// test: should return 'Too much clothes'
console.log(howMuchWater(10,10,21));
