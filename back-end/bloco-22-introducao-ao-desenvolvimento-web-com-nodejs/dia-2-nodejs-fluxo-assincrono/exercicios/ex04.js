const fs = require("fs").promises;

const nomeDoArquivo = "./simpsons.json";

function getCharacters() {
  fs.readFile(nomeDoArquivo, "utf-8")
    .then((res) => {
      return JSON.parse(res);
    })
    .then((simpsons) => {
      return simpsons.map(({ id, name }) => console.log(`${id} - ${name}`));
    })
    .then((strings) => {
      strings.forEach((str) => console.log(str));
    });
}

function printCharacters() {
  try {
    const resolve = getCharacters();
    console.log(resolve);
  } catch (err) {
    console.log(err);
  }
}

printCharacters();

async function findCharacter(id) {
  const simpsons = await fs
    .readFile(nomeDoArquivo, "utf-8")
    .then((fileContent) => JSON.parse(fileContent));

  const character = simpsons.find((char) => char.id === id);

  if (!character) {
    throw new Error("id não encontrado");
  }

  return character;
}

findCharacter('3')
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
