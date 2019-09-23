import React from 'react';
import { shallow } from 'enzyme';

import InputBox from './InputBox';

const clickFn = jest.fn();

describe('InputBox', () => {
  const component = shallow(<InputBox callback={clickFn} />);

  // Render properly with props
  it("should render properly with 'callback' prop", () => {
    expect(component).toMatchSnapshot();
  });

  // Call the callback
  it('should call the callback function with the value of the input', () => {
    component.find('input').simulate('change', { target: { value: 'Vinícius' } });
    component.find('button').simulate('click');

    expect(clickFn).toHaveBeenCalledWith('Vinícius');
  });
});
