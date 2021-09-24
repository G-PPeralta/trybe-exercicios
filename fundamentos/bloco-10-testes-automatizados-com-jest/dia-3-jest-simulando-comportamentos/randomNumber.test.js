const service = require('./randomNumber');

test('must return 10', () => {
  service.randomNumber = jest.fn().mockReturnValue(10); //acessamos a função que está no arquivo randomNumber.js e fizemos o mock e passamos o que queremos retornar;

  service.randomNumber() // chamamos a função;

  expect(service.randomNumber).toHaveBeenCalled(); //testa se a função foi chamada;
  expect(service.randomNumber()).toBe(10); // testa se o retorno foi o que definimos na linha 4;
})