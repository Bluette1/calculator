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


it('renders button groups without crashing', () => {
  const div = document.createElement('div');
  const onClickSpy = jest.fn();
  render(<ButtonGroups groups={buttonGroups()} onclick={onClickSpy} />, div);
  expect(onClickSpy).not.toHaveBeenCalled();
});

it('renders button groups with a functional `onclick` prop', () => {
  const div = document.createElement('div');
  const onClickSpy = jest.fn();
  const rendered = render(<ButtonGroups groups={buttonGroups()} onclick={onClickSpy} />, div);
  const addButton = rendered.getByText("+");
  fireEvent.click(addButton);
  expect(onClickSpy).toHaveBeenCalled();
});