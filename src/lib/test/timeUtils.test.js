const { default: TimeUtils } = require('../data/timeUtils');

describe.each([
  [0, '<1 hr'],
  [55, '<1 hr'],
  [961, '<1 hr'],
  [4501, '1 hr'],
  [7199, '1 hr'],
  [7200, '2 hrs'],
  [82888, '23 hrs'],
  [86400, '1 day'],
  [172801, '2 days'],
  [701299, '8 days'],
  [3024001, '35 days'],
])('test parsing seconds into clean string', (input, exp) => {
  test(`${input} -> ${exp}`, () => {
    expect(TimeUtils.secondsToString(input)).toBe(exp);
  });
});
