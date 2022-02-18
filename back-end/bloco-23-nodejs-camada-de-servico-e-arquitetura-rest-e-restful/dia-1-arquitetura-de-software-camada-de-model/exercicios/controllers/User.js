const User = require("../services/Users");

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await User.create(firstName, lastName, email, password);

  if (!newUser) return res.status(400).json({ message: "Dados inválidos" });

  return res.status(200).json(newUser);
};

const getUser = async (_req, res) => {
  const users = await User.getUsers();
  if (!users) {
    return res.status(401).json([]);
  }
  return res.status(200).json(users);
};

const findUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findUser(id);
  if (!user) return res.status(401).json({ message: "Usuário não encontrado" });

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUser,
  findUser,
};
