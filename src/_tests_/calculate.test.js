import calculate from '../logic/calculate';

test('calculate - when buttonName equals `+/-` and total is set', () => {
  const calcObj = {
    total: 4,
    next: null,
    operation: null,
  }
  expect(calculate(calcObj, '+/-')).toEqual(-4);
});

test('calculate - when buttonName equals `+/-` and next is set', () => {
  const calcObj = {
    total: null,
    next: 4,
    operation: null,
  }
  expect(calculate(calcObj, '+/-')).toEqual(-4);
});

test('calculate - when buttonName equals `%` and total is set', () => {
  const calcObj = {
    total: 4,
    next: null,
    operation: null,
  }
  expect(JSON.stringify(calculate(calcObj, '%'))).toEqual(JSON.stringify('0.04'));
});

test('calculate - when buttonName equals `%` and next is set', () => {
  const calcObj = {
    total: null,
    next: 4,
    operation: null,
  }
  expect(JSON.stringify(calculate(calcObj, '%'))).toEqual(JSON.stringify('0.04'));
});

test('calculate - when buttonName equals `null` and both total next are set, and operation = `x`', () => {
  const calcObj = {
    total: 4,
    next: 4,
    operation: 'x',
  }
  expect(JSON.stringify(calculate(calcObj))).toEqual(JSON.stringify('16'));
});

test('calculate - when buttonName equals `null` and both total next are set, and operation = `-`', () => {
  const calcObj = {
    total: 4,
    next: 4,
    operation: '-',
  }
  expect(JSON.stringify(calculate(calcObj))).toEqual(JSON.stringify('0'));
});

test('calculate - when buttonName equals `null` and both total next are set, and operation = `+`', () => {
  const calcObj = {
    total: 4,
    next: 4,
    operation: '+',
  }
  expect(JSON.stringify(calculate(calcObj))).toEqual(JSON.stringify('8'));
});

test('calculate - when buttonName equals `null` and both total next are set, and operation = `÷`', () => {
  const calcObj = {
    total: 4,
    next: 4,
    operation: '÷',
  }
  expect(JSON.stringify(calculate(calcObj))).toEqual(JSON.stringify('1'));
});