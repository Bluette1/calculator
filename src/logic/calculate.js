import operate from './operate';

const calculate = (calculatorObj, buttonName = '') => {
  const { total, next, operation } = calculatorObj;
  if (buttonName === '+/-') {
    return total * -1;
  }

  if (buttonName === '%') {
    return operate(100, total);
  }
  return operate(total, next, operation);
};

export default calculate;
