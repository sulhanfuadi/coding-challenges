// Well of Ideas - Easy Version
// May 17, 2024
// https://www.codewars.com/kata/57f222ce69e09c3630000212

// Solution #01
function well(x){
    let good = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i] == 'good') {
            good++;
        }
    }
    return good == 0 ? 'Fail!' : good <= 2 ? 'Publish!' : 'I smell a series!';
}

// Solution #02 by vatson, htar, Powerful_Vadik, JohnCanaYouCantSeeMe, chaima ammar, chaimoma, Alex Plis, Зайцева Злата, Diana Sharlo, Tolik777 (+ 37)
const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

// test: should return 'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
