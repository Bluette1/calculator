import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ButtonGroups from '../components/ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';
import { shallow, mount } from "enzyme";
import App from '../components/App';
import Button from '../components/Button';
import Display from '../components/Display';


configure({ adapter: new Adapter() });

it('renders the app with expected display component', () => {
  const app = mount(<App />);
  expect(app.find(".display").text()).toBe("0");
});

it('renders the app and displays correct values', () => {
  const display = mount(<Display />);
  display.setProps({ result: '12' });
  expect(display.find(".display").text()).toBe("12");
});

it('renders the app and displays correct values', () => {
  const display = mount(<Display />);
  display.setProps({ error: true });
  expect(display.find(".display").text()).toBe('\u26A0');
});


it('renders button groups without crashing', () => {
  const div = document.createElement('div');
  const onClickSpy = jest.fn();
  const itemList = [];
  ReactDOM.render(<ButtonGroups groups={buttonGroups()} onclick={onClickSpy} />, div);
  expect(onClickSpy).not.toHaveBeenCalled();
});

it('renders button groups with a functional `onclick` prop', () => {
  const div = document.createElement('div');
  const onClickSpy = jest.fn();
  const rendered = render(<ButtonGroups groups={buttonGroups()} onclick={onClickSpy} />, div);
  const incrementButton = rendered.getByText("+");
  fireEvent.click(incrementButton);
  expect(onClickSpy).toHaveBeenCalled();
});

it('renders the button component correctly', () => {
  const btn = shallow(<Button value={'+'} />);
  expect(btn.text()).toBe('+');
});