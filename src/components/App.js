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

  handleClick(value) {
    // eslint-disable-line no-console
    console.log('I was clicked!!!!!!', value);
    let {
      state: {
        total, next,
      },
    } = this;
    const {
      state: {
        operation,
      },
    } = this;
    const numValue = parseInt(value, 10);
    if (value === '.') {
      if (total) {
        if (!total.includes('.')) {
          this.updateDisplay(value, () => {
            this.display();
          });
        }
      } else {
        this.updateDisplay('0.', () => {
          this.display();
        });
      }
    } else if (!Number.isNaN(numValue)) {
      // eslint-disable-line no-console
      console.log('Here::: number!!!!!!!', numValue);
      this.updateDisplay(value, () => {
        this.display();
      });
    } else if (value === 'AC') {
      // eslint-disable-line no-console
      console.log('Here:::AC');
      this.reset(() => {
        this.display();
      });
    } else if (value === '=') {
      console.log('total B4 App.js', total);
      console.log('next B4 App.js', next);
      const parsedTotal = parseInt(total, 10);
      if (total.includes('.')) {
        total = parseFloat(total);
      } else {
        total = parsedTotal;
      }

      const parsedNext = parseInt(next, 10);
      console.log('parsedNext!!!', parsedNext);
      if (next.includes('.')) {
        console.log('HERE parsedF next B4', next);
        next = parseFloat(next);
        console.log('HERE parsedF next Aft', next);
      } else {
        next = parsedNext;
      }
      console.log('total App.js', total);
      console.log('next App.js', next);
      const calcValue = calculate({
        total,
        next,
        operation,
      });
      this.setState({
        total: null,
      });
      this.updateDisplay(`${calcValue}`, () => {
        this.display();
      });
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
      this.updateDisplay(calcValue, () => {
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
      this.setState(state => ({
        err: !state.err,
      }));
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
    this.setState(state => ({
      total: state.total ? state.total + value : value,
    }), callback);
  }

  display() {
    const {
      state: {
        total,
      },
    } = this;
    // eslint-disable-line no-console
    console.log('we are here00000TOTAL!!', total);
    console.log('we are here inside display()');
    this.setState(state => ({
      display: state.total ? state.total : '0',
    }));
  }

  render() {
    const {
      state: { display, err },
    } = this;
    // eslint-disable-line no-console
    console.log('we are here0001122', display);
    return (
      <>
        <Display result={display} error={err} />
        <ButtonGroups groups={buttonGroups()} onclick={this.handleClick} />
      </>
    );
  }
}
