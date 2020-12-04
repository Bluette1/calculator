import operate from './operate';

const calculate = (calculatorObj, buttonName = '') => {
  const { total, next, operation } = calculatorObj;
  if (buttonName === '+/-') {
    return total * -1;
  }

  if (buttonName === '%') {
    return operate(total, 100);
  }
  const newCalculatorObj = { total, next, operation };

  const { numberOne, numberTwo, theOperation } = newCalculatorObj;
  return operate(numberOne, numberTwo, theOperation);
};

export default calculate;
