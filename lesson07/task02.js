'use strict'
const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (numbers) => {
	let sum = 0;
	for (let i = 0; i < numbers.length; i += 1) {
		sum += numbers[i]
	}
	return sum / numbers.length;
};

console.log(getAverageValue(allCashbox));