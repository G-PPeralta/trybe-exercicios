// função recebe um array de números inteiros e deve retornar o que mais se repete
// percorrer o array

function repeat (array) {
  let numberRepeated = 0;
  for(let i = 0; i < array.length; i += 1) {
    if(array[i] === i)
    numberRepeated++;
  }
}

let array = [2, 3, 2, 5, 8, 2, 3]

console.log(repeat(array));