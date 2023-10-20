'use strict'

const min = Math.ceil(1);
const max = Math.floor(100);

const random = Math.floor(Math.random() * (max - min)) + min;
console.log(random);

let name = prompt('Привет! Как тебя зовут?');

while (name == '' || name == null) {
	name = prompt('Привет! Как тебя зовут?');
}

alert(name + ', давай с тобой сыграем в игру. Я загадал число от 1 до 100. Попробуй отгадать его. После каждой попытки я скажу "мало", "много" или "верно". Когда тебе надоест играть, нажми кнопку Esc на клавиатуре. Поехали!');

let number = random;

let answer = prompt('Какое число я загадал?');

let counter = 1;

if (answer == null) {

	alert('Пока! Как нибудь сыграем ещё. ^_^');

	answer == + answer;

} else {

	while (answer != number && answer != null) {

		(answer < number) ? answer = prompt('Мало. Попробуй ещё раз!') :

			(answer > number) ? answer = prompt('Много. Попробуй ещё раз!') :

				(answer != parseInt(answer)) ? answer = prompt('Вводить нужно числа.  Какое число я загадал?') : false;

		counter = counter + 1;

	} if (answer == number) {

		alert('Верно! Это число ' + number + '.' + ' Тебе понадобилось ' + counter + ' попыток.');

	} else if (answer == null) {

	} alert('Пока! Как нибудь сыграем ещё. ^_^');

}