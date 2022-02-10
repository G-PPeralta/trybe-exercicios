const { expect } = require("chai");
const writeInFile = require("./writeInFile");
const fs = require("fs");
const sinon = require("sinon");
const NOME_DO_ARQUIVO = "./arquivo.txt";
const CONTEUDO_DO_ARQUIVO = "VQV com TDD";

describe("Executa a função escrevaArquivo", () => {
  before(() => {
    sinon.stub(fs, "writeFileSync");
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe("Quando o arquivo existe", () => {
    it("se a resposta é uma string", () => {
      const resposta = writeInFile(NOME_DO_ARQUIVO, CONTEUDO_DO_ARQUIVO);
      expect(resposta).to.be.a("string");
    });

    it("é igual a ok", () => {
      const resposta = writeInFile(NOME_DO_ARQUIVO, CONTEUDO_DO_ARQUIVO);
      expect(resposta).to.be.equals("ok");
    });
  });
});
