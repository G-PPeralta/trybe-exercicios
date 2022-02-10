function typeOfNumber(number) {
  if (number > 0) {
    return "positivo";
  }

  if (number === 0) {
    return "neutro";
  }

  if(typeof(number) !== 'number') {
    return 'o valor deve ser um número'
  }

  return "negativo";
}

module.exports = typeOfNumber;