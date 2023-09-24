const cart = {
	items: [],
	totalPrice: 0,
	count: 0,
}
const cartPrice = 'totalPrice';
const getTotalPrice = () => {
	console.log(cart[cartPrice]);
}
getTotalPrice();


