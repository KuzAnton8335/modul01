'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 3,

  get calculateItemPrice() {
    return `${this.items * this.count}`;
  },

  get getTotalPrice() {
    return `${this.totalPrice}`;
  },

  get increaseCount() {
    return `${this.count += 2}`;
  },

  get printCart() {
    const print = (arg) => JSON.stringify(arg);
    return `
${this.print.items},
${this.print.totalPrice},
${this.print.count}`;
  },

  get clearCart() {
    return `${this.items.length = 0},
      ${this.totalPrice.length = 0},
${this.count.length = 0},`;
  },


};

cart.items.add = function(key, value) {
  this[key] = value;
};

cart.items.add('items', '2');
cart.items.add('count', '7');
cart.items.add('totalPrice', '30');
cart.items.add('names', 'fruits');
console.table(cart);

