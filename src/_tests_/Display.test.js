import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
  expect(display.find('.display').text()).toBe('12');
  expect(display).toMatchSnapshot();
});

it('renders the app and displays correct values', () => {
  const display = mount(<Display />);
  display.setProps({ error: true });
  expect(display.find('.display').text()).toBe('\u26A0');
  expect(display).toMatchSnapshot();
});
