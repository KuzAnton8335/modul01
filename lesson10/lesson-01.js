// difineProperty
const car = {
	car: 'mini',
	model: 'cooper',
	price: 30000,

	get comment() {
		return `Последний комментарий: "${this.trueComment}"`;
	},
	set comment(val) {
		if (typeof val === 'string') {
			this.trueComment = val;
		}
	},
	trueComment: 'not',
}

Object.defineProperty(car, 'fullName', {
	// configurable: false,
	// enumerable: false,
	// writable: false,
});

console.log(car.comment);
car.comment = 123;

console.log(car.comment);

car.comment = 'Супер тачка';

console.log(car.comment);

console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));