//Ex01:

let paragraph = document.getElementsByTagName("p");

function changeText() {
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].innerText =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non repellat accusamus odio, dolorem quae sint nulla minima dignissimos eius, ex ut molestiae dolores labore impedit possimus fugit dolore asperiores beatae.";
  }
}
changeText();

//Ex02:

//let yellowSquare = document.getElementsByTagName("main")[0].style.background = "rgb(76,164,109)"

let yellowSquare = document.getElementsByTagName("main");

function changeColor() {
  yellowSquare[0].style.background = "rgb(76,164,109)";
}

changeColor();

//Ex03

let centerContent = document.getElementsByClassName("center-content");

function changeColor2() {
  centerContent[0].style.background = "#fff";
}

changeColor2();

//Ex04

let title = document.getElementsByTagName("h1");

function correctText() {
  title[0].innerText = "JavaScript";
}

correctText();

//Ex 05

function transformText() {
  let text = document.getElementsByTagName("p");
  for (let i = 0; i < text.length; i += 1) {
    text[i].style.textTransform = "uppercase";
  }
}

transformText();

//Ex 06

function display() {
  let paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i += 1) {
    console.log(paragraphs[i].innerHTML);
  }
}