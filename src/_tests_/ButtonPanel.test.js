import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import ButtonPanel from '../components/ButtonPanel';

afterEach(cleanup);

it('renders button groups without crashing', () => {
  const onClickSpy = jest.fn();
  const btnList = ['AC', '+/-', '%', '÷'];
  const rendered = render(<ButtonPanel itemList={btnList} handleClick={onClickSpy} />);
  expect(rendered).toMatchSnapshot();
  expect(onClickSpy).not.toHaveBeenCalled();
});

it('renders the button panel with a functional `onclick` prop', () => {
  const onClickSpy = jest.fn();
  const btnList = ['AC', '+/-', '%', '÷'];
  const rendered = render(<ButtonPanel itemList={btnList} handleClick={onClickSpy} />);
  expect(rendered).toMatchSnapshot();
  const addButton = rendered.getByText('+/-');
  fireEvent.click(addButton);
  expect(onClickSpy).toHaveBeenCalled();
});
