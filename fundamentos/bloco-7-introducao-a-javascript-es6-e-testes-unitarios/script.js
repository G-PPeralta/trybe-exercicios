// 1 - Modifique a estrutura da função para que ela seja uma arrow function.
//     Modifique as concatenações para template literals.

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = escopo => (escopo === true? 'Não devo ser utilizada fora do meu escopo (if)': 'Não devo ser utilizada fora meu escopo (else)');
console.log(testingScope(true));

//2- Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
//Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// MODO TRADICIONAL
// function sortArray(array) {
//   return array.sort(function(a, b){return a - b});
// }

const sortArray = array => array.sort(function(a, b){return a - b});

//3-Crie uma função que receba um número e retorne seu fatorial.

function factorial(number) {
  let result = 1;
  if(number == 0 || number == 1) {
    return result;
  } else {
    for(let i = number; i >= 1; i -= 1) {
      result = result * i;
  }
  return result
  }
}

//Agora a forma recursiva:

function factorial(number) {
  if(number === 0 || number === 1) {
    return 1
  } else {
    return number * factorial(number-1);
  }
}

//forma ternária usando arrow function:

const factorial = number => (number === 0 || number === 1? 1: number * factorial(number-1));