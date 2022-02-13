const fs = require("fs").promises;

async function readCharacters() {
  const simpsons = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((character) => JSON.parse(character));

  try {
    console.log(simpsons);
  } catch (err) {
    console.log(err.message);
  }
}

readCharacters();
