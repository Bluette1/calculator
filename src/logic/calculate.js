import operate from './operate';

/* eslint-disable no-console */
const calculate = (calculatorObj, buttonName = '') => {
  const { total, next, operation } = calculatorObj;
  if (buttonName === '+/-') {
    console.log('Operate +/-: total', total);
    if (total) {
      return total * -1;
    }
    return next * -1;
  }
  if (buttonName === '%') {
    console.log('Operate % total:', total);

    if (total) {
      return operate(100, total);
    }
    return operate(100, next);
  }
  console.log('Operate: Total', total);
  console.log('Operate: Next', next);
  console.log('Operate: Operation', operation);
  return operate(total, next, operation);
};

export default calculate;
