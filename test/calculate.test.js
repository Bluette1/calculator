import calculate from '../src/logic/calculate';

test('calculate - when buttonName equals `+/-` and total is set', () => {
  const calcObj = {
    total: 4,
    next: null,
    operation: null,
  }
  expect(calculate(calcObj, '+/-')).toEqual(-4);
});