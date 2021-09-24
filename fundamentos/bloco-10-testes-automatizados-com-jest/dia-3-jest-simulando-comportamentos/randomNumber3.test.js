const service = require('./randomNumber');
// jest.mock('./randomNumber');

test('must return a multiplication', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  service.randomNumber(4, 2, 2);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(4, 2, 2);
  expect(service.randomNumber(4, 2, 2)).toBe(16);

  service.randomNumber.mockReset();

  service.randomNumber.mockImplementation((a) => 2 * a);
  service.randomNumber(2);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(2);
  expect(service.randomNumber(2)).toBe(4);
});
