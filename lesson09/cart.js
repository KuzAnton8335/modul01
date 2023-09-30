const cart = {
	items: [],
	totalPrice: 0,
	count: 0,
}

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

const add = {
	names: 'fruits',
	price: 3,
	countAdd: 1
}

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

cart.items.push(add);
cart.items.push(addOne);
cart.items.push(addTwo);
console.log(cart);

const print = () => {
	const itemsStr = JSON.stringify(cart[items]);
	console.log(itemsStr);
	
}
print();

const clear = () => {
	console.log(cart.items.length = 0);
	console.log(cart.count.length = 0);
}
clear();

