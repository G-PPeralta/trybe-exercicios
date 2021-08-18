window.onload = function () {

  let select = document.querySelector("select");
  select.addEventListener("change", function changeTextColor() {
    let selected = select.selectedOptions[0];
    document.body.style.background = selected.value;

    localStorage.setItem('background', selected.value);
  });

  let inputFontSize = document.querySelector('input[name = "font-size"]');
  inputFontSize.addEventListener('change', function changeTextSize() {
    let paragraph = document.querySelector('p');
    paragraph.style.fontSize = `${inputFontSize.value}px`;

    localStorage.setItem('changeSize', `${inputFontSize.value}px`)
  })

  let savedBackground = localStorage.getItem('background');
  document.body.style.background = savedBackground;

  let savedFontSize = localStorage.getItem('changeSize');
  let paragraph = document.querySelector('p');
  paragraph.style.fontSize = savedFontSize;

};
