import React from 'react';
import '../App.css';
import ButtonGroups from './ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';
import parseNum from '../helpers/parseNum';
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
      done: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.display = this.display.bind(this);
  }

  handleClick(value) {
    let {
      state: { total, next },
    } = this;
    const {
      state: { operation, done },
    } = this;
    const numValue = parseInt(value, 10);
    if (value === '.') {
      if (total && !done) {
        if (!total.includes('.')) {
          this.updateDisplay(value, () => {
            this.display();
          });
        }
      } else {
        if (total && done && !operation) {
          this.reset(() => {
            this.display();
          });
        }
        if (total && operation) {
          this.updateDisplay('.', () => {
            this.display();
          });
        } else {
          this.updateDisplay('0.', () => {
            this.display();
          });
        }
      }
    } else if (!Number.isNaN(numValue)) {
      if (done && !operation) {
        this.reset(() => {
          this.display();
        });
      }
      this.updateDisplay(value, () => {
        this.display();
      });
    } else if (value === 'AC') {
      this.reset(() => {
        this.display();
      });
    } else if (value === '+/-' || value === '%') {
      if (total) {
        total = parseNum(total);
        const calcValue = calculate(
          {
            total,
            next: null,
            operation,
          },
          value,
        );
        this.setState({
          done: true,
          total: null,
        });
        this.updateDisplay(`${calcValue}`, () => {
          this.display();
        });
      } else if (next) {
        next = parseNum(next);
        const calcValue = calculate(
          {
            total: null,
            next,
            operation: null,
          },
          value,
        );
        this.setState({ next: `${calcValue}`, display: `${calcValue}` });
      }
    } else if (next && total) {
      total = parseNum(total);
      next = parseNum(next);
      if (value === '=') {
        const calcValue = calculate({
          total,
          next,
          operation,
        });
        this.setState({
          done: true,
          total: null,
          operation: null,
          next: null,
        });
        this.updateDisplay(`${calcValue}`, () => {
          this.display();
        });
      } else if (value !== '+/-' && value !== '%') {
        const calcValue = calculate({
          total,
          next,
          operation: value,
        });
        this.setState({
          next: `${calcValue}`,
          total: null,
        });
        this.setState({
          display: `${calcValue}`,
        });
      }
    } else if (total) {
      this.setState(state => ({
        next: state.total,
        total: null,
        operation: value,
      }));
    } else if (value !== '%' && value !== '=') {
      this.setState({
        err: true,
      });
    }
  }

  reset(callback) {
    this.setState({
      total: null,
      next: null,
      operation: null,
      err: null,
      display: null,
      done: false,
    });
    callback();
  }

  updateDisplay(value, callback) {
    this.setState(
      state => ({
        total: state.total ? state.total + value : value,
      }),
      callback,
    );
  }

  display() {
    this.setState(state => ({
      display: state.total ? state.total : '0',
    }));
  }

  render() {
    const {
      state: { display, err },
    } = this;
    return (
      <>
        <Display result={display} error={err} />
        <ButtonGroups groups={buttonGroups()} onclick={this.handleClick} />
      </>
    );
  }
}
