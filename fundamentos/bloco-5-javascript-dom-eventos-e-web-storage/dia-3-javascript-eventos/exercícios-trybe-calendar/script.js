function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//1-Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days"

/*Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>*/

function createDaysOfTheMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  let days = document.getElementById("days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let armazenaOLaçoFor = dezDaysList[i];
    let criaALi = document.createElement("li");
    //criaALi.className = 'day';
    criaALi.innerHTML = armazenaOLaçoFor;
    days.appendChild(criaALi);

    if (armazenaOLaçoFor === 24 || armazenaOLaçoFor === 31) {
      criaALi.className = "day holiday";
    } else if (
      armazenaOLaçoFor === 4 ||
      armazenaOLaçoFor === 11 ||
      armazenaOLaçoFor === 18
    ) {
      criaALi.className = "day friday";
    } else if (armazenaOLaçoFor === 25) {
      criaALi.className = "day holiday friday";
    } else {
      criaALi.className = "day";
    }
  }
}
createDaysOfTheMonth();

/*2-Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/

let holiday = "feriados";
let buttonsContainer = document.querySelector('.buttons-container')

function holidays(holiday) {
  let button = document.createElement("button");
  button.innerText = holiday;
  button.id = 'btn-holiday';
  buttonsContainer.appendChild(button);
}

holidays(holiday);
