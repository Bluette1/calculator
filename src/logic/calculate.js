import operate from './operate';

const calculate = (calculatorObj, buttonName) => {
  let { total, next } = calculatorObj;
  const { operation } = calculatorObj;
  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }
  const newCalculatorObj = { total, next, operation };

  const { numberOne, numberTwo } = newCalculatorObj;
  operate(numberOne, numberTwo, operation);
};

export default calculate;
