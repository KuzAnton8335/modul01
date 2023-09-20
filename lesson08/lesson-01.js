'use strict'
const allCashbox = [[12, 4500], [7, 3210], [4, 650], [[4, 520], [3, 5870]]];
console.log(allCashbox.flat(Infinity));

const phrases = ['Привет друзья', 'Как Дела', 'Как погодка'];

//flatMap
// const allWorlds = phrases.map(str => str.split('  '));
// console.log(allWorlds); - map

const allWorlds = phrases.flatMap(str => str.split('  '));
console.log(allWorlds);