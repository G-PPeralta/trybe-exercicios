const service = require('./functions');
jest.mock('./functions');

test('tests upperCaseText function', () => {
  service.upperCaseText = jest
    .fn()
    .mockImplementation((string) => string.toLowerCase());
  service.upperCaseText('GABRIEL');
  expect(service.upperCaseText).toHaveBeenCalled();
  expect(service.upperCaseText).toHaveBeenCalledTimes(1);
  expect(service.upperCaseText).toHaveBeenCalledWith('GABRIEL');
  expect(service.upperCaseText('GABRIEL')).toBe('gabriel');

  service.upperCaseText.mockRestore();


  service.upperCaseText = jest.fn().mockReturnValue('GABRIEL');
  service.upperCaseText('gabriel');
  expect(service.upperCaseText).toHaveBeenCalled();
  expect(service.upperCaseText).toHaveBeenCalledTimes(1);
  expect(service.upperCaseText).toHaveBeenCalledWith('gabriel');
  expect(service.upperCaseText('gabriel')).toBe('GABRIEL');

});
