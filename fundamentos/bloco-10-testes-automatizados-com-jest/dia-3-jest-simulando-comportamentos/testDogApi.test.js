const service = require('./fetchApi');


describe('testando a requisição', () => {
  const apiURL = jest.spyOn( service, 'fetchPuppiesApi');
  afterEach(apiURL.mockReset);

  test('test the API if the promise is resolved', async () => {
    apiURL.mockResolvedValue('request sucess');
    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('request sucess');
    expect(apiURL).toHaveBeenCalledTimes(2);
  })
    
  test("testando requisição caso a promise seja rejeitada", async () => {
    apiURL.mockRejectedValue('request failed');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('request failed');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
})

