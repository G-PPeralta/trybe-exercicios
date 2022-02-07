const readline = require('readline-sync')

const peso = readline.questionInt('Qual é o seu peso? ')
const altura = readline.questionFloat('Qual é a sua altura? ')


const imcCalc = () => {
  console.log(`Peso: ${peso} kg, Altura: ${altura}m`);

  const imc = (peso /(altura ** 2)).toFixed(2);

  if(imc < 18.5) {
    console.log(`IMC: ${imc} - Abaixo do peso (magreza)`);
  } else if(imc >= 18.5 && imc <= 24.9) {
    console.log(`IMC: ${imc} - Peso normal`);
  } else if(imc >= 25 && imc <= 29.9) {
    console.log(`IMC: ${imc} - Acima do peso (sobrepeso)`);
  } else if(imc >= 30 && imc <= 34.9) {
    console.log(`IMC: ${imc} -  Obesidade grau I`);
  } else if(imc >= 35 && imc <= 39.9) {
    console.log(`IMC: ${imc} -  Obesidade grau II`);
  } else {
    console.log(`IMC: ${imc} -  Obesidade grau III e IV`);
  }
}

imcCalc();