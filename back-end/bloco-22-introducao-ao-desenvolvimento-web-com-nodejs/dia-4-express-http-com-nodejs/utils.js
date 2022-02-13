const fs = require("fs/promises");

function readCharacters() {
  return fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));
}

function writeCharacter(newCharacter) {
  return fs.writeFile("./simpsons", JSON.stringify(newCharacter));
}

module.exports = { readCharacters, writeCharacter };
