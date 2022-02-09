const fs = require("fs").promises;

const fileName = "simpsonFamily.json";

async function addCharacter() {
  const simpsons = await fs
    .readFile(fileName, "utf-8")
    .then((info) => JSON.parse(info));

  const newChar = simpsons.push({ id: "4", name: "Nelson Muntz" });

  try {
    await fs.writeFile(fileName, JSON.stringify(newChar));
  } catch (err) {
    console.log(err.message);
  }
}

addCharacter();
