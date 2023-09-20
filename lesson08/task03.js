'use strict'
const data = (n, m, count, parity) => {
	const result = [];
	const range = Math.abs(m - n) + 1;
	const max = Math.max(n, m);
	const min = Math.min(n, m);
	while (result.length < count) {
		const randomNum = Math.floor(Math.random() * range) + min;
		if (parity === 'even' && randomNum % 2 === 0) {
			result.push(randomNum);
		} else if (parity === 'odd' && randomNum % 2 !== 0) {
			result.push(randomNum);
		}
	}
	return result;
}
data();

console.log(data(-3, 10, 50, 'even'));
console.log(data(3, 10, 40, 'odd'));


