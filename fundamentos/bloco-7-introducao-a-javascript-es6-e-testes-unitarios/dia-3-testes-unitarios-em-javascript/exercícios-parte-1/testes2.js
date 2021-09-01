const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const expected = myRemove([1, 2, 3, 4], 3)

// assert.deepStrictEqual(expected, [1, 2, 4], 'O array deve retornar sem o número 3');
// assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'O array deve retornar sem o número 3');

//

const newArr = [5, 6, 7, 8];
const expected2 = myRemove(newArr, 5);

// assert.deepStrictEqual(expected2, [5, 6, 7, 8], 'o número 5 não deve estar contido no array');

//
const expected3 = myRemove([1, 2, 3, 4], 5)
assert.deepStrictEqual(expected3, [1, 2, 3, 4], 'não deve conter o número 5');




