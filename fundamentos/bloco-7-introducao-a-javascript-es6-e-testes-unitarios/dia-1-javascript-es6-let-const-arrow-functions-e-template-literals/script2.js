//3-Crie uma página que contenha:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

let button = document.getElementById('btn');
let clickCount = document.getElementById('click');
let count = 0;

const counter = () => {
  count += 1; 
  clickCount.innerText = count;
}

button.addEventListener('click', counter);

