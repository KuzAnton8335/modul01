'use strict'
const animals = ['mouse', 'cat', 'dog'];

const printArr = arr => {
	console.log(`Размер массива ${arr.length}`);
	for (let i = 0; i < arr.length; i += 1) {
		const elem = arr[i];
		console.log(`Элемент под индексом ${i} - ${elem}`);
	}

	for (const key in arr) {
		console.log(`Элемент под индексом ${key} - ${arr[key]}`);
	}

	for (const elem of arr) {
		console.log(`Элемент ${elem}`);
	}
}

printArr(animals);

console.log(typeof animals);
console.log(Array.isArray(12));

const foo = function () {
	console.log(arguments);
	console.log(Array.isArray(arguments));
}
foo(1, 2, 3, 4, 5, 6);