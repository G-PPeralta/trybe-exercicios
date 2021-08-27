// 1 - Modifique a estrutura da função para que ela seja uma arrow function.

//Método tradicional
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

//template literals
const testingScope = (escopo) =>
  escopo === true
    ? "Não devo ser utilizada fora do meu escopo (if)"
    : "Não devo ser utilizada fora meu escopo (else)";
console.log(testingScope(true));

//2- Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
//Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Método Tradicional
function sortArray(array) {
  return array.sort(function(a, b){return a - b});
}

const sortArray = (array) =>
  array.sort(function (a, b) {
    return a - b;
  });

//PARTE 2:

//1-Crie uma função que receba um número e retorne seu fatorial.

//Método Tradicional
function factorial(number) {
  let result = 1;
  if (number == 0 || number == 1) {
    return result;
  } else {
    for (let i = number; i >= 1; i -= 1) {
      result = result * i;
    }
    return result;
  }
}

//Agora a forma recursiva:
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

//forma ternária usando arrow function:
const factorial = (number) =>
  number === 0 || number === 1 ? 1 : number * factorial(number - 1);



//2-Crie uma função que receba uma frase e retorne qual a maior palavra.

//Método tradicional
function longestWord(str) {
  let split = str.split(" ");
  let result = 0;
  for (let i = 0; i < split.length; i += 1) {
    if (split[i].length > result) {
      result = split[i];
    }
  }
  return result;
}

//Usando o sort()

//Método Tradicional
function longestWord(str) {
  let longestWord = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
}

//Arrow function
const longestWord = (str) => str.split(" ").sort((a, b) => b.length - a.length)[0];




