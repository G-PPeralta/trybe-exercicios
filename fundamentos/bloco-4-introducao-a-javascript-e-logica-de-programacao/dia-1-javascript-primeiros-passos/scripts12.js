let valorDeCusto = 350;
let imposto = 0.2;
let valorCustoTotal = valorDeCusto + (valorDeCusto * imposto);
let valorDeVenda = 500;
let quantidade = 1000;
let lucro = valorDeVenda - valorCustoTotal;

if(lucro > 0) {
  console.log(lucro * quantidade);
} else {
  console.log("Erro!");
}






