//1-Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let title = document.createElement("h1");
title.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(title);

//2-Adicione a tag main com a classe main-content como filho da tag body ;

let mainElement = document.createElement("main");
mainElement.className = "main-content";
document.body.appendChild(mainElement);

//3-Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sectionCenter = document.createElement("section");
sectionCenter.className = "center-content";
mainElement.appendChild(sectionCenter);

//4-Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragraph = document.createElement("p");
paragraph.innerText = "lorem ipsum dolor";
sectionCenter.appendChild(paragraph);

//5-adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionLeft = document.createElement("section");
sectionLeft.className = "left-content";
mainElement.appendChild(sectionLeft);

//6-Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sectionRight = document.createElement("section");
sectionRight.className = "right-content";
mainElement.appendChild(sectionRight);

//7-Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let imgElement = document.createElement("img");
imgElement.className = "small-image";
imgElement.src = "https://picsum.photos/200";
sectionLeft.appendChild(imgElement);

//8-Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let ulElement = document.createElement("ul");

let arrayNumbers = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

for (let i = 0; i < arrayNumbers.length; i += 1) {
  let liElement = document.createElement("li");
  liElement.innerHTML = arrayNumbers[i];
  ulElement.appendChild(liElement);
}

sectionRight.appendChild(ulElement);

//9-Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let i = 1; i <= 3; i += 1) {
  let h3 = document.createElement("h3");
  h3.innerText = "Título";
  h3.className = "description";
  mainElement.appendChild(h3);
}

//PARTE 2

//1- Adicione a classe title na tag h1 criada;

title.className = "title";

//2-Adicione a classe description nas 3 tags h3 criadas;
//incluída no próximo laço for do ex09

//3-Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();

sectionLeft.remove();

//4-Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

sectionRight.style.marginRight = "auto";

//5-Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

mainElement.style.background = "green";

//6-Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

ulElement.removeChild(ulElement.lastChild);
ulElement.removeChild(ulElement.lastChild);
