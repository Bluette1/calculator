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

describe("Button", () => {
  const onClickSpy = jest.fn();
  it("displays button correctly",
    () => {
      const rendered = render(<Button value={'12'} onclick={onClickSpy} wide={false} color={'#f6f6f6'} />);
      const renderedBtn = rendered.getByText("12");
      fireEvent.click(renderedBtn);
      expect(onClickSpy).toHaveBeenCalled();
    }
  );
});