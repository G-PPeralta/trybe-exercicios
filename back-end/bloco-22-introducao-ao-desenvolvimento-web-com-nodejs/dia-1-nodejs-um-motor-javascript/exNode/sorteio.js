const readlineSync = require('readline-sync');
const number = readlineSync.questionInt('Escolha um número: ');

const numeroSorteado = Math.floor(Math.random() * 10) + 1;

const sorteio = () => {
  if(number === numeroSorteado) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Ops, não foi dessa vez. O número sorteado era ${numeroSorteado}`);
  }
}

sorteio();