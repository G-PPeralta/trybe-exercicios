const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((a, b) => a.concat(b), []);
}

/*Solução alternativa sem o reduce:
function flatten() {
  return arrays.flat();
}*/


assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);