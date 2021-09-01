const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expected = sum(5, 4);
assert.strictEqual(expected, 9, 'A soma de 4 + 5 é 9');

//

const expected2 = sum(0, 0)
assert.strictEqual(expected2, 0, 'Zero + zero = 0');

//

const expected3 = sum (4, '5');
assert.strictEqual(expected3, 9, '4 + 5 = 9');



