'use strict'

const scientists = ['Mendeleev', 'Aristotle', 'Tesla', 'Curie', 'Darwin'];
// splice - перенос в массиве
const removed = scientists.splice(3, 0, 'Перельман', 'Nuton');
console.log(scientists);
console.log(removed);

const numbers = [1, 2, 3, 5, 6, 7];
console.log(numbers.includes(5));
console.log(numbers.includes(4));
console.log(numbers.join('|'));
console.log(scientists.join(', '));

const numbersTwo = [152, 3, 22, 33, 15, 2, 16, 57, 542, 212, 1]

// функция сортировки
const sortArray = arr => {
	console.log(`Изначальный массив ${arr}`);
	arr.sort();
	console.log(`Отсортированный массив ${arr}`);
	return arr;
}
sortArray(scientists);
console.log(scientists.reverse());

const sortArrayNumb = arr => {
	console.log(`Изначальный массив ${arr}`);
	arr.sort((a, b) => a - b);
	console.log(`Отсортированный массив ${arr}`);
	return arr.reverse();
}
sortArrayNumb(numbersTwo);
console.log('sortArray(numbers):', sortArray(numbersTwo));

// Деструктуризация
const coord = [54, 20];

const [x, y,] = coord;
console.log('coord[0]: ', x);
console.log('coord[1]: ', y);

//rest - оператор
const numberThree = [1, 3, 46, 78, 82, 48, 56]
const [a, b, c, ...arr] = numberThree;
console.log('arr:', arr);

const newArr = numberThree.slice(6);
console.log('newArr: ', newArr);

const newString = 'heLLo World!';
const [f, ...rest] = newString;
console.log(f.toLocaleUpperCase() + rest.join('').toLocaleLowerCase());

// spread
const newNumber = [1, 2, 3, ...numbersTwo];
console.log(newNumber);

const newNewNumbers = [...newNumber, 0, 0, 0, ...coord];
console.log('newNewNumbers: ', newNewNumbers);

const cloneNumber = [...numbersTwo]
console.log('cloneNumber: ', cloneNumber);
console.log(numbersTwo === cloneNumber);

const array = [].concat(numbers);
console.log(array);