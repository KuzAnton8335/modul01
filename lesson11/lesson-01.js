'use strict';

const checkNum = n => {
  const x = Number(parseFloat(n));

  if (!Number.isInteger(x)) {
    console.warn(`${x} Число не целое`);
    return;
  }

  if (x < 0) {
    console.error(`${x} Число меньше нуля`);
  }

  if (x === 0) {
    console.debug(`${x} Число равно нулю`);
  }

  console.trace(`${x} число нам подходит`);
};

const arr = ['27', '-5', '270', '4.5', 0, '90', 'o', '30', '-7', '50'];

console.time('timer');
arr.forEach(checkNum);
console.timeEnd('timer');
