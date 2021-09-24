const service = require('./randomNumber');
// jest.mock('./randomNumber');

test('must a division', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  service.randomNumber(4, 2);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(4, 2);
  expect(service.randomNumber(4, 2)).toBe(2);
});
