const retornaErro = () => {
  return { code: 422, message: "Todos os campos são obrigatórios" };
};

console.log(retornaErro().message); 