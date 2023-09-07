'use strict'

{
	const fruitName = 'nectarine';
	const fruitQuantity = 5;
	const fruitCategory = 'fruits';
	const fruitPrice = 50;

	const fruitSum = fruitQuantity * fruitPrice;

	console.log(fruitName);
	console.log(fruitSum, 'Руб');
}

{
	const item = 'multimeter';
	const count = '4';
	const category = 'прибор для измерения';
	const price = '2500'

	console.log(item);
	console.log(`общая сумма товара:${count * price}`);
}

{
	const promtItem = prompt('Наименование товара:', '');
	console.log(typeof (promtItem));
	const promtCount = +prompt('Количество товара:', 0);
	console.log(typeof (promtCount));
	const promtCategory = prompt('Категория товара:', '');
	console.log(typeof (promtCategory));
	const promtPrice = +prompt('Цена товара:', 0);
	console.log(typeof (promtPrice));

	console.log(`На складе ${promtCount} еденицы товара ${promtItem} на сумму:${promtCount * promtPrice} деревянных`);
}