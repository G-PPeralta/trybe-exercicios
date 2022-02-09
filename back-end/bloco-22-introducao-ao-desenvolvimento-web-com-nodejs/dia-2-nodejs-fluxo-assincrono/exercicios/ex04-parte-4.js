const fs = require("fs").promises;

const fileName = "simpsons.json";
const newFileName = "simpsonFamily.json";

async function changeFile() {
  const simpsons = await fs
    .readFile(fileName, "utf-8")
    .then((data) => JSON.parse(data));

  const newInfo = simpsons.filter((char) => char.id <= 4);

  try {
    await fs.writeFile(newFileName, JSON.stringify(newInfo));
  } catch (err) {
    console.log(`Falha ao alterar o arquivo: ${err.message}`);
  }
}

changeFile();
