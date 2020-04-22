import React from 'react';
import { shallow } from 'enzyme';
import SwitchInterval from './SwitchInterval';

describe('SwitchInterval', () => {
  const wrapper = shallow(<SwitchInterval />);
  it('should renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
