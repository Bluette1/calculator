import React from 'react';
import { render, screen } from '@testing-library/react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import { shallow, mount } from "enzyme";
import Display from '../components/Display';

it('renders the app', () => {
  const display = shallow(<Display />);
  expect(display.find(".display").text()).toBe("0");
});