const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "gabriel",
  password: "developer2022",
  database: "users_crud",
});

module.exports = connection;