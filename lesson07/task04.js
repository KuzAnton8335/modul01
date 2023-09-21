'use strict'
const allСashbox = [[12, 4500],
[7, 3210],
[4, 650],
[3, 1250],
[9, 7830],
[1, 990],
[6, 13900],
[1, 370]]

const allCashboxFlat = allСashbox.flat();

const findAverage = (acc, item, index, arr) => {
	const sum = acc + item

	if (index === arr.length - 1) {
		return sum / arr.length
	}

	return sum
}

const average = allCashboxFlat.reduce(findAverage, 1)
console.log(average);
