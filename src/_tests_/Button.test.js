import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button';

configure({ adapter: new Adapter() });

afterEach(cleanup);

it('renders the button component', () => {
  const btn = shallow(<Button value="+" />);
  expect(btn.text()).toBe('+');
});

describe('Button with the event handler', () => {
  const onClickSpy = jest.fn();
  it('displays button correctly',
    () => {
      const rendered = render(<Button value="12" onclick={onClickSpy} wide={false} color="#f6f6f6" />);
      expect(rendered).toMatchSnapshot();
      const renderedBtn = rendered.getByText('12');
      expect(renderedBtn).toMatchSnapshot();
      fireEvent.click(renderedBtn);
      expect(onClickSpy).toHaveBeenCalled();
      expect(renderedBtn.style.width).toBe('25%');
    });
});

describe('Button with the wide prop set to true', () => {
  const onClickSpy = jest.fn();
  it('displays button correctly',
    () => {
      const rendered = render(<Button value="12" onclick={onClickSpy} wide color="#f6f6f6" />);
      expect(rendered).toMatchSnapshot();
      const renderedBtn = rendered.getByText('12');
      expect(renderedBtn).toMatchSnapshot();
      fireEvent.click(renderedBtn);
      expect(onClickSpy).toHaveBeenCalled();
      expect(renderedBtn.style.width).toBe('50%');
    });
});

describe('Button with the color prop set', () => {
  const onClickSpy = jest.fn();
  it('displays button correctly',
    () => {
      const rendered = render(<Button value="12" onclick={onClickSpy} wide color="#f6f6f6" />);
      expect(rendered).toMatchSnapshot();
      const renderedBtn = rendered.getByText('12');
      fireEvent.click(renderedBtn);
      expect(onClickSpy).toHaveBeenCalled();
      expect(renderedBtn.style.backgroundColor).toBe('rgb(246, 246, 246)');
    });
});

describe('Button without the color prop set - default color is used', () => {
  const onClickSpy = jest.fn();
  it('displays button correctly',
    () => {
      const rendered = render(<Button value="12" onclick={onClickSpy} wide color={undefined} />);
      expect(rendered).toMatchSnapshot();
      const renderedBtn = rendered.getByText('12');
      fireEvent.click(renderedBtn);
      expect(onClickSpy).toHaveBeenCalled();
      expect(renderedBtn.style.backgroundColor).toBe('rgb(255, 123, 0)');
    });
});
