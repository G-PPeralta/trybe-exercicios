const { TestWatcher } = require('@jest/core');
const myFizzBuzz = require('./myFizzBuzz.js');

describe('exercise 4, function myFizzBuzz', () => {
  test('checks if the return of the function is fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('checks if the return of the function is fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  test('checks if the return of the function is buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  test('checks if the return of the function is the parameter itself', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });

  test('checks if the return of the function is false', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});
