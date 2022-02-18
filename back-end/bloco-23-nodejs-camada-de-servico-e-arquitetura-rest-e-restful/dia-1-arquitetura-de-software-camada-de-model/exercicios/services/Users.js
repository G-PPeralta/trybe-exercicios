const User = require("../models/User");

const isValid = (firstname, lastName, email, password) => {
  if (!firstname || !lastName || !email || !password) {
    return false;
  }

  if (password.length < 6) {
    return false;
  }

  if (typeof password !== "string") {
    return false;
  }

  return true;
};

const getUsers = async () => {
  const users = await User.getUsers();

  return users;
};

const findUser = async () => {
  const user = await User.findUser();

  return user;
};

const createUser = async (firstname, lastName, email, password) => {
  const validUser = isValid(firstname, lastName, email, password);

  if (!validUser) return false;

  const newUser = await User.createUser(firstname, lastName, email, password);

  return newUser;
};

module.exports = {
  getUsers,
  findUser,
  createUser,
};
