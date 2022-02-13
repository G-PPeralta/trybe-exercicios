const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const { readCharacters, writeCharacter } = require("./utils");
const app = express();
app.use(bodyParser.json());

app.get("/ping", (_req, res) => {
  res.status(200).json({ message: "pong" });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.body;
  return res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get("/simpsons", async (_req, res) => {
  const simpsons = await readCharacters();

  try {
    return res.status(200).json(simpsons);
  } catch(err) {
    res.status(404).json({ message: `${err.message}`})
  }
});

app.get("/simpsons/:id", async (req, res) => {
  const { id } = req.params;
  const simpsons = await readCharacters();
  const character = simpsons.find((simpson) => simpson.id === id);
  if (!character) {
    return res.status(404).json({ message: "simpson not found" });
  }
  return res.status(200).json(character);
});

app.post("/simpsons", async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await readCharacters();
  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: "id already exists" });
  }
  simpsons.push({ id, name });

  await writeCharacter(simpsons);

  res.status(204).end();
});

app.listen(3002, () => {
  console.log("ouvindo na porta 3002!");
});
