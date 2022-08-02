const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const mySum = {
  a: 1,
  b: 2,
  c: 3,
};

describe('my sum function', () => {
  test('is delicious', () => {
    expect(sum(mySum.a, mySum.b)).toBe(mySum.c);
  });
});