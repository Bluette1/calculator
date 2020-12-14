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
  expect(app.find(".buttonGroup")).toBeDefined();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders app', () => {
  const div = document.createElement('div');
  const rendered = render(<App />, div);
  const addButton = rendered.getByText("+");
  fireEvent.click(addButton);
  expect(addButton).toBeDefined();
});