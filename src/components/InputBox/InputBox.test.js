import React from 'react';
import { shallow } from 'enzyme';

import InputBox from './InputBox';

const clickFn = jest.fn();

describe('InputBox', () => {
  // Render properly with props
  it("should render properly with 'callback' prop", () => {
    const component = shallow(<InputBox callback={clickFn} />);

    expect(component).toMatchSnapshot();
  });

  // Call the callback
  it('should call the callback function with the value of the input', () => {
    const event = { preventDefault: jest.fn() };
    const component = shallow(<InputBox callback={clickFn} />);

    component.find('input').simulate('change', { target: { value: 'Vinícius' } });
    component.find('form').simulate('submit', event);

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(clickFn).toHaveBeenCalledTimes(1);
    expect(clickFn).toHaveBeenCalledWith('Vinícius');
  });
});
