const express = require("express");
const bodyParser = require("body-parser");
const User = require("./controllers/User");

const app = express();
app.use(bodyParser.json());

app.post("/user", User.createUser);

app.get("/user", User.getUser);

app.get("/user/:id", User.findUser);

app.listen("3000", () => console.log("ouvindo na porta 3000"));
