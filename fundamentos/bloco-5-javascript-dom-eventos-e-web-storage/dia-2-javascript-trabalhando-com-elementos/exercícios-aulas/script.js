
//ex01
let brother = document.createElement("p")
document.querySelector("#elementoOndeVoceEsta").nextSibling.appendChild(brother)

//ex02
//PARA ADICIONAR CLASSE: document.querySelector("#elementoOndeVoceEsta").appendChild(terceiroEuFilho).classList.a("terceiroFilhoDoFilho")
let terceiroEuFilho = document.createElement("section")
document.querySelector("#elementoOndeVoceEsta").appendChild(terceiroEuFilho).setAttribute("id", "terceiroFilhoDoFilho")

//ex03
let sonOfFistSon = document.createElement("p")
document.querySelector("primeiroFilhoDoFilho").appendChild(sonOfFistSon).classList.add("primeiro-filho-do-filho")

//ex04
document.querySelector("primeiroFilhoDoFilho").nextElementSibling