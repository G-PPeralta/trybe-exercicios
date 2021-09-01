//PASSO A PASSO:

//1- const assert = require('assert'); Isso chama o módulo do assert

//2- criar a função que será testada. Ex: const sum = (num1, num2) => num1 + num2;

//3- const expected = sum(5, 4); Chamar a função com os parâmetros que serão testados atribuindo isso em uma variável/const

//4- assert.equal(expected, 9, "5 + 4 é igual a 9"); Escolher o teste que será aplicado (no exemplo foi o assert.equal) e passar três parâmetros, que no caso são (variável em que está armazenada a função com os parâmetros desejados, resultado esperado, mensagem de erro)

//Teste 1
const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 === 70


//Teste 2
const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.equal(expected, '3', 'Nove dividido por três é igual a três'); //aqui o teste passa, pois o assert.equal usa o == para comparar
assert.strictEqual(expected, '3', 'Nove dividido por três é igual a três'); //aqui o teste não passa, pois o assert.strictEqual usa o ===

COMBINAÇÃO DE MÉTODOS:

const assert = require('assert');

const add = (a, b) => a + b;

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)


TESTANDO ARRAY E OBJETOS:

const assert = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');

//TESTES UTILIZANDO O THROW:


// Queremos que o código retorne um erro com uma mensagem específica
// caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição for verdadeira, o que irá interromper a execução da função.

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

//TDD (TESTE DRIVEN DEVELOPMENT):

const assert = require('assert');
assert.strictEqual(typeof myFunction, 'function');

// Implementar apenas o necessário para que o teste passe. No caso do exemplo anterior, você só precisaria declarar a função para passar o teste.

//Confiança : O sistema é resistente a falhas durante a execução, isto é, não entra em loop , não interrompe a execução por falta de recursos.

//Funcionalidade : O sistema se comporta conforme o que foi definido em seus requisitos.

//Performance : O sistema tem um tempo de resposta adequado e aceitável, mesmo quando submetido a um volume de processamento próximo de situações reais ou de pico.