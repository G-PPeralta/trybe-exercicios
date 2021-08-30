window.onload = function () {
  let forms = document.getElementById("cv-form");
  let fullName = document.getElementById("full-name");
  let email = document.getElementById("email-text");
  let cpf = document.getElementById("cpf-text");
  let adress = document.getElementById("adress-text");
  let city = document.getElementById("city-text");
  let state = document.getElementById("state-select");
  let resume = document.getElementById("resume-text");
  let job = document.getElementById("job");
  let jobDescription = document.getElementById("job-description");
  let date = document.getElementById("date");
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

  forms.addEventListener("submit", stopDefault);

  function stopDefault(e) {
    e.preventDefault();

    checkInputs();
  }

  function checkInputs() {
    let fullNameValue = fullName.value.trim();
    let emailValue = email.value.trim();   
    let cpfValue = cpf.value.trim();
    let adressValue = adress.value.trim();
    let cityValue = city.cpfValue.trim();
    let stateValue = state.value;
    let resumeValue = resume.value.trim();
    let jobValue = job.value.trim();
    let jobDescriptionValue = jobDescription.value.trim(); 
    let dateValue = dateValue.value.trim();
    let selectValue = select.value;

    
  }
  
};
