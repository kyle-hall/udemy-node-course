
const _ = require('lodash');
const notes = require('./notes');

console.log(notes.add(1, 3));

console.log(_.isString(true));
console.log(_.isString('Andrew'));

const arr = [1, 3, 5, 6, 6, 7, 1, 5, 3];

console.log(_.uniq(arr));
