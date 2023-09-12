const calculate = (summ, orderItems, promoCode) => {
	let summ = 0;// Общая сумма корзины
	let orderItems = 0; // Количество товаров в корзине
	let promoCode = ''; // Промокод
	const oneprocent = 3;
	const twoprocent = 15;
	const threeprocent = 10;

	if (orderItems >= 10) {
		const summLite = summ / 100 * oneprocent;
		console.log(summLite);
	} else if (summ >= 30000) {
		const summTwo = summ / 100 * twoprocent;
		console.log(summTwo);
	} else if (promoCode === "METHED") {
		const summThree = summ / 100 * threeprocent;
		console.log(summThree);
	} else if (promoCode === "G3H2Z!" || Summ >= 2000) {
		const summ = summ / 500;
	}
}

