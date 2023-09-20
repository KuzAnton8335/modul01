'use strict'
const arrRandom = () => {
	const arr = [];
	const n = -3;
	const m = 10;
	const max = Math.max(n, m);
	const min = Math.min(n, m);
	for (let i = 0; i < 100; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1) + min));
	}
	console.log(arr);
}
arrRandom();