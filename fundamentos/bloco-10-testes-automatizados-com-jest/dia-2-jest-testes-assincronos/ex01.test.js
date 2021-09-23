const uppercase = require('./ex01.js');

describe('Verifica a function uppercase', (done) => {
  test('verifica conversão de gabriel para GABRIEL', (done) => {
    uppercase('gabriel', (upper) => {
      try {
        expect(upper).toBe('GABRIEL');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
