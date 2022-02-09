const fs = require("fs").promises;

const fileName = "simpsonFamily.json";

async function switchCharacter() {
  const simpsons = await fs
    .readFile(fileName, "utf-8")
    .then((info) => JSON.parse(info));

  const charIndex = simpsons.indexOf("Nelson Muntz");
  simpsons[charIndex] = "Maggie Simpson";

  try {
    await fs.writeFile(fileName, JSON.stringify(simpsons));
  } catch (err) {
    console.log(err.message);
  }
}

switchCharacter();
