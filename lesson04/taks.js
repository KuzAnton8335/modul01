const rain = Math.random(Math.round())

if (rain >= 1) {
	console.log("Пошёл дождь. Возьмите зонт!");
} else (rain <= 0); {
	console.log("Дождя нет!");
}

{
	const math = +prompt("Ведите колическтво баллов по математике");
	const lang = +prompt("Ведите колическтво баллов по русскому языку");
	const info = +prompt("Ведите колическтво баллов по информатике");
	const summ = math + lang + info;

	if (summ >= 265) {
		console.log("Поздравляю, вы поступили на бюджет!");
	} else if (summ <= 265) {
		console.log("Поздравляю, вы поступили на платное обучение!");
	}
}