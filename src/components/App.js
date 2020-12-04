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
      err: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.display = this.display.bind(this);
  }
  handleclick(event){
    const {target:{value}} = event;
    const numValue = parseInt(value, 10);
    if (numValue === '.') {
      if (this.total) {
        if (!this.total.includes('.')) {
          this.updateDisplay(value);
        } 
      } else {
        this.updateDisplay('0.');
      }
    } else if (typeof numValue === 'number') {
      this.updateDisplay(value);
    } else if (value === 'AC') {
      this.reset();
    } else if (value === '=') {
      this.total = null;
      calcValue = calculate({
        total: state.total, next: state.next, operation:state.operation
      });
      this.updateDisplay(calcValue);
    } else if (value === '+/-' || value === '%') {
    this.total = null;
    calcValue = calculate({
      total: state.total, next: null, operation: null
     }, value);
    this.updateDisplay(calcValue);
    } else if (total) {
     this.setState(state =>({
       next: state.total
     }));
     this.setState({
       total: null
     });

     this.setState({
       operation: value
     });
    } else {
      this.setState(state=>({
        err: !state.err
      }));
    }

  }

  reset() {
    this.setState({
      total: null
    });
    this.setState({
      next: null
    });
    this.setState({
      operation: null
    });
    this.setState({
      err: null
    });
    this.setState({
      display: null
    });

  }

  updateDisplay(value) {
    this.setState(state=>({
      total:  state.total ? state.total + value : value,
    })); 
    display();
  }

  display() {
    this.setState(state => ({
      display: state.total
    }));
  }

  render() {
    return (
      <>
        <Display value={display} error={err} />
        <ButtonGroups groups={buttonGroups()} onClick={this.handleClick} />
      </>
    );
  }
};
