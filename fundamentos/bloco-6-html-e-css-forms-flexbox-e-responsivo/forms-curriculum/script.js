window.onload = function () {
  // let date = document.getElementById("date");
  let btn = document.getElementById("btn-default");
  let forms = document.getElementById("cv-form");
  let select = document.getElementById("state-select");
  let states = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MS",
    "MT",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  function createStatesOptions() {
    for (let i = 0; i < states.length; i += 1) {
      let options = document.createElement("option");
      options.innerText = states[i];
      select.appendChild(options);
    }
  }
  createStatesOptions();

  //https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript

  function isValidDate(date) {
    let temp = date.split("/");
    let d = new Date(temp[1] + "/" + temp[0] + "/" + temp[2]);
    return (
      d &&
      d.getMonth() + 1 == temp[1] &&
      d.getDate() == Number(temp[0]) &&
      d.getFullYear() == Number(temp[2])
    );
  }

  isValidDate();

  btn.addEventListener("click", stopDefault);

  function stopDefault(forms) {
    forms.preventDefault();
  }

  stopDefault();
  
};
