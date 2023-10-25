'use strict';
const closeOne = () => {
	const x = 10;

	const closeTwo = (y) => {
		return x + y;
	}
	console.dir(closeTwo);
	const closeThree = () => {
		const y = 15;
		return x + y;
	};

	return closeTwo(25);
}
console.log(closeOne());