// Коллукции
// Map

const actors = new Map();

actors.set('Batman', 'Бен Аффлек');
actors.set('Hulk', 'Марк Руффало');
actors.set('Doctor Strange', 'Бенедикт Камбербэтч');
actors.set('Spiderman', 'Тоби Магуайр');
actors.set('Iron man', 'Бен Аффлек');
actors.set('Wolverine', 'Бен Аффлек');
actors.set('Tor', 'Бен Аффлек');
actors.set('Star-Lord', 'Крисс Прэтт');

// console.log(actors.get('Hulk'));

// console.log(actors.keys());
// console.log(actors.values());
// console.log(actors.entries());

actors.delete('Tor');
// actors.clear();
// console.log([...actors.keys()]);
// console.log([...actors.values()]);
// console.log([...actors.entries()]);
console.log(actors.size);

for (const hero of actors) {
	console.log(hero);
}

for (const [hero, actor] of actors) {
	console.log(`${actor} role ${hero}`);
}

// console.log(actors);