const fs = require("fs").promises;

const fileName = "simpsons.json";

async function changeCharacter() {
  const simpson = await fs
    .readFile(fileName, "utf-8")
    .then((content) => JSON.parse(content));

  const filteredCharacters = simpson.filter(
    (char) => char.id !== "10" && char.id !== "6"
  );

  try {
    await fs.writeFile(fileName, JSON.stringify(filteredCharacters));
  } catch (err) {
    console.log(`Falha ao alterar o arquivo: ${err.message}`);
  }
}

changeCharacter();
