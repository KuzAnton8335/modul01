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
	price: 0,
	countAdd: 1
}

cart.items.push(add);
console.log(cart);