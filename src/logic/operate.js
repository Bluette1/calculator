import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (operation === '+') {
    return new Big(numberOne) + new Big(numberTwo);
  } else if (operation === '-') {
    return new Big(numberOne) - new Big(numberTwo);
  } else if (operation === '') {
    return new Big(numberOne) * new Big(numberTwo);
  } else if (operation === '÷') {
    return new Big(numberOne) / new Big(numberTwo);
  } else if (operation === '%') {
    return (new Big(numberOne) / new Big(numberTwo)) * 100;
  }
};

export default operate;
