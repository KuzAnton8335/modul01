'use strict'
// методы переборов массива

const scientists = ['Mendeleev', 'Aristotle', 'Tesla', 'Curie', 'Darwin'];

const numbers = [152, 3, 22, 33, 15, 2, 16, 57, 542, 212, 121];

const nums = [1, 2, 3]

// forEach - нечего не возврощает
//item - обращение через item
scientists.forEach((item) => {
	console.log(item);
})

numbers.forEach((item) => {
	console.log(item);
})

//index - обращение через index - индекс
scientists.forEach((item, i) => {
	console.log(scientists[i]);
})

//arr - обращение через arr - массив для использование снаружи например скобок
scientists.forEach((item, i, arr) => {
	console.log(arr);
})

//метод find - метод позволяет находить элементы внутри массива в случае если удовлетворяют какому либо условию
// const items = numbers.find((item, i, arr) => item % 2);
// console.log(items);

// filter - возврощает массив
const items = numbers.filter((item) => !(item % 11));
console.log(items);

const itemsOne = numbers.filter(item => item > 50);
console.log(items);

//findIndex - ищет первый элемент удовлетворяющий условиям и выдает их
const indexFind = numbers.findIndex(item => item < 50 && item > 30);
console.log(indexFind);

//IndexOff - выдает конкретный элемент.
const offIndex = numbers.indexOf(2);
console.log(offIndex);

// map - перебирает массив но возвращает новый массив
const newArr = numbers.map((item) => {
	const n = item * 2;

	if (n > 1000) return null;
	return item.toString();
})
console.log(newArr);

//some - проверка буллевых значений в массиве.
const oneSome = numbers.some((item) => typeof item === 'string');
console.log(oneSome);

//every - проверка каждый элемент массива удовлетворял определенным условиям
const oneEvery = numbers.every((item) => typeof item === 'number');
console.log(oneEvery);

//reduce -
const newReduce = numbers.reduce((acc, item, i, arr) => {
	console.log(acc, item);
	return acc + item;
}, 1);
console.log(newReduce);