'use strict'
const obj1 = {
	a: 1,
	b: {
		a: 2
	},
	c: 3
};

const obj2 = {
	c: 5,
	b: {
		d: 4
	}
};

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj1);
console.log(obj3);
