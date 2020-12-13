import React from 'react';
import { render, screen } from '@testing-library/react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import { shallow, mount } from "enzyme";
import App from '../components/App';
import Display from '../components/Display';

it('renders the app', () => {
  const app = mount(<App />);
  expect(app.find(".display").text()).toBe("0");
});