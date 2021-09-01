const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
// assert.deepStrictEqual(expected, [1, 2, 4], 'Deve remover o 3');
//assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'Conterá o 3'); //deu certo pq deu errado

//

const expected2 = myRemoveWithoutCopy([4, 5, 6, 7], 7);
// assert.deepStrictEqual(expected2, [4, 5, 6], 'Não deve retornar o 7');
// assert.notDeepStrictEqual(expected2, [4, 5, 6], 'Erro, não era pra retornar o valor certo');

//

const expected3 = myRemoveWithoutCopy([1, 2, 3, 4], 5);
assert.deepStrictEqual(expected3, [1, 2, 3, 4], 'Não deve retornar o 5');

