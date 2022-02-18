const connection = require("./connection");

const serialize = (userData) => ({
  id: userData.id,
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.email,
  password: userData.password,
}); 

const createUser = async (firstname, lastName, email, password) =>
  connection.execute(
    "INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)",
    [firstname, lastName, email, password]
  );

const getUsers = async () => {
  const [users] = await connection.execute("SELECT * FROM users_crud.users");
  return users.map(serialize);
};

const findUser = async (id) => {
  const [user] = await connection.execute(
    "SELECT id, first_name, last_name, email, password FROM users_crud.users WHERE id = ?",
    [id]
  );

  const userSerialized = user.map(serialize)[0];

  return userSerialized;
};

module.exports = {
  createUser,
  isValid,
  getUsers,
  findUser,
};
