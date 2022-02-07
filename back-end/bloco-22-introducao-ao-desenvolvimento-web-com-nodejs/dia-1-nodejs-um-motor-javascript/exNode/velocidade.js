const readline = require('readline-sync')

const distancia = readline.questionInt('Digite a distância percorrida (m): ');
const tempo = readline.questionInt('Digite o tempo gasto (s): ');

const velocidadeMedia = () => {
  const velocidade = (distancia/tempo).toFixed(2)
  console.log(
    `A velocidade média é ${velocidade}`
  );
}

velocidadeMedia();