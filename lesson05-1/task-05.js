// function cart(basketAmount, countGoods, promo = null) {
// 	let discountAmount = 0;
// 	let discountPercent = 0;
// 	let rules = [
// 		() => { if (promo === "ДАРИМ300") discountAmount += 300; },
// 		() => { if (countGoods >= 10) discountPercent += 5; },
// 		() => { if (basketAmount > 50000) discountAmount += (basketAmount - 50000) * 0.2 },
// 		() => { if (promo === "СКИДКА15" && basketAmount >= 20000) discountPercent += 15; }
// 	];
// 	for (let f of rules) f();
// 	let result;
// 	if (discountPercent >= 100) result = 0;
// 	else result = basketAmount * (100 - discountPercent) / 100 - discountAmount;
// 	if (result < 0) result = 0;
// 	console.log(discountAmount, discountPercent);
// 	return result;
// }

// console.log(cart(80000, 20, "СКИДКА15"));
// export default cart





// function calculate(orderItems, discounts) {
// 	let sum = 0;
// 	for (let e of orderItems) {
// 		let discount = discounts.find(e2 => e2.name === e.name);
// 		let num = discount ? +discount.discount.slice(0, discount.discount.length - 1) : 0;
// 		sum += e.value * e.amount * ((100 - num) / 100);
// 	}
// 	return sum;
// }

// console.log(calculate(
// 	[
// 		{ name: 'Milk', value: 10, amount: 1 },
// 		{ name: 'Vegetables', value: 20, amount: 1 },
// 		{ name: 'Meat', value: 50, amount: 1 }
// 	],
// 	[
// 		{ name: 'Vegetables', discount: '50%' }
// 	]
// ));