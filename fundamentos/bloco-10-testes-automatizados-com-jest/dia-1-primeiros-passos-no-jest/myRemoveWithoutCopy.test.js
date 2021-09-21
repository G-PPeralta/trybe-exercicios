const myRemoveWithoutCopy = require('./myRemoveWithoutCopy.js');

describe('Exercise 3, function myRemoveWithoutCopy()', () => {

  test('the return must be [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('the return must not be [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([[1, 2, 3, 4]]);
  });
  test('the return must be [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

})