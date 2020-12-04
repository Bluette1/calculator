import React from 'react';
import '../App.css';
import ButtonGroups from './ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';
import Display from './Display';
import calculate from '../logic/calculate';

export default class App {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      display: '0',
      err: null,
    };
  }
  handleclick(){}
  render() {
    return (
      <>
        <Display value={display} error={err} />
        <ButtonGroups groups={buttonGroups()} />
      </>
    );
  }
};
