const { TestWatcher } = require('@jest/core');
const myRemove = require('./myRemove');

describe('exercise 2, function myRemove()', () => {
  test('the return must be [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('the return must not be [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([[1, 2, 3, 4]]);
  });
  test('the return must be [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
