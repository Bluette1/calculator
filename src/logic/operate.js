import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNum = new Big(numberOne);
  const secondNum = new Big(numberTwo);
  if (operation === '+') {
    return firstNum.plus(secondNum);
  }
  if (operation === '-') {
    return firstNum.minus(secondNum);
  }
  if (operation === 'x') {
    return firstNum.times(secondNum);
  }
  if (operation === '÷') {
    return firstNum.div(secondNum);
  }
  return firstNum.div(secondNum).times(100);
};

export default operate;
