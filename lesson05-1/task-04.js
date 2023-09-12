const calculate = (Summ, orderItems, promoCode) => {
	let Summ = 0;// Общая сумма корзины
	let orderItems = 0; // Количество товаров в корзине
	let promoCode = ''; // Промокод
	const oneprocent = 3;
	const twoprocent = 15;
	const threeprocent = 10;

	if (orderItems >= 10) {
		const summLite = Summ / 100 * oneprocent;
		console.log(summLite);
	} else if (Summ >= 30000) {
		const summTwo = Summ / 100 * twoprocent;
		console.log(summTwo);
	} else if (promoCode === "METHED") {
		const summThree = Summ / 100 * threeprocent;
		console.log(summThree);
	} else if (promoCode === "G3H2Z!" || Summ >= 2000) {
		const summ = Summ / 500;
	}
}

