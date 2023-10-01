const cart = {
	items: [],
	totalPrice: 0,
	count: 3,

	get calculate() {
		return `${this.items * this.count}`;
	},
}

console.log(cart.calculate);

const items = 'items';
let count = 'count';
const cartPrice = 'totalPrice';

const getTotalPrice = () => {
	console.log(cart[cartPrice]);
}
getTotalPrice();

const calculateItemPrice = () => {
	console.log(cart[items] * cart[count]);
}
calculateItemPrice();
cart[cartPrice] = calculateItemPrice();


const increaseCount = () => {
	console.log(cart[count] += 2);
}
increaseCount();

// const add = {
// 	names: 'fruits',
// 	price: 0,
// 	countAdd: 1
// }

// const addOne = {
// 	names: 'bannans',
// 	price: 2,
// 	countAdd: 3
// }

// const addTwo = {
// 	names: 'Milk',
// 	price: 10,
// 	countAdd: 5
// }


cart.items.add = function (key, value) {
	this[key] = value;
};

cart.items.add("items", "2");
cart.items.add("count", "7");
cart.items.add("totalPrice", "30");
cart.items.add("names", "fruits");
console.log(cart);

const print = () => {
	const itemsStr = JSON.stringify(cart[items]);
}



// const clear = () => {
// 	console.log(cart.items.length = 0);
// 	console.log(cart.count.length = 0);
// }
// clear();


