import React, { useState } from 'react';
import '../App.css';
import ButtonGroups from './ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';
import parseNum from '../helpers/parseNum';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [display, setDisplay] = useState('0');
  const [err, setErr] = useState(false);
  const [done, setDone] = useState(false);

  const reset = () => {
    setTotal(null);
    setNext(null);
    setOperation(null);
    setErr(false);
    setDisplay(null);
    setDone(false);
  };

  const updateDisplay = value => {
    setTotal(value);
    setDisplay(value);
  };

  const handleClick = value => {
    const numValue = parseInt(value, 10);
    if (value === '.') {
      if (total && !done) {
        if (!total.includes('.')) {
          updateDisplay(`${total}${value}`);
        }
      } else {
        if (total && done && !operation) {
          reset();
        }
        if (total && operation) {
          updateDisplay(`${total}${value}`);
        } else {
          updateDisplay('0.');
        }
      }
    } else if (!Number.isNaN(numValue)) {
      if (done && !operation) {
        reset();
        updateDisplay(`${value}`);
      } else if (total) {
        updateDisplay(`${total}${value}`);
      } else {
        updateDisplay(`${value}`);
      }
    } else if (value === 'AC') {
      reset();
      setDisplay('0');
    } else if (value === '+/-' || value === '%') {
      if (total) {
        const parsedTotal = parseNum(total);
        const calcValue = calculate(
          {
            total: parsedTotal,
            next: null,
            operation,
          },
          value,
        );
        setDone(true);
        updateDisplay(`${calcValue}`);
      } else if (next) {
        const parsedNext = parseNum(next);
        const calcValue = calculate(
          {
            total: null,
            next: parsedNext,
            operation: null,
          },
          value,
        );
        setNext(`${calcValue}`);
        setDisplay(`${calcValue}`);
      }
    } else if (next && total) {
      const parsedTotal = parseNum(total);
      const parsedNext = parseNum(next);
      if (value === '=') {
        const calcValue = calculate({
          total: parsedTotal,
          next: parsedNext,
          operation,
        });
        setDone(true);
        setOperation(null);
        setNext(null);
        updateDisplay(`${calcValue}`);
      } else if (value !== '+/-' && value !== '%') {
        const calcValue = calculate({
          total,
          next,
          operation: value,
        });
        setNext(`${calcValue}`);
        setTotal(null);
        setDisplay(`${calcValue}`);
      }
    } else if (total) {
      setNext(total);
      setTotal(null);
      setOperation(value);
    } else if (value !== '%' && value !== '=') {
      setErr(true);
    }
  };

  return (
    <>
      <Display result={display} error={err} />
      <ButtonGroups groups={buttonGroups()} onclick={handleClick} />
    </>
  );
};

export default App;
