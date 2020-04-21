import React from 'react';
import { shallow } from 'enzyme';
import LastUpdate from './LastUpdate';

describe('Last Update component', () => {
  const wrapper = shallow(<LastUpdate />);
  it('should renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
