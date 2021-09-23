const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const filterAnimalByAge = (age) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalByAge = Animals.filter((animal) => animal.age === age);

      if (animalByAge.length > 0) {
        return resolve(animalByAge);
      }

      return reject(new Error('Nenhum animal com essa idade!'));
    }, 100);
  });

test('deve retornar Soneca', async () => {
  const data = await filterAnimalByAge(2);
  expect(data).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
});

test('deve retornar um erro', async () => {
  expect.assertions(1);
  try {
    await filterAnimalByAge(6);
  } catch (error) {
    expect(error.message).toMatch('Nenhum animal com essa idade!');
  }
});
