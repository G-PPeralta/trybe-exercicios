const techList = (arr, name) => {
  if (arr.length === 0) return 'Vazio!';
  const newObject = arr.sort().map((element) => ({
    tech: element,
    name,
  }));
  return newObject;
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

module.exports = techList;
