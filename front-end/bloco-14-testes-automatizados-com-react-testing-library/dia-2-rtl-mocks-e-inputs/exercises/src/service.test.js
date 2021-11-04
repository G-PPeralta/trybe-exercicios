const service = require('./service');
jest.mock('./service');

describe("realiza os testes da função generateRandomNumber", () => {

  it("testa se a função foi chamada", () => {
    service.generateRandomNumber = jest.fn();

    service.generateRandomNumber();
    expect(service.generateRandomNumber).toHaveBeenCalled();
  });

  it("define o retorno padrão da função como sendo 10", () => {
    service.generateRandomNumber = jest.fn().mockReturnValue(10);

    service.generateRandomNumber();
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber()).toBe(10); 
  })

  it("cria uma nova implementação para a função generateRandomNumber, dividindo os seus parâmetros", () => {
    service.generateRandomNumber = jest.fn().mockImplementation((a, b) => a / b);
    service.generateRandomNumber(10, 5);

    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(10, 5);
    expect(service.generateRandomNumber(10, 5)).toBe(2);
  })

  it("cria uma nova implementação para a função generateRandomNumber, multiplicando os seus parâmetros", () => {
    service.generateRandomNumber = jest.spyOn(service, 'generateRandomNumber').mockImplementation((a, b, c) => a * b * c);
    service.generateRandomNumber(10, 10, 10);

    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(10, 10, 10);
    expect(service.generateRandomNumber(10, 10, 10)).toBe(1000);
  })

  it("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    service.generateRandomNumber = jest.spyOn(service, 'generateRandomNumber').mockReset();
    service.generateRandomNumber = jest.spyOn(service, 'generateRandomNumber').mockImplementation((a) => a * 2);

    expect(service.generateRandomNumber(5)).toBe(10);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(5);
  });
});

describe("Implementa os testes das funções strToUpperCase, returnFirstLetter, mergeStrings", () => {

  it("cria uma nova implementação para a função strToUpperCase, fazendo que a string retorne em lowercase", () => {

    service.strToUpperCase = jest.spyOn(service, 'strToUpperCase').mockImplementation((a) => a.toLowerCase());
    service.strToUpperCase('GABRIEL');

    expect(service.strToUpperCase).toHaveBeenCalled();
    expect(service.strToUpperCase).toHaveBeenCalledTimes(1);
    expect(service.strToUpperCase).toHaveBeenCalledWith('GABRIEL');
    expect(service.strToUpperCase('GABRIEL')).toBe('gabriel');

    // service.strToUpperCase= jest.spyOn(service, 'strToUpperCase').mockRestore;

    // expect(service.strToUpperCase('gabriel')).toBe('GABRIEL');
  })

  it("cria uma nova implementação para a função returnFirstLetter, fazendo que retorne a última letra", () => {

    service.returnFirstLetter = jest.spyOn(service, 'returnFirstLetter').mockImplementation((a)=> a.charAt(a.length - 1));
    service.returnFirstLetter('Gabriel');

    expect(service.returnFirstLetter).toHaveBeenCalled();
    expect(service.returnFirstLetter).toHaveBeenCalledTimes(1);
    expect(service.returnFirstLetter).toHaveBeenCalledWith('Gabriel');
    expect(service.returnFirstLetter('Gabriel')).toBe('l');
  })

  it("cria uma nova implementação para a função mergeStrings, fazendo que combine 3 strings", () => {

    service.mergeStrings = jest.fn().mockImplementation((a, b, c)=> a + b + c);
    service.mergeStrings('Gabriel', 'Prates', 'Peralta');

    expect(service.mergeStrings).toHaveBeenCalled();
    expect(service.mergeStrings).toHaveBeenCalledTimes(1);
    expect(service.mergeStrings).toHaveBeenCalledWith('Gabriel', 'Prates', 'Peralta');
    expect(service.mergeStrings('Gabriel', 'Prates', 'Peralta')).toBe('GabrielPratesPeralta');
  })
})

describe("implementa testes para a função fetchDog", () => {

  it("testa a chamada da API em caso de sucesso", async () => {
    service.fetchDog = jest.spyOn(service, 'fetchDog').mockResolvedValue("request sucess");
    service.fetchDog()
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request sucess");
  })

  it("testa a chamada da API em caso de falha", async () => {
    service.fetchDog = jest.spyOn(service, 'fetchDog').mockRejectedValue("request failed");
    service.fetchDog()
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
  })



})