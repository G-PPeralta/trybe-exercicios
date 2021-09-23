const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Exercise 3', () => {

  test('checks if the todo-do list is in the repo', async () => {
    const data = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(data).toContain('sd-01-week4-5-project-todo-list');
    expect(data).toContain('sd-01-week4-5-project-meme-generator');
  });

});

// it('gets a list of repositories names', () => {
//   const url = 'https://api.github.com/orgs/tryber/repos';

//   return getRepos(url).then(result => {
//     expect(result).toContain('sd-01-week4-5-project-xablau-list');
//     expect(result).toContain('sd-01-week4-5-project-meme-generator');
//   });
// });