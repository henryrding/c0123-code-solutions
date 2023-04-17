import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers(numbers)', () => {

  it('returns a new array that contains only the even numbers in the given array', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });

  it('returns negative numbers', () => {
    const numbers = [-1, -2, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([-2, 0]);
  });

  it('doesn`t return infinite numbers', () => {
    const numbers = [-1, -2, 0, Infinity, -Infinity];
    const result = evenNumbers(numbers);
    expect(result).toEqual([-2, 0]);
  });

  it('doesn`t return NaN', () => {
    const numbers = [NaN];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });

  it('doesn`t return non-integers', () => {
    const numbers = [2, 4, 1.1, 2.2];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4]);
  });

});

describe('toDollars(amount)', () => {

  it('returns a number formatted in dollars and cents', () => {
    const number = 12;
    const result = toDollars(number);
    expect(result).toEqual('$12.00');
  });

  it('takes non-integers', () => {
    const number = 12.1;
    const result = toDollars(number);
    expect(result).toEqual('$12.10');
  });

  it('takes non-integers with more than 2 decimal places', () => {
    const number = 12.12345;
    const result = toDollars(number);
    expect(result).toEqual('$12.12');
  });

  it('takes negative numbers', () => {
    const number = -12.1;
    const result = toDollars(number);
    expect(result).toEqual('-$12.10');
  });

});

describe('divideBy(numbers, divisor)', () => {

  it('returns a new array of numbers where every entry has been divided by the given divisor.Does not modify the original array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0.5, 1, 1.5, 2, 2.5]);
    expect(numbers).toEqual([1, 2, 3, 4, 5]);
  });

  it('takes negative numbers', () => {
    const numbers = [-1, -2, -3, -4, -5];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([-0.5, -1, -1.5, -2, -2.5]);
    expect(numbers).toEqual([-1, -2, -3, -4, -5]);
  });

});

describe('multiplyBy(obj, multiplier)', () => {

  it('modifies an object by multiplying the value of each key, but only if that value is a number.Key names are arbitrary', () => {
    const obj = {
      hello: 2,
      hey: 4,
      yo: 'ten'
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ hello: 4, hey: 8, yo: 'ten' });
  });

  it('does not multiply non-numbers', () => {
    const obj = {
      hello: 2,
      hey: 4,
      yo: [1, 2, 3],
      sup: {
        one: 1,
        two: 2
      }
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ hello: 4, hey: 8, yo: [1, 2, 3], sup: { one: 1, two: 2 } });
  });

});
