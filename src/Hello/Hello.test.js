import React from 'react';
import { shallow } from 'enzyme';

import Hello from './Hello';

describe('Hello', () => {
  // Normal render with no props
  it('should render correctly with no props', () => {
    const component = shallow(<Hello />);

    expect(component).toMatchSnapshot();
  });

  // Render with the "name" prop
  it('should render correctly with "name" prop', () => {
    const component = shallow(<Hello name="Roberto" />);

    expect(component).toMatchSnapshot();
  });

  // Toggle the text
  it('should toggle the text on button click', () => {
    const component = shallow(<Hello />);

    component.find('button').simulate('click');
    expect(component).toMatchSnapshot();

    component.find('button').simulate('click');
    expect(component).toMatchSnapshot();
  });
});
