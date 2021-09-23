const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) =>
  new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);

    if (result) {
      return resolve(result);
    }

    return reject(new Error(`User with ${id} not found.`));
  });

const getUserName = (userId) => findUserById(userId).then((user) => user.name); //retorna o nome do usuário

describe('Tests the functions findUser and getUserName', () => {

  // test('tests if the user is found', () => {
  //   return getUserName(1).then((data) => expect(data).toEqual('Mark'));
  // });

  test('tests if the user is found', async () => {

    const data = await getUserName(1);
    expect(data).toEqual('Mark');
  });

});

describe('when the users id is not found', () => {

  // test('error', () => {
  //   expect.assertions(1);
  //   return getUserName(3).catch((error) =>
  //     expect(error.message).toMatch('User with 3 not found.')
  //   );
  // });

  test('error', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error.message).toMatch('User with 3 not found.');
    }
  });

});
