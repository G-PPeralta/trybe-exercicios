const service = require('./functions');
jest.mock('./functions');

describe('tests all functions', () => {
  test('tests upperCaseText function', () => {
    service.upperCaseText = jest
      .fn()
      .mockImplementation((string) => string.toLowerCase());
    service.upperCaseText('GABRIEL');
    expect(service.upperCaseText).toHaveBeenCalled();
    expect(service.upperCaseText).toHaveBeenCalledTimes(1);
    expect(service.upperCaseText).toHaveBeenCalledWith('GABRIEL');
    expect(service.upperCaseText('GABRIEL')).toBe('gabriel');
  });

  test('tests returnFirstLetter function', () => {
    service.returnFirstLetter = jest
      .fn()
      .mockImplementation((string) => string.split('')[string.length - 1]);
    service.returnFirstLetter('Tristan');
    expect(service.returnFirstLetter).toHaveBeenCalled();
    expect(service.returnFirstLetter).toHaveBeenCalledTimes(1);
    expect(service.returnFirstLetter).toHaveBeenCalledWith('Tristan');
    expect(service.returnFirstLetter('Tristan')).toBe('n');
  });

  test('tests mergeStrings function', () => {
    service.mergeStrings = jest.fn().mockImplementation((a, b, c) => a + b + c);
    service.mergeStrings(`Gabriel`, `Prates`, `Peralta`);
    expect(service.mergeStrings).toHaveBeenCalled();
    expect(service.mergeStrings).toHaveBeenCalledTimes(1);
    expect(service.mergeStrings).toHaveBeenCalledWith(
      `Gabriel`,
      `Prates`,
      `Peralta`
    );
    expect(service.mergeStrings(`Gabriel`, `Prates`, `Peralta`)).toBe(
      'GabrielPratesPeralta'
    );
  });
});
