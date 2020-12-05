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
        if (total && done) {
          this.setState({
            total: null,
            done: false,
          });
        }
        this.updateDisplay('0.', () => {
          this.display();
        });
      }
    } else if (!Number.isNaN(numValue)) {
      if (done) {
        this.setState({
          total: null,
          done: false,
        });
      }
      this.updateDisplay(value, () => {
        this.display();
      });
    } else if (value === 'AC') {
      this.reset(() => {
        this.display();
      });
    } else if (value === '=') {
      if (next && total && operation) {
        const parsedTotal = parseInt(total, 10);
        if (total.includes('.')) {
          total = parseFloat(total);
        } else {
          total = parsedTotal;
        }
        const parsedNext = parseInt(next, 10);
        if (next.includes('.')) {
          next = parseFloat(next);
        } else {
          next = parsedNext;
        }
        const calcValue = calculate({
          total,
          next,
          operation,
        });
        this.setState({
          done: true,
        });
        this.setState({
          total: null,
        });
        this.updateDisplay(`${calcValue}`, () => {
          this.display();
        });
      } else if (next && operation && !total) {
        this.setState({
          err: true,
        });
      }
    } else if (value === '+/-' || value === '%') {
      const parsedTotal = parseInt(total, 10);
      if (total.includes('.')) {
        total = parseFloat(total);
      } else {
        total = parsedTotal;
      }
      const calcValue = calculate(
        {
          total,
          next: null,
          operation: null,
        },
        value,
      );
      this.setState({
        total: null,
      });
      this.updateDisplay(`${calcValue}`, () => {
        this.display();
      });
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
      this.setState({
        err: true,
      });
    }
  }

  reset(callback) {
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
    const {
      state: { total },
    } = this;
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
