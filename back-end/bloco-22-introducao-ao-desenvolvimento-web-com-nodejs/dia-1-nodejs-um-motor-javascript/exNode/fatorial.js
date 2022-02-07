const readline = require("readline-sync");

const numero = readline.questionInt("Escolha um número: ");

const fatorial = () => {
  let answer = 1;
  if (numero == 0 || numero == 1) {
    console.log(answer);
  } else {
    for (let i = numero; i >= 1; i--) {
      answer = answer * i;
    }
    console.log(`O fatorial de ${numero} é ${answer}`);
  }
};

fatorial();
