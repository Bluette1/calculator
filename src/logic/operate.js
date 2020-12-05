import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  // eslint-disable-line no-console
  console.log('numberOne:::', numberOne);
  console.log('numberTwo:::', numberTwo);
  const firstNum = new Big(numberOne);
  const secondNum = new Big(numberTwo);
  if (operation === '+') {
    return firstNum.plus(secondNum);
  }
  if (operation === '-') {
    return secondNum.minus(firstNum);
  }
  if (operation === 'x') {
    return firstNum.times(secondNum);
  }
  return secondNum.div(firstNum);
};

export default operate;
