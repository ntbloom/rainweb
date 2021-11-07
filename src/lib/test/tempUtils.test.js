const { default: TempUtils } = require('../data/tempUtils');

const num = 'number';
const str = 'string';

describe.each([
  [0, str, '32'],
  [0, num, 32],
  [100, str, '212'],
  [100, num, 212],
])('test parsing Celsius to Farenheit', (c, returnType, exp) => {
  test(`${c} as ${returnType} -> ${exp}`, () => {
    expect(TempUtils.celToFahr(c, returnType)).toBe(exp);
  });
});

describe.each([
  [32, str, '0'],
  [32, num, 0],
  [212, str, '100'],
  [212, num, 100],
])('test parsing Fahrenheit to Celsius', (f, returnType, exp) => {
  test(`${f} as ${returnType} -> ${exp}`, () => {
    expect(TempUtils.fahrToCel(f, returnType)).toBe(exp);
  });
});
