const cart = {
	items: [],
	totalPrice: 0,
	count: 3,

	get calculateItemPrice() {
		return `${this.items * this.count}`;
	},

	get getTotalPrice() {
		return `${this.totalPrice}`
	},

	get increaseCount() {
		return `${this.count += 2}`
	}

}


// const getTotalPrice = () => {
// 	console.log(cart[cartPrice]);
// }
// getTotalPrice();

// const calculateItemPrice = () => {
// 	console.log(cart[items] * cart[count]);
// }
// calculateItemPrice();
// cart[cartPrice] = calculateItemPrice();


// const increaseCount = () => {
// 	console.log(cart[count] += 2);
// }
// increaseCount();

// const add = {
// 	names: 'fruits',
// 	price: 0,
// 	countAdd: 1
// }

const addOne = {
	names: 'bannans',
	price: 2,
	countAdd: 3
}

const addTwo = {
	names: 'Milk',
	price: 10,
	countAdd: 5
}


cart.items.add = function (key, value) {
	this[key] = value;
};

cart.items.add("items", "2");
cart.items.add("count", "7");
cart.items.add("totalPrice", "30");
cart.items.add("names", "fruits");
console.log(cart);

// const print = (arg) => {
// 	const itemsStr = JSON.stringify(arg);
// }
// print(cart[items]);


const print = arg => JSON.stringify(arg);
console.log(print(cart.calculateItemPrice));
console.log(print(cart.getTotalPrice));
console.log(print(cart.increaseCount));


const clear = () => {
	console.log(cart.items.length = 0);
	console.log(cart.count.length = 0);
	console.log(cart.totalPrice.length = 0);
}
clear();

// const clearcart = (cart) => {
// 	for (let key in cart) {
// 		delete cart[key];
// 	}
// }
// clearcart(cart);
// console.log(cart);






