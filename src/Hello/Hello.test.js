import React from 'react';
import { shallow } from 'enzyme';

import Hello from './Hello';

describe('Hello', () => {
  // Normal render with no props
  it('should render correctly with no props', () => {
    const el = shallow(<Hello />);

    expect(el).toMatchSnapshot();
  });

  // Render with the "name" prop
  it('should render correctly with "name" prop', () => {
    const el = shallow(<Hello name="Roberto" />);

    expect(el).toMatchSnapshot();
  });

  // Toggle the text
  it('should toggle the text on button click', () => {
    const el = shallow(<Hello />);

    el.find('button').simulate('click');
    expect(el).toMatchSnapshot();

    el.find('button').simulate('click');
    expect(el).toMatchSnapshot();
  });
});
