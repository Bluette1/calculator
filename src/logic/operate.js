import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
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
