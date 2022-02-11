const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
app.use(bodyParser.json());

app.get("/ping", (_req, res) => {
  res.status(200).json({ message: "pong" });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` });
});

app.listen(3002, () => {
  console.log("Aplicação ouvindo na porta 3002");
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (age > 17) {
    res.status(200).json({ message: `Hello, ${name}` });
  }

  return res.status(401).json({ message: "Unathorized" });
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.body;
  return res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});
