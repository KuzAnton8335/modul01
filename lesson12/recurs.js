'use strict'
const foo = (obj) => {
	console.log(obj.c++);
	foo(obj);
}
foo({ c: 0 });