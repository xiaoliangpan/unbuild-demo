'use strict';

const subtract = (a, b) => a - b;

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 3), subtract(1, 6));

exports.add = add;
exports.subtract = subtract;
