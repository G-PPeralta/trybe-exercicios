const sum = require('./sum.js');


describe('Exercise 1 - function sum()', () => {
  test('test if 4 + 5 is equal to 9', () => {
    const result = 9;
    expect(sum(4, 5)).toEqual(result);
  })
  
  test('test if 0 + 0 is equal to 0', () => {
    const result = 0;
    expect(sum(0, 0)).toEqual(result);
  })
  
  test('tests if generates error when parameters are not numbers', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow(new Error('parameters must be numbers'));
  })
  
  test('test if the error message is parameters must be numbers', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  })
})



