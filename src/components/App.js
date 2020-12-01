import React from 'react';
import '../App.css';
import ButtonGroups from './ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => (
  <>
    <Display />
    <ButtonGroups groups={buttonGroups()} />
  </>
);

const handleClick = () => {
  calculate({ total: 10, next: 10, operation: '+/-' }, '+/-');
};

export { App, handleClick };
