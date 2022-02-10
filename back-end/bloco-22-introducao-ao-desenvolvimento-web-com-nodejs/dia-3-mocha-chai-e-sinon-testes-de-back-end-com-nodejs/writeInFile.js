const fs = require("fs");

module.exports = (arquivo, texto) => {
  fs.writeFileSync(arquivo, texto);
  return "ok";
};
