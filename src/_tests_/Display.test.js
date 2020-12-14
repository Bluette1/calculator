import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ButtonGroups from '../components/ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';
import { shallow, mount } from "enzyme";
import App from '../components/App';
import Button from '../components/Button';
import Display from '../components/Display';

configure({ adapter: new Adapter() });

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display />, div);
});

configure({ adapter: new Adapter() });
it('renders the app and displays correct values', () => {
  const display = mount(<Display />);
  display.setProps({ result: '12' });
  expect(display.find(".display").text()).toBe("12");
  expect(display).toMatchSnapshot();
});

it('renders the app and displays correct values', () => {
  const display = mount(<Display />);
  display.setProps({ error: true });
  expect(display.find(".display").text()).toBe('\u26A0');
  expect(display).toMatchSnapshot();
});