import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ButtonGroups from '../components/ButtonGroups';
import buttonGroups from '../helpers/buttonGroups';

afterEach(cleanup);

it('renders button groups without crashing', () => {
  const div = document.createElement('div');
  const onClickSpy = jest.fn();
  const rendered = render(<ButtonGroups groups={buttonGroups()} onclick={onClickSpy} />, div);
  expect(rendered).toMatchSnapshot();
  expect(onClickSpy).not.toHaveBeenCalled();
});

it('renders button groups with a functional `onclick` prop', () => {
  const div = document.createElement('div');
  const onClickSpy = jest.fn();
  const rendered = render(<ButtonGroups groups={buttonGroups()} onclick={onClickSpy} />, div);
  expect(rendered).toMatchSnapshot();
  const addButton = rendered.getByText('+');
  fireEvent.click(addButton);
  expect(onClickSpy).toHaveBeenCalled();
});
