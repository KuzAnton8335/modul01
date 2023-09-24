'use strict'
//Обьекты
// const obj = new Object();
// console.log(obj);

const firstName = 'Флоид';
const lastName = 'Флоид';

const user = {
	login: 'Deadshot',
	firstName,
	lastName,
	'favorit weapon': 'Glock 19',
	cars: ['opel', 'mazda', 'bmw'],
	age: 49,
	status: {
		alive: true,
		wanted: true,
		free: true,
	},
	say() {
		console.log('Меня зовут Флойд');
	},
};

const str = 'firstName';

// console.log(user);
// console.log(user['favorit weapon']);
// console.log(user[str]);

// user.say();
// delete user.cars;
// console.log(user);

user.login = 'Alex';
console.log(user);
user.smoke = true;
console.log(user);

const obj = Object.create(null);
console.log(obj);

const element = {
	tagName: 'div',
	className: 'Container',
}

const element2 = {
	tagName: 'div',
	className: 'Container',
}

element.className = 'wrapper'
console.log(element);
console.log(element === element2);

const decorObj = obj => {
	obj.prop = 'вот это да!';
}

decorObj(element);
console.log(element);


const hero = {
	login: 'Deadpool',
	firstName: 'Уэйд',
	lastName: 'Уйлсон',
	favoriteWeapons: 'katanas',
	otherWeapons: [
		'Mateba Autorevolver',
		'Ingram MAC-10',
		'Desert Eagle Mark XIX',
		'M16',
		'РДГ-5'
	],
	alive: true,
}

const values = Object.entries(hero);

for (const [key, value] of values) {
	console.log(key, value);
}

const arrow = ['Mateba Autorevolver', 'Ingram MAC-10', 'Desert Eagle Mark XIX', 'M16', 'РДГ-5'];

const objArrow = Object.fromEntries(arrow);
console.log(objArrow);