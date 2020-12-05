import operate from './operate';

const calculate = (calculatorObj, buttonName = '') => {
  const { total, next, operation } = calculatorObj;
  if (buttonName === '+/-') {
    return total * -1;
  }

  if (buttonName === '%') {
    return operate(total, 100);
  }
  return operate(total, next, operation);
};

export default calculate;
