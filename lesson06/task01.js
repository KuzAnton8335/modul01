'use strict'
// const pow = () => {
// 	for (let i = 1; i < 10; i++) {
// 		console.log('-----------');
// 		for (let y = 2; y < 10; y++) {
// 			console.log(`${i} x ${y} =${i ** y} `);
// 		}
// 	}
// }
// pow();

// const powOne = () => {
// 	for (let i = 1; i < 11; i++) {
// 		console.log(`${i} |`);
// 	}
// }
// powOne();

// const powTwo = () => {
// 	for (let y = 2; y < 11; y++) {
// 		let a = 2;
// 		console.log(`${y ** a} |`);
// 	}
// }
// powTwo();

const powThree = () => {
	for (let a = 1; a <= 10; a++) {
		console.log('\n');
		// console.log(`${a}`);
		for (let j = 2; j <= 10; j++) {
			console.log(`${a} x ${j} = ${a ** j}`);
		}
		console.log('\n');
	}
}

powThree();
