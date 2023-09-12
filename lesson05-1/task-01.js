
const convector = () => {
	const valueValute = +prompt('Введите значение валюты');
	const rub = 73;
	const doll = rub;
	const eur = 1.2 * doll;

	return ((valueValute * eur) / doll);
}
const result = convector() + ' rub';
console.log(result);