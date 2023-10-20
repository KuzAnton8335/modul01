function addNumber(arr) {
	const randomNumber = Math.floor(Math.random() * 11);

	arr.push(randomNumber);

	if (arr.reduce((a, b) => a + b, 0) < 49) {
		return addNumber(arr);
	} else {
		console.log(arr); // вывод итогового массива
		return arr;
	}
}

addNumber([10]);