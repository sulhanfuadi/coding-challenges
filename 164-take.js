// Take the First N Elements
// July 12, 2024
// https://www.codewars.com/kata/545afd0761aa4c3055001386

// Solution #01
function take(arr, n) {
  return arr.slice(0, n);
}

// Solution #02 by deni2020
// take  =ᅟ=  (ㅤ,ᅠ)  =>ᅠ?  [  ...ᅟ(ㅤ,  --ᅠ)  ,ㅤ[ᅠ]  ]  .  filter  (ㅤ=>  +ㅤ==  +ㅤ)  :  [  ]  ;

// test: should return [0, 1, 2]
console.log(take([0, 1, 2, 3, 5, 8, 13], 3));
