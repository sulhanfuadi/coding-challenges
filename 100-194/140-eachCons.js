// Enumerable Magic #20 - Cascading Subsets
// June 16, 2024
// https://www.codewars.com/kata/545af3d185166a3dec001190

// Solution #01
// function eachCons(array, n) {
// 	const results = [];
// 	for (let i = 0; i < array.length; i++) {
// 		let smallArr = [];
// 		for (let j = 0; j < n; j++) {
// 			if (i + j >= array.length) return results
// 			smallArr.push(array[i + j]);
// 		}
// 		results.push(smallArr);
// 	}
// 	return results;
// }

// Solution #02 by codeManS_yt, begem0th, Danka125, Awy009, joyfulpebble, nicksomething23, Joel_Plaza1, aarbaiza100, Mirjeta1, dshamsani (+ 57)
function eachCons(array, n) {
	return array.map((x,y) => array.slice(y, y + n)).filter(x => x.length == n)
}

// test: should return [[3,5,8], [5,8,13]]
console.log(eachCons([3, 5, 8, 13], 3));
