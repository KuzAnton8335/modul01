'use strict'
const obj1 = {
	a: 1,
	b: {
		a: 2
	},
	c: 3
};

const obj2 = {
	c: 5,
	b: {
		d: 4,
		e: 5
	}
};

//  Object.assign - соеденение обьектов
const obj3 = Object.assign({}, obj1, obj2, { a: 3 });
console.log(obj1);
console.log(obj3);

const obj4 = { ...obj1, g: 'hi', ...obj2 };
console.log(obj4); // клон obj1

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
	transport: {
		cars: {
			family: ['WV', 'Opel', 'Lada'],
			sport: ['BMW', 'Mazda', 'Porshe']
		},
		age: 45,
	},
	alive: true,
};
console.log(hero.transport.cars.sport[2]);

const { login: heroName, otherWeapons, transport: { cars: {
	family, sport
} },
	group = 'Avengers'
} = hero;

console.log(group);
console.log(heroName);
console.log(otherWeapons);
console.log(family, sport);

const hero2 = {
	login: 'Deadpool',
	firstName: 'Бред',
	lastName: 'Пит',
	favoriteWeapons: 'katanas',
	otherWeapons: [
		'Mateba Autorevolver',
		'Ingram MAC-10',
		'Desert Eagle Mark XIX',
		'M16',
		'РДГ-5'
	],
	transport: {
		cars: {
			family: ['WV', 'Opel', 'Lada'],
		},
	},
	alive: true,
};

const hero3 = {
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
	transport: {
		cars: {
			sport: ['BMW', 'Mazda', 'Porshe'],
		},
	},
	alive: true,
	group: 'Justice League',
	getfullName() {
		return `${this.firstName} ${this.lastName}`
	},
	say() {
		console.log(`Меня зовут ${this.getfullName()}`);
	}
};
hero2.getfullName = hero3.getfullName;
hero3.say();

console.log(hero2.getfullName());

const heroes = [hero, hero2, hero3];

heroes.forEach(item => {
	console.log(item?.transport?.cars?.sport ?? 'default');
});


const heroStr = JSON.stringify(hero);
console.log(heroStr);

hero.age = 30;
hero.transport.cars.family = true;

const heroObj = JSON.parse(heroStr);
console.log(heroObj);