import React from 'react';
import '../App.css';
import ButtonGroups from './ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';
import Display from './Display';
import calculate from '../logic/calculate';

export default class App extends React.Component {
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

  handleClick(event) {
    const {
      target: { value },
    } = event;
    let {
      state: {
        total,
      },
    } = this;
    const {
      state: {
        operation, next,
      },
    } = this;
    const numValue = parseInt(value, 10);
    if (numValue === '.') {
      if (total) {
        if (!total.includes('.')) {
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
      total = null;
      const calcValue = calculate({
        total,
        next,
        operation,
      });
      this.updateDisplay(calcValue);
    } else if (value === '+/-' || value === '%') {
      total = null;
      const calcValue = calculate(
        {
          total,
          next: null,
          operation: null,
        },
        value,
      );
      this.updateDisplay(calcValue);
    } else if (total) {
      this.setState(state => ({
        next: state.total,
      }));
      this.setState({
        total: null,
      });

      this.setState({
        operation: value,
      });
    } else {
      this.setState(state => ({
        err: !state.err,
      }));
    }
  }

  reset() {
    this.setState({
      total: null,
    });
    this.setState({
      next: null,
    });
    this.setState({
      operation: null,
    });
    this.setState({
      err: null,
    });
    this.setState({
      display: null,
    });
  }

  updateDisplay(value) {
    this.setState(state => ({
      total: state.total ? state.total + value : value,
    }));
    this.display();
  }

  display() {
    this.setState(state => ({
      display: state.total,
    }));
  }

  render() {
    const {
      state: { display, err },
    } = this;
    return (
      <>
        <Display value={display} error={err} />
        <ButtonGroups groups={buttonGroups()} onClick={this.handleClick} />
      </>
    );
  }
}
