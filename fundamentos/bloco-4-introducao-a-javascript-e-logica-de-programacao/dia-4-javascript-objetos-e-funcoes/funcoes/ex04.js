// a função deve retornar o nome do array com a maior quantidade de caracteres
// percorrer os nomes do array e comparar o length de cada um

function findBiggestName (arr) {
  let biggestName = arr[0];

  for(let i = 1; i < arr.length; i += 1) {
    let currentName = arr[i];
    if(biggestName.length < currentName.length) {
      biggestName = currentName;
    }
  }
  
  return biggestName;
}

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(findBiggestName(array));

