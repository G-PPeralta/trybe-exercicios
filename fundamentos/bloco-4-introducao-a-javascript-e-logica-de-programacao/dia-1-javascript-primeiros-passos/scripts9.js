let nota = -101;

//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.//

if(nota > 100) {
  console.log("ERRO!")
} if(nota >= 90 && nota <= 100) {
  console.log("A");
} else if(nota >= 80 && nota < 100) {
  console.log("B");
} else if(nota >= 70 && nota < 100) {
  console.log("C");
} else if(nota >= 60 && nota < 100) {
  console.log("D");
} else if(nota >= 50 && nota < 100) {
  console.log("E"); 
} else if(nota < 50 && nota > 0) {
  console.log("F");
} else if(nota < 0) {
  console.log("ERRO!");
}