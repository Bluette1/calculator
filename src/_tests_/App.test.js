import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import ButtonGroups from '../components/ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import Button from '../components/Button';
import Display from '../components/Display';

configure({ adapter: new Adapter() });

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders the app with expected display component', () => {
  const app = mount(<App />);
  expect(app.find('.display').text()).toBe('0');
  expect(app.find('.buttonGroup')).toBeDefined();
});

it('renders app with button components', () => {
  const div = document.createElement('div');
  const rendered = render(<App />, div)
  const addButton = rendered.getByText('+');
  fireEvent.click(addButton);
  expect(addButton).toBeDefined();
  expect(screen.findAllByRole('button')).toBeDefined();
  expect(rendered).toMatchSnapshot();
});

it('renders app with correct `+` function', () => {
  const div = document.createElement('div');
  const rendered = render(<App />, div);
  const addButton = rendered.getByText('+');
  const oneButton = rendered.getByText('1');
  const eqButton = rendered.getByText('=');
  fireEvent.click(oneButton);
  fireEvent.click(addButton);
  fireEvent.click(oneButton);
  fireEvent.click(eqButton);
  expect(screen.getByTestId('display')).toHaveTextContent('2');

  expect(rendered).toMatchSnapshot();
});

it('renders app with correct `-` function', () => {
  const div = document.createElement('div');
  const rendered = render(<App />, div);
  const subtractButton = rendered.getByText('-');
  const oneButton = rendered.getByText('1');
  const eqButton = rendered.getByText('=');
  fireEvent.click(oneButton);
  fireEvent.click(subtractButton);
  fireEvent.click(oneButton);
  fireEvent.click(eqButton);
  expect(screen.getByTestId('display')).toHaveTextContent('0');
  expect(rendered).toMatchSnapshot();
});

it('renders app with correct `x` function', () => {
  const div = document.createElement('div');
  const rendered = render(<App />, div);
  const multiplyButton = rendered.getByText('x');
  const oneButton = rendered.getByText('1');
  const eqButton = rendered.getByText('=');
  fireEvent.click(oneButton);
  fireEvent.click(multiplyButton);
  fireEvent.click(oneButton);
  fireEvent.click(eqButton);
  expect(screen.getByTestId('display')).toHaveTextContent('1');
  expect(rendered).toMatchSnapshot();
});

it('renders app with correct `÷` function', () => {
  const div = document.createElement('div');
  const rendered = render(<App />, div);
  const divideButton = rendered.getByText('÷');
  const oneButton = rendered.getByText('1');
  const eqButton = rendered.getByText('=');
  fireEvent.click(oneButton);
  fireEvent.click(divideButton);
  fireEvent.click(oneButton);
  fireEvent.click(eqButton);
  expect(screen.getByTestId('display')).toHaveTextContent('1');
  expect(rendered).toMatchSnapshot();
});

it('renders app with correct `+/-` function', () => {
  const div = document.createElement('div');
  const rendered = render(<App />, div);

  const oneButton = rendered.getByText('1');
  const plusMinusButton = rendered.getByText('+/-');
  fireEvent.click(oneButton);
  fireEvent.click(plusMinusButton);
  expect(screen.getByTestId('display')).toHaveTextContent('-1');
  expect(rendered).toMatchSnapshot();
});

it('renders app with correct `%` function', () => {
  const div = document.createElement('div');
  const rendered = render(<App />, div);

  const oneButton = rendered.getByText('1');
  const percentButton = rendered.getByText('%');
  fireEvent.click(oneButton);
  fireEvent.click(percentButton);
  const display = rendered.getByTestId('display');
  expect(screen.getByTestId('display')).toHaveTextContent('0.01');
  expect(rendered).toMatchSnapshot();
});