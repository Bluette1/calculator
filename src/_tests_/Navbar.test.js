import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, screen } from '@testing-library/react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import NavBar from '../layouts/NavBar';

configure({ adapter: new Adapter() });

afterEach(cleanup);

it('renders navbar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
});

it('renders the navbar with the correct heading', () => {
  const nav = mount(<NavBar />);
  expect(nav.find('h2').text()).toBe('Math Magicians');
  expect(nav).toMatchSnapshot();
});

it('renders navbar with the correct text', () => {
  const div = document.createElement('div');
  const rendered = render(<NavBar />, div);
  expect(screen.getByText('Math Magicians')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Calc')).toBeInTheDocument();
  expect(rendered).toMatchSnapshot();
});

it('displays a link tag with the `Home` text', () => {
  const nav = mount(<NavBar />);
  const link = nav.find('a').get(0);
  expect(link).toEqual(<a href="/">Home</a>);
  expect(nav).toMatchSnapshot();
});

it('displays a link tag with the `Calc` text', () => {
  const nav = mount(<NavBar />);
  const link = nav.find('a').get(1);
  expect(link).toEqual(<a href="/calculator">Calc</a>);
  expect(nav).toMatchSnapshot();
});

it('displays a link tag with the `Quote` text', () => {
  const nav = mount(<NavBar />);
  const link = nav.find('a').get(2);
  expect(link).toEqual(<a href="/quote">Quote</a>);
  expect(nav).toMatchSnapshot();
});
