/**
 * Summary.
 *
 * Description.
 *
 * @file    This file test jest matchers function.
 * @author  ptts
 * @since   2022-07-01
 */

//Common Matchers

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

//Truthiness

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

//Numbers

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

//Strings

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

//Arrays and iterables

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

//Exceptions

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

//Promises

const {fetchData, fetchData1} = require('./index');

test('the data is peanut butter', () => {
  return fetchData(1).then(data => {
//    console.log(data);
    expect(data).toBe("peanut butter");
  });
});

//Async/Await

test('the data is peanut butter', async () => {
  const data = await fetchData(1);
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData(0);
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  await expect(fetchData(1)).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData(0)).rejects.toMatch('error');
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData(0).catch(e => expect(e).toMatch('error'));
});

//Callbacks

// Don't do this!
test('the data is peanut butter', () => {
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(data).toBe('peanut butter');
  }

  fetchData1(1, callback);
});

test('the data is peanut butter', done => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
   
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }   
  }

  fetchData1(1, callback);
});

//.resolves / .rejects

test('the data is peanut butter', () => {
  return expect(fetchData(1)).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchData(0)).rejects.toMatch('error');
});

//Repeating Setup

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
