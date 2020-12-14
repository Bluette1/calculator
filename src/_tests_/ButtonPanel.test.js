import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ButtonPanel from '../components/ButtonPanel';
import buttonGroups from '../helpers/buttonGroups';
import { shallow, mount } from "enzyme";
import App from '../components/App';
import Button from '../components/Button';
import Display from '../components/Display';

it('renders button groups without crashing', () => {
  const onClickSpy = jest.fn();
  const btnList = ['AC', '+/-', '%', '÷'];
  render(<ButtonPanel itemList={btnList} handleClick={onClickSpy} />);
  expect(onClickSpy).not.toHaveBeenCalled();
});

it('renders the button panel with a functional `onclick` prop', () => {
  const onClickSpy = jest.fn();
  const btnList = ['AC', '+/-', '%', '÷'];
  const rendered = render(<ButtonPanel itemList={btnList} handleClick={onClickSpy} />);
  const addButton = rendered.getByText("+/-");
  fireEvent.click(addButton);
  expect(onClickSpy).toHaveBeenCalled();
});