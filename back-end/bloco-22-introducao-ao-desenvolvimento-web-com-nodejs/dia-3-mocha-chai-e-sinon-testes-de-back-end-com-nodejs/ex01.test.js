const { expect } = require("chai");
const typeOfNumber = require("./ex01");

describe("Testa quando o número for maior que zero", () => {
  it('retorna "positivo"', () => {
    const resposta = typeOfNumber(2);

    expect(resposta).to.be.equals("positivo");
  });
});

describe("Testa quando o número for igual a zero", () => {
  it('retorna "neutro"', () => {
    const resposta = typeOfNumber(0);

    expect(resposta).to.be.equals("neutro");
  });
});

describe("Testa quando o número for menor que zero", () => {
  it('retorna "negativo"', () => {
    const resposta = typeOfNumber(-1);

    expect(resposta).to.be.equals("negativo");
  });
});

describe("Quando o valor informado não for do tipo number", () => {
  it('retorna "tipo informado não é um número"', () => {
    const resposta = typeOfNumber('0')

    expect(resposta).to.be.equals("o valor deve ser um número")
  })
})