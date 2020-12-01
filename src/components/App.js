import React from 'react';
import '../App.css';
import ButtonGroups from './ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';
import Display from './Display';
import calculate from '../logic/calculate'

const App = () => (
  <>
    <Display />
    <ButtonGroups groups={buttonGroups()} />
  </>
);

export default App;
